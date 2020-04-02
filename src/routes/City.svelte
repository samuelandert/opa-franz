<script>
  import OmoCity from "../quants/Omo-City.svelte";
  export let db;
  export let currentId;
  let city = db.cities.find(item=>item.id==currentId);
</script>

<OmoCity {city} />