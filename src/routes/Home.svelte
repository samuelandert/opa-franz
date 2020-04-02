<script>
  export let db;
  export let currentId;
  //import OmoThemeDark from "./design/Omo-Theme-Dark.svelte";
  import OmoThemeLight from "../design/Omo-Theme-Light.svelte";
  import OmoBlog from "../quants/Omo-Blog.svelte";
  import OmoCities from "../quants/Omo-Cities.svelte";
  import OmoHeader from "../quants/Omo-Header.svelte";
  import OmoDreams from "../quants/Omo-Dreams.svelte";
  import OmoCallToAction from "../quants/Omo-CallToAction.svelte";
  import OmoChat from "../quants/Omo-Chat.svelte";
  import OmoEnkel from "../quants/Omo-Enkel.svelte";
</script>
  <OmoHeader {db} {currentId} />
  <OmoDreams {db}  {currentId}/>
  <OmoCallToAction {db}  {currentId}/>
  <OmoEnkel {db}  {currentId}/>
  <OmoCities {db}  {currentId}/>
  <OmoBlog {db}  {currentId} />