<template>
  <div id="app">
    <transition name="fade">
      <router-view> </router-view>
    </transition>
  </div>
</template>

<style lang="scss">
body{
    width: 100%;
    height: 100vh;
    // background-color: #4a4858;
    background-color: #fdfdfd;
}
  #app {
    font-family: '', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

  .container {
    max-width: 1603px;
    margin: 40px auto;
    background-color: rgb(221, 221, 221);
    border-radius: 10px;
  }
  .form-control {
    font-size: 22px;
  }

</style>
