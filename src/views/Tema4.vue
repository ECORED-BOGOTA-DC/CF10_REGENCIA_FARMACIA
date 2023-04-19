<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mercancía
    
    .d-flex.flex-wrap.col-lg-10.mx-auto.mb-5
      img.d-none.d-lg-flex.my-auto.py-5.col-lg-4(src="@/assets/curso/temas/tema4/img-1.jpg" style="max-width: 323px")
      p.p-lg-5.p-4.col-lg-4.d-flex.align-items-center(style="background-color: #81D4FA") Se refiere a cualquier artículo u objeto que pueda ser comercializado o intercambiado en el mercado, con el fin de satisfacer una necesidad; en pocas palabras, es todo aquello que se puede vender o comprar. 
        br
        br
        |El valor de una mercancía inicia en su producción, la cual conlleva un costo o un trabajo que se evidencia en su circulación. 
      img.d-none.d-lg-flex.my-auto.py-5.col-lg-4(src="@/assets/curso/temas/tema4/img-2.jpg" style="max-width: 323px")

    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="background-color: #F7F6FE; overflow: hidden;")
      p Carl Marx el padre del marxismo y materialismo histórico, propone algunos modelos que son:
      ul.lista-ul--color
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 <b>El trueque:</b> consiste en entregar una mercancía a cambio de otra.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 <b>Vender para comprar:</b> consiste en vender una mercancía para comprar otra.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 <b>Comprar para vender:</b> consiste en comprar una mercancía en un costo más bajo para venderla en un costo más alto.

    Separador

    .titulo-segundo.color-acento-contenido
      h2 4.1 Tipos de mercancía
    
    p.mb-5 Según su orden, los tipos de mercancía (sustancias, materiales, minerales naturales o artificiales) que existen, son los siguientes:

    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="overflow: hidden; background-color: #F7F5FE;")
      h4.mb-5 Tipos de mercancía según el orden
      LineaTiempoB.linea-tiempo-edit(:datos="datosLineaTiempoB")
    .col-lg-10.mx-auto.tarjeta.p-4(style="overflow: hidden; background-color: #F7F5FE;")
      h4.mb-5 Tipos de mercancía según naturaleza
      LineaTiempoB.linea-tiempo-edit(:datos="datosLineaTiempoB2")
    Separador

    .titulo-segundo.color-acento-contenido
      h2 4.2 Consolidación y desconsolidación
    
    .d-flex.flex-wrap.col-xl-9.offset-xl-1
      img.col-lg-5.mx-auto.mb-4.mb-lg-0(src='@/assets/curso/temas/tema4/img-12.svg' style="max-width: 400px")
      p.col-lg-7.ps-lg-4 <b>La consolidación de la mercancía</b> es un servicio logístico que permite a la empresa reducir costos en el transporte de la mercancía, porque permite reunir distintas cargas, con embalajes diferentes o iguales y que vienen de distintas empresas, pero que comparten la misma ruta o destino.
        br
        br
        |Este proceso requiere de experiencia en logística y conocimiento de la clase de mercancía que se transporta y de las reglas relacionadas con ella. En ese sentido, a la hora de llenar un contenedor, es necesario conocer en volumen y peso de la carga, los embalajes, tipo de envases, condiciones de transporte, etc., todo con el fin de evitar sobrecargas y que toda la mercancía llegue en perfectas condiciones a su destino.
      p.mt-3.mb-5.w-100 Las siguientes son ventajas que tiene la consolidación de la mercancía:
      ul.lista-ul--color
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Permite ahorrar dinero en el transporte de mercancías.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Permite mejorar la competitividad de las empresas.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Permite la economía de escala en logística y la internacionalización de grandes, medianas y pequeñas  empresas.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Es un beneficio para todos los que participan en el proceso.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Optimiza espacio.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Permite mayor frecuencia de entregas.
      .d-flex.flex-wrap.w-100
        img.col-md-4.mb-auto(src='@/assets/curso/temas/tema4/img-13.svg' style="max-width: 295px")
        .col-md-8.d-flex.align-items-center.justify-content-center(style="background-color: #00BCD4; border: 1px solid #707070;")
          p.mb-0.p-4.text-white.fw-bold(style="max-width: 400px") La desconsolidación de la mercancía es el proceso logístico que consiste en vaciar de manera segura los contenedores, separando la mercancía para proceder con su entrega al destinatario.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosLineaTiempoB: [
      {
        titulo: 'Materias primas',
        texto: 'Están innatas porque no han sido procesadas o transformadas.',
        icono: require('@/assets/curso/temas/tema4/img-3.png'),
      },
      {
        titulo: 'Semiproductos o productos intermedios',
        texto:
          'Semiproductos o productos intermedios: son los que han sido sometidos a algún proceso de transformación.',
        icono: require('@/assets/curso/temas/tema4/img-4.png'),
      },
      {
        titulo: 'Producto en bruto',
        texto:
          'Son los que, por situaciones específicas, requieren de un acondicionamiento o transporte especial.',
        icono: require('@/assets/curso/temas/tema4/img-5.png'),
      },
      {
        titulo: 'Productos elaborados',
        texto:
          'Producto completamente transformado, destinado al consumo final.',
        icono: require('@/assets/curso/temas/tema4/img-6.png'),
      },
    ],
    datosLineaTiempoB2: [
      {
        titulo: 'Perecederas',
        texto: 'Su vida útil oscila entre 1 a 7 días.',
        icono: require('@/assets/curso/temas/tema4/img-7.png'),
      },
      {
        titulo: 'No perecederas',
        texto: 'Para su conservación no requieren de refrigeración.',
        icono: require('@/assets/curso/temas/tema4/img-8.png'),
      },
      {
        titulo: 'Frágiles',
        texto:
          'Se pueden destruir con facilidad, por lo que requieren de especial cuidado en su manipulación y transporte.',
        icono: require('@/assets/curso/temas/tema4/img-9.png'),
      },
      {
        titulo: 'Peligrosas',
        texto:
          'Representan peligro por su composición química, por lo que son un riesgo para los individuos que las manipulan.',
        icono: require('@/assets/curso/temas/tema4/img-10.png'),
      },
      {
        titulo: 'Dimensionales',
        texto: 'Son las de gran volumen.',
        icono: require('@/assets/curso/temas/tema4/img-11.png'),
      },
    ],
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
.linea-tiempo-edit
  .linea-tiempo-b__row
    .linea-tiempo-b__content
      h3
        font-size: 18px
    .linea-tiempo-b__icon
      img
        width: 100%
      &::after
        background-color: #6DC5DB
</style>
