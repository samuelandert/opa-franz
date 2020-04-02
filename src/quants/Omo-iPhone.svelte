<style>
  .fill {
    height: 100%;
    width: 100vw;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .outer {
    position: relative;
  }
  .inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
  }
</style>

<div class="fill">
  <div class="outer">
    <img src="images/iphone.png" alt="iphone" />
    <div class="inner">
      <slot />
    </div>
  </div>
</div>
