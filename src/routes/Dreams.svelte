<script>
  export let db;
  const wishes = [
    {
      id: "1",
      title: "Wunsch 1",
      content: "Regelmäßig zusammen kochen und essen"
    },
    {
      id: "2",
      title: "Wunsch 2",
      content: "Einmal die Woche Schachspielen"
    },
    {
      id: "3",
      title: "Wunsch 3",
      content: "Öfters in die Natur spazieren gehen"
    }
  ];
  const leidenschaften = [
    {
      id: "1",
      tag: "stricken"
    },
    {
      id: "2",
      tag: "fischen"
    },
    {
      id: "3",
      tag: "kochen"
    },
    {
      id: "4",
      tag: "backen"
    },
    {
      id: "5",
      tag: "Schach spielen"
    }
  ];
  const schwierigkeiten = [
    {
      id: "1",
      tag: "hören"
    },
    {
      id: "2",
      tag: "sehen"
    },
    {
      id: "3",
      tag: "laufen"
    },
    {
      id: "4",
      tag: "essen"
    },
    {
      id: "5",
      tag: "reden"
    }
  ];
</script>

<div
  class="text-4xl text-center p-4 text-gray-200 bg-ci-2 flex flex-wrap
  justify-center content-center h-64">
  <p>"Opa Josef's großer Lebenstraum ist xyz......."</p>
</div>
<div class="flex justify-center my-10">
  <div class="w-5/6 xl:w-4/6">

    <img src="/images/divider-1.png" alt="divider" class="px-48 mt-8" />
    <div class="text-2xl text-gray-600 text-center mt-6 mb-8">
      Meine kleinen Freuden des Tages
    </div>
    <div class="flex content-start flex-wrap">
      {#each wishes as wish}
        <div class="w-1/3 p-2">
          <div
            class="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg
            shadow-lg">
            <div class="flex justify-center items-center">
              <a
                class="p-3 py-1 bg-gray-600 text-sm text-green-100 rounded-full"
                href="#">
                {wish.title}
              </a>
            </div>
            <div class="mt-4 text-center">
              <a class="text-lg text-gray-700 font-medium " href="#">
                {wish.content}
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="flex content-start flex-wrap">

      <div class="w-1/2 p-2">
        <div class="flex flex-col bg-white px-8 py-6 rounded-lg shadow-lg">
          <div class="flex justify-center items-center">
            <a
              class="p-3 py-1 bg-gray-600 text-sm text-green-100 rounded-full"
              href="#">
              Was mir Freude bereitet
            </a>
          </div>
          <div class="mt-4 text-center">
            <div class="px-6 pt-2 pb-2">
              {#each leidenschaften as leidenschaft}
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                  font-semibold text-gray-700 mr-2 mb-2">
                  #{leidenschaft.tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 p-2">
        <div class="flex flex-col bg-white px-8 py-6 rounded-lg shadow-lg">
          <div class="flex justify-center items-center">
            <a
              class="p-3 py-1 bg-gray-600 text-sm text-green-100 rounded-full"
              href="#">
              Womit ich mir schwer tue
            </a>
          </div>
          <div class="mt-4 text-center">
            <div class="px-6 pt-2 pb-2">
              {#each schwierigkeiten as schwierigkeit}
                <span
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                  font-semibold text-gray-700 mr-2 mb-2">
                  #{schwierigkeit.tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</div>
