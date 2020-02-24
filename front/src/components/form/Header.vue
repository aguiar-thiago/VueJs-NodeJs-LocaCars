<template>
<div class="pos-f-t" id ="header">
  <nav class="navbar navbar-dark" id="navbar">
  </nav>

</div>

</template>



<script>

export default {
  name: 'Header',
  props: {
    msg: String
  },
}

</script>


<style>
#header {
  width: 1160px;
  height: 40px;
  background: black;
}

</style>