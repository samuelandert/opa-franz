<script>
  //import OmoThemeDark from "./design/Omo-Theme-Dark.svelte";
  import OmoThemeLight from "./design/Omo-Theme-Light.svelte";
  import OmoBlog from "./quants/Omo-Blog.svelte";
  import OmoList from "./quants/Omo-List.svelte";
  import OmoHeader from "./quants/Omo-Header.svelte";
  import OmoNavbar from "./quants/Omo-Navbar.svelte";
  import OmoDreams from "./quants/Omo-Dreams.svelte";
</script>

<div class="app overflow-y-scroll">

  <div class="sticky top-0" style="z-index:100000">
    <OmoNavbar />
  </div>

  <OmoHeader />
  <!-- <OmoList /> -->
  <OmoDreams />
  <!-- <OmoBlog /> -->

</div>
