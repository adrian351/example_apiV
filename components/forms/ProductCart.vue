<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <template  v-for="item in result">
          <div class="col-sm-2">
            <div class="card">
              <img 
                src="https://arconesnavidenos.mx/wp-content/uploads/2019/11/precios-arcones-y-canastas-navide%C3%B1as-en-walmart-arcones-o-canasta-navide%C3%B1as-ubicacion-de-canastas-y-arcones-canastas-arcones-com-proveedores-de-canastas-para-arcones-arcones-y-canastas-navid-300x300.png" 

                class="card-img-top"
              >

              <div class="card-body" align="left">
                <h5 class="card-title">
                  Nombre: {{item.name}}
                </h5>
                <v-divider class="mx-4"></v-divider>
                <p class="crad-text"> <strong>Precio:</strong> ${{item.price}} </p>
                <p class="crad-text"><strong>Marca</strong>: {{item.brand}}</p>
                <!-- <p class="crad-text"><strong>Categoria:</strong> {{item.categorie}}</p>
                <p class="crad-text"><strong>Etiqueta:</strong> {{item.etiqueta}}</p> -->
                <p class="crad-text"><strong>Desc:</strong> {{item.description}}</p>
                <p class="crad-text"><strong>ID:</strong> {{item.id}}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// import {baseURL} from '../../repository/Repository';

export default {
  name:'ProductCart',
  data(){
    return{
      result: []
    }
  },

  created() {
    this.getProductos();
  },
  
  methods:{
    async getProductos() {
    //  llamada a la api
    const res = await axios.get('http://127.0.0.1:8000/api/productos')
      // respuesta datos 
      this.result = res.data;
      console.log(res.data);
      }
    
  }
}

</script>

<style scoped>

</style>