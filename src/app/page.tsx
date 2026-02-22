"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  LinkedinIcon,
  Mail,
  Briefcase,
  Code2,
  Palette,
  Server,
  ChevronDown,
} from "lucide-react";

/* ─────────── Data ─────────── */

const projects = [
  {
    title: "AccuSights",
    url: "https://www.accusights.com/",
    image: "/accusights.png",
    description:
      "Plataforma de ciberseguridad y cumplimiento impulsada por IA para pequeñas y medianas empresas. Cuenta con análisis automatizado de brechas, detección de amenazas en tiempo real y soporte para más de 25 marcos de cumplimiento incluyendo HIPAA, GDPR, PCI DSS y SOC 2.",
    tags: ["Next.js", "Django", "UI/UX", "Ciberseguridad", "SaaS"],
    color: "#3b82f6",
    role: "Desarrollador Full-Stack & Diseñador UI/UX",
  },
  {
    title: "AccuSights UAE",
    url: "https://uae.accusights.com/",
    image: "/uaeaccusights.webp",
    description:
      "Versión regional de AccuSights diseñada específicamente para el mercado de los Emiratos Árabes Unidos (Dubái). Incluye traducción completa al árabe, adaptación cultural y soporte RTL. Desarrollé toda la interfaz de usuario utilizando Next.js, Supabase y Django.",
    tags: ["Next.js", "Supabase", "Django", "UI/UX", "i18n", "RTL"],
    color: "#f59e0b",
    role: "Desarrollador Full-Stack & Diseñador UI/UX",
  },
  {
    title: "MediCar Safety",
    url: "https://www.medicarsafety.com/",
    image: "/medicar.png",
    description:
      "Plataforma de certificación y capacitación en cumplimiento NEMT. Entrenamiento aprobado por el Estado de Illinois para operadores de transporte médico no emergente con cursos en línea, gestión de certificaciones y paquetes de inscripción empresarial.",
    tags: ["Next.js", "Django", "UI/UX", "Salud", "Cumplimiento"],
    color: "#10b981",
    role: "Desarrollador Full-Stack & Diseñador UI/UX",
  },
  {
    title: "TeamFicient Healthcare",
    url: "https://health.teamficient.com/",
    image: "/LogoTeamFicien.png",
    description:
      "Diseñé y desarrollé el sitio web completo para TeamFicient Healthcare, desde la experiencia de usuario hasta la implementación técnica. Construí el frontend con Next.js y colaboré en el backend con Django, creando una interfaz moderna y profesional orientada al sector salud.",
    tags: ["Next.js", "Django", "UI/UX", "Salud", "Staffing"],
    color: "#6366f1",
    role: "Desarrollador Full-Stack & Diseñador UI/UX",
  },
  {
    title: "DocFicient",
    url: "https://www.docficient.com/",
    image: "/docficient-logo (1).png",
    description:
      "Diseñé y desarrollé el sitio web de DocFicient de principio a fin. Me encargué del diseño UI/UX y la maquetación del frontend con Next.js, además de colaborar en el desarrollo del backend con Django, asegurando una experiencia de usuario fluida y profesional.",
    tags: ["Next.js", "Django", "UI/UX", "Salud", "Plataforma"],
    color: "#30a9bf",
    role: "Desarrollador Full-Stack & Diseñador UI/UX",
  },
];

const experience = [
  {
    company: "AccuSights",
    role: "Software Developer",
    type: "Tiempo completo · Remoto",
    period: "Ene 2026 — Actualidad",
    description:
      "Contribuyo al desarrollo de productos escribiendo código limpio y mantenible, colaborando en la implementación de funcionalidades, realizando revisiones de código y asegurando la entrega de soluciones de software confiables y eficientes.",
    skills: [
      "Desarrollo Full-Stack",
      "Diseño de APIs",
      "Arquitectura de Software",
      "Code Reviews",
      "Git",
      "Agile",
    ],
  },
  {
    company: "Teamficient",
    role: "Software Developer",
    type: "Tiempo completo · Remoto",
    period: "Feb 2025 — Ene 2026",
    description:
      "Desarrollé múltiples soluciones web en diferentes áreas de la organización. Diseñé automatizaciones en Jira para flujos de agendamiento de citas, construí sitios web para empresas hermanas, brindé soporte de TI a empleados remotos y creé dashboards y herramientas internas. Contribuí en consultoría tecnológica en un entorno bilingüe español-inglés.",
    skills: [
      "Desarrollo Full-Stack",
      "Automatizaciones Jira",
      "Soporte TI",
      "Herramientas Internas",
      "Comunicación Bilingüe",
      "Consultoría Tech",
    ],
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Django",
  "Python",
  "C#",
  "ASP.NET",
  "PostgreSQL",
  "Supabase",
  "REST APIs",
  "Git",
  "Figma",
  "Vercel",
  "Docker",
];

/* ─────────── Intersection Observer Hook ─────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ─────────── Components ─────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          R<span className="text-accent-light">.</span>
        </a>
        <div className="flex items-center gap-8">
          {[
            { label: "Proyectos", href: "#project-0" },
            { label: "Experiencia", href: "#experience" },
            { label: "Skills", href: "#skills" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hidden text-sm text-muted transition-colors hover:text-foreground sm:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex h-dvh items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://ciso.accusights.com/video/chamber.mp4"
          type="video/mp4"
        />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 pt-24 text-center">
        <h1
          className="animate-fade-in-up mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="animate-gradient bg-gradient-to-r from-accent via-purple-400 to-accent-light bg-clip-text text-transparent">
            Desarrollador de Software
          </span>
          <br />
          Full Stack
        </h1>

        <p
          className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Mi nombre es Ricardo Carrión, graduado de la Pontificia Universidad
          Católica del Ecuador en Desarrollo de Software. Con más de 1 año de
          experiencia, construyo aplicaciones web modernas creando interfaces
          elegantes y backends robustos para todo tipo de negocio.
        </p>

        <div
          className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#project-0"
            className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:scale-105 hover:shadow-xl"
          >
            Ver Mi Trabajo
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-white/5"
          >
            Mi Experiencia
          </a>
        </div>

        <div
          className="animate-fade-in-up mt-20"
          style={{ animationDelay: "0.5s" }}
        >
          <ChevronDown
            size={24}
            className="mx-auto animate-bounce text-muted/50"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectSection({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <section
      id={`project-${index}`}
      className={`relative border-b border-border py-32 ${
        isEven ? "bg-background" : "bg-card/40"
      }`}
    >
      {/* Subtle accent glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-[400px] w-[600px] rounded-full blur-[150px] opacity-[0.07]"
          style={{
            background: project.color,
            top: "20%",
            left: isEven ? "-10%" : "auto",
            right: isEven ? "auto" : "-10%",
          }}
        />
      </div>

      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-6xl px-6 transition-all duration-700 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div
          className={`grid items-center gap-12 ${
            project.image ? "md:grid-cols-[1.4fr_1fr]" : ""
          }`}
        >
          <div className={!isEven && project.image ? "md:order-2" : ""}>
            {/* Color accent bar */}
            <div
              className="mb-10 h-1 w-20 rounded-full"
              style={{ background: project.color }}
            />
            <div className="mb-2 text-sm font-medium uppercase tracking-widest text-muted">
              Proyecto {String(index + 1).padStart(2, "0")}
            </div>

            <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h2>

            <p className="mb-2 text-lg text-accent-light">{project.role}</p>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold transition-all hover:scale-105"
              style={{
                borderColor: project.color,
                color: project.color,
              }}
            >
              Visitar Sitio Web
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {project.image && (
            <div className={`${!isEven ? "md:order-1" : ""} flex items-center justify-center`}>
              <div className="flex max-w-xs items-center justify-center overflow-hidden rounded-2xl border border-border bg-white/5 p-4">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={350}
                  height={220}
                  className="h-auto max-h-[200px] w-auto object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <Briefcase size={20} className="text-accent-light" />
            <span className="text-sm font-medium uppercase tracking-widest text-accent-light">
              Trayectoria
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Experiencia
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-accent via-border to-transparent md:left-8 md:block" />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const { ref: cardRef, inView: cardInView } = useInView();
              return (
                <div
                  key={exp.company}
                  ref={cardRef}
                  className={`relative transition-all duration-700 md:pl-20 ${
                    cardInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-accent bg-background md:left-[25px] md:block" />

                  <div className="rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-accent-light">{exp.company}</p>
                      </div>
                      <div className="text-right text-sm text-muted">
                        <p>{exp.period}</p>
                        <p>{exp.type}</p>
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-muted">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-3">
            <Palette size={20} className="text-accent-light" />
            <span className="text-sm font-medium uppercase tracking-widest text-accent-light">
              Conocimientos
            </span>
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Stack Tecnológico
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {techStack.map((tech, i) => {
            const { ref: techRef, inView: techInView } = useInView();
            return (
              <div
                key={tech}
                ref={techRef}
                className={`group flex items-center gap-3 rounded-xl border border-border bg-card/80 px-5 py-4 backdrop-blur-sm transition-all duration-500 hover:border-accent/40 hover:bg-card-hover ${
                  techInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="h-2 w-2 rounded-full bg-accent transition-all group-hover:shadow-md group-hover:shadow-accent/50" />
                <span className="text-sm font-medium text-muted transition-colors group-hover:text-foreground">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>

        {/* Approach cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Palette size={24} />,
              title: "Diseño UI/UX",
              desc: "Creo interfaces intuitivas, accesibles y visualmente pulidas con enfoque en la experiencia de usuario y principios de diseño modernos.",
            },
            {
              icon: <Code2 size={24} />,
              title: "Desarrollo Frontend",
              desc: "Construyo aplicaciones web de alto rendimiento y responsivas con Next.js, React, TypeScript y Tailwind CSS.",
            },
            {
              icon: <Server size={24} />,
              title: "Desarrollo Backend",
              desc: "Desarrollo APIs robustas y lógica del lado del servidor con Django, Python, C#, ASP.NET, PostgreSQL y arquitectura RESTful.",
            },
          ].map((item, i) => {
            const { ref: itemRef, inView: itemInView } = useInView();
            return (
              <div
                key={item.title}
                ref={itemRef}
                className={`rounded-2xl border border-border bg-card/80 p-8 backdrop-blur-sm transition-all duration-700 hover:border-accent/30 ${
                  itemInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="mb-4 text-accent-light">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl border border-border bg-card/80 p-12 text-center backdrop-blur-sm transition-all duration-700 sm:p-20 ${
            inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Background accent */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-accent/8 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Trabajemos Juntos
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-lg text-muted">
              Siempre estoy abierto a discutir nuevos proyectos, ideas creativas
              u oportunidades para ser parte de tu visión.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:ricardocarrion012@hotmail.com"
                className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
              >
                <Mail size={16} />
                Enviar Correo
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-carri%C3%B3n-8616512b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/50 hover:bg-card"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Ricardo. Todos los derechos
          reservados.
        </p>
        <p className="text-sm text-muted/60">
          Hecho con Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

/* ─────────── Main Page ─────────── */

export default function Home() {
  return (
    <div className="noise relative min-h-screen">
      <Navbar />
      <Hero />
      {projects.map((project, i) => (
        <ProjectSection key={project.title} project={project} index={i} />
      ))}
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
