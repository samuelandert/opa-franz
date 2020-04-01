<script>
  let enkels = [
    {
      id: 0,
      name: "Emma",
      image: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
      city: "Berlin"
    },
    {
      id: 1,
      name: "Jakob",
      image: "https://source.unsplash.com/7YVZYZeITc8/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabtf",
      city: "Heidelberg"
    },
    {
      id: 2,
      name: "Volker",
      image: "https://source.unsplash.com/rriAI0nhcbc/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
      city: "Berlin"
    },
    {
      id: 3,
      name: "Adele",
      image: "https://source.unsplash.com/xe68QiMaDrQ/500x500",
      story:
        "Eines der schönsten Momente meines Lebens habe ich mit Onkel Josef-Dieter gehabt",
      city: "Memmingen"
    }
  ];
</script>

<div class="flex justify-center my-20">
  <div class="w-5/6">
    <img src="/images/divider-1.png" alt="divider" class="px-48 mt-8" />
    <h2 class="text-center text-5xl text-ci mt-10 mb-6">UNSERE ENKEL</h2>
    <div class="text-2xl text-gray-600 text-center mb-16">
      <p>"und deren authentische Erfahrungen und Erlebnisse"</p>
    </div>
    <div class="flex content-start flex-wrap">
      {#each enkels as enkel}
        <div class="w-1/2 p-2">
          <div
            class="flex items-center rounded-lg bg-white shadow-lg
            overflow-hidden">
            <img
              class="w-64 flex-shrink-0"
              src={enkel.image}
              alt={enkel.image} />
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
        </div>
      {/each}
    </div>
  </div>
</div>
