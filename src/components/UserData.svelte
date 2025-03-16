<script>
    import { counterStore } from '../store.js';
    const API_KEY = import.meta.env.VITE_PUBLIC_LASTFM_API_KEY;
    let username = '';
    let tracks = [];
    let error = '';
    let counter = [];
    let topTag = [];
    let loading = false;

    let val = '';
    let timer;

    const unsubscribe = counterStore.subscribe((value) => {
        counter = value;
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
        tracks = [];
        counter = [];

        const response = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${username}&api_key=${API_KEY}&format=json`
        );

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            loading = true;
            if (topTag) {
                tracks = data.toptracks.track;
                error = '';
            }
            for (const track of tracks) {
                await getTopTags(track);
            }
            loading = false;
            if (Object.keys(counter).length > 0) {
                counterStore.set(counter);
            }
        } else {
            console.error('Top track data could not be fetched.');
            error = 'Please enter your Last.FM username.';
        }

        console.log('store', counter);
    }

    async function getTopTags(track) {
        const response2 = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=${track.artist.name}&track=${track.name}&api_key=${API_KEY}&format=json`
        );

        if (response2.ok) {
            const data = await response2.json();
            error = '';

            if (data.toptags && data.toptags.tag[0]) {
                const topTag = data.toptags.tag[0].name;
                if (topTag) {
                    if (Object.hasOwn(counter, topTag)) {
                        counter[topTag]++;
                    } else {
                        counter[topTag] = 1;
                    }
                } else {
                    console.log('No tag was found');
                }
            }
        } else {
            console.error('Tag data could not be fetched.');
            error = 'Please enter your Last.FM username.';
        }
    }

    function searchOnEnter() {
        if (!username.trim()) {
            error = 'Please enter your Last.FM username.';
        }
    }
</script>

<body>
    <h1>What music do I listen to most?</h1>

    <input
        bind:value={username}
        type="text"
        placeholder="Enter Last.FM username"
        on:keydown={(event) => {
            debounce(event.target.value);
            if (event.key === 'Enter') {
                searchOnEnter();
            }
        }}
    />

    <button on:click={getTopTracks}>Get top tracks</button>

    {#if loading}
        <!-- source for loading state https://loading.io/css/ -->
        <p>Gathering data...</p>
        <p>Here come your top tracks..</p>
        <div class="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    {:else if tracks.length > 0}
        <div>
            <p>Here are your top tracks!</p>
            <p>hover over small bubbles to view tag and count.</p>
            <ul>
                {#each tracks as track}
                    <li>{track.name} by {track.artist.name}</li>
                {/each}
            </ul>
        </div>
    {/if}

    <div>{error}</div>
</body>

<style>
    body {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        height: 100vh;
        margin: 2rem;
    }

    h1 {
        font-size: 3rem;
        color: white;
        margin-bottom: 1rem;
    }

    input {
        background: #efedf0;
        box-sizing: border-box;
        width: 15rem;
        border: none;
        border-bottom: 2px #c6c8c6 solid;
        padding: 0.9rem 0.9rem 0.5rem 0.9rem;
        outline: none;
        border-radius: 0.25rem 0.25rem 0 0;
    }

    input:focus {
        border-bottom-color: #c12020;
        box-shadow: 0 0 5px #000(255, 0, 0, 0.5);
    }

    input:focus::placeholder {
        color: black;
    }

    li {
        list-style-type: none;
    }

    p:first-of-type {
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    p:last-of-type {
        margin-bottom: 1.5rem;
        font-style: italic;
    }
    /* loading wheel */
    .lds-roller {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-roller div {
        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        transform-origin: 40px 40px;
    }
    .lds-roller div:after {
        content: ' ';
        display: block;
        position: absolute;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #c12020;
        margin: -4px 0 0 -4px;
    }
    .lds-roller div:nth-child(1) {
        animation-delay: -0.036s;
    }
    .lds-roller div:nth-child(1):after {
        top: 63px;
        left: 63px;
    }
    .lds-roller div:nth-child(2) {
        animation-delay: -0.072s;
    }
    .lds-roller div:nth-child(2):after {
        top: 68px;
        left: 56px;
    }
    .lds-roller div:nth-child(3) {
        animation-delay: -0.108s;
    }
    .lds-roller div:nth-child(3):after {
        top: 71px;
        left: 48px;
    }
    .lds-roller div:nth-child(4) {
        animation-delay: -0.144s;
    }
    .lds-roller div:nth-child(4):after {
        top: 72px;
        left: 40px;
    }
    .lds-roller div:nth-child(5) {
        animation-delay: -0.18s;
    }
    .lds-roller div:nth-child(5):after {
        top: 71px;
        left: 32px;
    }
    .lds-roller div:nth-child(6) {
        animation-delay: -0.216s;
    }
    .lds-roller div:nth-child(6):after {
        top: 68px;
        left: 24px;
    }
    .lds-roller div:nth-child(7) {
        animation-delay: -0.252s;
    }
    .lds-roller div:nth-child(7):after {
        top: 63px;
        left: 17px;
    }
    .lds-roller div:nth-child(8) {
        animation-delay: -0.288s;
    }
    .lds-roller div:nth-child(8):after {
        top: 56px;
        left: 12px;
    }
    @keyframes lds-roller {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /* button animation (code from previous project, udemy course on scss by jonas schmedtmann) */
    button {
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: block;
        width: 15rem;
        padding: 0.75rem 1rem;
        border-radius: 3rem;
        border: none;
        font-weight: bold;
    }

    button:link,
    button:visited {
        text-transform: uppercase;
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all 0.2s;
        position: relative;
        font-size: 1.6rem;
    }
    button:hover {
        transform: translateY(-0.3rem);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
    button:active {
        transform: translateY(-0.1rem);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    }
    button {
        background: #c12020;
        color: #ffffff;
    }
    button::after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all 0.4s;
    }

    button:hover::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
    }
    button {
        animation: moveInBottom 0.5s ease-out 0.75s;
        animation-fill-mode: backwards;
    }
</style>
