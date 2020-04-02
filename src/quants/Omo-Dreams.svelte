<script>
  import OmoDream from "./Omo-Dream.svelte";
  export let db;
  export let dreams;
  if (!dreams) dreams = db.dreams;
</script>

<div class="flex justify-center my-20">
  <div class="w-5/6 xl:w-4/6">
    <img src="/images/divider-1.png" alt="divider" class="px-48 mt-8" />
    <h2 class="text-center text-5xl text-ci mt-10 mb-6">UNSERE TRÄUME</h2>
    <div class="text-2xl text-gray-600 text-center mb-16">
      <p>"nur wenn wir große Träume haben können wir ein bisschen was erreichen"</p>
    </div>
    <div class="flex content-start flex-wrap">
      {#each dreams as dream}
        <OmoDream {dream} {db} />
      {/each}
    </div>
  </div>
</div>
