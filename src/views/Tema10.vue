<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 Manual de Gestión de Procesos y procedimientos de los Servicios Farmacéuticos

    .basic-container.col-xl-10.mx-auto.mb-5
      img.col-lg-8.mb-auto(src='@/assets/curso/temas/tema9/img-2.jpg' style="max-width: 714px" data-aos="fade")
      .col-lg-4.d-flex.align-items-center
        .conatiner-offset-2(data-aos="fade-left")
          p La resolución 3100 del 2009 define los procedimientos y condiciones de habilitación de los servicios en salud, normativa a la que debe acogerse todo servicio farmacéutico para poder ser habilitado, además de cumplir con los estándares de calidad que exige el Sistema Único de Habilitación del Sistema Obligatorio de Garantía de Calidad de la Atención en Salud (SOGCS). 
            br
            br
            |En ese sentido, el servicio farmacéutico tiene la responsabilidad de implementar o ajustar el manual de procesos y procedimientos que permita su perfecto desempeño sin que se vea afectado por la rotación del recurso humano.
    p.mb-4(data-aos="fade-right") El manual debe contar como mínimo con la siguiente información:

    .col-lg-8.tarjeta.p-4.mb-5(style="background-color: #F7F6FE; overflow: hidden;")
      ul.lista-ul--color.mb-0
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Objetivos: general y específicos.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Alcance y responsables.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Términos y definiciones.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Desarrollo.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Anexos.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Referencias bibliográficas de ser necesario.
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
  background-color: #D9F5F9
  padding: 2rem
  border-radius: 20px
  border-bottom-right-radius: 0
  margin-left: -20%
  margin-right: auto
  z-index: 2
  box-shadow: 0 0 5px 3px #00000010
  @media (max-width: 1200px)
    margin-right: auto
    margin-left: 0
    margin-bottom: -3rem
  @media (max-width: 768px)
    margin: 0
    margin-bottom: .5rem
    border-radius: 20px
</style>
