<script>
  import Eliza from "elizabot";
  import { beforeUpdate, afterUpdate } from "svelte";

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

  function handleKeydown(event) {
    if (event.which === 13) {
      const text = event.target.value;
      if (!text) return;

      comments = comments.concat({
        author: "user",
        text
      });

      event.target.value = "";

      const reply = eliza.transform(text);

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

<!-- <style>
  .chat {
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 320px;
  }

  .scrollable {
    flex: 1 1 auto;
    border-top: 1px solid #eee;
    margin: 0 0 0.5em 0;
    overflow-y: auto;
  }

  article {
    margin: 0.5em 0;
  }

  .user {
    text-align: right;
  }

  span {
    padding: 0.5em 1em;
    display: inline-block;
  }

  .eliza span {
    background-color: #eee;
    border-radius: 1em 1em 1em 0;
  }

  .user span {
    background-color: #0074d9;
    color: white;
    border-radius: 1em 1em 0 1em;
    word-break: break-all;
  }
</style> -->

<div class="flex flex-1 justify-center">
  <div class="w-5/6 xl:w-4/6">
    <h2 class="text-center text-5xl text-ci mt-10 mb-6">Willkommen</h2>
    <div class="text-2xl text-gray-600 text-center mb-16">
      <p>
        Ich bin dein persönlicher Assistent Franz und führe dich durch alle
        Prozesse
      </p>
    </div>
    <div class="scrollable" bind:this={div}>
      {#each comments as comment}
        <article class="m-5">
          <span class="bg-ci p-2 text-white rounded">{comment.text}</span>
        </article>
      {/each}
    </div>

  </div>
</div>
<footer class="w-full text-center border-t border-grey p-4">
  <div class="flex flex-wrap -mx-3 justify-center">
    <div class="w-5/6 xl:w-4/6 px-3">
      <input
        on:keydown={handleKeydown}
        class="block w-full text-gray-700 border border-gray-500 rounded py-2
        px-4 leading-tight focus:outline-none focus:bg-white
        focus:border-gray-500"
        id="chat-text"
        type="text"
        placeholder="Gebe hier deine Antwort ein" />
    </div>
  </div>
</footer>
