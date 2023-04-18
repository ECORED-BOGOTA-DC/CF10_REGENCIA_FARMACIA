<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Productos farmacéuticos

    .basic-container.col-10.mx-auto
      img.col-lg-8(src='@/assets/curso/temas/tema3/img-1.jpg' style="max-width: 714px")
      .col-lg-4.d-flex.align-items-center
        .conatiner-offset-2.bloque-texto-b
          .bloque-texto-b__texto.justify-content-center.d-flex.mb-3
            i.fas.fa-quote-right
          p.mb-0.w-100 La palabra producto se deriva del latín “productus” y tiene diferentes significados según el área en el cual se emplee. Los productos son todas aquellas cosas, objetos u artefactos fabricados en industrias y empresas, mediante un proceso, para el consumo o uso de las personas. El producto está identificado con un nombre que puede ser reconocido por cualquier individuo.
          p.fw-bold.text-end (Significados.com, 2018)
          p.mb-0.text-small Para este caso se llamarán productos farmacéuticos.
    Separador

    .titulo-segundo.color-acento-contenido
      h2 3.1 Tipos de productos farmacéuticos
    
    p.mb-5 Existen diferentes tipos de productos farmacéuticos, los más generales son:
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

<style lang="sass">
.conatiner-offset-2
  position: relative
  width: calc(100% + 3rem)
  background-color: #FFF
  padding: 2rem
  border-radius: 20px
  border-bottom-right-radius: 0
  margin-left: -20%
  margin-right: auto
  z-index: 2
  box-shadow: 0 0 5px 3px #00000010
  @media (max-width: 1200px)
    margin-right: auto
    margin-bottom: -3rem
  @media (max-width: 768px)
    margin: 0
    margin-bottom: .5rem
    border-radius: 20px
</style>
