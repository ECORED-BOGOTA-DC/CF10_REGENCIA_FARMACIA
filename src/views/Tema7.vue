<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Precintos o sellos de seguridad
    p.mb-5 Se refiere a un artefacto numerado que se utiliza sobre dispositivos de cierre, para garantizar que estos no se abran sin previa autorización, ya sea adrede por manos extrañas, o por accidente.
      br
      br
      |Estos no son reutilizables y eliminarlos implica su destrucción, de manera que es inevitable no darse cuenta cuando son eliminados. Según el material, los precintos pueden ser:
    .d-flex.flex-wrap.justify-content-center
      .decoration-tarjeta.col-lg-6.mx-md-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema7/img-1.jpg')
          figcaption Precintos plásticos
      .decoration-tarjeta.col-lg-6.mx-md-4
        figure.mb-5
          img(src='@/assets/curso/temas/tema7/img-2.jpg' style="max-width: 295px")
          figcaption Precintos plásticos

    .tarjeta.p-4.mb-5(style="background-color: #F7F6FE; overflow: hidden;")
      p Los precintos metálicos se clasifican, por su nivel de seguridad, en:
      ul.lista-ul--color.mb-0
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-3.ps-md-5 <b>Alta seguridad:</b> son usados principalmente en contenedores marítimos y pueden ser en forma de tubo o metálicos con cable.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-3.ps-md-5 <b>De seguridad:</b> son los que utilizan el resto de las industrias.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-3.ps-md-5 <b>Indicativos:</b> son utilizados solo como identificación, razón por la que no son muy resistentes.
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
.decoration-tarjeta
  max-width: 327px
  display: flex
  position: relative
  figcaption
    width: 100%
    position: relative
    z-index: 1
  figure
    position: relative
    display: flex
    flex-wrap: wrap
    justify-content: center
    align-items: center
    width: 100%
    padding: 1rem
    overflow: visible
    margin: auto
    overflow: hidden
    img
      display: flex
      justify-content: center
      position: relative
      z-index: 1
    &::after
      content: ''
      position: absolute
      left: 0
      bottom: 0
      width: 140px
      height: 140px
      background-color: #D2C7F5
    &::before
      content: ''
      position: absolute
      top: 0
      right: 0
      width: 140px
      height: 140px
      background-color: #D2C7F5
</style>
