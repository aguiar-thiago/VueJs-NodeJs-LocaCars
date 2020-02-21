<template>
<div class="pos-f-t">
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="title">
    </div>
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

#title {
  color:white;
  margin: auto; 
}

h1 {
  font-size: 20px;
  }


</style>