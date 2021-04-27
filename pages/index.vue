<template>
  <div class="container">
    <div>
      <h1 class="title">
        T-FrontApi
      </h1>
      <div class="links">
        <v-btn color="green"><nuxt-link to="/pages/MyProduct" >Producto</nuxt-link></v-btn>
        <v-btn color="error"><nuxt-link to="/pages/Cotizacion" > Cotizar</nuxt-link></v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

export default {

}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.links{
  display: block;
  padding-top: 15px;
}


</style>


// TOKEN sepomex
// 942460d4-da07-4dcb-ade1-807764f6d502