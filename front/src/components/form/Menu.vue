<template>


<div id="Menu">
  <!-- <div id="btn" class="btn-group-vertical">
    <button id="btn-menu" type="button" class="btn btn-dark">Luxo</button>
    <button id="btn-menu" type="button" class="btn btn-dark">sss</button>
    <button id="btn-menu" type="button" class="btn btn-dark">Button</button>
    <button id="btn-menu" type="button" class="btn btn-dark">Button</button>
    <button id="btn-menu" type="button" class="btn btn-dark">Button</button>
    <button id="btn-menu"  type="button" class="btn btn-dark">Button</button>
  </div> -->
</div>


</template>

<script>

export default {
  name: 'Menu',
  props: {
    msg: String
  },
}

</script>


<style>
#Menu {
  background-color: azure;
  max-width: 10%;
  height: 597px;
  margin: -597px 0px 0px 0px;
  display: flex;
  flex-direction: column;
}

#btn-menu {
  width: 100px;
  height: 20px;
}

#btn {
  margin: 2px 0px 0px -8px;
  display: flexbox;
  height: 550px;
}
</style>