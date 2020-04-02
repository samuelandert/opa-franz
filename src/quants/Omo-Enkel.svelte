<script>
  export let enkel;
</script>

<div class="w-1/2 p-2">
  <a href="enkels?id={enkel.id}">
    <div
      class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
      <img class="w-64 flex-shrink-0" src={enkel.image} alt={enkel.image} />
      <div class="px-6 py-4">
        <h3 class="text-lg text-center font-semibold text-gray-800 mb-2">
          {enkel.name}
        </h3>
        <p class="text-gray-600 text-center ">"{enkel.story}"</p>
        <!-- <div class="mt-2">
                <a
                  href="#linktocity"
                  class="inline-block hover:bg-orange-300 hover:text-gray-800
                  bg-ci text-gray-100 rounded-full px-3 py-1 text-lg
                  font-semibold mb-4">
                  {enkel.city}
                </a>
              </div> -->
      </div>
    </div>
  </a>
</div>
