<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Pesaje

    .basic-container
      img.col-lg-4.mb-auto.mx-auto(src='@/assets/curso/temas/tema9/img-1.svg' style="max-width: 330px" data-aos="fade-right" alt="Imagen decorativa")
      p.col-lg-8.ps-lg-3(data-aos="fade-left") El término pesaje está definido por la Real Academia Española como “La acción y efecto de pesar algo”. Para saber el peso de un producto, es necesario utilizar la unidad de medida correcta; por ejemplo, gramos o kilogramos para sólidos.
        br
        br
        |Existe una gran variedad de artefactos e instrumentos que permiten medir el peso, que se rigen por los mismos parámetros de comparación de cantidades. Aún así, no todos funcionan aplicando los mismos parámetros de comparación, como: la balanza, la báscula o el dinamómetro.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
