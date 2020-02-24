<template>

<div id="cards" >
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'Cards',
  props: {
    msg: String
  },

    data(){
    return {
    }
  },
   methods: {
   }
}

</script>


<style>
#container {
    background-color: #ffffff;
    max-width: 1095px;
    height: 601px;
    margin: 0px 0px 0px 0px;
}
</style>