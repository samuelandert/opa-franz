<script>
import router, { curRoute } from './router.js';
import RouterLink from './RouterLink.svelte';
import OmoNavbar from "./quants/Omo-Navbar.svelte";
import { onMount } from 'svelte';

onMount(() => {
  curRoute.set(window.location.pathname);
  if (!history.state) {
    window.history.replaceState({path: window.location.pathname}, '',   window.location.href)
  }
})

function handlerBackNavigation(event){
  curRoute.set(event.state.path)
}
</script>

<style>
</style>

<svelte:window on:popstate={handlerBackNavigation} />
<RouterLink page={{path: '/home', name: 'Home'}} />
<RouterLink page={{path: '/about', name: 'About'}} />


<div id="pageContent" class="app overflow-y-scroll">
  <div class="sticky top-0" style="z-index:100000">
    <OmoNavbar />
  </div>
  <svelte:component this={router[$curRoute]} />
</div>