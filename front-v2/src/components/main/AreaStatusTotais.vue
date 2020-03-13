<template>

  <div id="status-totais" class="container">
    <div class="row">

      <div id="totais" class="col"><p></p></div>
      <div id="totais" class="col"><p></p></div>
      <div id="totais" class="col"><p></p></div>
      <div id="totais" class="col"><p></p></div>

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
#status-totais {
  width: 100%;
  height: 130px;
  background-color: rgb(239, 241, 240);
  margin-top: 55px;
  margin-bottom: 55px;
}

#totais {
  margin: 4px;
  background-color: rgb(255, 255, 255);
  height: 120px;
}
</style>