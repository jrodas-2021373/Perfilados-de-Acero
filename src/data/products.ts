import { Product } from '../types';
import laminaImg from '../assets/images/lamina-desplegada.jpg';
import varillaImg from '../assets/images/varilla-redonda.jpg';
import rejillaImg from '../assets/images/rejilla-electroforjada.jpg';
import costanerasImg from '../assets/images/costaneras-perfil-c.jpg';
import angulosImg from '../assets/images/angulos-platinas.jpg';
import tuberiaImg from '../assets/images/tuberia-estructural.jpg';

export const productsData: Product[] = [
  {
    id: 'lamina-desplegada',
    name: 'Lámina Desplegada (Metal Expandido)',
    category: 'laminas-mallas',
    shortDescription: 'Láminas de acero expandido de alta rigidez y ventilación, ideales para pisos industriales, pasarelas, filtros y protecciones perimetrales.',
    fullDescription: 'La lámina desplegada se fabrica mediante un proceso simultáneo de corte y estirado en una sola pieza de acero, sin uniones ni soldaduras. Esto garantiza una resistencia mecánica excepcional con un peso reducido, permitiendo el libre paso de luz, aire y líquidos.',
    image: laminaImg,
    badge: 'Más Cotizado',
    standard: 'ASTM A1011 / Calidad Comercial',
    measures: [
      'Calibre 18 (Rombo Pequeño)',
      'Calibre 16 (Estándar para herrería)',
      'Calibre 14 (Uso industrial liviano)',
      'Calibre 12 (Tráfico pesado y plataformas)',
      'Calibre 10 / 1/4" (Piso industrial pesado)',
      'Medida de hoja: 4\' x 8\' pies (1.22 x 2.44 m)'
    ],
    specs: [
      { property: 'Material base', value: 'Acero al carbono laminado en caliente / frío' },
      { property: 'Acabados disponibles', value: 'Hierro Negro y Galvanizado' },
      { property: 'Presentación', value: 'Hojas estándar 4x8 ft o rollos según calibre' },
      { property: 'Ventilación libre', value: 'Entre 45% y 75% según diseño de rombo' },
      { property: 'Propiedades', value: 'Antideslizante, autolimpiante, alta relación resistencia/peso' }
    ],
    applications: [
      'Pisos industriales y plataformas de mantenimiento',
      'Protecciones de maquinaria y guardas de seguridad',
      'Cercos perimetrales y mallas de alta seguridad',
      'Pasarelas peatonales y peldaños de escalera',
      'Rejillas de ventilación y filtros industriales'
    ]
  },
  {
    id: 'varilla-redonda-lisa',
    name: 'Varilla Redonda Lisa y Corrugada',
    category: 'perfiles-barras',
    shortDescription: 'Barras de acero de alta ductilidad y soldabilidad para refuerzo, anclajes, tensores, pernos y herrería pesada.',
    fullDescription: 'Nuestras varillas redondas lisas cumplen con rigurosos estándares de composición química y propiedades mecánicas. Son la opción predilecta para elaboración de pernos de anclaje, tensores estructurales, remaches, pasadores y piezas maquinadas en taller.',
    image: varillaImg,
    badge: 'Grado Estructural',
    standard: 'ASTM A36 / Grado 40 / Grado 60',
    measures: [
      '1/4" (6.35 mm)',
      '5/16" (7.94 mm)',
      '3/8" (9.52 mm)',
      '1/2" (12.70 mm)',
      '5/8" (15.87 mm)',
      '3/4" (19.05 mm)',
      '1" (25.40 mm) y medidas especiales hasta 2"',
      'Longitud estándar: 6.00 metros'
    ],
    specs: [
      { property: 'Acabado', value: 'Laminado en caliente (Hierro Negro)' },
      { property: 'Límite elástico', value: '36,000 PSI (ASTM A36) / Grado 40 y 60' },
      { property: 'Soldabilidad', value: 'Excelente soldabilidad con electrodos estándar 6011/7018' },
      { property: 'Tolerancia dimensional', value: 'Estricto control de redondez y rectitud' }
    ],
    applications: [
      'Pernos de anclaje para columnas y bases metálicas',
      'Tensores y contraventeo en naves y bodegas',
      'Elaboración de estribos y armaduras especiales',
      'Maquinado de ejes, espárragos y bujes',
      'Cerrajería artística y herrería arquitectónica'
    ]
  },
  {
    id: 'rejilla-electroforjada',
    name: 'Rejilla Electroforjada (Tipo Irving)',
    category: 'laminas-mallas',
    shortDescription: 'Parrillas industriales electrosoldadas por forja térmica, diseñadas para resistir tráfico peatonal intenso y cargas vehiculares pesadas.',
    fullDescription: 'La rejilla electroforjada se compone de soleras de carga unidas a barras transversales mediante un proceso automatizado de electroforja (fusión térmica y presión constante). Esto crea una pieza monolítica sin soldaduras débiles, con máxima capacidad de carga y resistencia a la corrosión.',
    image: rejillaImg,
    badge: 'Alta Carga',
    standard: 'Norma NAAMM MBG 531 / ASTM A1011',
    measures: [
      'Solera 3/4" x 1/8" (Tráfico peatonal ligero)',
      'Solera 1" x 1/8" (Pisos industriales estándar)',
      'Solera 1" x 3/16" (Tráfico pesado y plataformas)',
      'Solera 1 1/4" x 3/16" (Cárcamos y pasos vehiculares)',
      'Dimensiones de panel: 1.00 m ancho x 6.00 m largo',
      'Fabricación de tableros y peldaños a la medida'
    ],
    specs: [
      { property: 'Superficie', value: 'Lisa o Dentada (Antiderrapante para aceites y humedad)' },
      { property: 'Acabados', value: 'Negro natural o Galvanizado por inmersión en caliente (ASTM A123)' },
      { property: 'Unión transversal', value: 'Varilla cuadrada torcida de 6 mm electroforjada' },
      { property: 'Accesorios', value: 'Clips de sujeción tipo M y tipo C disponibles' }
    ],
    applications: [
      'Pasarelas elevadas y plataformas de plantas industriales',
      'Cárcamos de drenaje pluvial e industrial en calles y bodegas',
      'Escaleras industriales de emergencia y servicio',
      'Pisos en ingenios azucareros, refinerías e hidroeléctricas',
      'Ventilación de sótanos y subestaciones eléctricas'
    ]
  },
  {
    id: 'costaneras-perfil-c',
    name: 'Costaneras y Perfiles C (Negro y Galvanizado)',
    category: 'perfiles-barras',
    shortDescription: 'Perfil estructural en forma de C conformado en frío, indispensable para la estructura de techos, cubiertas y cerramientos en Guatemala.',
    fullDescription: 'Nuestras costaneras de acero se fabrican con acero estructural de alta resistencia. Disponibles tanto en acabado negro para pintar como galvanizado de fábrica para máxima protección contra la intemperie y la humedad tropical.',
    image: costanerasImg,
    badge: 'Estructural Básico',
    standard: 'ASTM A500 Grado C / ASTM A653 (Galvanizado)',
    measures: [
      '2" x 1" (Calibres 14, 16)',
      '3" x 1 1/2" (Calibres 14, 16, 18)',
      '4" x 2" (Calibres 14, 16, 18)',
      '6" x 2" (Calibres 14, 16)',
      '8" x 2" (Calibres 14, 16)',
      'Longitud estándar: 6.00 m (largos especiales sobre pedido)'
    ],
    specs: [
      { property: 'Pared / Calibres', value: 'Calibre 14 (1.90 mm), Calibre 16 (1.50 mm), Calibre 18 (1.20 mm)' },
      { property: 'Acabado', value: 'Hierro Negro comercial o Galvanizado anticorrosivo' },
      { property: 'Geometría', value: 'Canal C con pestaña de rigidez optimizada' }
    ],
    applications: [
      'Vigas de techo para lámina de zinc, termoacústica y aluzinc',
      'Estructuras secundarias para cerramientos y fachadas',
      'Marcos para bodegas, garajes y galeras agrícolas',
      'Estructuración de mezanines y divisiones interiores'
    ]
  },
  {
    id: 'angulos-platinas-a36',
    name: 'Ángulos y Platinas Estructurales A36',
    category: 'perfiles-barras',
    shortDescription: 'Perfiles angulares en L y soleras de acero laminadas en caliente para refuerzos, marcos, armaduras y herrería industrial.',
    fullDescription: 'Los perfiles angulares y las soleras (platinas) de acero al carbono estructural ASTM A36 ofrecen excelente rigidez torsional y facilidad de ensamble mediante soldadura o atornillado. Esenciales en cualquier taller de estructuras metálicas.',
    image: angulosImg,
    badge: 'Norma ASTM A36',
    standard: 'ASTM A36',
    measures: [
      'Ángulos desde 3/4" x 1/8" hasta 4" x 1/2"',
      'Platinas desde 1/2" x 1/8" hasta 6" x 1/2"',
      'Longitud: 6.00 metros estándar'
    ],
    specs: [
      { property: 'Calidad', value: 'Acero estructural al carbono A36' },
      { property: 'Resistencia a la fluencia', value: '36,000 PSI mínimo' },
      { property: 'Soldabilidad', value: 'Totalmente garantizada para procesos SMAW, GMAW, FCAW' }
    ],
    applications: [
      'Armaduras, cerchas y tijeras para techos',
      'Marcos de puertas pesadas, portones y ventanas industriales',
      'Placas de conexión y cartelas en vigas y columnas',
      'Torres de transmisión y soportes de tanques de agua'
    ]
  },
  {
    id: 'tuberia-estructural',
    name: 'Tubería Estructural e Industrial',
    category: 'tuberia',
    shortDescription: 'Tubos cuadrados (chucho), rectangulares y redondos de alta resistencia para columnas, marcos, carrocerías y sistemas hidráulicos.',
    fullDescription: 'Ofrecemos un inventario completo de tubería de acero soldada por resistencia eléctrica (ERW) para aplicaciones estructurales, mecánicas y conducción. Acabados limpios con excelente adherencia de pintura y galvanizado.',
    image: tuberiaImg,
    badge: 'Resistencia Superior',
    standard: 'ASTM A500 Grados B y C / ASTM A53',
    measures: [
      'Tubo Cuadrado desde 3/4" x 3/4" hasta 4" x 4"',
      'Tubo Rectangular desde 1" x 2" hasta 4" x 6"',
      'Tubo Redondo Conducción desde 1/2" hasta 6" de diámetro',
      'Cédulas: Chapa liviana, Calibre 14, 16, Cédula 10 y Cédula 40'
    ],
    specs: [
      { property: 'Fabricación', value: 'Conformado en frío ERW longitudinal' },
      { property: 'Acabados', value: 'Negro aceitado, decapado o galvanizado' },
      { property: 'Servicio disponible', value: 'Ranuración en taller para tubería de red contra incendio' }
    ],
    applications: [
      'Columnas y postes estructurales para naves',
      'Fabricación de carrocerías de camiones y remolques',
      'Redes de tubería contra incendios y agua helada (Chilled Water)',
      'Mobiliario urbano, barandales y defensas viales'
    ]
  }
];
