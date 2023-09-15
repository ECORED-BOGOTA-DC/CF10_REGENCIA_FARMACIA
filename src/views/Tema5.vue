<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cargas de mercancía

    p(data-aos="fade-right") Se refiere al conjunto de mercancías que pueden estar cubiertas (embaladas) o descubiertas (sin embalaje), dispuestas para su traslado desde un punto a otro, y sometidas a diferentes operaciones, con el propósito de lograr tal fin sin que se afecten sus características.
    Separador
    .titulo-segundo.color-acento-contenido
      h2 5.1 Tipos de carga
    
    p.mb-5(data-aos="fade-right") La carga como tal, se clasifica en carga general y carga a granel. Pero la carga del sector farmacéutico hace parte de una cadena logística especial, porque todos los productos transportados permiten que se salven vidas.
      br
      br
      |La logística farmacéutica requiere de las siguientes características y debe estar sujeta a la normativa GDP (Good Distribution Practices / buenas prácticas de distribución):
    
    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="background-color: #F7F6FE; overflow: hidden;")
      ul.lista-ul--color
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-2(data-aos="fade-left") Máxima trazabilidad logística y control de inventario.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-2(data-aos="fade-left") Control de calidad.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-2(data-aos="fade-left") Almacenar y transportar los productos farmacéuticos que requieran condiciones especiales, como la refrigeración.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-2(data-aos="fade-left") Prioridad con las mercancías de alto costo.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-2(data-aos="fade-left") Vehículos, contenedores, embalaje y etiquetado especiales, para el transporte de productos farmacéuticos, que garanticen la conservación de la temperatura de la carga.
    
    .cajon.cajon-edit.color-secundario.col-md-6.col-lg-7.mx-auto.p-4.mb-5
      p.mb-0(data-aos="fade-right") La carga de productos farmacéuticos requiere de mayor cuidado porque constantemente se ve expuesta a robos; en mayor grado, las sustancias controladas o de alto costo, debido a que pueden ser muy bien pagas en el mercado negro. Los robos de carga de productos farmacéuticos son la situación que afecta la cadena de suministro con más frecuencia y la causa más común del aumento de productos fraudulentos y adulterados.
    Separador 

    .titulo-segundo.color-acento-contenido
      h2 5.2 Tipos de símbolos
    
    p.mb-5(data-aos="fade-right") En el momento de manipular o transportar la carga, es necesario verificar la información sobre el manejo y las advertencias que esta trae, al igual que los símbolos pictóricos aceptados internacionalmente; todo esto con el fin de identificar la peligrosidad de la carga, ver la figura 3.
    
    .tarjeta.p-4(style="background-color: #F1FBFC; overflow: hidden;")
      .tarjeta(style="background-color: #F1FBFC;")
        .titulo-sexto.color-acento-botones.mb-5(data-aos="fade-right")
          h5.mb-0.text-small Figura 3
          p.mb-0.text-small Símbolos y leyendas del etiquetado de los medicamentos
      img.mx-auto.mb-auto(src='@/assets/curso/temas/tema5/img-1.jpg' style="max-width: 1030px" data-aos="fade-left" alt="Muestra los diferentes símbolos que se utilizan para el etiquetado de los medicamentos.")
    
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
