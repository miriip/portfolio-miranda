import { motion } from 'framer-motion';
import { ExternalLink, Github, Music, Coffee, Utensils, Globe } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "SoundList",
            subtitle: "Plataforma Social Distribuida (Microservicios)",
            description: "Arquitectura de Microservicios en la nube que integra Spotify e IA. Resuelve la latencia en el procesamiento de datos utilizando RabbitMQ para delegar tareas asíncronas y garantizar una UX fluida.",
            tags: [".NET 8", "Microservicios", "RabbitMQ", "Google Cloud", "AI"],
            links: {
                code: "https://github.com/SoundList",
                demo: "https://soundlist-front-end.vercel.app/HTML/home.html"
            },
            icon: <Music size={48} />,
            gradient: "from-primary/90 to-secondary/90"
        },
        {
            title: "Café El Mejor",
            subtitle: "Sistema de Gestión para Cafetería",
            description: "Aplicación Full Stack desarrollada para el control de inventario y el registro de ventas, mejorando la organización y precisión administrativa del negocio.",
            tags: [".NET", "MySQL", "JavaScript", "HTML5", "CSS3"],
            links: {
                code: "https://github.com/miriip/Proyecto_Cafe_el_Mejor"
            },
            icon: <Coffee size={48} />,
            gradient: "from-primary/80 to-black"
        },
        {
            title: "Sistema de Gestión de Restaurante",
            subtitle: "API REST y Frontend Web",
            description: "Sistema completo para digitalizar la administración de menús y comandas, optimizando la comunicación del personal y el procesamiento de pedidos mediante una API REST y una interfaz web operativa.",
            tags: [".NET", "C#", "SQL Server", "Entity Framework", "JavaScript", "HTML5", "CSS3"],
            links: {
                code: "https://github.com/miriip/TP_Restaurante"
            },
            icon: <Utensils size={48} />,
            gradient: "from-secondary/90 to-primary/90"
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-24 bg-dark relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light">
                        Proyectos <span className="text-primary">Destacados</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Proyectos desarrollados durante mi formación académica, aplicando tecnologías modernas para resolver problemas reales.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
                        >
                            {/* Cabecera con Gradiente */}
                            <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                <div className="text-white/30 group-hover:text-white/90 group-hover:scale-110 transition-all duration-500 transform">
                                    {project.icon}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div>
                                    <h3 className="text-2xl font-bold text-light group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    {/* Subtítulo técnico */}
                                    <p className="text-primary/80 font-medium text-sm mb-3 uppercase tracking-wider">
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed flex-1 text-sm md:text-base">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-black/40 text-gray-300 rounded-full border border-white/10 hover:border-primary/30 transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                    {project.links.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-white hover:text-primary font-medium transition-colors text-sm bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10"
                                        >
                                            <Globe size={16} /> Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-white hover:text-primary font-medium transition-colors text-sm bg-white/5 px-4 py-2 rounded-lg hover:bg-white/10"
                                    >
                                        <Github size={16} /> Ver Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="text-center mt-16">
                    <a href="https://github.com/miriip" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1 group">
                        Ver más proyectos en GitHub <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;