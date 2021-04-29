<template lang="html">   
    <div class="container">
         <div class="content">
        <h1> Cotiza tu pedido</h1>
            <br>
            <br>
          <b-form @submit="onSubmit"  v-model="form">
            <b-form-group  label="Codigo Postal:" label-for="input-1">
              <b-form-input
                id="input-1"
                v-model="form.cp"
                placeholder="CP"
                required
              > </b-form-input>
            </b-form-group>

            <b-form-group label="Estado" label-for="input-2">
              <b-form-select
                id="input-2"
                v-model="form.estado"
                placeholder="Estado"
                required
              >
              </b-form-select>
            </b-form-group>

            <b-form-group label="Municipio" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.municipio"
                placeholder="Municipio"
                required
              >
              </b-form-select>
            </b-form-group>

            <b-form-group label="Colonia" label-for="input-4">
              <b-form-select
                id="input-4"
                v-model="form.colonia"
                placeholder="Colonia"
                required
              >
              </b-form-select>
            </b-form-group>
             <b-button type="submit" variant="success">Submit</b-button>
             <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>  
            <br>
            <br>
          <v-btn color="info"> <nuxt-link to="/">Home</nuxt-link></v-btn>
      </div>    
    </div> 
</template>

<script>
import {consultasepomex} from '../../repository/repo';

export default {
  name : 'FormCotizacion',
  data(){
    return{
      //  buscarcp:"",
      form:{
        cp:'',
        estado:'',
        municipio:'',
        colonia:''
      },
      result:[]
    }
  },

  methods:{

     onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      
    async buscarCp() {
      if (this.form.cp.length != 5) {  //si el numero de resultados es diferenete a 5, la consulta termina
        return false;
      }
      const repo = repoUpdateUser();
      try {  //si el num de resultados es igual a 5, rellenamos los campos por defecto
        this.cprofile = true;
        let cp = this.form.cp;
        let resultadoSepomex = await repo.consultaSepomex(cp); //consulta
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
      } finally {
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
