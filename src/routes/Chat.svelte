<script>
  import Eliza from "elizabot";
  import { beforeUpdate, afterUpdate } from "svelte";
  let chat = [
    "Hi schön das du an diesem tollen Projekt interessiert bist, ich heiße Robin und wie heißt du?",
    "Cool, woher kommst du denn?",
    "Klasse. um starten zu können müsste ich wissen"
  ];
  let div;
  let autoscroll;

  beforeUpdate(() => {
    autoscroll =
      div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20;
  });

  afterUpdate(() => {
    if (autoscroll) div.scrollTo(0, div.scrollHeight);
  });

  const eliza = new Eliza();

  let comments = [{ author: "eliza", text: eliza.getInitial() }];
  let i = 0;
  function handleKeydown(event) {
    if (event.which === 13) {
      debugger;
      const text = event.target.value;
      if (!text) return;

      comments = comments.concat({
        author: "user",
        text
      });

      event.target.value = "";

      // const reply = eliza.transform(text);
      const reply = chat[i++];

      setTimeout(() => {
        comments = comments.concat({
          author: "eliza",
          text: "...",
          placeholder: true
        });

        setTimeout(() => {
          comments = comments
            .filter(comment => !comment.placeholder)
            .concat({
              author: "eliza",
              text: reply
            });
        }, 500 + Math.random() * 500);
      }, 200 + Math.random() * 200);
    }
  }
</script>

<style>
  .left {
    align-self: flex-start;
  }
</style>

<div class="flex flex-1 justify-center">
  <div class="w-5/6 xl:w-4/6">
    <h2
      class="text-center text-5xl text-ci mt-10 mb-6"
      style="font-family: 'Indie Flower'!important;">
      Willkommen
    </h2>
    <div class="text-2xl text-gray-600 text-center mb-16">
      <p style="font-family: 'Indie Flower'!important;">
        Ich bin dein persönlicher Assistent Robin und führe dich durch alle
        Prozesse
      </p>
    </div>
    <div
      class="scrollable"
      style="display:flex;flex-direction:column;align-items:flex-end;"
      bind:this={div}>
      {#each comments as comment}
        <article class="m-1 " class:left={comment.author != ''}>
          <span
            class="text-ci text-xl p-2 text-lg rounded"
            style="font-family: 'Indie Flower'!important;"
            class:text-ci-2={comment.author === 'eliza'}>
            {comment.text}
          </span>
        </article>
      {/each}
    </div>

  </div>
</div>
<footer class="w-full text-center border-t border-grey p-4 bg-gray-400">
  <div class="flex flex-wrap -mx-3 justify-center">
    <div class="w-5/6 xl:w-4/6 px-3">
      <input
        on:keydown={handleKeydown}
        class="block w-full text-gray-700 border border-gray-500 rounded py-2
        px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500"
        id="chat-text"
        type="text"
        placeholder="Gebe hier deine Antwort ein"
        style="font-family: 'Indie Flower'!important;" />
    </div>
  </div>
</footer>
