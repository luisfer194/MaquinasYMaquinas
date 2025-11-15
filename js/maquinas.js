const maquinasDB = [
  {
    id: 1,
    nombre: 'Singer 4423 Heavy Duty',
    marca: 'Singer',
    tipo: 'Familiar',
    categoria: 'Doméstica profesional',
    imagen: 'images/maquinas/Singer_4423.png',
    precio: 1300000,
    descripcion:
      'Máquina de coser mecánica profesional con 23 puntadas decorativas, ideal para confección básica, lencería, acolchados y prendas de telas medianas a gruesas. Diseñada para un uso doméstico intensivo con gran resistencia y estabilidad.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina mecánica multipuntadas profesional',
      '23 puntadas decorativas y utilitarias',
      'Gancho metálico reforzado',
      'Cose telas medianas y medio gruesas',
      'Recomendada hasta 5 capas de denim delgado',
      'Largo de puntada regulable hasta 4 mm',
      'Ancho de puntada hasta 6 mm',
      'Incluye enhebrador automático',
      'Sistema de enhebrado rápido Quick-step',
      'Brazo libre para piezas tubulares',
      'Luz LED integrada',
      'Motor direct drive de bajo consumo',
      'Chasis, planchuela y ejes reforzados',
      'Ideal para 5 a 6 horas de trabajo diario',
      'Incluye 4 pies prensatelas (zigzag, cremallera, ojal, botón)',
    ],
    especificaciones: {
      Función: 'Multipuntadas intermedia profesional',
      'Tipos de puntada': '23 puntadas decorativas y utilitarias',
      'Tipo de ojal': 'Automático de un paso',
      Garantía: '18 meses electrónico / 18 meses mecánico',
      'Tipo de aguja': '130/705H doméstica',
      'Largo de puntada': 'Hasta 4 mm',
      'Ancho de puntada': 'Hasta 6 mm',
      Velocidad: '1100 rpm',
      'Codo o brazo libre': 'Sí',
      Iluminación: 'LED integrada',
      Motor: 'Direct drive de bajo consumo',
      'Uso recomendado': 'Doméstico intensivo (5 - 6 horas diarias)',
      Materiales: 'Telas medianas a gruesas',
    },
    accesorios: [],
  },
  {
    id: 2,
    nombre: 'Jack A5E',
    marca: 'Jack',
    tipo: 'Plana',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Jack A5E.png',
    precio: 2900000,
    descripcion:
      'Máquina plana de costura recta extra suave con sistema direct drive incorporado y funciones automáticas avanzadas.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Sistema direct drive incorporado',
      'Levantapie automático',
      'Rematador automático',
      'Cortahilo automático',
      'Rodillera electrónica',
      'Panel táctil multifunción',
      'Funciones programables para bolsillería, presillado y puntadas decorativas',
      'Tecnología de motores paso a paso de baja vibración',
      'Disponible en versión liviana o pesada',
      'Ideal para materiales livianos y medianos',
      'Tiempo de trabajo sugerido: 8 a 9 horas diarias',
      'Entrega calibrada según necesidad del cliente',
    ],
    especificaciones: {
      Función: 'Costura recta gama genérica',
      Garantía:
        '6 meses por kit electrónico y 6 meses por descalibraciones mecánicas',
      'Tipo de aguja': 'DBX1 (cubo delgado) o 135X5 (cubo grueso)',
      Voltaje: '110 / 220 V',
      'Panel táctil': 'Multifunción integrado',
      'Longitud de puntada': 'Hasta 5 mm',
      Sistema: 'Paso a paso',
      Velocidad: 'Variable desde 200 hasta 4000 rpm',
      'Posicionador de aguja': 'Incluido',
      'Luz LED': 'Original integrada',
      Gancho: 'Chino',
      Cajabobina: 'China',
      Cuchillas: 'Exclusivas de Jack',
      Devanador: 'Incorporado',
      Motor: 'Direct drive de 550W',
    },
  },
  {
    id: 3,
    nombre: 'Kingter KT-D3',
    marca: 'Kingter',
    tipo: 'Plana',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Kingter KT-D3.png',
    precio: 2200000,
    descripcion:
      'Máquina plana de costura recta con sistema direct drive incorporado, diseñada para confección de materiales livianos y medianos.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Sistema direct drive incorporado',
      'Motor ahorrador silencioso',
      'Posicionador de aguja',
      'Luz LED integrada',
      'Sistema paso a paso',
      'Ideal para materiales livianos y medianos',
      'Diseñada para confección de camisa, pantalón, chaqueta, ropa deportiva y más',
      'Recomendada para 7 a 8 horas de trabajo diarias',
    ],
    especificaciones: {
      'Tipo de máquina': 'Plana mecatrónica',
      'Tipo de aguja': 'DBX1 (cubo delgado)',
      Sistema: 'Paso a paso',
      Motor: 'Direct drive de 550W',
      Velocidad: 'Variable de 500 a 3700 rpm',
      'Longitud de puntada': 'Hasta 5 mm',
      Aplicación: 'Telas livianas/medianas',
      'Posicionador de aguja': 'Incluido',
      'Luz LED': 'Integrada',
      Devanador: 'Incorporado',
      Garantía: '1 año',
    },
  },
  {
    id: 4,
    nombre: 'Jontex JT-S310',
    marca: 'Jontex',
    tipo: 'Plana',
    categoria: 'Industrial',
    imagen: 'images/maquinas/JONTEX JT-S310.png',
    precio: 1500000,
    descripcion:
      'Máquina plana de costura recta con sistema direct drive incorporado, inspirada en JIN, diseñada para trabajar materiales livianos y medianos.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Sistema direct drive incorporado',
      'Motor ahorrador silencioso',
      'Posicionador de aguja',
      'Luz LED integrada',
      'Sistema paso a paso',
      'Alta velocidad',
      'Ideal para materiales livianos y medianos',
      'Diseñada para confección de camisa, pantalón, chaqueta, ropa deportiva, tejido de punto y más',
      'Tiempo de trabajo sugerido: 7 a 9 horas diarias',
      'Entrega calibrada según tipo de trabajo',
    ],
    especificaciones: {
      Función: 'Costura recta gama genérica',
      Garantía:
        '12 meses por kit electrónico y 6 meses por descalibraciones mecánicas',
      'Tipo de aguja': 'DBX1 (cubo delgado)',
      Sistema: 'Paso a paso',
      Velocidad: 'Variable de 500 a 3700 rpm',
      'Longitud de puntada': 'Hasta 5 mm',
      'Posicionador de aguja': 'Incluido',
      'Luz LED': 'Integrada',
      Motor: 'Direct drive de 550W',
      Devanador: 'Incorporado',
      Mueble: 'Importado',
    },
  },
  {
    id: 5,
    nombre: 'Siruba L917-H1',
    marca: 'Siruba',
    tipo: 'Plana',
    categoria: 'Industrial',
    imagen: 'images/maquinas/siruba l917-h1.png',
    precio: 0,
    descripcion:
      'Máquina plana de costura recta mecánica gama alta con motor ahorrador externo de 550/600W, orientada a materiales mixtos y pesados.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina mecánica gama alta',
      'Motor ahorrador externo de 550/600 W',
      'Gancho pequeño de ajuste pesado',
      'Largo de puntada hasta 5 mm',
      'Calibración disponible: liviana, semipesada o pesada',
      'Ideal para jean, dril delgado, dotación y materiales mixtos',
      'Cose cuero textil, sintéticos, plásticos y bolsas',
      'Panel de manejo externo con velocidad variable',
      'Alta calidad de repuestos originales taiwaneses',
      'Entrega calibrada según necesidad del cliente',
    ],
    especificaciones: {
      Función: 'Costura recta',
      Garantía:
        '6 meses por kit electrónico y 6 meses por descalibraciones mecánicas',
      'Tipo de aguja': '135X5 (cubo grueso)',
      Velocidad: 'Variable desde 200 hasta 4000 rpm',
      'Longitud de puntada': 'Hasta 5 mm',
      Motor: 'Ahorrador externo',
      Devanador: 'Lateral',
      Mueble: 'Nacional o importado',
    },
    accesorios: [],
  },
  {
    id: 6,
    nombre: 'Jinthex JN180',
    marca: 'Jinthex',
    tipo: 'Plana',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Jinthex JN-180.png',
    precio: 0,
    descripcion:
      'Máquina plana de costura recta mecatrónica con sistema direct drive incorporado, silenciosa y de alta velocidad, diseñada para materiales livianos y medianos.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Sistema direct drive incorporado',
      'Motor ahorrador silencioso',
      'Posicionador de aguja',
      'Luz LED integrada',
      'Sistema paso a paso',
      'Alta velocidad',
      'Ideal para materiales livianos y medianos',
      'Ahorra hasta el 70% de energía',
      'Totalmente silenciosa',
      'Requiere protector de corriente',
    ],
    especificaciones: {
      Función: 'Costura recta gama genérica',
      Garantía:
        '12 meses por kit electrónico y 6 meses por descalibraciones mecánicas',
      'Tipo de aguja': 'DBX1 (cubo delgado)',
      Sistema: 'Paso a paso',
      Velocidad: 'Variable desde 500 hasta 3700 rpm',
      'Longitud de puntada': 'Hasta 5 mm',
      'Posicionador de aguja': 'Incluido',
      'Luz LED': 'Integrada',
      Motor: 'Direct drive de 550W',
      Devanador: 'Incorporado',
      Mueble: 'Importado',
    },
  },
  {
    id: 7,
    nombre: 'Kingter KT-757F-DDi',
    marca: 'Kingter',
    tipo: 'Fileteadora',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Kingter KT-757F-DDi.png',
    precio: 1800000,
    descripcion:
      'Máquina fileteadora mecatrónica de alta velocidad con sistema direct drive, ideal para materiales medianos y confección general.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Sistema direct drive de alta velocidad',
      'Motor ahorrador silencioso de 550W',
      'Versión actualizada de la KT-757F',
      'Luz LED incorporada',
      'Tablero de manejo externo con funciones regulables',
      'Ideal para materiales medianos',
      'Eficiente para trabajar entre 7 y 8 horas diarias',
      'Tipo siruba de gama genérica',
      'Entrega calibrada según necesidad del cliente',
    ],
    especificaciones: {
      Función: 'Fileteado a 5 hilos con puntada de seguridad gama genérica',
      Garantía:
        '12 meses por kit electrónico y 6 meses por descalibraciones mecánicas',
      'Tipo de aguja': 'B27',
      Panel: 'Multifunción integrado',
      Voltaje: '110 V',
      Velocidad: 'Variable desde 200 hasta 4500 rpm',
      'Posicionador de aguja': 'Incluido',
      'Luz LED': 'Original integrada',
      Motor: 'Direct drive de 550W',
      Mueble: 'Importado',
    },
    accesorios: [],
  },
  {
    id: 8,
    nombre: 'Jinthex JN-798D-5',
    marca: 'Jinthex',
    tipo: 'Fileteadora',
    categoria: 'Industrial',
    imagen: 'images/maquinas/JINTHEX JN-798D-5.png',
    precio: 1700000,
    descripcion:
      'Fileteadora/overlock industrial mecatrónica de 5 hilos con motor servo directo, ideal para materiales livianos y medianos con alta velocidad de costura.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Fileteadora/overlock mecatrónica de 5 hilos',
      'Motor servo directo de bajo consumo',
      'Velocidad de hasta 6000 rpm',
      'Lubricación automática',
      'Iluminación LED incorporada',
      'Adecuada para materiales livianos y medianos',
      'Ideal para camisas, pantalones, chaquetas y lencería',
      'Ahorro energético gracias al motor servo',
      'Funcionamiento silencioso y con baja vibración',
      'Puntada de seguridad para evitar deshilaches',
      'Diseño mecatrónico con tablero de control integrado',
      'Optimizada para jornadas de 7 a 9 horas de trabajo',
    ],
    especificaciones: {
      Velocidad: '6000 rpm',
      'Número de hilos': '5',
      Motor: 'Servo incorporado ahorrador de energía',
      Lubricación: 'Automática',
      Iluminación: 'LED incorporada',
      'Tipo de aguja': 'DCx27',
      'Altura del prensatelas': '6 mm',
      'Longitud de puntada': '3.6 mm',
      'Ancho del ribeteado': '5 mm',
      'Distancia entre agujas': '4.8 mm',
      Voltaje: '110V',
    },
  },
  {
    id: 9,
    nombre: 'Jontex JT 766-5/D',
    marca: 'Jontex',
    tipo: 'Fileteadora',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Jontex jt-766-5D.png',
    precio: 1700000,
    descripcion:
      'Fileteadora industrial mecatrónica de 5 hilos diseñada para acabados profesionales. Combina precisión mecánica y electrónica, ofreciendo costuras limpias, alimentación diferencial ajustable, motor potente e iluminación LED.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Tecnología mecatrónica para mayor precisión',
      'Motor industrial potente para costuras limpias',
      'Sistema de alimentación diferencial ajustable',
      'Ideal para prendas como camisas, lencería y ropa femenina',
      'Funciona perfectamente con tejidos ligeros, medianos y elásticos',
      'Luz LED incorporada en el área de costura',
      'Diseño ergonómico para largas jornadas',
      'Controles intuitivos y fáciles de usar',
      'Acabados profesionales con estabilidad en la puntada',
    ],
    especificaciones: {
      'Número de hilos': '5',
      'Tipo de puntada': 'Overlock de 5 hilos',
      Tecnología: 'Mecatrónica',
      Motor: 'Motor industrial de alto rendimiento',
      'Alimentación diferencial': 'Sí, ajustable',
      Iluminación: 'LED incorporada',
      'Materiales recomendados': 'Tejidos ligeros, medianos y elásticos',
      'Uso recomendado': 'Acabados profesionales en confección',
    },
  },
  {
    id: 10,
    nombre: 'Jack E4S-5',
    marca: 'Jack',
    tipo: 'Fileteadora',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Jack e4s-5-m04.png',
    precio: 3850000,
    descripcion:
      'Fileteadora mecatrónica industrial de 5 hilos con motor integrado, sistema de aceite avanzado, selector L/M/H para diferentes grosores y funciones inteligentes que optimizan eficiencia y rendimiento.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Motor mecatrónico integrado de bajo consumo',
      'Modo standby para ahorro energético',
      'Sistema de aceite integrado que asegura lubricación óptima',
      'Selector L/M/H para ajustar el avance según el grosor del material',
      'Función de Respuesta Rápida para mayor velocidad y eficiencia',
      'Control de retorno de aceite para evitar fugas',
      'Mecanismo de barra de aguja estable para prolongar la vida útil',
      'Motor de un solo eje que reduce vibraciones y torsión',
      'Interfaz de usuario intuitiva con panel inteligente',
      'Reinicio rápido con un solo botón',
      'Diseñada para uso industrial continuo',
    ],
    especificaciones: {
      Tipo: 'Fileteadora industrial',
      Modelo: 'E4S-5',
      Puntada: 'Seguridad',
      Agujas: '2',
      Hilos: '5',
      Voltaje: '110V',
      Motor: 'Mecatrónico integrado',
      Potencia: '550W',
      'Selector L/M/H': 'Sí, para diferentes grosores de tela',
      Lubricación: 'Automática con retorno controlado',
    },
  },
  {
    id: 11,
    nombre: 'Kingter KT-500-02-DDI',
    marca: 'Kingter',
    tipo: 'Collarin',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Kingter KT-500-02-DDI.png',
    precio: 2500000,
    descripcion:
      'Collarín recubridora mecatrónica industrial con motor direct drive, sistema de enhebrado tipo Pegasus y capacidad para trabajar con 1, 2 o 3 agujas. Ideal para ropa deportiva, pijamas, leggins y prendas livianas.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina collarín recubridora mecatrónica con sistema direct drive',
      'Motor ahorrador y silencioso de 550W',
      'Luz LED y tablero multifunción integrado',
      'Sistema de enhebrado moderno tipo Pegasus para mejor calidad de puntada',
      'Puede usarse con 1, 2 o 3 agujas',
      'Incluye recubridor superior para acabados decorativos',
      'Compatible con folders y guías nacionales e importados',
      'Permite instalar portasesgos laterales y aéreos',
      'Apta para materiales livianos y medianos',
      'Ideal para ropa interior, pijamas, ropa deportiva, camisetas, fajas y leggins',
      'Diseñada para jornadas continuas de 8 a 10 horas',
      'Incluye soporte completo de repuestos y servicio técnico',
    ],
    especificaciones: {
      Función: 'Puntada cadeneta tipo collarín y recubridor superior',
      Garantía: '12 meses kit electrónico, 6 meses descalibraciones',
      'Tipo de aguja': 'B63',
      Panel: 'Multifunción integrado',
      Velocidad: '200 - 3400 rpm',
      'Posicionador de aguja': 'Sí',
      'Luz LED': 'Integrada',
      Motor: 'Direct drive 550W',
      Mueble: 'Importado',
    },
  },
  {
    id: 12,
    nombre: 'Jinthex JN-500-02DS',
    marca: 'Jinthex',
    tipo: 'Collarin',
    categoria: 'Industrial',
    imagen: 'images/maquinas/JINTHEX JN-500-02DS.png',
    precio: 0,
    descripcion:
      'Máquina collarín mecatrónica industrial de 3 agujas y 5 hilos con motor direct drive de 550W, ideal para ropa deportiva y prendas de punto. Incluye recubridor superior y luz LED integrada.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Collarín industrial mecatrónico con sistema direct drive',
      '3 agujas y 5 hilos para acabados profesionales',
      'Motor silencioso de 550W y bajo consumo',
      'Velocidad ajustable entre 200 y 4000 rpm',
      'Incluye recubridor superior',
      'Iluminación LED integrada',
      'Ideal para ropa deportiva, prendas de punto y confecciones ligeras',
      'Sistema de enhebrado tipo Siruba',
      'Apta para materiales livianos y medianos',
      'Diseñada para producción continua industrial',
      'Montaje con tabla y herrajes incluido',
    ],
    especificaciones: {
      Motor: 'Direct drive mecatrónico 550W',
      Velocidad: '200 - 4000 rpm',
      Agujas: '3 (B-63 / UY128)',
      Hilos: '5',
      Funciones: 'Collarín con recubridor superior',
      Iluminación: 'LED integrada',
      Voltaje: '110V',
      Enhebrado: 'Manual tipo Siruba',
      Montaje: 'Incluye tabla',
    },
  },
  {
    id: 13,
    nombre: 'Kingter KT 20U-53D',
    marca: 'Kingter',
    tipo: 'VeinteU',
    categoria: 'Semi-industrial',
    imagen: 'images/maquinas/Kingter KT 20U 53 D.png',
    precio: 0,
    descripcion:
      'Máquina plana y zigzadora mecatrónica de 1 aguja y 2 hilos, diseñada para materiales pesados. Ofrece puntada recta y zigzag de hasta 6 mm con motor direct drive de bajo consumo.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina mecatrónica plana y zigzag',
      'Motor direct drive de bajo consumo',
      'Velocidad máxima de 2500 rpm',
      'Puntada recta y zigzag en un solo paso',
      'Ancho de puntada de hasta 6 mm',
      '1 aguja y 2 hilos',
      'Elevación de prensatelas hasta 9 mm',
      'Panel multifunción integrado',
      'Iluminación LED incorporada',
      'Ideal para materiales pesados o difíciles',
      'Incluye mueble según versión',
      'Fabricación confiable tipo Jontex-Kingter',
    ],
    especificaciones: {
      Motor: 'Direct drive mecatrónico (posible versión con motor de fricción)',
      Velocidad: 'Hasta 2500 rpm',
      Puntadas: 'Recta y zigzag',
      'Ancho de puntada': 'Hasta 6 mm',
      'Número de agujas': '1',
      'Número de hilos': '2',
      'Elevación del prensatelas': 'Hasta 9 mm',
      Panel: 'Multifunción integrado',
      Iluminación: 'LED incorporada',
      Voltaje: '110V',
    },
  },
  {
    id: 14,
    nombre: 'Jontex 6820',
    marca: 'Jontex',
    tipo: 'Poste2agujas',
    categoria: 'Industrial',
    imagen: 'images/maquinas/JONTEX 6820.png',
    precio: 2200000,
    descripcion:
      'Máquina industrial de poste con 2 agujas para puntadas rectas y refuerzo paralelo. Ideal para confección de bolsillos, cinturillas y piezas que requieren costuras resistentes.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina de poste industrial',
      '2 agujas para puntadas paralelas',
      'Puntada recta reforzada',
      'Velocidad de hasta 2500 puntadas por minuto',
      'Longitud de puntada ajustable de 0 a 4 mm',
      'Altura de columna de 178 mm',
      'Distancia entre agujas estándar de 2 mm',
      'Elevación del prensatelas hasta 9 mm con rodillera',
      'Lubricación automática',
      'Ideal para trabajos que requieren doble refuerzo',
    ],
    especificaciones: {
      Velocidad: '2500 ppm',
      'Longitud de puntada': '0 - 4 mm',
      'Altura de columna': '178 mm',
      'Sistema de lubricación': 'Automático',
      'Elevación del prensatelas': '9 mm (rodillera) / 6 mm (manual)',
      'Distancia entre agujas': '2 mm',
      'Número de agujas': '2',
      'Tipo de puntada': 'Recta reforzada',
      Voltaje: '110V (según configuración)',
    },
  },
  {
    id: 15,
    nombre: 'Jinthex JN-820',
    marca: 'Jinthex',
    tipo: 'Poste2agujas',
    categoria: 'Industrial',
    imagen: 'images/maquinas/Jinthex jn 820.png',
    precio: 0,
    descripcion:
      'Máquina industrial de poste con 2 agujas, ideal para calzado, bolsos y marroquinería. Permite coser materiales gruesos y piezas curvas o tubulares con alta precisión.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina de poste industrial para materiales gruesos',
      '2 agujas para costuras paralelas',
      'Diseño cilíndrico ideal para piezas curvas',
      'Alta precisión en cuero y lona',
      'Construcción robusta para trabajo continuo',
      'Ideal para industria del calzado y marroquinería',
      'Motor externo (servo recomendado)',
      'Uso industrial pesado',
    ],
    especificaciones: {
      'Número de agujas': '2',
      'Tipo de puntada': 'Recta',
      'Materiales recomendados': 'Cuero, lona, sintéticos gruesos',
      Diseño: 'Poste / cilíndrica',
      'Sistema de lubricación': 'Automático (según versión)',
      Velocidad: 'Variable según motor',
      Voltaje: '110V (según configuración)',
      'Altura de poste': 'Estándar industrial',
    },
  },
  {
    id: 16,
    nombre: 'Singer 4432 Heavy Duty',
    marca: 'Singer',
    tipo: 'Familiar',
    categoria: 'Doméstica profesional',
    imagen: 'images/maquinas/Singer 4432.png',
    precio: 1350000,
    descripcion:
      'Máquina de coser mecánica profesional con 32 puntadas decorativas, diseñada para trabajos exigentes en telas medianas y gruesas. Ideal para confección básica, lencería, proyectos artesanales y acolchados. Equipada con estructura reforzada y motor de alto desempeño para uso intensivo doméstico.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina mecánica multipuntadas profesional',
      '32 puntadas decorativas y utilitarias',
      'Gancho metálico reforzado',
      'Cose telas medio livianas, medianas y medio gruesas',
      'Recomendada para máximo 5 capas de denim delgado',
      'Largo de puntada regulable hasta 4 mm',
      'Ancho de puntada hasta 6 mm',
      'Ideal para acolchados por su retracción de dientes',
      'Planchuela, chasis y ejes reforzados',
      'Motor reforzado para trabajo continuo',
      'Trabajo recomendado de 5 a 6 horas diarias',
      'Enhebrador automático integrado',
      'Sistema de enhebrado de carretel Quick-step',
      'Incluye 4 pies prensatelas (zigzag, cremallera, ojal, botón)',
      'Brazo libre para piezas tubulares',
      'Luz LED integrada',
      'Diseñada para materiales medianos a gruesos',
    ],
    especificaciones: {
      Función: 'Multipuntadas intermedia profesional',
      'Tipos de puntada': '32 puntadas decorativas y utilitarias',
      'Tipo de ojal': 'Automático de un paso',
      Garantía: '18 meses electrónico / 18 meses mecánico',
      'Tipo de aguja': '130/705H doméstica',
      'Largo de puntada': 'Hasta 4 mm',
      'Ancho de puntada': 'Hasta 6 mm',
      Velocidad: '1100 rpm',
      'Codo o brazo libre': 'Sí',
      Iluminación: 'LED integrada',
      Motor: 'Direct drive de bajo consumo',
      'Uso recomendado': 'Doméstico intensivo (5 - 6 horas diarias)',
      Materiales: 'Telas medianas y gruesas',
    },
  },
  {
    id: 17,
    nombre: 'Singer 4432 Heavy Duty Black Edition',
    marca: 'Singer',
    tipo: 'Familiar',
    categoria: 'Doméstica profesional',
    imagen: 'images/maquinas/SINGER 4432 Black.png',
    precio: 1200000,
    descripcion:
      'Máquina de coser mecánica profesional edición Black, con chasís reforzado, 32 puntadas decorativas y utilitarias, diseñada para trabajos exigentes en telas medianas y gruesas. Ideal para confección básica, proyectos de hogar, acolchados y uso intensivo doméstico gracias a su motor reforzado y estructura robusta.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina mecánica multipuntadas profesional',
      'Edición Black con diseño reforzado',
      '32 puntadas decorativas y utilitarias',
      'Gancho metálico',
      'Cose telas medio livianas, medianas y medio gruesas',
      'Recomendada para máximo 5 capas de denim delgado',
      'Largo de puntada regulable hasta 4 mm',
      'Ancho de puntada hasta 6 mm',
      'Retracción de dientes ideal para acolchados',
      'Planchuela, chasis y ejes reforzados',
      'Motor direct drive de bajo consumo',
      'Uso recomendado de 4 a 6 horas diarias',
      'Enhebrador automático integrado',
      'Sistema de enhebrado Quick-step',
      'Incluye 4 pies prensatelas (zigzag, cremallera, ojal, botón)',
      'Brazo libre para prendas tubulares',
      'Luz LED integrada',
      'Diseñada para materiales medianos a gruesos',
    ],
    especificaciones: {
      Función: 'Multipuntadas intermedia profesional',
      'Tipos de puntada': '32 puntadas decorativas y utilitarias',
      'Tipo de ojal': 'Automático de un paso',
      Garantía: '18 meses electrónico / 18 meses mecánico',
      'Tipo de aguja': '130/705H doméstica',
      'Largo de puntada': 'Hasta 4 mm',
      'Ancho de puntada': 'Hasta 6 mm',
      Velocidad: '1100 rpm',
      'Codo o brazo libre': 'Sí',
      Iluminación: 'LED integrada',
      Motor: 'Direct drive de bajo consumo',
      'Uso recomendado': 'Doméstico intensivo (4 - 6 horas diarias)',
      Materiales: 'Telas medianas y gruesas',
    },
  },
  {
    id: 18,
    nombre: 'Singer Tradition 2250',
    marca: 'Singer',
    tipo: 'Familiar',
    categoria: 'Doméstica / principiantes',
    imagen: 'images/maquinas/SINGER 2250.png',
    precio: 1000000,
    descripcion:
      'Máquina de coser mecánica doméstica ideal para principiantes y arreglos del hogar. Incluye 10 puntadas básicas y decorativas, brazo libre, ojal en 4 pasos y velocidad de hasta 750 puntadas por minuto. Es ligera, fácil de usar y adecuada para telas livianas a medianas.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina mecánica doméstica ideal para principiantes',
      '10 puntadas básicas y decorativas',
      'Incluye puntada recta, zigzag y ojal en 4 pasos',
      'Velocidad de hasta 750 puntadas por minuto',
      'Ajuste de largo y ancho de puntada',
      'Palanca de retroceso para remates',
      'Brazo libre para piezas tubulares',
      'Enhebrado manual con guía ilustrada',
      'Cortador de hilo lateral integrado',
      'Iluminación en el área de costura',
      'Porta carrete horizontal',
      'Sistema de bobina vertical',
      'Diseñada para telas livianas a medianas',
      'Cose jean delgado en varias capas',
      'Compartimiento para guardar accesorios',
    ],
    especificaciones: {
      Voltaje: '120V o 220V según región',
      Velocidad: '750 ppm',
      'Tipos de puntada': '10 puntadas básicas y decorativas',
      'Tipo de ojal': 'Ojal en 4 pasos',
      'Largo de puntada': 'Ajustable',
      'Ancho de puntada': 'Ajustable',
      Peso: '6 kg (sin empaque)',
      Dimensiones: '38.5 cm x 15.5 cm x 30 cm',
      Iluminación: 'Sí',
      'Sistema de bobina': 'Vertical',
      'Brazo libre': 'Sí',
      'Uso recomendado': 'Doméstico / principiantes',
      Garantía: 'Limitada hasta por 25 años (según mercado)',
    },
  },
  {
    id: 19,
    nombre: 'Singer 2263',
    marca: 'Singer',
    tipo: 'Familiar',
    categoria: 'Doméstica intermedia',
    imagen: 'images/maquinas/SINGER 2263.png',
    precio: 900000,
    descripcion:
      'Máquina de coser mecánica doméstica de nivel intermedio, ideal para proyectos básicos, creativos y arreglos del hogar. Cuenta con 23 puntadas utilitarias y decorativas, enhebrador automático, ojal en 4 pasos y estructura interna metálica que garantiza mayor durabilidad.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina mecánica doméstica intermedia',
      '23 puntadas básicas, decorativas e invisibles',
      'Incluye puntada recta, zigzag y decorativas',
      'Ojalador en 4 pasos',
      'Enhebrador automático integrado',
      'Función de retroceso para remates',
      'Brazo libre para prendas tubulares',
      'Estructura interna de metal para mayor durabilidad',
      'Luz incorporada en el área de costura',
      'Selector de largo y ancho de puntada variable',
      'Regulador manual de tensión del hilo',
      'Diseñada para proyectos domésticos y creativos',
      'Apta para telas livianas a medianas',
    ],
    especificaciones: {
      'Tipos de puntada': '23 puntadas básicas y decorativas',
      'Tipo de ojal': 'Ojal en 4 pasos',
      Enhebrador: 'Automático',
      'Largo de puntada': 'Ajustable',
      'Ancho de puntada': 'Ajustable',
      Voltaje: '110V - 120V',
      Estructura: 'Interna metálica',
      Iluminación: 'Sí',
      'Brazo libre': 'Sí',
      'Tensión del hilo': 'Regulador manual',
      'Uso recomendado': 'Doméstico intermedio',
    },
  },
  {
    id: 20,
    nombre: 'Singer 1306',
    marca: 'Singer',
    tipo: 'Familiar',
    categoria: 'Doméstica básica',
    imagen: 'images/maquinas/SINGER 1306.png',
    precio: 700000,
    descripcion:
      'Máquina de coser mecánica doméstica y portátil, ideal para principiantes y proyectos básicos. Incluye 6 puntadas esenciales entre rectas y zigzag, ojalador en 4 pasos, estructura interna metálica y diseño compacto para un uso sencillo y duradero.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina doméstica básica y portátil',
      '6 puntadas esenciales (3 rectas y 3 zigzag)',
      'Diseñada para principiantes',
      'Estructura interna de metal para mayor durabilidad',
      'Ojalador automático en 4 pasos',
      'Velocidad aproximada de 750 puntadas por minuto',
      'Función de retroceso para remates',
      'Selector de puntadas ilustrativo',
      'Brazo libre para costura en mangas y puños',
      'Luz integrada Stay Bright™',
      'Devanador automático',
      'Ajuste manual de tensión del hilo',
      'Ideal para telas livianas a medianas',
    ],
    especificaciones: {
      'Número de puntadas': '6 puntadas (3 rectas y 3 zigzag)',
      Velocidad: 'Hasta 750 ppm',
      'Tipo de ojal': 'En 4 pasos',
      Estructura: 'Interna metálica',
      Luz: 'Integrada Stay Bright™',
      'Brazo libre': 'Sí',
      Devanador: 'Automático',
      'Tensión del hilo': 'Ajustable',
      Peso: '4.3 kg - 4.5 kg',
      Dimensiones: '35 x 18 x 29 cm',
    },
  },
  {
    id: 21,
    nombre: 'Singer M1605',
    marca: 'Singer',
    tipo: 'Familiar',
    categoria: 'Doméstica básica',
    imagen: 'images/maquinas/SINGER M1605.png',
    precio: 750000,
    descripcion:
      'Máquina de coser mecánica doméstica de entrada, compacta y fácil de usar, ideal para principiantes y proyectos de reparación o manualidades. Incluye 6 puntadas esenciales, ojalador en 4 pasos, estructura interna de metal y brazo libre para costuras tubulares.',
    badge: '',
    badgeClass: '',
    caracteristicas: [
      'Máquina doméstica básica ideal para principiantes',
      '6 puntadas preestablecidas (3 rectas y 3 zigzag)',
      'Incluye puntadas tricot y dobladillo invisible',
      'Ojalador automático en 4 pasos',
      'Velocidad de hasta 750 puntadas por minuto',
      'Longitud y ancho de puntada preestablecidos',
      'Control de tensión manual',
      'Estructura interna de metal para mayor durabilidad',
      'Brazo libre para prendas tubulares',
      'Enhebrador manual',
      'Iluminación LED Stay Bright',
      'Función de retroceso mediante palanca',
      'Cortahilos lateral',
      'Sistema de bobina vertical',
      'Diseñada para trabajos domésticos y manualidades',
    ],
    especificaciones: {
      'Número de puntadas': '6 puntadas preestablecidas',
      Velocidad: '750 ppm',
      'Tipo de ojal': 'En 4 pasos',
      'Control de tensión': 'Manual',
      Estructura: 'Interna de metal',
      'Brazo libre': 'Sí',
      Enhebrador: 'Manual',
      Iluminación: 'LED Stay Bright',
      'Sistema de bobina': 'Vertical',
      Dimensiones: '36 x 18 x 29 cm',
      Peso: '4.5 kg',
      Voltaje: '110V o 220V según región',
    },
  },
];

const links = document.querySelectorAll('.nav-link');
const current = window.location.pathname.split('/').pop();

links.forEach((link) => {
  if (link.getAttribute('href') === current) {
    link.classList.add('active');
  }
});

// Variables globales
let maquinasFiltradas = [...maquinasDB];
let filtrosActivos = {
  tipo: 'all',
  marca: 'all',
  precio: 'all',
};

// Inicializar
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    renderizarMaquinas(maquinasDB);
    actualizarContador(maquinasDB.length);
  }, 500);

  configurarEventos();
});

// Configurar eventos
function configurarEventos() {
  document
    .getElementById('searchInput')
    .addEventListener('input', buscarMaquinas);

  // Event listeners para los selectores
  document.getElementById('filtroTipo').addEventListener('change', function () {
    filtrosActivos.tipo = this.value;
    aplicarFiltros();
    actualizarEtiquetasFiltros();
  });

  document
    .getElementById('filtroMarca')
    .addEventListener('change', function () {
      filtrosActivos.marca = this.value;
      aplicarFiltros();
      actualizarEtiquetasFiltros();
    });

  document
    .getElementById('filtroPrecio')
    .addEventListener('change', function () {
      filtrosActivos.precio = this.value;
      aplicarFiltros();
      actualizarEtiquetasFiltros();
    });
}

// Renderizar máquinas
function renderizarMaquinas(maquinas) {
  const grid = document.getElementById('productGrid');
  const noResults = document.getElementById('noResults');

  if (maquinas.length === 0) {
    grid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  grid.innerHTML = maquinas
    .map(
      (maquina) => `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card product-card">
            <div class="position-relative">
              ${
                maquina.badge
                  ? `<span class="product-badge ${maquina.badgeClass}">${maquina.badge}</span>`
                  : ''
              }
              <img src="${maquina.imagen}" class="card-img-top" alt="${
        maquina.nombre
      }" 
                   onerror="this.src='https://via.placeholder.com/400x250/f8f9fa/666?text=Máquina+de+Coser'">
            </div>
            <div class="card-body d-flex flex-column">
              <span class="product-category">${maquina.categoria}</span>
              <h5 class="card-title fw-bold">${maquina.nombre}</h5>
              <p class="text-muted mb-3">${maquina.descripcion}</p>
              
              <ul class="product-features">
                ${maquina.caracteristicas
                  .slice(0, 5)
                  .map(
                    (car) => `
                  <li><i class="bi bi-check-circle-fill"></i> ${car}</li>
                `
                  )
                  .join('')}
              </ul>

              <div class="d-grid gap-2 mt-auto">
                <a href="https://wa.me/573246524049?text=Hola, me interesa la ${encodeURIComponent(
                  maquina.nombre
                )}" 
                   class="btn btn-contact" target="_blank">
                  <i class="bi bi-whatsapp me-2"></i>Consultar ahora
                </a>
                <button class="btn btn-details" onclick="mostrarDetalles(${
                  maquina.id
                })">
                  <i class="bi bi-info-circle me-2"></i>Ver detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}

// Buscar máquinas
function buscarMaquinas() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();

  let resultados = maquinasDB.filter((maquina) => {
    const cumpleBusqueda =
      maquina.nombre.toLowerCase().includes(searchTerm) ||
      maquina.marca.toLowerCase().includes(searchTerm) ||
      maquina.descripcion.toLowerCase().includes(searchTerm) ||
      maquina.caracteristicas.some((car) =>
        car.toLowerCase().includes(searchTerm)
      ) ||
      maquina.precio
        .toString()
        .includes(searchTerm.replace(/\./g, '').replace(/,/g, ''));

    return cumpleBusqueda;
  });

  aplicarFiltrosAResultados(resultados);
}

// Aplicar filtros
function aplicarFiltros() {
  let resultados = [...maquinasDB];

  if (filtrosActivos.tipo !== 'all') {
    resultados = resultados.filter((m) => m.tipo === filtrosActivos.tipo);
  }

  if (filtrosActivos.marca !== 'all') {
    resultados = resultados.filter((m) => m.marca === filtrosActivos.marca);
  }

  if (filtrosActivos.precio !== 'all') {
    const [min, max] = filtrosActivos.precio.split('-').map(Number);
    resultados = resultados.filter((m) => m.precio >= min && m.precio <= max);
  }

  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  if (searchTerm) {
    resultados = resultados.filter((maquina) => {
      return (
        maquina.nombre.toLowerCase().includes(searchTerm) ||
        maquina.marca.toLowerCase().includes(searchTerm) ||
        maquina.descripcion.toLowerCase().includes(searchTerm) ||
        maquina.caracteristicas.some((car) =>
          car.toLowerCase().includes(searchTerm)
        ) ||
        maquina.precio
          .toString()
          .includes(searchTerm.replace(/\./g, '').replace(/,/g, ''))
      );
    });
  }

  maquinasFiltradas = resultados;
  renderizarMaquinas(resultados);
  actualizarContador(resultados.length);
}

// Aplicar filtros a resultados de búsqueda
function aplicarFiltrosAResultados(resultados) {
  if (filtrosActivos.tipo !== 'all') {
    resultados = resultados.filter((m) => m.tipo === filtrosActivos.tipo);
  }

  if (filtrosActivos.marca !== 'all') {
    resultados = resultados.filter((m) => m.marca === filtrosActivos.marca);
  }

  if (filtrosActivos.precio !== 'all') {
    const [min, max] = filtrosActivos.precio.split('-').map(Number);
    resultados = resultados.filter((m) => m.precio >= min && m.precio <= max);
  }

  maquinasFiltradas = resultados;
  renderizarMaquinas(resultados);
  actualizarContador(resultados.length);
}

// Actualizar contador
function actualizarContador(count) {
  const counter = document.getElementById('resultsCount');
  if (count === 0) {
    counter.textContent = 'No se encontraron productos';
  } else if (count === 1) {
    counter.textContent = '1 producto encontrado';
  } else {
    counter.textContent = `${count} productos encontrados`;
  }
}

// Mostrar detalles en modal
function mostrarDetalles(id) {
  const maquina = maquinasDB.find((m) => m.id === id);
  if (!maquina) return;

  document.getElementById('modalTitle').textContent = maquina.nombre;

  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
        <div class="row">
          <div class="col-md-12 mb-4 mb-md-0">
            <img src="${maquina.imagen}" class="modal-img w-100 mb-3" alt="${
    maquina.nombre
  }"
                 onerror="this.src='https://via.placeholder.com/400x400/f8f9fa/666?text=Máquina+de+Coser'">

            <a href="https://wa.me/573246524049?text=Hola, me interesa la ${encodeURIComponent(
              maquina.nombre
            )}" 
               class="btn btn-contact" target="_blank">
              <i class="bi bi-whatsapp me-2"></i>Consultar por WhatsApp
            </a>
          </div>

          <div class="col-md-12 mt-3">
            <span class="product-category mb-3">${maquina.categoria}</span>
            <p class="text-muted mt-2">${maquina.descripcion}</p>

            <h6 class="fw-bold mt-4 mb-3">Características principales:</h6>
            <ul class="product-features">
              ${maquina.caracteristicas
                .map(
                  (car) => `
                <li><i class="bi bi-check-circle-fill"></i> ${car}</li>
              `
                )
                .join('')}
            </ul>

            <h6 class="fw-bold mt-4 mb-3">Especificaciones técnicas:</h6>
            <table class="spec-table">
              ${Object.entries(maquina.especificaciones)
                .map(
                  ([key, value]) => `
                <tr>
                  <td>${key}</td>
                  <td>${value}</td>
                </tr>
              `
                )
                .join('')}
            </table>
          </div>
        </div>
      `;

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

// Actualizar etiquetas de filtros activos
function actualizarEtiquetasFiltros() {
  const container = document.getElementById('activeFilters');
  const etiquetas = [];

  const filtroLabels = {
    tipo: {
      Plana: 'Planas',
      Fileteadora: 'Fileteadora',
      Collarin: 'Collarin',
      VeinteU: '20 U',
      Poste2agujas: 'Poste 2 Agujas',
      Familiar: 'Familiar',
    },
    marca: {
      Singer: 'Singer',
      Juki: 'Juki',
      Jack: 'Jack',
      Kingter: 'Kingter',
      Brother: 'Brother',
    },
    precio: {
      '0-1000000': 'Hasta $1.000.000',
      '1000000-3000000': '$1M - $3M',
      '3000000-999999999': 'Más de $3M',
    },
  };

  if (filtrosActivos.tipo !== 'all') {
    etiquetas.push({
      tipo: 'tipo',
      texto: filtroLabels.tipo[filtrosActivos.tipo],
    });
  }

  if (filtrosActivos.marca !== 'all') {
    etiquetas.push({
      tipo: 'marca',
      texto: filtroLabels.marca[filtrosActivos.marca],
    });
  }

  if (filtrosActivos.precio !== 'all') {
    etiquetas.push({
      tipo: 'precio',
      texto: filtroLabels.precio[filtrosActivos.precio],
    });
  }

  if (etiquetas.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = etiquetas
    .map(
      (tag) => `
        <span class="filter-tag">
          
          <i class="bi bi-x-circle" onclick="removerFiltro('${tag.tipo}')"></i>
          ${tag.texto}
        </span>
      `
    )
    .join('');
}

// Remover un filtro específico
function removerFiltro(tipo) {
  filtrosActivos[tipo] = 'all';
  document.getElementById(
    'filtro' + tipo.charAt(0).toUpperCase() + tipo.slice(1)
  ).value = 'all';
  aplicarFiltros();
  actualizarEtiquetasFiltros();
}

// Resetear filtros
function resetFilters() {
  filtrosActivos = {
    tipo: 'all',
    marca: 'all',
    precio: 'all',
  };

  document.getElementById('filtroTipo').value = 'all';
  document.getElementById('filtroMarca').value = 'all';
  document.getElementById('filtroPrecio').value = 'all';
  document.getElementById('searchInput').value = '';

  renderizarMaquinas(maquinasDB);
  actualizarContador(maquinasDB.length);
  actualizarEtiquetasFiltros();
}
