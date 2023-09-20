<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Embalajes
    .d-flex.flex-wrap.mb-5
      img.mx-auto.col-lg-3.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema6/img-1.jpg' style="max-width: 295px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-9.ps-lg-3
        p.mb-4(data-aos="fade-left") Se refiere al material necesario utilizado en el proceso de cubrir, proteger y preservar las características y calidad de los productos farmacéuticos que serán transportados.
          br
          br
          |El embalaje permite:
        .tarjeta.p-4.mb-5(style="background-color: #F7F6FE; overflow: hidden;")
          ul.lista-ul--color
            li.d-flex.mb-4
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-2(data-aos="fade-left") Cuidar y guardar por un tiempo límite, la mercancía durante el transporte.
            li.d-flex.mb-4
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-2(data-aos="fade-left") Proteger la mercancía de riesgos mecánicos, climáticos, manipulación, almacenamiento, contaminaciones y robos.
            li.d-flex.mb-4
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-2(data-aos="fade-left") Favorece la manipulación y recepción de la carga.
            li.d-flex.mb-4
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-2(data-aos="fade-left") Permite lograr el equilibrio entre el costo total y la calidad de la protección.
            li.d-flex.mb-4
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-2(data-aos="fade-left") Favorece el reconocimiento de la mercancía.
            li.d-flex.mb-4
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-2(data-aos="fade-left") Favorece, en su caso, la inspección de la aduana.
            li.d-flex.mb-4
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-2(data-aos="fade-left") Minimiza los riesgos para los individuos.
        p.mb-5(data-aos="fade-right") El proceso de embalar requiere además tener presente las características generales y específicas de los productos, como:
        ul.lista-ul--color.lista-ul--separador
          li
            p.mb-0(data-aos="fade-right") <b>Estado físico:</b> sólido, líquido, gaseoso.
          li
            p.mb-0(data-aos="fade-right") <b>Características:</b> peligroso o alterable por temperatura.
          li
            p.mb-0(data-aos="fade-right") <b>Material que lo constituye:</b> medicamento, dispositivo médico, etc.
          li
            p.mb-0(data-aos="fade-right") <b>Identificación:</b> etiqueta.
          li
            p.mb-0(data-aos="fade-right") <b>Características del medio de transporte:</b> limitaciones de espacio y el peso del vehículo de transporte.
          li
            p.mb-0(data-aos="fade-right") <b>Costos:</b> fabricación, manipulación, etc.
    .d-flex.flex-wrap
      img.mx-auto.col-lg-4.mb-4.mb-lg-auto(src='@/assets/curso/temas/tema6/img-2.jpg' style="max-width: 400px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.ps-lg-4.d-flex.flex-wrap.align-content-center(data-aos="fade-left")
        p.mb-4.w-100 Los embalajes pueden ser de uso interno o externo; en cuanto a material pueden ser de madera, plástico, cartón, papel y metal. En el material complementario se encuentra un enlace donde se amplía la información de cada uno de estos materiales, su uso, ventajas y características.
        .cajon.cajon-edit.color-secundario.p-4.w-100
          p.mb-0 El embalaje que se utiliza para transportar los productos farmacéuticos debe resistir las condiciones del almacenamiento y el traslado, la compresión o apilamiento y la vibración.

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
