<script>
  let cities = [
    {
      id: 1,
      title: "Heidelberg",
      image: "https://source.unsplash.com/Yfo3qWK2pjY/250x250"
    },
    {
      id: 2,
      title: "Berlin",
      image: "https://source.unsplash.com/pN684G33h_M/250x250"
    }
  ];
</script>

<img src="/images/divider-1.png" alt="divider" class="px-48 mt-8" />
<div class="w-full">
  <div class="flex flex-wrap" />
  {#each cities as city}
    <div class="mt-6 w-full">
      <div class="primary flex items-center omo-shadow omo-border">
        <img
          src={city.image}
          class="h-32 w-32 flex-schrink-0 rounded-l-lg object-cover
          object-center"
          alt="image" />

        <div class="px-6 py-4">
          <h3 class="text-lg font-semibold text-gray-800s">
            <p>{city.title}</p>
          </h3>
          <p class="text-gray-600">some subtitle placeholder</p>
          <div class="mt-4">
            <a class="text-ci hover:text-ci-2" href={city.image}>
              Traum erfüllen
            </a>
          </div>
        </div>

      </div>
    </div>
  {/each}
</div>
