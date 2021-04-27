<template lang="html">  
  <div>
      <!-- API COPOMEX { TOKEN: 42fd5bc7-bc25-496b-ba24-2b1235445e43 } -->
      <!-- LLAMADA A LA API  -->
      <!-- https://api-sepomex.hckdrk.mx/query/info_cp/09810?token=42fd5bc7-bc25-496b-ba24-2b1235445e43 -->
     
      <!-- <p>{{info_cp}}</p> -->
      <h1>
        Cotiza tu pedido
      </h1>
      <!-- para entrar al objeto = {{res[0].error.response.""}} -->
      <div class="container">
        <div class="row">
            <!-- v-for="item in info_cp" -->
          <template  v-for="item in info_cp">
            <div class="col-md-8 col-md-offset-2">
              <input  type="text" class="form-control" v-model="searchCode" placeholder='Codigo...'>
                  <!-- v-if="countriesFilter && countriesFilter.length" -->
                <div > 
                    <!--  v-for="country of countriesFilter" -->
                  <div class="panel panel-default" >
                    <div class="panel-heading">
                      <!-- <img v-bind:src="country.flag" alt="" width="30px"> -->
                      <span>{{info_cp[0].response.cp}}</span>
                      </div>
                      <div class="panel-body">
                        <div class="row">
                          <div class="col-md-6">Estado: <strong>{{info_cp[0].response.ciudad}}</strong></div>
                          <div class="col-md-6">Ciudad: <strong>{{info_cp[0].response.estado}}</strong></div>
                          <div class="col-md-6">Colonia/asentamiento <strong>{{info_cp[0].response.asentamiento}}</strong></div>
                        </div> 
                        <div class="row">
                        <div class="col-md-6">Asentamiento: <strong>{{info_cp[0].response.tipo_asentamiento}}</strong></div>
                        <div class="col-md-6">Colonia/Municipio: <strong >{{info_cp[0].response.municipio}}</strong></div>
                      </div> 
                    </div>
                  </div>
                </div>
                <!-- v-else -->
              <div class="text-center">
                No results!
              </div>
            </div>
          </template> 
        </div>
         
      </div>
      <nuxt-link to="/">
          Regresar 
      </nuxt-link>  
    
  </div>
</template>

<script>
import axios from 'axios';


export default {
  name : 'FormCotizacion',
  data() {
    return{
        searchCode:"",
        info_cp:[]
    }
  },

  created() {
    this.getPostal()
  },

  methods:{
  
      //llamada GET a la api    
      async getPostal() {
        //  llamada a la api
        const res = await axios.get('https://api-sepomex.hckdrk.mx/query/info_cp/09810?token=42fd5bc7-bc25-496b-ba24-2b1235445e43')
       // respuesta datos
        this.info_cp = res.data;
        console.log(res.data)
      },

  },
  
  computed: {
   
  },


} 

</script>


<style scoped>
  h3{
    margin-bottom: 30px;
    text-align: center;
  } 
</style>
