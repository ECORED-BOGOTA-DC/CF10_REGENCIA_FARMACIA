<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Productos farmacéuticos

    .basic-container.col-10.mx-auto
      img.col-lg-8(src='@/assets/curso/temas/tema3/img-1.jpg' style="max-width: 714px")
      .col-lg-4.d-flex.align-items-center
        .conatiner-offset-2.bloque-texto-b
          .bloque-texto-b__texto.justify-content-center.d-flex.mb-3
            i.fas.fa-quote-right
          p.mb-0.w-100 La palabra producto se deriva del latín “productus” y tiene diferentes significados según el área en el cual se emplee. Los productos son todas aquellas cosas, objetos u artefactos fabricados en industrias y empresas, mediante un proceso, para el consumo o uso de las personas. El producto está identificado con un nombre que puede ser reconocido por cualquier individuo.
          p.fw-bold.text-end (Significados.com, 2018)
          p.mb-0.text-small Para este caso se llamarán productos farmacéuticos.
    Separador

    .titulo-segundo.color-acento-contenido
      h2 3.1 Tipos de productos farmacéuticos
    
    p.mb-5 Existen diferentes tipos de productos farmacéuticos, los más generales son:

    SlyderB.mb-5.slider-b-edit(:datos="datosSlyder")

    .cajon.cajon-edit.color-secundario.col-md-6.col-lg-7.mx-auto.p-4.mb-5
      p Existe otra clase de productos farmacéuticos, propios de ciertas especialidades como los medicamentos oncológicos, los biotecnológicos, las nutriciones parenterales y enterales, los preparados magistrales estériles, entre otros.
    
    h3.mb-5.fw-bold Ficha técnica de los medicamentos

    p.mb-5 Es un documento oficial que resume las características del producto y evidencia las condiciones de uso autorizadas, simplificando la información científica precisa para los profesionales de la salud, de acuerdo con los estudios que respaldan su autorización. 
      br
      br
      |La información contendida en este formato, debe estar actualizada porque es un documento que permite modificaciones, ya sea por la compañía farmacéutica, el fabricante o por las autoridades sanitarias.
      br
      br
      |La normativa que rige la ficha técnica de los medicamentos, es la siguiente:
    
    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="overflow: hidden; background-color: #F7F6FE")
      ul.lista-ul--color.lista-ul--separador
        li
          p.mb-0.col.ps-md-4(style="line-height: 3") El artículo 15 del decreto legislativo 1 del 2015 establece como una garantía de información, exigir para los medicamentos la ficha técnica, el prospecto y el etiquetado, los cuales deben ser previamente autorizados por la Agencia Española de Medicamentos y Productos Sanitarios. La Agencia Española de Medicamentos y Productos Sanitarios pondrá la ficha técnica a disposición de los servicios de salud de las comunidades autónomas, de los colegios u organizaciones profesionales, de los médicos, odontólogos y farmacéuticos en ejercicio y, en su caso, de los veterinarios en ejercicio.
        li
          p.mb-0.col.ps-md-4(style="line-height: 3") El decreto 1345 del 2007, por el que se regula el procedimiento de autorización, registro y condiciones de dispensación de los medicamentos de uso humano fabricados industrialmente, dispone como documentación necesaria para la autorización de un medicamento, la presentación de la ficha técnica aprobada, que deberá ajustarse en su contenido  a lo previsto en el Anexo II de dicha norma.
    
    .cajon.cajon-edit.color-secundario.col-md-6.col-lg-10.mx-auto.p-4.mb-5
      p Realmente, a partir del momento que fue creada la EMEA (Agencia Europea de Medicamentos), es cuando la ficha técnica se convirtió en un documento estándar en todos los países de la UE, incorporando nuevos apartados con respecto a los establecidos en la legislación española, desde entonces, todas las modificaciones que se realicen a la ficha técnica deberán ser autorizadas por las Agencias reguladoras.
    
    p.mb-5 El contenido de la ficha técnica se encuentra descrito en el anexo II - Contenido de la ficha técnica o resumen de características del producto- del real decreto 1345 del 2007, pero La EMEA “A Guideline on Summary of Product Characteristics” establece diez ítems estandarizados en todos los países de la UE:

    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="overflow: hidden; background-color: #F7F6FE")
      ul.lista-ul--color.lista-ul--separador
        li
          p.mb-0.col.ps-4 1. Nombre del medicamento.
        li
          p.mb-0.col.ps-4 2. Composición cualitativa y cuantitativa.
        li
          p.mb-0.col.ps-4 3. Forma farmacéutica.
        li
          p.mb-0.col.ps-4 4. Datos clínicos.
        li
          p.mb-0.col.ps-4 5. Propiedades farmacológicas.
        li
          p.mb-0.col.ps-4 6. Datos farmacéuticos.
        li
          p.mb-0.col.ps-4 7. Titular de la autorización de comercialización.
        li
          p.mb-0.col.ps-4 8. Nº de la autorización de comercialización.
        li
          p.mb-0.col.ps-4 9. Fecha de primera autorización/revocación de la autorización.
        li
          p.mb-0.col.ps-4 10. Fecha de revisión del texto.
        li
          p.mb-0.col.ps-4 En el caso de radiofármacos, además:
        li
          p.mb-0.col.ps-4 11. Dosimetría.
        li
          p.mb-0.col.ps-4 12. Instrucciones para la preparación.
    p.mb-5 Partiendo de la información anteriormente documentada, se debe tener claro qué NO es una ficha técnica:

    .col-lg-10.mx-auto.tarjeta.p-4.py-lg-5.mb-5(style="overflow: hidden; background-color: #F7F6FE")
      ul.lista-ul--color.lista-ul--separador.mb-0.col-lg-10.mx-auto
        li.d-flex
          img(src="@/assets/curso/temas/decorador-2.svg" style="width: 25px; height: 25px;")
          p.mb-0.col.ps-4 Que el pedido procede del proveedor seleccionado y a nombre del establecimiento.
        li.d-flex
          img(src="@/assets/curso/temas/decorador-2.svg" style="width: 25px; height: 25px;")
          p.mb-0.col.ps-4 No es un documento publicitario o folleto comercial del medicamento.
        li.d-flex
          img(src="@/assets/curso/temas/decorador-2.svg" style="width: 25px; height: 25px;")
          p.mb-0.col.ps-4 No es la información que se encuentra en los vademécum.
        li.d-flex
          img(src="@/assets/curso/temas/decorador-2.svg" style="width: 25px; height: 25px;")
          p.mb-0.col.ps-4 No es la información que se encuentra en el Catálogo de Especialidades Farmacéuticas.
        li.d-flex.mb-0
          img(src="@/assets/curso/temas/decorador-2.svg" style="width: 25px; height: 25px;")
          p.mb-0.col.ps-4 No es la información que se encuentra en la Guía de Prescripción Terapéutica.


    .tarjeta.p-3.col-xl-10.mx-auto.mb-5(style="background: linear-gradient(0deg, rgba(129,209,250,1) 0%, rgba(126,94,227,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/decorador-3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              p.fw-bold.mb-1 Te invitamos a analizar un ejemplo de una ficha técnica de un medicamento.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span(style="color: black !important") Descargar
                i.fas.fa-file-download(style="color: black !important")
    h3.mb-5.fw-bold Ficha técnica de los dispositivos médicos.  
    p.mb-5 El decreto 4725 del 2005, por el cual se reglamenta el régimen de registros sanitarios, permiso de comercialización y vigilancia sanitaria de los dispositivos médicos para uso humano, no exige la ficha técnica como documento necesario para su comercialización. Aún así, los laboratorios fabricantes, por lo general otorgan la ficha técnica de producto terminado presentada ante el INVIMA al momento de solicitar la evaluación técnica de este producto.

    .tarjeta.p-3.col-xl-10.mx-auto.mb-5(style="background: linear-gradient(0deg, rgba(129,209,250,1) 0%, rgba(126,94,227,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/decorador-3.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              p.fw-bold.mb-1 Te invitamos a analizar un ejemplo de dos fichas técnicas de dispositivos médicos.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span(style="color: black !important") Descargar
                i.fas.fa-file-download(style="color: black !important")
    Separador

    .titulo-segundo.color-acento-contenido
      h2 3.2 Sustancias peligrosas en el servicio farmacéutico
    
    p.mb-5 Las sustancias o productos peligrosos son denominados así por presentar los siguientes efectos:

    .col-lg-10.mx-auto
      .col-lg-10.me-auto.tarjeta.p-4.mb-5(style="overflow: hidden; background-color: #F7F6FE")
        p.col-lg-7.mx-lg-auto.mb-0 1. Carcinogenicidad.
          br
          |2. Teratogenicidad u otra toxicidad para el desarrollo.
          br
          |3. Tóxicos para la reproducción.
          br
          |4. Tóxico para los órganos a bajas dosis.
          br
          |5. Genotoxicidad.
    p.mb-5 A nivel farmacéutico, todo el personal está expuesto en menor o mayor grado a las diferentes sustancias peligrosas que allí se manejen:

    PasosA.color-acento-contenido.mb-5.col-lg-10.mx-auto(tipo="l")
      .row
        .col-md-6.col-lg-8.mb-4.mb-md-0.d-flex.align-items-center.order-2.order-md-1
          p El mayor grado de exposición lo tiene el personal que trabaja en los laboratorios fabricantes debido a que allí se utiliza un gran número de sustancias químicas y en concentraciones muy altas, lo que puede provocar, a menudo, salpicaduras o derrames en la manipulación.
        .col-md-6.col-lg-4.order-1.order-md-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema3/img-9.png')

      .row
        .col-md-6.col-lg-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema3/img-10.png')
        .col-md-6.col-lg-8.d-flex.align-items-center
          p.text-start Posterior a esto, se encuentra el personal que realiza la recepción y el almacenamiento, porque en caso de un daño en el envase, son los primeros implicados.
      
      .row
        .col-md-6.col-lg-8.mb-4.mb-md-0.d-flex.align-items-center.order-2.order-md-1
          p Por último, está el personal que realiza la limpieza y/o la recolección de residuos, porque en ciertos momentos pueden estar limpiando derrames o recogiendo residuos y/o envases de sustancias peligrosas.
        .col-md-6.col-lg-4.order-1.order-md-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema3/img-11.png')

    p.mb-5 Los productos químicos más frecuentes utilizados en la industria farmacéutica son: 

    .col-lg-10.mx-auto.tarjeta.p-4.mb-5(style="background-color: #CFF0F9; overflow: hidden;")
      ul.lista-ul--color.col-lg-11.ms-lg-auto
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Gases: propileno, etanol, butano, helio, oxígeno, cloro, etc.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Líquidos inflamables: acetona, alcohol etílico, etc.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Sólidos inflamables: sodio, potasio, carburo, etc.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Sustancias comburentes y peróxidos: ácido nítrico, ácido sulfúrico, ácido clorhídrico, ácido fluorhídrico, peróxido de magnesio, etc.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Sustancias infecciosas: secreciones, sangre, muestras de diagnóstico, etc.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Material radioactivo.
        li.d-flex.mb-4
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
          p.mb-0.ps-2 Corrosivos: hipoclorito sódico.
    p.mb-5 Las principales vías de exposición a estos son la vía dérmica (por contacto directo), la vía inhalatoria (exposición por inhalación) y la vía digestiva (por comer en el lugar contaminado). 
      br
      br
      |Es importante tener presente los símbolos de las sustancias, ver figura 2:
    
    .tarjeta.p-4(style="background-color: #F1FBFC;")
      .titulo-sexto.color-acento-botones.mb-5
        h5.mb-0.text-small Figura 2
        p.mb-0.text-small Símbolos de sustancias
      .d-flex.flex-wrap 
        img.col-12.col-lg-6.mx-auto.mb-4.mb-lg-0(src="@/assets/curso/temas/tema3/img-12.svg" style="max-width: 500px")
        img.col-12.col-lg-6.mx-auto(src="@/assets/curso/temas/tema3/img-13.svg" style="max-width: 500px")
    Separador 
    .titulo-segundo.color-acento-contenido
      h2 3.3 Productos fraudulentos y alterados
    
    p.mb-5 El Instituto Nacional de Vigilancia de Medicamentos y Alimentos – INVIMA los define de la siguiente manera:

    img.mb-5.col-lg-10.mx-auto.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-14.svg" style="max-width: 1030px")
    img.mb-5.col-lg-10.mx-auto.d-flex.d-lg-none.mb-5(src="@/assets/curso/temas/tema3/img-17.svg" style="max-width: 450px")

    .d-block.d-lg-none.mb-5
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") No proviene del titular del Registro Sanitario, del laboratorio farmacéutico fabricante o del distribuidor o vendedor autorizado, de acuerdo con la reglamentación que al efecto expida el Ministerio de Salud.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") El introducido al país sin cumplir con los requisitos técnicos y legales establecidos en el decreto regulatorio.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Cuando no esté amparado con Registro Sanitario.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") El contenido no corresponda al autorizado, o se hubiere sustraído del original total o parcialmente.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Elaborado por laboratorio farmacéutico que no tenga autorización para su fabricación.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") El que utiliza envase, empaque o rótulo, diferente al autorizado.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Elaborado por laboratorio farmacéutico que no tenga Licencia Sanitaria de Funcionamiento.

    .d-flex.flex-wrap.col-xl-10.mx-auto.mb-5
      h2.p-4.px-md-5(style="background-color: #B19EEE") PRODUCTO FARMACÉUTICO ALTERADO
      p.w-100 Es el que se encuentra en una de las siguientes situaciones:
    
    img.mb-5.col-lg-10.mx-auto.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/img-15.png" style="max-width: 1030px")
    img.mb-5.d-flex.d-lg-none.mx-auto(src="@/assets/curso/temas/tema3/img-16.png" style="max-width: 500px")
    .d-block.d-lg-none
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Se le hubiere sustituido, sustraído total o parcialmente o reemplazado, los elementos constitutivos que forman parte de la composición oficialmente aprobada.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Se encuentre vencida la fecha de expiración correspondiente a la vida útil del producto.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") El contenido no corresponda al autorizado, o se hubiere sustraído del original total o parcialmente.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Sufrió transformaciones en sus características físico-químicas, biológicas, organolépticas, o en su valor terapéutico por causa de agentes químicos, físicos o biológicos.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Por su naturaleza, no se encuentre almacenado o conservado con las debidas precauciones.
      p.mb-4.p-3(style="border: 3px dashed #B19EEE") Se le adicionaron sustancias que puedan modificar sus efectos o sus características farmacológicas, fisicoquímicas u organolépticas.
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Medicamentos alopáticos',
        texto:
          'Estos pueden ser genéricos, de marca o comerciales, de control, esenciales, de venta bajo formula médica o venta libre.',
        imagen: require('@/assets/curso/temas/tema3/img-2.svg'),
      },
      {
        titulo: 'Medicamentos homeopáticos',
        texto: '',
        imagen: require('@/assets/curso/temas/tema3/img-3.jpg'),
      },
      {
        titulo: 'Dispositivos médicos',
        texto: '',
        imagen: require('@/assets/curso/temas/tema3/img-4.svg'),
      },
      {
        titulo: 'Cosméticos',
        texto: '',
        imagen: require('@/assets/curso/temas/tema3/img-5.jpg'),
      },
      {
        titulo: 'OTC',
        texto:
          'Son los medicamentos de venta libre, es decir, que no requieren de fórmula médica para ser adquiridos por los pacientes. A este grupo también se le suman los productos de cuidado personal y la higiene sanitaria, entre otros.',
        imagen: require('@/assets/curso/temas/tema3/img-6.svg'),
      },
      {
        titulo: 'Fito-terapéuticos',
        texto: '',
        imagen: require('@/assets/curso/temas/tema3/img-7.svg'),
      },
      {
        titulo: 'Preparados magistrales no estériles',
        texto: '',
        imagen: require('@/assets/curso/temas/tema3/img-8.svg'),
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
.conatiner-offset-2
  position: relative
  width: calc(100% + 3rem)
  background-color: #FFF
  padding: 2rem
  border-radius: 20px
  border-bottom-right-radius: 0
  margin-left: -20%
  margin-right: auto
  z-index: 2
  box-shadow: 0 0 5px 3px #00000010
  @media (max-width: 1200px)
    margin-right: auto
    margin-bottom: -3rem
  @media (max-width: 768px)
    margin: 0
    margin-bottom: .5rem
    border-radius: 20px
.slider-b-edit
  background-color: #ECE7FB
  padding: 3rem
  .slyder-b__slyde
    figure
      position: relative
      display: flex
      justify-content: center
      align-items: center
      max-width: 642px
      padding: 1rem
      overflow: visible
      margin: auto
      img
        max-width: 610px
        position: relative
        z-index: 1
      &::after
        content: ''
        position: absolute
        left: 0
        bottom: 0
        width: 230px
        height: 230px
        background-color: #D2C7F5
      &::before
        content: ''
        position: absolute
        top: 0
        right: 0
        width: 230px
        height: 230px
        background-color: #D2C7F5
  @media (max-width: 768px)
    padding: 1rem
    .slyder-b__slyde
      figure
        overflow: hidden
</style>
