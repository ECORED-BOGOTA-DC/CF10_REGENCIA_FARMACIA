export default {
  global: {
    componenteFormativo:
      'Normatividad del proceso de recepción de productos farmacéuticos',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia recibir mercancía según los procedimientos técnicos, referentes a la normatividad legal vigente del del proceso general de recepción de productos farmacéuticos, regido por la Resolución 1403 del 2007, con el fin que los aprendices se enfoquen en identificar la importancia de dicho proceso en la cadena de abastecimiento dentro del servicio farmacéutico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Reglamentación del servicio farmacéutico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Normativa de calidad del proceso de recepción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos básicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de verificación, especificaciones y criterios',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de productos farmacéuticos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sustancias peligrosas en el servicio farmacéutico',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Productos fraudulentos y alterados',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mercancía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de mercancía',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Consolidación y desconsolidación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Cargas de mercancía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de carga',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de símbolos',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Embalajes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Precintos o sellos de seguridad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Códigos de barra',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Pesaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        icono: 'far fa-file-alt',
        numero: '10',
        titulo:
          'Manual de gestión de procesos y procedimientos de los servicios farmacéuticos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF10_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Embalajes',
      referencia:
        'Prieto, A. (2020). <em>Tipos de carga, envase, embalaje, etiquetado-logística interna</em> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=b3xWXgVw5cI&list=TLPQMTUwNzIwMjFftm1Z5QToSQ&index=2&ab_channel=Andr%C3%A9sPrieto',
    },
    {
      tema: 'Embalajes',
      referencia: 'Acavir. (2021). <em>Carga.</em>',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=b3xWXgVw5cI&list=TLPQMTUwNzIwMjFftm1Z5QToSQ&index=1&ab_channel=Andr%C3%A9sPrieto',
    },
  ],
  glosario: [
    {
      termino: 'Carcinógeno',
      significado:
        'sustancia o agente que produce cáncer o favorece su aparición.',
    },
    {
      termino: 'Comburente',
      significado:
        'sustancia que provoca o favorece la combustión de otras sustancias.',
    },
    {
      termino: 'Compra',
      significado:
        'conjunto de productos que se adquieren para el consumo habitual.',
    },
    {
      termino: 'Corrosivo',
      significado:
        'sustancia que tiene capacidad de destruir progresivamente una cosa penetrando de afuera hacia adentro; especialmente destruye ciertos agentes como metales u objetos de metal.',
    },
    {
      termino: 'Documentación',
      significado:
        'conjunto de documentos, generalmente oficiales, con que se prueba o acredita algo.',
    },
    {
      termino: 'Factura',
      significado:
        'cuenta en la que se detallan las mercancías compradas o los servicios recibidos, junto con su cantidad y su importe, y que se entrega a quien debe pagarla.',
    },
    {
      termino: 'Genotoxicidad',
      significado:
        'capacidad relativa de un agente de ocasionar daño en el material genético.',
    },
    {
      termino: 'Infeccioso',
      significado: 'que es causa de infección.',
    },
    {
      termino: 'Inflamable',
      significado:
        'el adjetivo inflamable se usa para calificar a aquello que puede encenderse de manera sencilla y que no tarda en desprender llamas.',
    },
    {
      termino: 'Inspección',
      significado: 'examinar atentamente una cosa o un lugar.',
    },
    {
      termino: 'Negociación',
      significado:
        'realizar operaciones comerciales con la intención de obtener un beneficio.',
    },
    {
      termino: 'Orden de compra',
      significado:
        'es un documento que un comprador entrega a un vendedor para solicitar ciertas mercaderías.',
    },
    {
      termino: 'Organoléptico',
      significado:
        'propiedad de un cuerpo que se percibe con los sentidos (untuosidad, aspereza, sabor, brillo, etc.), a diferencia de las propiedades químicas, microscópicas, etc.',
    },
    {
      termino: 'Registro Sanitario',
      significado:
        'es el documento expedido por la autoridad sanitaria competente, mediante el cual se autoriza a una persona natural o jurídica para fabricar, envasar, e Importar un alimento con destino al consumo humano.',
    },
    {
      termino: 'Teratógeno',
      significado:
        'producto o medicamento que administrado a una mujer o un animal, en estado de gestación, puede ocasionar malformaciones en el feto.',
    },
    {
      termino: 'Tóxico',
      significado:
        'sustancia que es venenosa o que puede causar trastornos o la muerte, a consecuencia de las lesiones debidas a un efecto químico.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas.',
    },
    {
      termino: 'Vademécum',
      significado:
        'libro o manual de poco volumen y fácil de consultar que contiene las nociones elementales de una ciencia o técnica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Airpharm. (2020). <em>¿Qué es la consolidación de carga y cómo se realiza?</em>',
      link:
        'https://www.airpharmlogistics.com/que-es-la-consolidacion-de-carga-y-como-se-realiza/',
    },
    {
      referencia:
        'Capitalcolombia.com. (s.f.). <em>¿Qué es el código de barras?</em>',
      link:
        'https://www.capitalcolombia.com/articulo/informacion_que_es_codigo_de_barras',
    },
    {
      referencia:
        'Resolución número 1403 de 2007. [Ministerio de Protección Social]. Por la cual se determina el modelo de gestión del servicio farmacéutico, se adopta el manual de condiciones esenciales y procedimientos de dicho servicio y se dictan otras disposiciones. 2007.',
      link: '',
    },
    {
      referencia:
        'Real Decreto Legislativo 1/2015. [Ministerio de Sanidad, Servicios Sociales e Igualdad]. Por el que se aprueba el texto refundido de la Ley de garantías y uso racional de los medicamentos y productos sanitarios. 24 de julio 2015.',
      link: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-8343#ddunica',
    },
    {
      referencia:
        'Sánchez y Arroyo. (2007). <em>¿Consultamos la ficha técnica de los medicamentos?</em> Boletín Farmacoterapéutico de Castilla la Mancha. Vol. VIII, N 5.',
      link:
        'https://sanidad.castillalamancha.es/sites/sescam.castillalamancha.es/files/documentos/farmacia/viii_05_utilidadfichatecnica.pdf',
    },
    {
      referencia:
        'Semana.com. (2014). <em>10 beneficios del código de barras.</em> Sesión Dinero.',
      link:
        'https://www.semana.com/empresas/articulo/para-que-sirve-codigo-barras/202025/',
    },
    {
      referencia:
        'Significados.com. (03 de marzo del 2018). <em>Qué es producto.</em>',
      link: 'https://www.significados.com/producto/',
    },
    {
      referencia:
        'UNAB (s.f.). <em>Unidad 4. Recepción y almacenamiento de medicamentos y dispositivos médicos.</em>',
      link:
        'http://unab.edupol.com.co/pluginfile.php/7207/mod_resource/content/1/UNIDAD_4%20Recepci%C3%B3n%20y%20almacenamiento%20de%20medicamentos%20y%20dispositivos%20m%C3%A9dicos.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable de equipo',
          centro: 'Dirección general',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo:
            'Diseñadora instruccional - Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suarez Eljure ',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo fullstack - 2023',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
