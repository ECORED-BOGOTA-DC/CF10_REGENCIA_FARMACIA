<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Códigos de barra
    .basic-container
      img.col-lg-4.mb-auto.mx-auto(src='@/assets/curso/temas/tema8/img-1.svg' style="max-width: 400px" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.ps-lg-3
        .bloque-texto-b.color-acento-contenido.p-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left.me-1(style="color: #00BCD4 !important ;font-size:20px !important")
            p.mb-0(data-aos="fade-left") Es una identificación única de carácter numérico, representada por una combinación de líneas que permite reconocer rápidamente un artículo de forma única, global y no ambigua, en un punto de la cadena logística, y así poder realizar inventario o consultar sus características asociadas.
            i.fas.fa-quote-right.ms-1(style="color: #00BCD4 !important ;font-size:20px !important")
              br
              br
            .d-flex.justify-content-end.align-items-center
              p.fw-bold.mb-0.ms.auto (Semana, 2014).
        p.mb-5(data-aos="fade-left") Son usados para identificar los productos durante el almacenamiento y la distribución, además como medio de control de errores al registrar ventas y como método optimo de control de inventarios. 
          br
          |El código de barras aporta los siguientes beneficios:
        .tarjeta.p-4.mb-5(style="background-color: #F7F6FE; overflow: hidden;")
          ul.lista-ul--color.mb-0
            li.d-flex.mb-0
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Con el código de barras, cada uno de los productos toma una identificación universal.
            li.d-flex.mb-0
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Reduce costos de despacho y recibo.
            li.d-flex.mb-0
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Favorece la comunicación entre proveedores y clientes.
            li.d-flex.mb-0
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Disminuye el tiempo de facturación de los productos y, por ende, el tiempo de espera del cliente.
            li.d-flex.mb-0
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Disminuye el tiempo de ingreso de los productos al inventario, cuando este es sistematizado.
            li.d-flex.mb-0
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Otorga información extendida del producto como son, los componentes, entre otros.
            li.d-flex.mb-0
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
              p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Minimiza los errores de costos y precios.
    p.mb-5(data-aos="fade-right") En Colombia, el Instituto Colombiano de Codificación y Automatización Comercial (IAC) es la entidad encargada de otorgar el código de barras de los productos, aunque también existen otros como el EAN que es el Europeo, como ejemplo se puede ver la figura 4.
      br
      br
      |Existen dos códigos de barras, uno de 13 cifras que es el más común y otro de 8 cifras que se utiliza cuando el espacio para la impresión es muy corto. Estos se leen de la siguiente manera:
    .tarjeta.p-4.mb-5(style="background-color: #F7F6FE; overflow: hidden;")
      ul.lista-ul--color.mb-0
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Los 3 primeros dígitos corresponden al código que identifica la organización de codificación, por ejemplo, para Colombia es 770.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Los 4 dígitos siguientes corresponden al código de la empresa.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") Los 5 dígitos restantes corresponden a la identificación, como tal, del producto, otorgada por el fabricante.
        li.d-flex.mb-0
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3.ps-md-5(data-aos="fade-left") El ultimo número es de control, es decir, permite comprobar si los dígitos anteriores fueron leídos correctamente.
    .tarjeta.p-4(style="background-color: #F1FBFC; overflow: hidden;")
      .tarjeta(style="background-color: #F1FBFC;")
        .titulo-sexto.color-acento-botones.mb-5(data-aos="fade-right")
          p.mb-0 #[b Figura 4]. Cómo se lee un código de barras
      img.mx-auto.mb-auto(src='@/assets/curso/temas/tema8/img-2.svg' style="max-width: 540px" data-aos="fade-left" alt="Muestra la manera de leer un código de barras y que fue explicado en el párrafo antes de la imagen.")

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
.bloque-texto-b
  &:before
    background-color: #E6F7FE !important
</style>
