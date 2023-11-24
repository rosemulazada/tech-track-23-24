<!-- artikel van d3 in depth over force layout, aanbevolen door vincent https://www.d3indepth.com/force-layout/
specifieke template voor de bubble plot: https://codepen.io/roza-m/pen/rNPdqRw -->

<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { counterStore } from "../store.js";

  let svg;
  let counter;

  counterStore.subscribe((value) => {
    counter = value;
  });

  //download chroma.js later
  onMount(() => {
    const chromaScript = document.createElement("script");
    chromaScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/chroma-js/2.1.0/chroma.min.js";
    chromaScript.async = true;
    chromaScript.onload = () => {
      initializeD3();
    };
    document.head.appendChild(chromaScript);
  });

  function initializeD3() {
    const counter = {
      "Hip-Hop": 1,
      "Progressive metal": 10,
      blues: 1,
      "classic rock": 11,
      covers: 1,
      dub: 1,
      folk: 4,
      funk: 2,
      "guitar virtuoso": 1,
      "hard rock": 1,
      industrial: 1,
      jazz: 2,
      pop: 4,
      rap: 1,
      reggae: 1,
      rock: 8,
      soul: 1,
      trance: 1,
      "trip-hop": 1,
    };

    const width = 800,
      height = 800;

    const colorScale = chroma
      .scale(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"])
      .mode("lch");

    const nodes = Object.entries(counter).map(([genre, count], index) => ({
      genre,
      radius: count * 15,
      x: Math.random() * (width - 2 * count * 5) + count * 5,
      y: Math.random() * (height - 2 * count * 5) + count * 5,
      color: colorScale(index / Object.keys(counter).length).hex(),
    }));

    const simulation = d3
      .forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(30))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius(function (d) {
          return d.radius;
        })
      )
      .on("tick", ticked);

    function ticked() {
      const u = d3
        .select(svg)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", (d) => d.radius)
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .style("fill", (d) => d.color)
        .attr("margin", "3rem")
        .attr("transform", "translate(" + "20" + "," + "20" + ")");

      d3.select(svg)
        .selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .text((d) => d.genre)
        .style("text-anchor", "middle")
        // .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")")
        .attr("font-size", (d) => d.radius * 0.25 + "px");
    }

    console.log(counter)
  }
</script>

<div id="content">
  <svg bind:this={svg} width="1000" height="1000" />
</div>

<!-- <style>
  svg {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
</style> -->
