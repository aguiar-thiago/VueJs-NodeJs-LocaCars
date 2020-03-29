<template>

  <div class="container status-totais">
    <div class="row">

      <div class="col totais"><p></p></div>
      <div class="col totais"><p></p></div>
      <div class="col totais"><p></p></div>
      <div class="col totais"><p></p></div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'AreaStatusTotais',
  props: {
    msg: String
  },
  components: {},

}
</script>


<style>
.status-totais {
  width: 100%;
  height: 160px;
  background-color: rgb(239, 241, 240);
  margin-top: 55px;
  margin-bottom: 55px;
}

.totais {
  margin: 4px;
  background-color: rgb(255, 255, 255);
  height: 150px;
}
</style>