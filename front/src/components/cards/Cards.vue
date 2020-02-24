<template>

<div id="cards">

<table id="table">
  <tr>
    <th>
      <div class="card" id="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </th>

    <th>
      <div class="card" id="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </th>

    <th>
      <div class="card" id ="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </th>
  </tr>

  <tr>
    <td>
      <div class="card" id="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </td>

    <td>
      <div class="card" id="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </td>

    <td>
      <div class="card" id="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </td>

  </tr>

    <tr>
    <th>
      <div class="card" id="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </th>

    <th>
      <div class="card" id="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </th>

    <th>
      <div class="card" id ="card-config">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Vizualizar</a>
        </div>
      </div>
    </th>
  </tr>

</table>

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
#cards {
  background-color: #dc9898;
  width: 65%;
  height: 98%;
  border-radius: 57px;
  padding: 0px 0px 0px 84px;
}

#card-config {
  width: 18rem;
  border-radius: 20px;
}

#table {
  width: 100%;
  height: 98%;
}

</style>