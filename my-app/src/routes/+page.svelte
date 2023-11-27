<!-- src/routes/+page.svelte -->

<script>
  import UserData from "../components/UserData.svelte";
  import "../components/global.css";
  import BubblePlot from "../components/BubblePlot.svelte";
  // import StartButton from "../components/startButton.svelte";
</script>

<header>
  <!-- Header content -->
</header>

<body>
  <main>
    <!-- Include the BarChart component here -->

    <UserData />
    <!-- <StartButton /> -->
    <BubblePlot />

    <!-- <SimilarTracks /> -->
  </main>
</body>

<footer>
  <!-- Footer content -->
</footer>

<style>
</style>
