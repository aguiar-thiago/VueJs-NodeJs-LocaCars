<template>

  <div id="header-top">
    <div class="container">
      <div class="row">
        <p style="color:white">Teste locadora</p>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {},

}
</script>


<style>
#header-top {
  background-color: rgb(33, 220, 158);
  height: 50px;
  width: 100vw;
}

</style>