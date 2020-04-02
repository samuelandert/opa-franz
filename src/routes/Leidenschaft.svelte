<script>
  import OmoDreams from '../quants/Omo-Dreams.svelte';
  import OmoEnkels from '../quants/Omo-Enkels.svelte';
  export let db;
  export let leidenschaft;
  export let currentId;
  if(!leidenschaft) leidenschaft = db.leidenschaften.find(x=>x.id == currentId);
  let dreams = db.dreams.filter(x=>db.leidenschaften.some(y => y.id = x)); 
  let enkels = db.enkels.filter(x=>db.leidenschaften.some(y => y.id = x)); 
</script>

<h1>{leidenschaft.tag}</h1>
<OmoDreams {dreams} {db}/>
<OmoEnkels {enkels} {db}/>
