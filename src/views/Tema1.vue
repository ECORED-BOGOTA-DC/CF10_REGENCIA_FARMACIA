<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Reglamentación del servicio farmaceútico
    
    p.mb-5(data-aos="fade-right") El proceso de recepción de medicamentos y dispositivos médicos se encuentra reglamentado por la resolución 1403 visible en la figura 1:
    
    .tarjeta.p-4.p-md-5(style="background-color: #F1FBFC")
      .col-lg-10.mx-auto
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5.mb-0.text-small Figura 1
          p.mb-0.text-small Resolución 1403 de 2007
        img.mx-auto(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 677px" data-aos="fade-left")
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
