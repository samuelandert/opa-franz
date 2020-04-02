<script>
export let city;
</script>

<a class="w-1/4 p-2" href="cities?id={city.id}">
  <div class="primary omo-border overflow-hidden omo-shadow">
    <div class="h-64 bg-cover bg-center overflow-hidden flex justify-center
              content-end flex-wrap rounded-l-lg object-cover object-center"
              style="background-image: url('{city.image}.jpg')"
              title={city.name}>
              <p
                class="inline-block bg-ci rounded-full px-3 py-1 text-lg
                font-semibold text-gray-100 mb-4 hover:bg-orange-300
                hover:text-gray-800">
                {city.name}
              </p>
            </div>
          </div>
        </a>