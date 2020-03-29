<template>

  <div class="filtro-sidebar" id="style-scroll">
    <div class="container filtros">

      <h2>Filtro</h2>

      <button style="margin: 20px" type="button" class="btn btn-primary btn-lg">Filtrar</button>

      <div class="container opcao-filtro marca">
        <h3 class="titulo-filtro">Marca</h3>

        <div class="row">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch1">
              <label class="custom-control-label" for="customSwitch1">Chevrolet</label>
            </div>
          </div>


          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch2">
              <label class="custom-control-label" for="customSwitch2">Ford</label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch3">
              <label class="custom-control-label" for="customSwitch3">Woskvagem</label>
            </div>
          </div>


          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch4">
              <label class="custom-control-label" for="customSwitch4">Honda</label>
            </div>
          </div>

        </div>

        <div class="row">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch5">
              <label class="custom-control-label" for="customSwitch5">Hynday</label>
            </div>
          </div>


          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch6">
              <label class="custom-control-label" for="customSwitch6">Toyota</label>
            </div>
          </div>
        </div>

      <div class="row">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch7">
              <label class="custom-control-label" for="customSwitch7">Renoult</label>
            </div>
          </div>


          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch8">
              <label class="custom-control-label" for="customSwitch8">Fiat</label>
            </div>
          </div>
        </div>

      </div>

      <div class="container opcao-filtro categoria">
        <h3 class="titulo-filtro">Categoria</h3>

        <div class="row">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch9">
              <label class="custom-control-label" for="customSwitch9">Hatch</label>
            </div>
          </div>

          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch10">
              <label class="custom-control-label" for="customSwitch10">Luxuoso</label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch12">
              <label class="custom-control-label" for="customSwitch12">Simples</label>
            </div>
          </div>

          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch11">
              <label class="custom-control-label" for="customSwitch11">SUV</label>
            </div>
          </div>
        </div>
      </div>

      <div class="container opcao-filtro cor">
        <h3 class="titulo-filtro">Cor do Veículo</h3>
          <select class="custom-select">
            <option selected="">Todas</option>
            <option value="preto">Preto</option>
            <option value="branco">Branco</option>
            <option value="cinza">Cinza</option>
            <option value="chumbo">Chumbo</option>
            <option value="vermelho">Vermelho</option>
          </select>
      </div>

      <div class="container opcao-filtro ano">
        <h3 class="titulo-filtro">Data de Fabricação</h3>
        <div class="row">
          <div class="col">
            <input class="form-control form-control-sm" type="number" placeholder="Inicio">
          </div>
          <div class="col">
            <input class="form-control form-control-sm" type="number" placeholder="Final">
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>

  export default {
    name: 'SidebarfiltroCarros',
    props: {
      msg: String
    }

  }

</script>

<style>

.filtro-sidebar {
  float: left;
  position: fixed;
  top: 50px;
  height: 95%;
  width: 22%;
  background: #F5F5F5;
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
}

.custom-control-label {
  font-size: 22px;
  margin: 7px;
}

.filtros {
  background-color: rgb(241, 241, 241);
  height: 1400px;
}

.opcao-filtro {
  background-color: rgb(178, 228, 186);
  padding: 15px;
  border-radius: 15px;
  text-align: left;
}

.custom-select {
  font-size: 20px;
}

.titulo-filtro {
  font-weight: bold;
  text-align: left;
  font-size: 25px;
}

.form-control-sm {
  width: 140px;
}


#style-scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-scroll::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

#style-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(134, 134, 134);
}



</style>