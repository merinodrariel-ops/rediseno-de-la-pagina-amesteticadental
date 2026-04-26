export type Categoria =
    | "Carillas de porcelana"
    | "Alineadores"
    | "Diseño de sonrisa"
    | "Blanqueamiento"
    | "Implantes"
    | "Apiñamiento"
    | "Agenesia"
    | "Fluorosis"
    | "Bruxismo"
    | "Erosión dentaria";

export interface FotoCaso {
    src: string;
    alt: string;
    caption?: string;
}

export interface Caso {
    slug: string;
    titulo: string;
    subtitulo: string;
    descripcion: string; // para SEO meta description
    categorias: Categoria[];
    duracion: string;
    piezas?: string;
    tecnica?: string;
    fotoPortada: FotoCaso; // foto principal — la que aparece en la galería
    fotos: FotoCaso[];
    copy: string; // HTML o markdown — texto principal del caso
    copyRedes?: string;
    precio?: {
        total: string;         // "USD 20.000"
        porPieza?: string;     // "USD 1.000 por pieza"
        nota?: string;         // texto aclaratorio opcional
    };
    videoUrl?: string;         // YouTube embed URL
    publicado: boolean;
}

export const CASOS: Caso[] = [
    {
        slug: "20-carillas-porcelana-apinamiento-sin-ortodoncia",
        titulo: "20 carillas en 10 días. Sin ortodoncia. Sin blanqueamiento. Sin que nadie lo note.",
        subtitulo: "Apiñamiento residual + desgaste + color — resuelto solo con la forma de las carillas",
        descripcion: "Paciente con apiñamiento residual y dientes desgastados. 20 carillas de porcelana mínimamente invasivas en 10 días, sin ortodoncia previa. Resultado natural — ningún amigo se dio cuenta.",
        categorias: ["Carillas de porcelana", "Apiñamiento"],
        duracion: "10 días",
        piezas: "20 piezas (10 superiores + 10 inferiores)",
        tecnica: "Mínimamente invasiva, desgaste controlado",
        fotoPortada: {
            src: "/images/casos/federico/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental.png",
            alt: "Antes y después diseño de sonrisa con 20 carillas de porcelana sin ortodoncia — AM Estética Dental",
        },
        fotos: [
            {
                src: "/images/casos/federico/carillas-porcelana-20-piezas-mordida-antes-despues-am-estetica-dental.png",
                alt: "Antes y después — vista intraoral de mordida con 20 carillas de porcelana — AM Estética Dental",
                caption: "Vista intraoral — mordida antes y después",
            },
            {
                src: "/images/casos/federico/diseno-sonrisa-carillas-labios-frontal-antes-despues-am-estetica-dental.png",
                alt: "Antes y después sonrisa con labios — 20 carillas de porcelana sin ortodoncia — AM Estética Dental",
                caption: "Sonrisa frontal antes y después",
            },
            {
                src: "/images/casos/federico/carillas-porcelana-arcada-superior-antes-despues-am-estetica-dental.png",
                alt: "Arcada superior antes y después — carillas de porcelana mínimamente invasivas — AM Estética Dental",
                caption: "Arcada superior",
            },
            {
                src: "/images/casos/federico/carillas-porcelana-arcada-inferior-antes-despues-am-estetica-dental.png",
                alt: "Arcada inferior antes y después — carillas de porcelana mínimamente invasivas — AM Estética Dental",
                caption: "Arcada inferior",
            },
            {
                src: "/images/casos/federico/diseno-sonrisa-carillas-sin-ortodoncia-antes-am-estetica-dental.png",
                alt: "Estado inicial — apiñamiento y desgaste dental antes de carillas — AM Estética Dental",
                caption: "Estado inicial",
            },
            {
                src: "/images/casos/federico/carillas-lentes-contacto-dental-sonrisa-natural-resultado-am-estetica-dental.png",
                alt: "Resultado final — sonrisa natural con lentes de contacto dental — AM Estética Dental",
                caption: "Resultado final",
            },
        ],
        copy: `Vino con dientes desgastados, un leve apiñamiento y años de ortodoncia encima. No quería volver a ponerse brackets. Quería verse bien — pero natural.

En 10 días le hicimos 20 lentes de contacto dental, ampliamos su sonrisa incorporando los premolares que casi no se veían, corregimos el apiñamiento con la forma misma de las carillas y mejoramos el color un tono y medio.

El resultado: una sonrisa que parece haber sido así siempre. Ningún amigo suyo se dio cuenta de que se había hecho algo. Eso, para nosotros, es la definición de éxito.`,
        copyRedes: `Él tenía los dientes desgastados, amarillos y con un apiñamiento que le molestaba desde siempre. Ya había hecho ortodoncia. No quería repetirla.

Le hicimos 20 carillas de porcelana, ampliamos su sonrisa y mejoramos el color un tonito.

10 días. Sin cirugía. Sin brackets. Sin que nadie note que se hizo algo.

Eso es lo que más nos gusta lograr.`,
        precio: {
            total: "USD 20.000",
            porPieza: "USD 1.000 por pieza",
            nota: "20 lentes de contacto dental · porcelana feldespática · técnica mínimamente invasiva",
        },
        publicado: true,
    },
    {
        slug: "agenesia-dental-rehabilitacion-completa-implantes-24-ceramicas",
        titulo: "Le faltaban dientes de nacimiento. Hoy tiene la cara que siempre quiso.",
        subtitulo: "Agenesia dental + microdontia + dientes oscuros — resuelto con 2 años de alineadores, implantes y 24 cerámicas",
        descripcion: "Caso de agenesia dental con microdontia y dientes oscurecidos. Tratamiento multidisciplinario de 2 años: alineadores invisibles AM con terapia láser, implantes en zonas edéntulas y 24 cerámicas con aumento de dimensión vertical. Puerto Madero, Buenos Aires.",
        categorias: ["Agenesia", "Implantes", "Alineadores", "Diseño de sonrisa"],
        duracion: "2 años",
        piezas: "24 cerámicas (arcada superior e inferior) + implantes en zonas de agenesia",
        tecnica: "Alineadores invisibles AM + terapia láser + implantes + rehabilitación oral completa + aumento de dimensión vertical",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
            alt: "Antes y después — agenesia dental — mega transformación — rehabilitación oral completa con implantes y 24 cerámicas — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-portada-mega-transformacion-rehabilitacion-oral-dr-ariel-merino-am-estetica-dental",
                alt: "Antes y después — agenesia dental — mega transformación — rehabilitación oral completa con implantes y 24 cerámicas — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Antes y después del caso. Transformación facial completa: alineadores invisibles, implantes dentales y 24 cerámicas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-tres-etapas-tratamiento-alineadores-invisibles-implantes-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Tres etapas del tratamiento de agenesia dental — antes, durante ortodoncia invisible y después con 24 cerámicas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Las tres etapas: punto de partida, cierre de espacios con alineadores AM y resultado final con 24 cerámicas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-intraoral-dientes-pequenos-marrones-microdontia-agenesia-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Antes — intraoral — dientes pequeños marrones y agenesia dental — microdontia — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Estado inicial: microdontia con dientes marrones y espacios vacíos por agenesia.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-intraoral-implantes-dentales-24-ceramicas-rehabilitacion-completa-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Antes y después intraoral — implantes dentales y 24 cerámicas — rehabilitación oral completa — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Comparativa intraoral completa. Implantes en zonas de agenesia + 24 cerámicas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-labios-sonrisa-portada-carillas-ceramicas-alineadores-invisibles-dr-ariel-merino-am-estetica-dental",
                alt: "Antes y después — labios y sonrisa — carillas cerámicas y alineadores invisibles — Dr. Ariel Merino AM Estética Dental",
                caption: "Sonrisa antes y después. Cerámicas de alta translucidez.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-labios-portada-transformacion-facial-completa-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Antes y después — rostro y labios — transformación facial completa — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Comparativa facial completa. El aumento de dimensión vertical transformó el tercio inferior del rostro.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-despues-perfil-lateral-implantes-carillas-ceramicas-dimension-vertical-dr-ariel-merino-am-estetica-dental",
                alt: "Después — perfil lateral — implantes y carillas cerámicas — aumento de dimensión vertical — Dr. Ariel Merino AM Estética Dental",
                caption: "Perfil lateral post-tratamiento. El aumento de dimensión vertical se refleja en la estética facial.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-transformacion-facial-perfil-portada-rehabilitacion-oral-completa-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Transformación facial — perfil portada — rehabilitación oral completa — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Portada de perfil. La imagen que mejor resume la transformación de vida.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-despues-rostro-fondo-blanco-portada-transformacion-completa-dr-ariel-merino-am-estetica-dental",
                alt: "Antes y después — rostro — fondo blanco — transformación completa — Dr. Ariel Merino AM Estética Dental",
                caption: "Comparativa sobre fondo blanco. Transformación facial integral.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-labios-antes-despues-implantes-24-ceramicas-nueva-mordida-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Labios antes y después — implantes y 24 cerámicas — nueva mordida — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Detalle de labios. La nueva mordida y dimensión vertical dieron una postura labial natural en reposo.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-labios-antes-despues-sonrisa-nueva-carillas-ceramicas-portada-dr-ariel-merino-am-estetica-dental",
                alt: "Labios antes y después — sonrisa nueva — carillas cerámicas — portada — Dr. Ariel Merino AM Estética Dental",
                caption: "Sonrisa natural post-tratamiento. El diseño de la línea de la sonrisa fue guiado digitalmente.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-perfil-facial-resultado-final-24-ceramicas-implantes-dentales-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Resultado final — perfil facial — 24 cerámicas e implantes dentales — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Resultado final de perfil. El tratamiento multidisciplinario logró una transformación integral.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-perfil-sonrisa-resultado-carillas-ceramicas-implantes-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Resultado — perfil y sonrisa — carillas cerámicas e implantes — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Perfil con sonrisa. Armonía dento-facial lograda con ortodoncia, implantología y rehabilitación.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-resultado-perfil-rehabilitacion-oral-completa-carillas-porcelana-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Resultado — perfil — rehabilitación oral completa — carillas de porcelana — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Vista de perfil final. Las proporciones del tercio inferior del rostro quedaron completamente restauradas.",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/agenesia-dental/caso-agenesia-dental-antes-rostro-frontal-dientes-oscuros-agenesia-microdontia-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Antes — rostro frontal — dientes oscuros y agenesia — microdontia — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Fotografía facial de inicio. La afectación estética era evidente tanto en reposo como en sonrisa.",
            },
        ],
        copy: `Llegó al consultorio con dientes pequeños, marrones y varios espacios vacíos donde nunca habían salido piezas. La agenesia dental no es solo un problema estético — le cambia la cara, la mordida, la forma en que uno se ve en el espejo.

El plan fue largo pero claro: primero dos años de alineadores invisibles AM, acelerados con terapia láser (sin el láser eran tres años). La ortodoncia cerró espacios, preparó el terreno y alineó la estructura para lo que venía.

Después, implantes en las zonas donde faltaban piezas y donde el hueso lo permitía. Y para cerrar: 24 cerámicas, arriba y abajo, con aumento de dimensión vertical para restituir la mordida y cambiar las proporciones del tercio inferior de la cara.

El resultado no fue solo una sonrisa nueva. Fue otra cara. Otro porte. Otra presencia.

Eso es lo que más nos importa de este caso — no solo lo que cambió en la boca, sino lo que cambió en cómo esa persona se para frente al mundo.`,
        copyRedes: `Dientes pequeños, marrones, y varios de nacimiento que nunca salieron.

2 años de alineadores AM con láser (sin el láser eran 3). Implantes donde faltaban piezas. 24 cerámicas arriba y abajo. Aumento de dimensión vertical.

El resultado no fue solo una sonrisa nueva. Fue otra cara.

Eso es lo que entendemos por transformación de vida.`,
        precio: {
            total: "USD 28.000 – 30.000",
            nota: "Aprox. USD 4.000 ortodoncia invisible + USD 24.000 rehabilitación completa (implantes + 24 cerámicas + aumento de dimensión vertical)",
        },
        videoUrl: "https://www.youtube.com/embed/oqcaGGGAs5Y",
        publicado: true,
    },
    {
        slug: "diseno-sonrisa-cierre-diastemas-dientes-conoidos",
        titulo: "El caso que se viralizó antes de que existiera Instagram.",
        subtitulo: "Diseño de sonrisa · Cierre de diastemas · Dientes conoidos — 10 carillas AM lentes de contacto dental",
        descripcion: "Caso icónico de diseño de sonrisa con cierre de diastemas y dientes conoidos. 10 carillas AM ultra delgadas (0.2-0.3mm). Viral en Facebook antes de Instagram y TikTok. Profesores de odontología de todo el mundo reconocieron este caso. Dr. Ariel Merino, AM Estética Dental, Puerto Madero, Buenos Aires.",
        categorias: ["Carillas de porcelana", "Diseño de sonrisa"],
        duracion: "10 días",
        piezas: "10 carillas AM lentes de contacto dental (0.2-0.3mm) — sector anterior",
        tecnica: "Carillas AM ultra delgadas tipo lente de contacto dental — sin desgaste significativo — cierre de diastemas y corrección de dientes conoidos",
        fotoPortada: {
            src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
            alt: "Diseño de sonrisa con cierre de diastemas — antes y después rostro — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
        },
        fotos: [
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-cierre-diastemas-antes-despues-rostro-portada-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
                alt: "Diseño de sonrisa con cierre de diastemas — antes y después rostro — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Antes y después — rostro",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/diseno-sonrisa-diastemas-antes-despues-rostro-intraoral-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Diseño de sonrisa dientes conoidos — antes y después rostro e intraoral — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Antes y después — rostro e intraoral",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/cierre-diastemas-intraoral-antes-despues-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Cierre de diastemas intraoral antes y después con carillas cerámicas AM — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Intraoral — cierre de diastemas antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/cierre-diastemas-conoidos-intraoral-antes-despues-carillas-lentes-contacto-dental-dr-ariel-merino-am-estetica-dental",
                alt: "Dientes conoidos y cierre de diastemas — intraoral antes y después — carillas lentes de contacto dental — Dr. Ariel Merino AM Estética Dental",
                caption: "Dientes conoidos — cierre de diastemas intraoral",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-02mm-carillas-am-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Fragmentos cerámicos lentes de contacto dental 0.2-0.3mm — carillas AM ultra delgadas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Fragmentos cerámicos — 0.2mm de espesor",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-lentes-contacto-dental-dedo-escala-carillas-am-dr-ariel-merino-am-estetica-dental",
                alt: "Lente de contacto dental ultra fino en dedo mostrando escala — 0.2-0.3mm — carillas AM — Dr. Ariel Merino AM Estética Dental",
                caption: "Escala real — lente de contacto dental en la yema del dedo",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/mordida-antes-despues-diseno-sonrisa-cierre-diastemas-carillas-ceramicas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Mordida antes y después diseño de sonrisa con cierre de diastemas — carillas cerámicas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Mordida — antes y después",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/fragmentos-ceramicos-carillas-am-diseno-sonrisa-dr-ariel-merino-am-estetica-dental-puerto-madero",
                alt: "Fragmentos cerámicos carillas AM diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Puerto Madero",
                caption: "Fragmentos cerámicos antes del cementado",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/modelos-yeso-antes-despues-planificacion-diseno-sonrisa-diastemas-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Modelos de yeso antes y después planificación diseño de sonrisa con cierre de diastemas — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Modelos de yeso — planificación del caso",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/toma-color-carillas-ceramicas-diseno-sonrisa-dr-ariel-merino-am-estetica-dental-puerto-madero-buenos-aires",
                alt: "Toma de color para carillas cerámicas diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Puerto Madero Buenos Aires",
                caption: "Toma de color — selección cerámica",
            },
            {
                src: "https://res.cloudinary.com/drctvgyqd/image/upload/q_auto,f_auto/casos/diseno-sonrisa-diastemas/cementado-carillas-ceramicas-diseno-sonrisa-dia-cementado-dr-ariel-merino-am-estetica-dental-buenos-aires",
                alt: "Cementado de carillas cerámicas cada dos dientes — diseño de sonrisa — Dr. Ariel Merino AM Estética Dental Buenos Aires",
                caption: "Día del cementado — de a dos carillas",
            },
        ],
        copy: `Cuando hice este caso, no existía Instagram. No existía TikTok. Subí el video a YouTube y en pocos días profesores de odontología de todo el mundo me estaban escribiendo.

El paciente tenía dientes conoidos — pequeños, en forma de cono — con diastemas entre ellos. Esos espacios no eran por falta de ortodoncia. Eran estructurales. Aunque se hiciera ortodoncia, iban a volver. La única solución real eran carillas.

Le hicimos 10 lentes de contacto dental AM: fragmentos cerámicos de apenas 0.2 a 0.3mm de espesor. Sin desgaste significativo del diente natural. Sin anestesia en la mayoría de los pasos. En 10 días.

El resultado transformó no solo su sonrisa sino la forma en que yo entendía la estética dental. Fue el caso que definió mi carrera y que me abrió puertas en todo el mundo.`,
        copyRedes: `Antes de Instagram. Antes de TikTok.

Subí este caso a YouTube y profesores de odontología de todo el mundo me escribieron.

10 carillas AM de 0.2mm. Sin desgaste. Cierre de diastemas completo. 10 días.

El caso que definió mi carrera.`,
        precio: {
            total: "Consultar",
            nota: "Caso histórico — referencia de carillas AM ultra delgadas tipo lente de contacto dental",
        },
        publicado: true,
    },
];

export function getCasoBySlug(slug: string): Caso | undefined {
    return CASOS.find((c) => c.slug === slug && c.publicado);
}

export function getCasosPublicados(): Caso[] {
    return CASOS.filter((c) => c.publicado);
}

export function getCasosByCategoria(categoria: Categoria): Caso[] {
    return CASOS.filter((c) => c.publicado && c.categorias.includes(categoria));
}
