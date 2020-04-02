<script>
  export let db;
  let dreams = db.dreams;
</script>

<div class="flex justify-center my-20">
  <div class="w-5/6 xl:w-4/6">
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
              class="text-xl text-center p-4 text-gray-200 mb-2 bg-ci-2 flex
              flex-wrap justify-center content-center h-48">
              <p>"{dream.name}'s großer Lebenstraum ist {dream.dream}"</p>
            </div>
            <div class="px-6 pt-2 pb-2">
              <p class="text-xs text-gray-500 mb-1 uppercase">Ich liebe es</p>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                font-semibold text-gray-700 mr-2 mb-2">
                #{dream.freuden}
              </span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                font-semibold text-gray-700 mr-2 mb-2">
                #freude 2
              </span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                font-semibold text-gray-700 mr-2 mb-2">
                #freude 3
              </span>
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm
                font-semibold text-gray-700 mr-2 mb-2">
                #freude 4
              </span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
