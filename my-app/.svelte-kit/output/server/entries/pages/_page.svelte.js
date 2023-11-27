import { c as create_ssr_component, b as add_attribute, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import * as d3 from "d3";
import chroma from "chroma-js";
const counterStore = writable([]);
const UserData_svelte_svelte_type_style_lang = "";
const css = {
  code: "body.svelte-1rtux8a{display:flex;flex-direction:column;justify-content:left;align-items:left;height:100vh;margin:2rem}h1.svelte-1rtux8a{font-size:3rem;margin-bottom:1rem}input.svelte-1rtux8a{background:#efedf0;box-sizing:border-box;width:15rem;border:none;border-bottom:2px #c6c8c6 solid;padding:0.9rem 0.9rem 0.5rem 0.9rem;outline:none;border-radius:0.25rem 0.25rem 0 0}input.svelte-1rtux8a:focus{border-bottom-color:#000;box-shadow:0 0 5px #000(255, 0, 0, 0.5)}input.svelte-1rtux8a:focus::placeholder{color:black}button.svelte-1rtux8a{margin-top:0.5rem;display:block;width:15rem;padding:0.75rem 1rem;border:#9d0000 2.5px solid;border-radius:0.25rem;border:none;background:#9d0000;font-weight:bold;margin-bottom:1rem}li.svelte-1rtux8a{list-style-type:none;font-size:1rem}",
  map: null
};
const UserData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let tracks = [];
  let error = "";
  counterStore.subscribe((value) => {
  });
  $$result.css.add(css);
  return `  <body class="svelte-1rtux8a"><h1 class="svelte-1rtux8a" data-svelte-h="svelte-14pgq3t">What music should I listen to next?</h1> <section><input type="text" placeholder="Enter Last.FM username" class="svelte-1rtux8a"${add_attribute("value", username, 0)}> <button class="svelte-1rtux8a" data-svelte-h="svelte-159mv3y">Get top tracks</button> <div><ul>${each(tracks, (track) => {
    return `<li class="svelte-1rtux8a">${escape(track.name)} by ${escape(track.artist.name)}</li>`;
  })}</ul></div> <div>${escape(error)}</div></section> </body>`;
});
const global = "";
const BubblePlot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let svg;
  let counter;
  counterStore.subscribe((value) => {
    counter = value;
    UpdateChart();
  });
  function UpdateChart() {
    const width = 800, height = 800;
    const colorScale = chroma.scale(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"]).mode("lch");
    const nodes = Object.entries(counter).map(([genre, count], index) => ({
      genre,
      radius: count * 15,
      x: Math.random() * (width - 2 * count * 5) + count * 5,
      y: Math.random() * (height - 2 * count * 5) + count * 5,
      color: colorScale(index / Object.keys(counter).length).hex()
    }));
    d3.forceSimulation(nodes).force("charge", d3.forceManyBody().strength(30)).force("center", d3.forceCenter(width / 2, height / 2)).force("collision", d3.forceCollide().radius(function(d) {
      return d.radius;
    })).on("tick", ticked);
    function ticked() {
      d3.select(svg).selectAll("circle").data(nodes).join("circle").attr("r", (d) => d.radius).attr("cx", (d) => d.x).attr("cy", (d) => d.y).style("fill", (d) => d.color).attr("margin", "3rem").attr("transform", "translate(20,20)");
      d3.select(svg).selectAll("text").data(nodes).enter().append("text").attr("x", (d) => d.x).attr("y", (d) => d.y).text((d) => d.genre).style("text-anchor", "middle").attr("font-size", (d) => d.radius * 0.25 + "px");
    }
  }
  return `  <body><div id="content"><svg width="1000" height="1000"${add_attribute("this", svg, 0)}></svg></div></body>`;
});
const startButton_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <header data-svelte-h="svelte-toae59"></header> <body><main> ${validate_component(UserData, "UserData").$$render($$result, {}, {}, {})}  ${validate_component(BubblePlot, "BubblePlot").$$render($$result, {}, {}, {})} </main></body> <footer data-svelte-h="svelte-lgzzm3"> </footer>`;
});
export {
  Page as default
};
