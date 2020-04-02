<script>
  export let city;
</script>

<div class="w-1/4 p-2">
  <a href="cities?id={city.id}">
    <img
      src={city.image}
      class="primary h-64 w-full rounded-t-lg object-cover object-center"
      alt="image" />
    <div
      class="w-full px-4 pt-1 pb-1 text-center hover:bg-orange-300
      hover:text-gray-800 bg-ci text-gray-100">
      <a href="#linktoblog " class="text-lg font-semibold">{city.name}</a>

    </div>
    <!-- <div class="primary omo-border overflow-hidden omo-shadow">
      <div
        class="h-64 bg-cover bg-center overflow-hidden flex justify-center
        content-end flex-wrap rounded-l-lg object-cover object-center"
        style="background-image: url('{city.image}.jpg')"
        title={city.name}>
        <div
          class="mt-4 w-full px-4 pt-1 pb-1 text-center hover:bg-orange-300
          hover:text-gray-800 bg-ci text-gray-100">
          <a href="#linktoblog " class="text-lg font-semibold">{city.name}</a>
        </div>
      </div>
    </div> -->
  </a>
</div>
