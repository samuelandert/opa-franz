<script>
  let dreams = [
    {
      id: 1,
      name: "Tante Inge",
      dream: "es noch einmal an die Nordsee zu fahren",
      freuden: "SPAZIEREN",
      color: "bg-ci"
    },
    {
      id: 2,
      name: "Opa Jakob",
      dream: "ist es als ältester Mensch einen Marathon zu laufen",
      freuden: "PUZZELN",
      color: "bg-ci-2"
    },
    {
      id: 3,
      name: "Onkel Otto",
      dream: "ist es ins Stadion des Champions League Finales gehen",
      freuden: "PUZZELN",
      color: "bg-ci-2"
    }
  ];
</script>

<div class="flex justify-center my-20">
  <div class="w-5/6">
    <img src="/images/divider-1.png" alt="divider" class="px-48 mt-8" />
    <h2 class="text-center text-5xl text-ci mt-10 mb-6">UNSERE TRÄUME</h2>
    <div class="text-2xl text-gray-600 text-center mb-16">
      <p>
        "nur wenn wir große Träume haben können wir ein bisschen was erreichen"
      </p>
    </div>
    <div class="flex content-start flex-wrap">
      {#each dreams as dream}
        <div class="w-1/3 p-2">
          <div class="primary omo-border overflow-hidden omo-shadow">
            <div
              class="font-bold text-xl text-center p-2 text-gray-200 mb-2 {dream.color}
              flex flex-wrap justify-center content-center h-48">
              <p>"{dream.name}'s großer Lebenstraum ist {dream.dream}"</p>
            </div>
            <!-- <div class="px-6 pt-4">
              <p class="text-gray-800 text-bolt text-xl">{dream.name}</p>
            </div> -->
            <div class="px-6 pt-2 pb-4">
              <p class="text-xs text-gray-500 uppercase mb-1">
                Ich liebe es außerdem zu
              </p>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                font-semibold text-gray-700 mr-2">
                {dream.freuden}
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
