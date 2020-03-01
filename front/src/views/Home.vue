<template>
  <div id="home">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from './../components/header/Header.vue'
import Main from './../components/main/Main.vue'

export default {
  name: 'Home',
  components: {Header, Main},
}
</script>

<style>

html, body{
  margin: 0;
}
#home {
  height: 100vh;
  width: 100vw;
  font-family: '', Helvetica, Arial, sans-serif;
  height: 100vh;
  margin: 0;
}

</style>

