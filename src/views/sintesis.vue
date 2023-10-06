<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En el área de la salud se hace muy necesario garantizar la calidad de todos sus procesos, ya que de esto depende la salud y calidad de vida del ser humano, uno de estos procesos es de la recepción de los productos farmacéuticos; es por esto que se hace necesario reconocer y manejar muy bien la normatividad de este proceso, su área de cuarentena, el procedimiento técnico que se debe tener en cuenta en dicha recepción de mercancía, transporte, embalaje, sellos de seguridad entre otros, temas estos que han sido abordados en este componente formativo y que puede visualizar a través del siguiente mapa conceptual.
    .row.justify-content-center
      .col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que muestra el resumen de los temas vistos en el componente formativo y su importancia como es el caso de la normativa que existe para el proceso de recepción de productos farmacéuticos, sus métodos de verificación, para los cuales se utilizan fichas técnicas y estas a su vez obedecen al manual de gestión de procesos y procedimientos vigente para los servicios farmacéuticos.")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
