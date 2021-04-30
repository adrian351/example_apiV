<template lang="html">   
    <div class="container">
         <div class="content">
        <h1> Cotiza tu pedido</h1>
            <br>
            <br>
          <form @submit="onSubmit">
          
            <b-form-group  label="Codigo Postal:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.cp"
                placeholder="CP"
                
              > </b-form-input>
            </b-form-group>

            <b-form-group label="Estado" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.estado"
                placeholder="Estado"
                
              >
             
              </b-form-input>
            </b-form-group>

            <b-form-group label="Municipio" label-for="input-3">
              <b-form-input
                id="input-3"
                v-model="form.municipio"
                placeholder="Municipio"
                
              >
              </b-form-input>
            </b-form-group>

            <b-form-group label="Colonia" label-for="input-4">
              <b-form-select
                id="input-4"
                v-model="form.colonia"
                placeholder="Colonia"
                
              >
              </b-form-select>
            </b-form-group>
             <b-button type="submit" variant="success">Submit</b-button>
             <b-button type="reset" variant="danger">Reset</b-button>
          </form>  
            <br>
            <br>
          <v-btn color="info"> <nuxt-link to="/">Home</nuxt-link></v-btn>
      </div>    
      <!-- <p>{{form.cp}}</p> -->
    </div> 
</template>

<script>
import Axios from "axios";
  import repo from '../../repository/repo.js';

export default {
  name : 'FormCotizacion',
  data(){
    return{
      
      form:{
        cp:'',
        estado:'',
        municipio:'',
        colonia:''
      }


    }
  },


  methods:{

     onSubmit(event) {
      
       event.preventDefault();
        console.log(this.form)
            this.buscarCp();

        // alert(JSON.stringify(this.form))
        // console.log(this.form)
      },
      
    async buscarCp() {
      console.log("llega")
      if (this.form.cp.length != 5) {  //si el numero de campos es diferente a 5, la consulta termina
        return false;
      }
  
    let endpoint_sepomex = "https://api-sepomex.hckdrk.mx/query/info_cp/";
    let url = endpoint_sepomex + this.form.cp + '?token=42fd5bc7-bc25-496b-ba24-2b1235445e43';

    let result = await Axios.get(url).then((res) => {
        return res.data;
    }).catch((error) => {
        let respuesta = JSON.stringify(error)
        return JSON.parse(respuesta).name
    });
    

       console.log(result);

      // const repo = repo();
      
      try {  //si el num de resultados es igual a 5, rellenamos los campos por defecto
        this.cprofile = true;
        let cp = this.form.cp;
        let resultadoSepomex = await repo.consultaSepomex(cp); //consulta
       console.log(resultadoSepomex);
        if (resultadoSepomex == "Error") {
          alertas.errorcp();
                } else {
          let estadosIn = repo.resultestados(resultadoSepomex); //return estados
          this.estados = estadosIn; //seteamos estados array
          
          if (
            this.form.estado == "" ||
            this.form.estado == null ||
            this.form.estado != estadosIn[0]
          ) {
            this.form.estado = estadosIn[0]; ///damos un valor por defecto
          }

          let municipiosIn = repo.resultMunicipios(resultadoSepomex);
          this.municipios = municipiosIn;

          if (
            this.form.municipio == "" ||
            this.form.municipio == null ||
            this.form.municipio != municipiosIn[0]
          ) {
            this.form.municipio = municipiosIn[0];
          }

          this.colonias = repo.resultColonias(resultadoSepomex);
          // console.log(this.colonias);
          if (this.form.colonia == "" || this.form.colonia == null) {
            this.form.colonia = this.colonias[0];
          } else {
            let flag = true;
            estadosIn.forEach((element) => {
              if (element === this.form.colonia) {
                flag = false;
              }
            });
            if (flag) {
              this.form.colonia = this.colonias[0];
            }
          }
        }
      } catch (error) {
        this.colonias = [];
        this.form.colonia = null;
        this.estados = [];
        this.form.estado = null;
        this.municipios = null;
        this.form.municipio = null;
        this.errormesg =
          "código postal inválido y/o no encontrado, Intente nuevamente";
       }
     
      finally {
        this.cprofile = false;
      }
      
    },
    
  },
  
} 

</script>


<style scoped>
  h3{
    margin-bottom: 30px;
    text-align: center;
  } 
 
</style>
