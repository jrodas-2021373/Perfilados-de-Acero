import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'ranuracion-tubos',
    title: 'Ranuración de Tubos de Acero (Roll Grooving)',
    subtitle: 'Servicio Especializado para Sistemas Contra Incendio y Conducción',
    description: 'Servicio de precisión para ranurado mecánico en frío de tubería de acero al carbono, diseñado específicamente para acoplamientos ranurados tipo Victaulic en redes contra incendio (normas NFPA) y líneas de aire, vapor o fluidos.',
    features: [
      'Ranurado por rolado (Roll Grooving) que mantiene el espesor interior del tubo sin debilitar la pared',
      'Cumplimiento de tolerancias exigidas por aseguradoras y normativas internacionales (NFPA 13, UL, FM)',
      'Ahorro de hasta 60% en tiempos de instalación en obra comparado con soldadura tradicional',
      'Servicio rápido en taller con capacidad para proyectos de gran volumen'
    ],
    specs: [
      { label: 'Diámetros soportados', value: 'Desde 1 1/4" hasta 8" de diámetro nominal' },
      { label: 'Cédulas aplicables', value: 'Cédula 10 (Schedule 10) y Cédula 40 (Schedule 40)' },
      { label: 'Tipos de tubería', value: 'Tubería negra ASTM A53, A795 y galvanizada' },
      { label: 'Inspección', value: 'Verificación con cinta perimétrica Pi-Tape y galgas de profundidad' }
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Cotizar Ranuración de Tubos'
  },
  {
    id: 'renta-montacargas',
    title: 'Renta de Montacargas y Maquinaria de Carga',
    subtitle: 'Soluciones Logísticas y Maniobras Seguras en Obra o Planta',
    description: 'Flota moderna de montacargas industriales disponibles para alquiler flexible (por día, semana, mes o proyecto cerrado). Ideales para recepción de materiales pesados, descarga de contenedores y logística interna.',
    features: [
      'Equipos inspeccionados y con mantenimiento preventivo riguroso al día',
      'Opciones de renta: Con operador certificado o solo equipo en seco',
      'Combustión Dual (Gas LP / Gasolina) o Eléctricos para interiores y bodegas limpias',
      'Entrega y recolección de equipo en plataforma hasta su ubicación en Guatemala'
    ],
    specs: [
      { label: 'Capacidades de carga', value: '2.5 Toneladas, 3.5 Toneladas y 5.0 Toneladas' },
      { label: 'Altura de mástil', value: 'Triple mástil hasta 4.80 m con desplazador lateral' },
      { label: 'Modalidad de renta', value: 'Por turno (8 hrs), semana completa o contrato mensual' },
      { label: 'Disponibilidad', value: 'Cobertura inmediata en Ciudad de Guatemala, Mixco, Villa Nueva y municipios aledaños' }
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Solicitar Renta de Montacargas'
  },
  {
    id: 'corte-medida',
    title: 'Corte a Medida y Preparación de Material',
    subtitle: 'Optimización de Materiales para Cero Desperdicio en su Obra',
    description: 'Servicio de corte con sierra cinta de alta precisión y plasma para perfiles estructurales, barras, rejillas y planchas, entregando el material listo para el ensamble o montaje en campo.',
    features: [
      'Corte en escuadra y en ángulo según sus listas de corte o planos de taller',
      'Minimiza mermas y desperdicios de material en su presupuesto de construcción',
      'Despacho clasificado e identificado por ejes o piezas para facilitar el montaje',
      'Servicio complementario disponible al comprar cualquier perfil o rejilla con nosotros'
    ],
    specs: [
      { label: 'Capacidad de corte', value: 'Perfiles de hasta 12" de peralte y soleras hasta 1"' },
      { label: 'Tolerancia', value: '+/- 1.5 mm en corte mecánico' },
      { label: 'Servicios adicionales', value: 'Perforación de placas base y desbaste de bordes' }
    ],
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    ctaText: 'Consultar Servicio de Corte'
  }
];
