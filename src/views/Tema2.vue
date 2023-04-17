<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Normativa de calidad del proceso de recepción
    
    p.mb-5 Esta resolución, en el capítulo II - PROCEDIMIENTOS PARA LOS PROCESOS GENERALES - numeral 3.3, reglamenta el proceso general de recepción de medicamentos y dispositivos médicos.

    .tarjeta.p-3.col-xl-10.mx-auto(style="background: linear-gradient(0deg, rgba(129,209,250,1) 0%, rgba(126,94,227,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 PROCEDIMIENTOS PARA LOS PROCESOS GENERALES
              p Te invitamos a revisar con detenimiento la normativa del proceso de recepción de medicamentos y dispositivos médicos en la Resolución 1403 del 2007.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span(style="color: black !important") Descargar
                i.fas.fa-file-download(style="color: black !important")
    Separador
    .titulo-segundo.color-acento-contenido
      h2 2.1 Conceptos básicos
    
    p.mb-5 El proceso de recepción de medicamentos y dispositivos médicos permanecerá bajo la responsabilidad el director técnico del servicio farmacéutico (Químico Farmacéutico o Regente de Farmacia). 
      br
      |El siguiente video presenta los criterios que se deben tener presente, para el proceso de recepción.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Las zonas o áreas de recibo en el proceso de recepción son:
</template>

<script>
export default {
  name: 'Tema2',
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
