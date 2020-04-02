<script>
  import OmoEnkel from '../quants/Omo-Enkel.svelte';
  import OmoCity from '../quants/Omo-City.svelte';
  import OmoLeidenschaften from '../quants/OmoLeidenschaften.svelte';
  export let db;
  export let currentId;
  let enkel = db.enkels.find(item => item.id == currentId);
  let city = db.cities.find(item => item.id == enkel.city);
  let leidenschaften = db.leidenschaften.filter(x=>enkel.leidenschaften.some(y=>y==x.id));
</script>

<h1>{enkel.name}</h1>
<br />
<br />
<h2>Details</h2>
<pre>{JSON.stringify(enkel)}</pre>

<br />
<h2>City:</h2>
<OmoCity {city}/>

<OmoEnkel {enkel} /> 
<OmoLeidenschaften {leidenschaften} /> 
