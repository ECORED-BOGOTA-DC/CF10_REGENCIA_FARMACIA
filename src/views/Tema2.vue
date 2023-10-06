<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Normativa de calidad del proceso de recepción
    p.mb-5(data-aos="fade-right") Esta resolución, en el capítulo II - PROCEDIMIENTOS PARA LOS PROCESOS GENERALES - numeral 3.3, reglamenta el proceso general de recepción de medicamentos y dispositivos médicos.
    .tarjeta.p-3.col-xl-10.mx-auto(style="background: linear-gradient(0deg, rgba(129,209,250,1) 0%, rgba(126,94,227,1) 100%);")(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/icono-pdf.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 PROCEDIMIENTOS PARA LOS PROCESOS GENERALES
              p Te invitamos a revisar con detenimiento la normativa del proceso de recepción de medicamentos y dispositivos médicos en la Resolución 1403 del 2007.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo1_Resolucion_1403_2007.pdf')" target="_blank")
                span(style="color: black !important") Descargar
                i.fas.fa-file-download(style="color: black !important")
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1 Conceptos básicos
    p(data-aos="fade-right") El proceso de recepción de medicamentos y dispositivos médicos permanecerá bajo la responsabilidad del director técnico del servicio farmacéutico (Químico Farmacéutico o Regente de Farmacia).
    p.mb-5 El siguiente video presenta los criterios que se deben tener presente, para el proceso de recepción.
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/GUI1LIrWu0s?si=V4U7L7eGmZVG9DD3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-right") Las zonas o áreas de recibo en el proceso de recepción son:
    .tarjeta--container.row.mb-4
      .col-md.tarjeta.color-secundario.p-5.text-white
        .row.justify-content-center.mb-4
          .col-6(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img-2.png' alt="Imagen decorativa")
        h2.text-center Área de cuarentena I Naranja
        p(data-aos="fade-left") Es el área inicial donde se ubican los productos farmacéuticos mientras se inspeccionan. Debe contar  con mesa (que no sea de madera) o estantería y estibas que eviten que los medicamentos y dispositivos médicos tengan contacto con el suelo.
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img-2.png' alt="Imagen decorativa")
        h2.text-center Área de inspección
        p(data-aos="fade-left") Es el área donde se inspeccionan los productos farmacéuticos que llegan, y debe contar con una mesa (que no sea de madera) de un tamaño proporcional a la cantidad de productos que se manejan, con estibas para ubicar las cajas con mucho peso, lapicero, formatos (factura y acta de recepción) y demás insumos que se consideren necesarios para garantizar un excelente procedimiento.
      .col-md.tarjeta.color-primario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img-2.png' alt="Imagen decorativa")
        h2.text-center Área de cuarentena II Negra
        p(data-aos="fade-left") Es el área donde se ubican los productos farmacéuticos que no cumplen con algún parámetro al realizar la recepción administrativa o técnica, mientras se decide qué procedimiento se va a llevar a cabo con ellos.
    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2 Métodos de verificación, especificaciones y criterios
    p.mb-5 La recepción de los productos farmacéuticos debe satisfacer completamente los procedimientos administrativos y técnicos de verificación, para poder ser ingresados al sistema contable del servicio farmacéutico.
      br
      |El proceso de recepción cuenta con dos métodos de verificación importantes: la recepción administrativa y la recepción técnica. Se conocerán cada uno de estos métodos.
    .tarjeta.p-4.mb-5(style="background-color: #F7F6FE")
      .basic-container.col-lg-10.mx-auto
        .col-lg-7(data-aos="fade-right")
          p.fw-bold Recepción administrativa
          p Es conocida como el estudio de la documentación porque, desde el tema contable, se deben revisar tres puntos específicos:
          ul.lista-ul--color.col-lg-11.ms-lg-auto
            li.d-flex
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
              p.mb-0.ps-2 Qué producto ingresa.
            li.d-flex
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
              p.mb-0.ps-2 El valor (compra).
            li.d-flex
              img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px")
              p.mb-0.ps-2 La factura.
          p ¿Qué debe hacer el director técnico (Químico Farmacéutico o Regente de Farmacia) responsable del servicio farmacéutico?
        img.col-lg-5.m-auto.mb-5.mb-lg-auto(src='@/assets/curso/temas/tema1/img-3.png' style="max-width: 400px" data-aos="fade-left" alt="Imagen decorativa")
        p.w-100.mb-5 Verificar:
        .col-lg-10.mb-5.mx-auto
          ul.lista-ul--color.lista-ul--separador
            li.d-flex 
              .decorador-number-big(data-aos="fade-right")
                span 1
              p.col.ps-4(data-aos="fade-left") Que el pedido procede del proveedor seleccionado y a nombre del establecimiento.
            li.d-flex
              .decorador-number-big(data-aos="fade-right")
                span 2
              p.col.ps-4(data-aos="fade-left") Comparar que haya llegado el producto requerido, de acuerdo con la orden de compra, las cantidades solicitadas y el valor y plazos pactados en el contrato.
        p.w-100(data-aos="fade-right") Sumado a los parámetros enunciados anteriormente, se confirma que la orden de compra coincida con la factura en los siguientes aspectos:
        ul.lista-ul--color.col-lg-11.ms-lg-auto
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-2(data-aos="fade-left") Nombre genérico (o denominación común internacional) en el caso de los medicamentos y nombre exacto para los demás productos.
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-2(data-aos="fade-left") Concentración y forma farmacéutica en el caso de medicamentos.
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-2(data-aos="fade-left") Precios por unidad y totales (por producto y valor total de la factura) acordados.
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-2(data-aos="fade-left") Fecha y hora de entrega.
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-2(data-aos="fade-left") Que la cantidad pedida sea igual a la cantidad recibida y a la cantidad facturada.
    p.mb-5 A continuación, se puede observar las características de una orden de compra y de una factura:
    .tarjeta.p-4.p-lg-5.mb-5(style="background-color: #F9FCFF")
      SlyderA(tipo="b")
        .tarjeta(style="background-color: white; overflow: hidden;")
          figure
            img.col-xl-10.mx-auto(src='@/assets/curso/temas/tema1/img-4.jpg' style="max-width: 820px" alt="Imagen de una orden de compra.")
            figcaption Orden de compra
        .tarjeta(style="background-color: white; overflow: hidden;")
          figure
            img.col-xl-10.mx-auto(src='@/assets/curso/temas/tema1/img-5.jpg' style="max-width: 438px" alt="Imagen de una factura.")
            figcaption Factura
    p.fw-bold Recepción técnica
    .basic-container.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Una vez aprobado el pedido desde la recepción administrativa, se procede a realizar la recepción técnica por parte del director técnico o la persona que él delegue. En este punto, se procede a realizar la inspección de los productos farmacéuticos recibidos; en el caso de establecimientos minoristas como Droguerías, Farmacias – Droguerías y Servicios Farmacéuticos, esta debe realizarse a cada uno de los productos y, para establecimientos mayoristas como Laboratorios Fabricantes, Depósitos y Agencias de Especialidades, se permite realizar la inspección aplicando muestreo.
          br
          br
          |Un aspecto importante a tener presente a la hora de realizar la recepción, es contar con la ficha técnica del producto, porque en ella se encontrarán todas sus especificaciones, su vida útil, condiciones de almacenamiento y toda la información otorgada por el proveedor, en el momento de la negociación.
          br
          br
          |En el acto preciso de la recepción de los medicamentos y dispositivos médicos, se deben revisar los siguientes parámetros: 
      img.order-1.order-lg-2.col-lg-3.mb-4.mb-lg-auto.m-auto(src='@/assets/curso/temas/tema1/img-6.png' style="max-width: 295px" data-aos="fade-left" alt="Imagen decorativa")
    .tarjeta.col-lg-10.mx-auto.p-4.mb-5(style="background-color: #CFF0F9")
      ul.lista-ul--color.mb-0
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Las condiciones técnicas del producto: en el caso de los medicamentos se revisa que el principio activo, la forma farmacéutica y la concentración sean exactamente las solicitadas.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") <b>Número de lote:</b> este permite realizar la trazabilidad al producto, en caso de presentarse algún inconveniente de calidad.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") <b>Fecha de vencimiento:</b> no se reciben productos con menos de un año para su vencimiento.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Registro Sanitario INVIMA.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Laboratorio fabricante.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Condiciones de almacenamiento.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Condiciones de manipulación.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") <b>Embalaje:</b> los medicamentos deben estar sellados, sin humedad y en buen estado.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") <b>Material de empaque y envase:</b> los envases deben ser herméticos en cierre, sin perforaciones, y su contenido debe estar completo, las tapas deben tener la banda de seguridad, debe contener etiquetas y estas deben estar limpias, con información impresa, firma (que no se vea sobremontada) y clara, y los blíster deben estar completamente sellados, con la información básica impresa.
    p.mb-5(data-aos="fade-right") Otras características que se deben tener presente, son las siguientes:
    .tarjeta.col-lg-10.mx-auto.p-4.mb-5(style="background-color: #CFF0F9")
      ul.lista-ul--color.mb-0
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Para los medicamentos, el análisis organoléptico, el cual consiste en revisar aspectos que se perciben con los sentidos como olor, color y textura.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Examinar características de uniformidad en acabado, color, forma, entre otros.
        li.d-flex
          img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
          p.mb-0.ps-3(data-aos="fade-left") Determinar el control de “pasa, no pasa” teniendo presente los niveles de calidad definidos por la empresa.
    p.mb-5(data-aos="fade-right") A continuación, en la tabla 1, se presenta el análisis organoléptico para medicamentos:
    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5.mb-0.text-small Tabla 1
      p.mb-0.text-small <em>Análisis organoléptico para medicamentos</em>
    .tabla-b.color-acento-contenido.mb-5
      table
        caption Nota. UNAB (s.f.).
        thead(style="background-color: #7E5EE3")
          tr
            th(style="color: white") Productos
            th(style="color: white") Observaciones
        tbody
          tr
            td.col-3.fw-bold(data-aos="fade-right") Tabletas
            td(data-aos="fade-left") Se debe observar que no tengan manchas, que no estén decoloradas, que no se encuentren quebradas ni pegajosas, que no tengan polvo adherido a la superficie; igual tamaño, color y apariencia. 
          tr
            td.col-3.fw-bold(data-aos="fade-right") Cápsulas 
            td(data-aos="fade-left") No deben estar abiertas o vacías, no deben tener polvo adherido, no deben estar deformadas, sin trazas de humedad, igual color y apariencia. 
          tr
            td.col-3.fw-bold(data-aos="fade-right") Soluciones 
            td(data-aos="fade-left") Que no se observen materiales extraños, ni turbidez, ni presencia de gas. Contenido completo, que estén cerrados herméticamente, incluyendo banda de seguridad. 
          tr
            td.col-3.fw-bold(data-aos="fade-right") Emulsiones 
            td(data-aos="fade-left") Que sean homogéneas, sin gas, ni materiales extraños. Contenido completo, que estén cerrados herméticamente, incluyendo banda de seguridad.
          tr
            td.col-3.fw-bold(data-aos="fade-right") Suspensiones 
            td(data-aos="fade-left") Que al agitar se dispersen adecuadamente. Contenido completo, que estén cerrados herméticamente, incluyendo banda de seguridad. 
          tr
            td.col-3.fw-bold(data-aos="fade-right") Líquidos inyectables
            td(data-aos="fade-left") Que no tengan partículas en suspensión, que no tengan turbidez, que el contenido esté completo. 
          tr
            td.col-3.fw-bold(data-aos="fade-right") Polvos para reconstruir 
            td(data-aos="fade-left") No deben estar apelmazados. Los polvos para inyección deben desprenderse fácilmente del frasco, deben tener color uniforme, que se disuelvan fácilmente. 
          tr
            td.col-3.fw-bold(data-aos="fade-right") Polvos o granulados para reconstruir a solución oral
            td(data-aos="fade-left") Que dispersen fácilmente, color y granulado uniformes. 
          tr
            td.col-3.fw-bold(data-aos="fade-right") Cremas y ungüentos
            td(data-aos="fade-left") Que los tubos no estén colapsados ni con perforaciones o rupturas, que el cierre se encuentre hermético.
    .background-offset.mb-5(style="background-color: #F0EDFC")
      p.mb-4.fw-bold(data-aos="fade-left") Devolución de medicamentos
      p.mb-4(data-aos="fade-right") Las devoluciones de productos farmacéuticos deben contar con un área específica (área de cuarentena II Negra), retirada del área de almacenamiento o dispensación, y estos productos no pueden ser distribuidos.
      p.mb-5(data-aos="fade-right") Durante el proceso de recepción administrativa y técnica, se pueden generar devoluciones de medicamentos por diferentes razones:
      .basic-container
        .col-12.col-md-8.col-xl-4.d-flex.align-items-center
          .conatiner-offset-1.bloque-texto-b(style="background-color: white")
            ul.lista-ul--color.mb-0
              li.d-flex
                img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
                p.mb-0.ps-3(data-aos="fade-left") Más cantidad de lo solicitado o facturado.
              li.d-flex
                img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
                p.mb-0.ps-3(data-aos="fade-left") Producto no solicitado en la orden de compra.
              li.d-flex
                img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
                p.mb-0.ps-3(data-aos="fade-left") Precio diferente al pactado en la cotización.
              li.d-flex
                img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
                p.mb-0.ps-3(data-aos="fade-left") No cumplimiento de las condiciones técnicas del producto.
              li.d-flex
                img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
                p.mb-0.ps-3(data-aos="fade-left") Otras razones por las cuales pueden existir devoluciones se presentan por parte de los clientes, y para ello se deben analizar el caso y las condiciones internas de devolución, por parte de la empresa.
        img.col-xl-8.my-auto.ms-auto(src="@/assets/curso/temas/tema1/img-7.jpg" style="max-width: 870px" data-aos="fade" alt="Imagen decorativa")
    .basic-container.p-4.px-lg-5.col-lg-10.mx-auto(style="background: linear-gradient(90deg, rgba(232,232,232,1) 0%, rgba(232,232,232,1) 50%, rgba(140,188,250,1) 50%);")
      p.mb-5.mb-xl-0.col-xl-3.fw-bold(data-aos="fade-right") De acuerdo con la Resolución 1403 del 2007: 
        br
        br
        |Los productos devueltos solo podrán reubicarse en el área de disponibles para su distribución o dispensación, si cumplen con las siguientes condiciones
      .col-xl.p-3.p-lg-4.ms-xl-4(style="background-color: white;")
        ul.lista-ul--color.mb-0
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-3(data-aos="fade-left") Estar en sus recipientes originales sin abrir y en buenas condiciones. 
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-3(data-aos="fade-left") Se demuestra que se han almacenado y se han manejado bajo las condiciones establecidas por el fabricante.
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-3(data-aos="fade-left") El periodo de vida útil restante, es superior al mínimo establecido.
          li.d-flex
            img.mb-auto.pt-1(src='@/assets/curso/temas/decorador-1.svg' style="max-width: 14px" data-aos="fade-right")
            p.mb-0.ps-3(data-aos="fade-left") Han sido examinados y evaluados por el director del establecimiento o servicio farmacéutico, para autorizar su devolución. Esta evaluación debe tener en cuenta la naturaleza del producto, condiciones especiales de almacenamiento y el tiempo transcurrido desde su despacho. En caso necesario, debe solicitarse concepto al titular del registro sanitario o persona calificada de la casa fabricante. En caso de comprobar el no cumplimiento de las especificaciones técnicas de calidad, el servicio farmacéutico o establecimiento farmacéutico deberá comunicarlo en primera instancia a las autoridades sanitarias competentes, de acuerdo con la legislación vigente.

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

<style lang="sass">
.decorador-number-big
  width: 57px
  height: 57px
  background-color: #7E5EE3
  border-radius: 57px
  display: flex
  justify-content: center
  align-items: center
  span
    color: white
    font-size: 30px
    font-weight: bold
  @media (max-width: 768px)
    width: 45px
    height: 45px
    span
      font-size: 20px
.tabla-b
  thead tr th, tbody tr td
    border: 1px solid #E1E1E1
  caption
    background-color: transparent
.conatiner-offset-1
  width: calc( 100% + 3rem )
  margin-left: 0
  border-bottom-right-radius: 20px
  border-bottom-left-radius: 0
  @media (max-width: 768px)
    border-radius: 20px
</style>
