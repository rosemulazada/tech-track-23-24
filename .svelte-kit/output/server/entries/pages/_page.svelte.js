import { c as create_ssr_component, b as add_attribute, d as each, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
import * as d3 from "d3";
import chroma from "chroma-js";
const counterStore = writable([]);
const UserData_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-1py1e1v.svelte-1py1e1v{display:flex;flex-direction:column;justify-content:left;align-items:left;height:100vh;margin:2rem}h1.svelte-1py1e1v.svelte-1py1e1v{font-size:3rem;color:white;margin-bottom:1rem}input.svelte-1py1e1v.svelte-1py1e1v{background:#efedf0;box-sizing:border-box;width:15rem;border:none;border-bottom:2px #c6c8c6 solid;padding:0.9rem 0.9rem 0.5rem 0.9rem;outline:none;border-radius:0.25rem 0.25rem 0 0}input.svelte-1py1e1v.svelte-1py1e1v:focus{border-bottom-color:#c12020;box-shadow:0 0 5px #000(255, 0, 0, 0.5)}input.svelte-1py1e1v.svelte-1py1e1v:focus::placeholder{color:black}li.svelte-1py1e1v.svelte-1py1e1v{list-style-type:none}p.svelte-1py1e1v.svelte-1py1e1v:first-of-type{font-weight:bold;margin-bottom:0.5rem}p.svelte-1py1e1v.svelte-1py1e1v:last-of-type{margin-bottom:1.5rem;font-style:italic}.lds-roller.svelte-1py1e1v.svelte-1py1e1v{display:inline-block;position:relative;width:80px;height:80px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v{animation:svelte-1py1e1v-lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:40px 40px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:after{content:" ";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:#c12020;margin:-4px 0 0 -4px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(1){animation-delay:-0.036s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(1):after{top:63px;left:63px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(2){animation-delay:-0.072s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(2):after{top:68px;left:56px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(3){animation-delay:-0.108s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(3):after{top:71px;left:48px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(4){animation-delay:-0.144s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(4):after{top:72px;left:40px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(5){animation-delay:-0.18s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(5):after{top:71px;left:32px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(6){animation-delay:-0.216s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(6):after{top:68px;left:24px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(7){animation-delay:-0.252s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(7):after{top:63px;left:17px}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(8){animation-delay:-0.288s}.lds-roller.svelte-1py1e1v div.svelte-1py1e1v:nth-child(8):after{top:56px;left:12px}@keyframes svelte-1py1e1v-lds-roller{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}button.svelte-1py1e1v.svelte-1py1e1v{margin-top:1rem;margin-bottom:1rem;display:block;width:15rem;padding:0.75rem 1rem;border-radius:3rem;border:none;font-weight:bold}button.svelte-1py1e1v.svelte-1py1e1v:link,button.svelte-1py1e1v.svelte-1py1e1v:visited{text-transform:uppercase;text-decoration:none;padding:1.5rem 4rem;display:inline-block;border-radius:10rem;transition:all 0.2s;position:relative;font-size:1.6rem}button.svelte-1py1e1v.svelte-1py1e1v:hover{transform:translateY(-0.3rem);box-shadow:0 1rem 2rem rgba(0, 0, 0, 0.2)}button.svelte-1py1e1v.svelte-1py1e1v:active{transform:translateY(-0.1rem);box-shadow:0 0.5rem 1rem rgba(0, 0, 0, 0.2)}button.svelte-1py1e1v.svelte-1py1e1v{background:#c12020;color:#ffffff}button.svelte-1py1e1v.svelte-1py1e1v::after{content:"";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;transition:all 0.4s}button.svelte-1py1e1v.svelte-1py1e1v:hover::after{transform:scaleX(1.4) scaleY(1.6);opacity:0}button.svelte-1py1e1v.svelte-1py1e1v{animation:moveInBottom 0.5s ease-out 0.75s;animation-fill-mode:backwards}',
  map: null
};
const UserData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let tracks = [];
  let error = "";
  counterStore.subscribe((value) => {
  });
  $$result.css.add(css);
  return `<body class="svelte-1py1e1v"><h1 class="svelte-1py1e1v" data-svelte-h="svelte-dv52cp">What music do I listen to most?</h1> <input type="text" placeholder="Enter Last.FM username" class="svelte-1py1e1v"${add_attribute("value", username, 0)}> <button class="svelte-1py1e1v" data-svelte-h="svelte-159mv3y">Get top tracks</button> ${`${tracks.length > 0 ? `<div><p class="svelte-1py1e1v" data-svelte-h="svelte-js90lb">Here are your top tracks!</p> <p class="svelte-1py1e1v" data-svelte-h="svelte-aw9mre">hover over small bubbles to view tag and count.</p> <ul>${each(tracks, (track) => {
    return `<li class="svelte-1py1e1v">${escape(track.name)} by ${escape(track.artist.name)}</li>`;
  })}</ul></div>` : ``}`} <div>${escape(error)}</div> </body>`;
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
    d3.select(svg).selectAll("*").remove();
    const colorScale = chroma.scale(["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33"]).mode("lch");
    const nodes = Object.entries(counter).map(([genre, count], index) => ({
      genre,
      count,
      x: Math.random() * (width - 2 * count * 5) + count * 5,
      y: Math.random() * (height - 2 * count * 5) + count * 5,
      color: colorScale(index / Object.keys(counter).length).hex()
    }));
    d3.forceSimulation(nodes).force("charge", d3.forceManyBody().strength(30)).force("center", d3.forceCenter(width / 2, height / 2)).force("collision", d3.forceCollide().radius(function(d) {
      return d.count * 15;
    })).on("tick", ticked);
    function ticked() {
      d3.select(svg).selectAll("circle").data(nodes).join("circle").attr("r", (d) => d.count * 15).attr("cx", (d) => d.x = Math.max(d.count * 15, Math.min(width - d.count * 15, d.x))).attr("cy", (d) => d.y = Math.max(d.count * 15, Math.min(height - d.count * 15, d.y))).style("fill", (d) => d.color).append("title").text((d) => `${d.genre}: ${d.count}`);
      d3.select(svg).selectAll("text").data(nodes.filter((d) => d.count * 15 > d.genre.length * 5)).join("text").attr("x", (d) => d.x).attr("y", (d) => d.y).text((d) => d.genre).style("text-anchor", "middle").attr("dy", ".35em").style("fill", "white");
    }
  }
  return `  <body><div id="content"><svg width="1000" height="1000"${add_attribute("this", svg, 0)}></svg></div></body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header></header> <body><main>${validate_component(UserData, "UserData").$$render($$result, {}, {}, {})} ${validate_component(BubblePlot, "BubblePlot").$$render($$result, {}, {}, {})}</main></body> <footer></footer>`;
});
export {
  Page as default
};
