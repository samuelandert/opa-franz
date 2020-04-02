<script>
  import OmoCity from "../quants/Omo-City.svelte";
  import OmoEnkels from "../quants/Omo-Enkels.svelte";
  export let db;
  export let currentId;
  let city = db.cities.find(item => item.id == currentId);
  let enkels = db.enkels.filter(item => item.city == city.id);
  let dreams = db.dreams.filter(item => item.city == city.id);
  let blog = db.blog.filter(item => item.cities.some(id => id == city.id));
</script>

<div
  class="h-64 text-5xl w-full flex content-center flex-wrap bg-cover bg-center
  justify-center overflow-hidden uppercase font-bolt text-white"
  style="background-image: url('{city.image}')"
  title={city.name}>
  {city.name}
</div>

<OmoEnkels {enkels} />

<br />
<h2>Opas</h2>
{#each dreams as dream}
  <pre>{JSON.stringify(dream)}</pre>
{/each}
<br />

<h2>Blog</h2>
{#each blog as b}
  <pre>{JSON.stringify(b)}</pre>
{/each}
<br />
