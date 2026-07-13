import pinturaImg from "@assets/watermarked_img_8514322678472680764_1783736690222.jpg";
import sinfinImg from "@assets/Gemini_Generated_Image_g0bae0g0bae0g0ba_1783736835378.png";
import estructurasImg from "@assets/d3090c9c-9039-450e-825b-3504ecdeb9d1_(1)_1783908972045.png";
import reparEstructurasImg from "@assets/Gemini_Generated_Image_v4rm5iv4rm5iv4rm_1783737048971.png";
import estanquesImg from "@assets/2df89f37-c62c-4618-b1c8-43d4da3676db_1783737120882.png";
import componentesImg from "@assets/7a7a6a1e-1528-495d-a641-4630fe036dab_1783737170783.png";
import guarderaImg from "@assets/285714ca-3158-44c0-ba52-3bb4b8f16650_1783737255335.png";
import mixerImg from "@assets/87e53f9f-a3f2-4f36-a148-dd1b7ba8b2f5_1783737369834.png";
import generadorImg from "@assets/b0739c56-038c-4f11-890f-795203d1443a_1783737300173.png";

export const projects = [
  {
    id: 1,
    title: "Reparación y pintura de piezas industriales",
    category: "Fabricación",
    filterCategory: "Fabricación",
    description: "Preparación, reparación y aplicación de pintura industrial en piezas y componentes.",
    activities: ["Preparación de superficie", "Reparación de piezas", "Aplicación de pintura industrial"],
    result: "Piezas recuperadas y listas para operación.",
    image: pinturaImg
  },
  {
    id: 2,
    title: "Reparación de sinfín",
    category: "Mantenimiento industrial",
    filterCategory: "Mantención",
    description: "Reparación y recuperación de sistema sinfín para asegurar su correcto funcionamiento.",
    activities: ["Diagnóstico del sistema", "Reparación de componentes", "Pruebas de funcionamiento"],
    result: "Sistema sinfín operativo.",
    image: sinfinImg
  },
  {
    id: 3,
    title: "Reparación de estructuras",
    category: "Estructuras metálicas",
    filterCategory: "Estructuras",
    description: "Reparación, refuerzo y recuperación de estructuras utilizadas en operaciones industriales.",
    activities: ["Inspección de estructura", "Refuerzo y reparación", "Instalación en terreno"],
    result: "Estructura recuperada y reforzada.",
    image: reparEstructurasImg
  },
  {
    id: 4,
    title: "Limpieza de estanques australianos",
    category: "Limpieza industrial",
    filterCategory: "Limpieza industrial",
    description: "Limpieza y mantenimiento interior de estanques para conservar sus condiciones operacionales.",
    activities: ["Vaciado del estanque", "Limpieza interior", "Inspección y registro"],
    result: "Estanque limpio y en condiciones operacionales.",
    image: estanquesImg
  },
  {
    id: 5,
    title: "Reparaciones y Cambio de guardera en cinta transportadora",
    category: "Sistemas de transporte",
    filterCategory: "Mantención",
    description: "Reemplazo y ajuste de guarderas en cintas utilizadas para el traslado de materiales.",
    activities: ["Retiro de guarderas dañadas", "Instalación de nuevas guarderas", "Ajuste y alineación"],
    result: "Cinta transportadora operativa.",
    image: guarderaImg
  },
  {
    id: 6,
    title: "Mantención de generador industrial",
    category: "Equipos eléctricos",
    filterCategory: "Equipos",
    description: "Revisión, diagnóstico y mantención preventiva de generadores industriales.",
    activities: ["Inspección eléctrica", "Cambio de filtros y aceite", "Pruebas de carga"],
    result: "Generador revisado y en condiciones óptimas.",
    image: generadorImg
  },
  {
    id: 7,
    title: "Cambio de componentes",
    category: "Reparación de equipos",
    filterCategory: "Reparación",
    description: "Reemplazo de componentes mecánicos para recuperar el funcionamiento del equipo.",
    activities: ["Diagnóstico de falla", "Retiro de componentes dañados", "Instalación de nuevos componentes"],
    result: "Equipo recuperado y operativo.",
    image: componentesImg
  },
  {
    id: 8,
    title: "Fabricación de estructuras",
    category: "Fabricación industrial",
    filterCategory: "Fabricación",
    description: "Diseño, fabricación e instalación de estructuras adaptadas a las necesidades del cliente.",
    activities: ["Diseño y planificación", "Fabricación en taller", "Instalación en terreno"],
    result: "Estructura fabricada e instalada correctamente.",
    image: estructurasImg
  },
  {
    id: 9,
    title: "Mantención de camión mixer",
    category: "Reparación de equipos",
    filterCategory: "Reparación",
    description: "Revisión, mantención y reparación de camión hormigonero para restablecer su operatividad en faena.",
    activities: ["Inspección general del equipo", "Revisión de sistema hidráulico", "Mantención de tambor mezclador", "Pruebas de funcionamiento"],
    result: "Camión mixer operativo y listo para trabajar en faena.",
    image: mixerImg
  }
];
