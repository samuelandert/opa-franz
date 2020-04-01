<script>
  let cities = [
    {
      id: 1,
      name: "Heidelberg",
      image: "https://source.unsplash.com/Yfo3qWK2pjY/250x250"
    },
    {
      id: 2,
      name: "Berlin",
      image: "https://source.unsplash.com/pN684G33h_M/250x250"
    }
  ];
</script>

<div class="flex justify-center my-20">
  <div class="w-5/6">
    <img src="/images/divider-1.png" alt="divider" class="px-48 mt-8" />
    <h2 class="text-center text-5xl text-ci mt-10 mb-6">UNSERE STÄDTE</h2>
    <div class="text-2xl text-gray-600 text-center mb-16">
      <p>
        "erforsche in jeder Stadt die Lebensträume in deiner direkten Umgebung"
      </p>
    </div>
    <div class="flex content-start flex-wrap">
      {#each cities as city}
        <div class="w-1/4 p-2">
          <div class="primary omo-border overflow-hidden omo-shadow">
            <div
              class="h-64 bg-cover overflow-hidden flex justify-center
              content-end flex-wrap rounded-l-lg object-cover object-center"
              style="background-image: url('{city.image}.jpg')"
              title={city.name}>
              <p
                class="inline-block bg-ci rounded-full px-3 py-1 text-lg
                font-semibold text-gray-100 mb-4">
                {city.name}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<!-- 
<img src="/images/divider-1.png" alt="divider" class="px-48 mt-8" />
<div class="w-full">
  <div class="flex flex-wrap" />
  {#each cities as city}
    <div class="mt-6 w-1/3">
      <div class="primary flex items-center omo-shadow omo-border">
        <img
          src={city.image}
          class="h-32 w-32 flex-schrink-0 rounded-l-lg object-cover
          object-center"
          alt="image" />
        <div
          class="h-48 w-48 text-4xl text-gray-700 bg-cover overflow-hidden
          flex-schrink-0 rounded-l-lg object-cover object-center"
          style="background-image: url('/images/header.jpg')"
          title={city.name}>
          {city.name}
        </div>
      </div>
    </div>
  {/each}
</div> -->
