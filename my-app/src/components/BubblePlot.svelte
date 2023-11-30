<!-- bubble plot template https://www.d3indepth.com/force-layout/ -->

<script>
  import * as d3 from "d3";
  import { counterStore } from "../store.js";
  import chroma from "chroma-js";

  let svg;
  let counter;

  counterStore.subscribe((value) => {
    counter = value;
    UpdateChart();
  });

  function UpdateChart() {
    const width = 800,
      height = 800;

    d3.select(svg).selectAll("*").remove();

    const colorScale = chroma
      .scale(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"])
      .mode("lch");

    const nodes = Object.entries(counter).map(([genre, count], index) => ({
      genre,
      count,
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
          return d.count * 15;
        })
      )
      .on("tick", ticked);

    function ticked() {
      const circles = d3
        .select(svg)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", (d) => d.count * 15)
        .attr(
          "cx",
          (d) =>
            (d.x = Math.max(d.count * 15, Math.min(width - d.count * 15, d.x)))
        )
        .attr(
          "cy",
          (d) =>
            (d.y = Math.max(d.count * 15, Math.min(height - d.count * 15, d.y)))
        )
        .style("fill", (d) => d.color)
        .append("title")
        .text((d) => `${d.genre}: ${d.count}`);

      const text = d3
        .select(svg)
        .selectAll("text")
        .data(nodes.filter((d) => d.count * 15 > d.genre.length * 5))
        .join("text")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .text((d) => d.genre)
        .style("text-anchor", "middle")
        .attr("dy", ".35em")
        .style("fill", "white");
    }
  }
</script>

<body>
  <div id="content">
    <svg bind:this={svg} width="1000" height="1000" />
  </div>
</body>
