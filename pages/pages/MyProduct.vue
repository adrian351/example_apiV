<template>
  <div class="container">
    <div>
      <h1 class="title">Productos</h1>
      <Producto/>
        <br/>
        <br/>
        <v-btn color="info"> <nuxt-link to="/">Home</nuxt-link></v-btn>
    
    </div>

    </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  /* min-height: 100vh; */
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
</style>