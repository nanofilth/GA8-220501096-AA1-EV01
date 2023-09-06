export const Wizard = {
  products:{
    title:'Empieza diciendonos ¿Cúal producto te interesa?',
    elements:[
      {
        id: 1,
        value: "Pagina Web",
        text: "Pagina Web",
        icon: "FaCubes",
        detail: 'paginasweb',
        name: "products",
        url: "web",
        content: "product",
        section: "description-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "Landing",
        text: "Landing",
        icon: "FaCube",
        detail: 'landing',
        name: "products",
        url: "landing",
        content: "product",
        section: "product-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "e-commerce",
        text: "e-commerce",
        icon: "FaShoppingCart",
        detail: 'ecommerce',
        name: "products",
        url: "ecommerce",
        content: "product",
        section: "product-section",
        col: "col-md-4"
      },
      // {
      //   id: 4,
      //   value: "App",
      //   text: "App",
      //   icon: "FaMobileAlt",
      //   detail: "Muy pronto!",
      //   name: "products",
      //   content: "product",
      //   section: "product-section",
      //   col: "col-md-3"
      // }
    ],
    url: '#',
    target:'com1',
    back:'',
    hide:'product',
    name: 'product'
  },
  web:[
    {
      id: 1,
      component:'menu'
    },
    {
      id: 2,
      component:'pages'
    },
    {
      id: 3,
      component:'banner'
    },
    {
      id: 4,
      component:'form'
    },
    {
      id: 5,
      component:'subs'
    },
    {
      id: 6,
      component:'industry'
    }
  ],
  landing:[
    {
      id: 1,
      component:'menulan'
    },
    {
      id: 2,
      component:'bannerlan'
    },
    {
      id: 3,
      component:'form'
    },
    {
      id: 4,
      component:'subs'
    },
    {
      id: 5,
      component:'industry'
    }
  ],
  ecommerce:[
    {
      id:1,
      component:'eproducts'
    },
    {
      id:2,
      component:'equantity'
    },
    {
      id:3,
      component:'epages'
    },
    {
      id:4,
      component:'edelivery'
    },
    {
      id:5,
      component:'epayment'
    },
    {
      id: 6,
      component:'industry'
    }
  ],  
  menu:{
    id: 1,
    title:'¿Escoge un menu?',
    elements:[
        {
          id: 1,
          value: "Sin Menu",
          text: "Sin Menu",
          icon: "FaTimes",
          detail: "sinmenu",
          name: "menu",
          content: "#",
          section:"description-section",
          col: "col-md-4"
        },
        {
          id: 2,
          value: "3 Opciones",
          text: "3 Opciones",
          icon: "FaDiceThree",
          detail: "tresopciones",
          name: "menu",
          content: "#",
          section: "description-section",
          col: "col-md-4"
        },
        {
          id: 3,
          value: "5 Opciones",
          text: "5 Opciones",
          icon: "FaDiceFive",
          detail: "cincoopciones",
          name: "menu",
          content: "#",
          section: "component-section",
          col: "col-md-4"
        }
      ],
    url: '#',
    target: 'com2',
    back:'product',
    hide:'com1'
  },
  menulan:{
    id: 1,
    title:'¿Escoge un menu?',
    elements:[
        {
          id: 1,
          value: "Sin Menu",
          text: "Sin Menu",
          icon: "FaTimes",
          detail: "sinmenu",
          name: "menu",
          content: "#",
          section:"description-section",
          col: "col-md-4"
        },
        {
          id: 2,
          value: "3 Opciones",
          text: "3 Opciones",
          icon: "FaDiceThree",
          detail: "tresopciones",
          name: "menu",
          content: "#",
          section: "description-section",
          col: "col-md-4"
        },
        {
          id: 3,
          value: "5 Opciones",
          text: "5 Opciones",
          icon: "FaDiceFive",
          detail: "cincoopciones",
          name: "menu",
          content: "#",
          section: "component-section",
          col: "col-md-4"
        }
      ],
    url: '#',
    target: 'com3',
    back:'product',
    hide:'com1'
  },
  pages:{
    id: 2,
    title:'¿Tipo de pagina?',
    elements:[
      {
        id: 1,
        value: "Pagina Unica",
        text: "Pagina Unica",
        icon: "FaThLarge",
        detail: "paginaunica",
        name: "pages",
        content: "#",
        section: "component-section",
        col: "col-md-6"
      },
      {
        id: 2,
        value: "Pagina por opción",
        text: "Pagina por opción",
        icon: "FaThList",
        detail: "paginaxopcion",
        name: "banner",
        content: "#",
        section: "component-section",
        col: "col-md-6"
      }
    ],
    url: '#',
    target: 'com3',
    back:'com1',
    hide:'com2'
  },
  banner:{
    id: 3,
    title:'¿Quieres banners?',
    elements:[
      {
        id: 1,
        value: "Sin Banner",
        text: "Sin Banner",
        icon: "FaTimes",
        detail: "sinbanner",
        name: "banner",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "2 Banner",
        text: "2 Banner",
        icon: "FaWindowRestore",
        detail: "dosbanner",
        name: "banner",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "3 Banner",
        text: "3 Banner",
        icon: "FaWindowRestore",
        detail: "tresbanner",
        name: "banner",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
        ],
        url: '#',
        target: 'com4',
        back:'com2',
        hide:'com3',
  },
  bannerlan:{
    id: 3,
    title:'¿Quieres banners?',
    elements:[
      {
        id: 1,
        value: "Sin Banner",
        text: "Sin Banner",
        icon: "FaTimes",
        detail: "sinbanner",
        name: "banner",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "2 Banner",
        text: "2 Banner",
        icon: "FaWindowRestore",
        detail: "dosbanner",
        name: "banner",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "3 Banner",
        text: "3 Banner",
        icon: "FaWindowRestore",
        detail: "tresbanner",
        name: "banner",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
        ],
        url: '#',
        target: 'com4',
        back:'com1',
        hide:'com3',
  },
  form:{
    id: 4,
    title:'¿Quieres formularios?',
    elements:[
      {
        id: 1,
        value: "Sin Formulario",
        text: "Sin Formulario",
        icon: "FaTimes",
        detail: "sinform",
        name: "form",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "Contacto",
        text: "Contacto",
        icon: "FaWpforms",
        detail: "contactoform",
        name: "form",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "Newsletter",
        text: "Newsletter",
        icon: "FaRegNewspaper",
        detail: "newsform",
        name: "form",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
    ],
    url: '#',
    target: 'com5',
    back:'com3',
    hide:'com4',
  },
  subs:{
    id: 5,
    title:'¿Manejas subscripciones?',
    elements:[
      {
        id: 1,
        value: "Sin Subscripción",
        text: "Sin Subscripción",
        icon: "FaTimes",
        detail: "sinsubs",
        name: "subs",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "2 Subscripción",
        text: "2 Subscripción",
        icon: "FaColumns",
        detail: "dossubs",
        name: "subs",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "3 Subscripción",
        text: "3 Subscripción",
        icon: "FaThList",
        detail: "tressubs",
        name: "subs",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
    ],
    url: '#',                  
    target: 'com6',
    back:'com4',
    hide:'com5',
  },
  industry:{
    id:6,
    title:'Selecciona tu sector',
    elements:[
      {
        id: 1,
        value: "Salud y Deportes",
        text: "Salud y Deportes",
        icon: "FaAccessibleIcon",
        detail: 'saludydeportes',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 2,
        value: "Hogar y Mascotas",
        text: "Hogar y Mascotas",
        icon: "FaHome",
        detail: 'hogarymascotas',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 3,
        value: "Ropa y Calzado",
        text: "Ropa y Calzado",
        icon: "FaTshirt",
        detail: 'ropaycalzado',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 4,
        value: "Restaurantes y Domicilios",
        text: "Restaurantes y Domicilios",
        icon: "FaPizzaSlice",
        detail: 'restaurantesydomicilios',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 5,
        value: "Hoteleria y Turismo",
        text: "Hoteleria y Turismo",
        icon: "FaPlane",
        detail: 'hoteleriaytursimo',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 6,
        value: "Financiero y Comercial",
        text: "Financiero y Comercial",
        icon: "FaPiggyBank",
        detail: 'financieroycomercial',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 7,
        value: "Tecnologia y Educación",
        text: "Tecnologia y Educación",
        icon: "FaDesktop",
        detail: 'tecnologiayeducacion',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 8,
        value: "Transporte y Envios",
        text: "Transporte y Envios",
        icon: "FaTruck",
        detail: 'transporteyenvios',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 9,
        value: "Agricultura y Ganaderia",
        text: "Agricultura y Ganaderia",
        icon: "FaSeedling",
        detail: 'agriculturayganderia',
        name: "industry",
        content: "detail",
        section: "description-section",
        col: "col-md-6"
      },
      {
        id: 10,
        value: "Otro",
        text: "Servicios y Otros",
        icon: "FaPowerOff",
        detail: "otro",
        name: "industry",
        content: "detail",
        section: "other-section",
        col: "col-md-6"
      }
    ],
    url: '/builder',
    target:'',
    back:'com5',
    hide:'com6'
  },
  eproducts:{
    id: 1,
    title:'¿Tipo de producto?',
    elements:[
      {
        id: 1,
        value: "Inventario",
        text: "Inventario",
        icon: "FaGifts",
        detail: "inventario",
        name: "product",
        content: "#",
        section: "component-section",
        col: "col-md-6"
      },
      {
        id: 2,
        value: "Servicios",
        text: "Servicos",
        icon: "FaHammer",
        detail: "servicios",
        name: "product",
        content: "#",
        section: "component-section",
        col: "col-md-6"
      }
      ],
    url: '#',
    target: 'com2',
    back:'product',
    hide:'com1'
  },
  equantity:{
    id: 2,
    title:'¿Cantidad de productos?',
    elements:[
      {
        id: 1,
        value: "Uno",
        text: "Uno",
        icon: "FaDiceOne",
        detail: "unoqty",
        name: "quantity",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "3 a 5",
        text: "3 a 5",
        icon: "FaDiceFive",
        detail: "tresqty",
        name: "quantity",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "Más de 5",
        text: "Más de 5",
        icon: "FaDice",
        detail: "cincoqty",
        name: "quantity",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
      ],
    url: '#',
    target: 'com3',
    back:'com1',
    hide:'com2'
  },
  epages:{
    id: 3,
    title:'¿Tipo de ecommerce?',
    elements:[
      {
        id: 1,
        value: "Catalogo",
        text: "catalogo",
        icon: "FaCube",
        detail: "catalogo",
        name: "page",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "Por producto",
        text: "Por producto",
        icon: "FaCubes",
        detail: "porproducto",
        name: "page",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "Categoria + producto",
        text: "Categoria/producto",
        icon: "FaCubes",
        detail: "categoriaproducto",
        name: "page",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
      ],
    url: '#',
    target: 'com4',
    back:'com2',
    hide:'com3'
  },
  edelivery:{
    id: 4,
    title:'¿Tipo de entrega?',
    elements:[
      {
        id: 1,
        value: "Inmediata",
        text: "Inmediata",
        icon: "FaUserClock",
        detail: "inmediata",
        name: "delivery",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "3 a 5 días",
        text: "3 a 5 días",
        icon: "FaRegClock",
        detail: "tresdias",
        name: "delivery",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "Más de 5 días",
        text: "Más de 5 días",
        icon: "FaHourglassHalf",
        detail: "cincodias",
        name: "delivery",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
      ],
    url: '#',
    target: 'com5',
    back:'com3',
    hide:'com4'
  },
  epayment:{
    id: 5,
    title:'¿Tipo de pago?',
    elements:[
      {
        id: 1,
        value: "Contraentrega",
        text: "Contraentrega",
        icon: "FaMoneyBill",
        detail: "contraentrega",
        name: "payment",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 2,
        value: "Pasarela",
        text: "Pasarela",
        icon: "FaCcVisa",
        detail: "pasarela",
        name: "payment",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      },
      {
        id: 3,
        value: "Transferencia",
        text: "Transferencia",
        icon: "FaMoneyCheckAlt",
        detail: "transferencia",
        name: "payment",
        content: "#",
        section: "component-section",
        col: "col-md-4"
      }
      ],
    url: '#',
    target: 'com6',
    back:'com4',
    hide:'com5'
  }
}
