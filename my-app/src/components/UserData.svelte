<script>
  import { counterStore } from "../store.js";
  let username = "";
  let tracks = [];
  let error = "";
  let counter = [];
  let topTag = [];

  let val = "";
  let timer;

  const unsubscribe = counterStore.subscribe((value) => {
    counter = value;
    console.log('store counter',counter);
  });
  

  // code for debounce in search bar can be found here: https://svelte.dev/repl/f55e23d0bf4b43b1a221cf8b88ef9904?version=3.12.1
  const debounce = (v) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      val = v;
      getTopTracks();
    }, 750);
  };

  async function getTopTracks() {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=&format=json`
    );

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      tracks = data.toptracks.track;
      error = "";

      for (const track of tracks) {
        await getTopTags(track);
        await getRecommended(topTag);
      }

     
    } else {
      console.error("Top track data could not be fetched.");
      error = "Please enter your Last.FM username.";
    }
    console.log(counter);
  }

  async function getTopTags(track) {
    const response2 = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=${track.artist.name}&track=${track.name}&api_key=&format=json`
    );

    if (response2.ok) {
      const data = await response2.json();
      error = "";

      const topTag = data.toptags.tag[0].name;
      console.log(topTag);

      if (topTag) {
        if (Object.hasOwn(counter, topTag)) {
          counter[topTag]++;
        } else {
          counter[topTag] = 1;
        }
      } else {
        console.log("No tag was found");
      }
    } else {
      console.error("Tag data could not be fetched.");
      error = "Please enter your Last.FM username.";
    }
  }

  async function getRecommended() {
    const response3 = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${topTag}&api_key=&format=json`
    );

    if (response3.ok) {
      console.log("hi");
      const data = await response3.json();
      error = "";
    } else {
      console.log("Recommended song data could not be fetched.");
      error = "A song could not be found for this genre.";
    }
    if (Object.keys(counter).length > 0) {
      counterStore.set(counter);
    }
  }

  function searchOnEnter() {
    if (!username.trim()) {
      error = "Please enter your Last.FM username.";
      return;
    }
  }
</script>

<h1>What music should I listen to next?</h1>
<input
  bind:value={username}
  type="text"
  placeholder="Your Last.FM username"
  on:keyup={(event) => {
    debounce(event.target.value);
    if (event.key === "Enter") {
      searchOnEnter();
    }
  }}
/>

<button on:click={getTopTracks}>Get top tracks</button>

<div>
  <ul>
    {#each tracks as track}
      <li>{track.name} by {track.artist.name}</li>
    {/each}
  </ul>
</div>

<div>{error}</div>

<style>
  h1 {
    font-size: 3rem;
  }
</style>
