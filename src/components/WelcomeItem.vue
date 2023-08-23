<template>

  <div class="item-center">
    <div class="item">
      <i>
        <slot name="icon"></slot>
      </i>
      <div class="details">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <span class="sub-text">
        <slot name="sub"></slot>
      </span>
        <slot></slot>
      </div>
    </div>
    <br>
    <br>
  </div>


</template>

<style scoped>

.item-center {
  margin-left: 20%;
  background: #e3e2e2;
  -webkit-box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 30px -8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  max-width: 60%;
  margin-bottom: 30px;
  max-height: 5%;
}


@media (min-width: 1024px) {
  .item-center {
    margin-left: 25%;
    max-height: 5%; /* Use the full viewport height */
  }
  .item {
    display: flex;
    position: relative;
  }
}

@media (max-width: 900px) {
  .item-center {
    margin-left: 10%;
    padding: 0 10px 0 10px;
    max-width: 80%;
  }
  .item {
    margin-top: 0;
    padding-top: 2rem;
    display: flex;
    position: relative;
  }

  i {
    border-right: 1px solid #cecece;
    padding-right: 5px;
  }
}


.sub-text {
  font-size: 13px;
  display: block;
  color: #3a3939;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
}


.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.1rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 2rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid black;
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid black;
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid black;
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
<script setup>
</script>