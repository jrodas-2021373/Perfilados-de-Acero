import { ServiceItem } from '../types';
import ranuracionImg from '../assets/images/ranuracion-tubos.jpg';
import montacargasImg from '../assets/images/montacargas.jpg';
import corteImg from '../assets/images/corte-medida.jpg';

export const servicesData: ServiceItem[] = [
  {
    id: 'ranuracion-tubos',
    title: 'Ranuración de Tubos de Acero (Roll Grooving)',
    subtitle: 'Servicio Especializado para Sistemas Contra Incendio y Conducción',
    description: 'Ranurado mecánico en frío de tubería de acero al carbono para acoplamientos ranurados tipo Victaulic en redes contra incendio (normas NFPA) y conducción de fluidos.',
    features: [
      'Rolado en frío que mantiene el espesor y resistencia del tubo',
      'Tolerancias exigidas por normativas internacionales (NFPA 13, UL, FM)',
      'Ahorro de hasta 60% en tiempos de instalación frente a soldadura',
      'Servicio rápido en taller con capacidad para proyectos de gran volumen'
    ],
    specs: [
      { label: 'Diámetros', value: 'Desde 1 1/4" hasta 8" de diámetro nominal' },
      { label: 'Cédulas aplicables', value: 'Cédula 10 y Cédula 40 (Schedule 10 / 40)' },
      { label: 'Tipos de tubería', value: 'Acero negro ASTM A53/A795 y galvanizada' },
      { label: 'Control de calidad', value: 'Verificación con Pi-Tape y galgas de ranura' }
    ],
    image: ranuracionImg,
    ctaText: 'Cotizar Ranuración de Tubos'
  },
  {
    id: 'renta-montacargas',
    title: 'Renta de Montacargas y Maquinaria de Carga',
    subtitle: 'Soluciones Logísticas y Maniobras Seguras en Obra o Planta',
    description: 'Flota moderna de montacargas industriales para alquiler flexible por día, semana, mes o proyecto. Ideales para recepción de materiales pesados y maniobras seguras.',
    features: [
      'Equipos inspeccionados con mantenimiento preventivo riguroso',
      'Opciones de renta con operador certificado o equipo en seco',
      'Modelos a Gas LP / Gasolina y Eléctricos para bodegas cerradas',
      'Entrega y recolección en plataforma en su obra o planta'
    ],
    specs: [
      { label: 'Capacidades', value: '2.5, 3.5 y 5.0 Toneladas' },
      { label: 'Mástil', value: 'Triple mástil hasta 4.80 m con desplazador' },
      { label: 'Modalidad', value: 'Por turno (8 hrs), semana o mes completo' },
      { label: 'Cobertura', value: 'Ciudad de Guatemala y municipios aledaños' }
    ],
    image: montacargasImg,
    ctaText: 'Solicitar Renta de Montacargas'
  },
  {
    id: 'corte-medida',
    title: 'Corte a Medida y Preparación de Material',
    subtitle: 'Optimización de Materiales para Cero Desperdicio en su Obra',
    description: 'Corte con sierra cinta industrial de alta precisión para perfiles estructurales, tubos, barras y soleras, listos para su ensamble y montaje en campo.',
    features: [
      'Cortes rectos y en ángulo según sus listas de taller o planos',
      'Minimiza mermas y desperdicios en su presupuesto de obra',
      'Despacho clasificado y rotulado por ejes para facilitar el montaje',
      'Servicio complementario en la compra de perfiles y tuberías'
    ],
    specs: [
      { label: 'Capacidad de corte', value: 'Perfiles de hasta 12" de peralte y soleras hasta 1"' },
      { label: 'Tolerancia', value: '+/- 1.5 mm en corte mecánico de precisión' },
      { label: 'Servicios adicionales', value: 'Perforación de placas base y desbaste de bordes' },
      { label: 'Disponibilidad', value: 'Despacho ágil en pedidos programados' }
    ],
    image: corteImg,
    ctaText: 'Consultar Servicio de Corte'
  }
];
