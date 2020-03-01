<template>

  <div id="localizacao">
    <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14630.203371005677!2d-46.6445461206543!3d-23.54865200373196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1582888044281!5m2!1spt-BR!2sbr" allowfullscreen=""></iframe>
  </div>

</template>

<script>

export default {
  name: 'Maps',
  props: {
    msg: String
  },
}

</script>


<style>

#maps {
  height: 842px;
  width: 98%;
  border: 0;
}

#localizacao {
  height: 0px;
  width: 29%;
  right: 0px;
  float: right;
}

</style>