<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-left") Partiendo del Decreto 780 del 2016 se puede definir el Servicio Farmacéutico como:

    .basic-container.mb-5
      .col-12.col-md-8.col-xl-4.d-flex.align-items-center(data-aos="fade-right")
        .conatiner-offset-1.bloque-texto-b
          .bloque-texto-b__texto.justify-content-center.d-flex.mb-3
            i.fas.fa-quote-right
          p.mb-0.w-100 “El servicio de atención en salud, responsable de las actividades, procedimientos e intervenciones de carácter técnico, científico y administrativo, relacionados con los medicamentos y los dispositivos médicos utilizados en la promoción de la salud y la prevención, diagnóstico, tratamiento y rehabilitación de la enfermedad, con el fin de contribuir en forma armónica e integral al mejoramiento de la calidad de vida individual y colectiva”.
      img.col-xl-8.my-auto.ms-auto(src="@/assets/curso/temas/img-1.jpg" style="max-width: 820px" alt="Imagen decorativa")
    
    p.mb-5(data-aos="fade-right") Se hace necesario contar con procesos que garanticen la calidad de estos medicamentos y dispositivos médicos y, así mismo, brinden tranquilidad al momento de su dispensación a los usuarios. 
      br
      br
      |A continuación, se abordarán diferentes temas relacionados con el proceso de recepción de productos farmacéuticos, como la normatividad legal vigente, área de cuarentena, precintos, manual de procesos y procedimientos, entre otros, que permitirán identificar y entender el concepto exacto en pro de un mejoramiento continuo, tanto individual como colectivo.
    
    p.text-center.fw-bold(data-aos="fade-top") ¡Muchos éxitos en este proceso de aprendizaje!
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.bloque-texto-b
  &:before
    background-color: transparent !important
</style>
