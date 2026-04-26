import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { getCasosPublicados, type Categoria } from "@/data/casos";

export const metadata: Metadata = {
    metadataBase: new URL("https://www.amesteticadental.com"),
    title: "Casos Clínicos — Rehabilitación Estética Dental | AM Estética Dental",
    description: "Casos clínicos reales documentados con historia clínica, proceso y resultado. Agenesia dental, carillas de porcelana, diseño de sonrisa y más. Dr. Ariel Merino, Puerto Madero, Buenos Aires.",
    alternates: {
        canonical: "https://www.amesteticadental.com/casos",
    },
    openGraph: {
        title: "Casos Clínicos — AM Estética Dental",
        description: "Casos reales documentados: diagnóstico, tratamiento y resultado. Puerto Madero, Buenos Aires.",
        url: "https://www.amesteticadental.com/casos",
        locale: "es_AR",
        type: "website",
    },
};

const CATEGORIAS: Categoria[] = [
    "Carillas de porcelana",
    "Diseño de sonrisa",
    "Apiñamiento",
    "Alineadores",
    "Bruxismo",
    "Erosión dentaria",
    "Fluorosis",
    "Agenesia",
];

export default function CasosPage() {
    const casos = getCasosPublicados();

    return (
        <>
            <Navbar />
            <main className="bg-carbon min-h-screen pt-32 pb-32 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Header */}
                    <div className="mb-20">
                        <span className="text-oro font-manrope uppercase tracking-[0.4em] text-xs block mb-6">
                            Casos Clínicos
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                            <h1 className="text-4xl md:text-5xl font-manrope font-light text-crema leading-tight">
                                Cada caso,{" "}
                                <span className="font-cormorant italic text-oro">una historia.</span>
                            </h1>
                            <p className="text-crema/60 font-manrope text-lg font-light leading-relaxed">
                                Documentamos el diagnóstico, el plan de tratamiento y el resultado de cada paciente. Sin filtros, sin imágenes de stock.
                            </p>
                        </div>
                    </div>

                    {/* Filtros */}
                    <div className="flex flex-wrap gap-2 mb-16">
                        <span className="inline-flex items-center border border-oro/40 bg-oro/10 rounded-full px-4 py-1.5 font-manrope text-[10px] uppercase tracking-[0.3em] text-oro cursor-default">
                            Todos
                        </span>
                        {CATEGORIAS.map((cat) => (
                            <span
                                key={cat}
                                className="inline-flex items-center border border-crema/10 rounded-full px-4 py-1.5 font-manrope text-[10px] uppercase tracking-[0.3em] text-crema/40 cursor-default hover:border-oro/30 hover:text-oro/70 transition-colors"
                            >
                                {cat}
                            </span>
                        ))}
                    </div>

                    {/* Grid de casos */}
                    {casos.length === 0 ? (
                        <p className="text-crema/30 font-manrope text-center py-20">
                            Próximamente casos publicados.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {casos.map((caso) => (
                                <Link
                                    key={caso.slug}
                                    href={`/casos/${caso.slug}`}
                                    className="group block"
                                >
                                    <article className="bg-carbon border border-crema/5 rounded-2xl overflow-hidden hover:border-oro/20 transition-colors duration-300">
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={caso.fotoPortada.src}
                                                alt={caso.fotoPortada.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent" />
                                            <div className="absolute top-4 right-4">
                                                <span className="inline-flex items-center gap-1.5 border border-oro/30 bg-carbon/80 backdrop-blur-sm rounded-full px-3 py-1 font-manrope text-[9px] uppercase tracking-[0.25em] text-oro">
                                                    {caso.duracion}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {caso.categorias.map((cat) => (
                                                    <span key={cat} className="font-manrope text-[9px] uppercase tracking-[0.25em] text-oro/60">
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                            <h2 className="font-manrope font-light text-crema text-lg leading-snug mb-2 group-hover:text-oro transition-colors duration-200">
                                                {caso.titulo}
                                            </h2>
                                            <p className="font-manrope text-crema/40 text-sm leading-relaxed line-clamp-2">
                                                {caso.subtitulo}
                                            </p>
                                            <div className="mt-5 flex items-center gap-2 text-oro font-manrope text-xs uppercase tracking-widest">
                                                Ver caso completo
                                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="mt-24 text-center">
                        <p className="text-crema/40 font-manrope text-sm mb-6">
                            ¿Querés saber si tu caso tiene solución?
                        </p>
                        <a
                            href="https://api.whatsapp.com/send?phone=541170219298&text=Hola!%20Vi%20los%20casos%20cl%C3%ADnicos%20y%20me%20gustar%C3%ADa%20una%20consulta."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-oro text-carbon px-8 py-4 rounded-full font-manrope font-semibold text-base hover:bg-oro/90 transition-all"
                        >
                            Agendá tu consulta
                            <span>→</span>
                        </a>
                    </div>

                </div>
            </main>
        </>
    );
}
