<script>
    let username = '';
    let tracks = [];
    let error = '';
    let myTags = [];

    async function getUserData() {
        if (!username.trim()) {
            error = 'Please enter a Last.FM username.';
            return;
        }

        const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=YOUR_API_KEY&format=json`
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            tracks = data.toptracks ? data.toptracks.track : [];
            error = '';

            for (const track of tracks) {
                await TopTags(track);
            }
        } else {
            console.error('Failed to fetch data');
            error = 'Error fetching data. Please try again.';
        }
    }

    async function TopTags(track) {
        const response2 = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=${track.artist.name}&track=${track.name}&api_key=YOUR_API_KEY&format=json`
        );

        if (response2.ok) {
            const data = await response2.json();
            // console.log(data.toptags.tag[0]);

            myTags = data.toptags ? data.toptags.tag : [];
            error = '';

            // const tagsOriginArray = [];
            const tagObject = {
                topTag: data.toptags.tag[0].name,
                artist: track.artist.name,
                track: track.name
            };
            // tagsOriginArray.push(tagObject);
            console.log(tagObject)
            console.log(`Artist: ${track.artist.name}, Top Tag: ${data.toptags.tag[0].name}, Track: ${track.name}`);

        } else {
            console.error('Failed to fetch data');
            error = 'Error fetching data. Please try again.';
        }
        
    }
    

    function searchOnEnter(event) {
        if (event.key === 'Enter') {
            getUserData();
        }
    }
</script>

<input
    bind:value={username}
    type="text"
    placeholder="Your Last.FM username"
    on:keyup={searchOnEnter}
/>
<button on:click={getUserData}>Get top tracks</button>

{#if error}
    <p>{error}</p>
{/if}

<div>
    <ul>
        {#each tracks as track}
            <li>{track.name} by {track.artist.name}</li>
        {/each}
    </ul>
</div>

