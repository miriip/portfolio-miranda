import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Terminal, Cloud, Container, GitBranch, FileCode, Layers } from 'lucide-react';

const About = () => {
    const skills = [
        // Backend & Core
        { name: "C#", icon: <Code2 size={20} /> },
        { name: ".NET", icon: <Code2 size={20} /> },
        { name: "Python", icon: <Terminal size={20} /> },
        { name: "Node.js", icon: <Server size={20} /> },
        // Frontend
        { name: "HTML5", icon: <FileCode size={20} /> },
        { name: "CSS3", icon: <FileCode size={20} /> },
        { name: "JavaScript", icon: <Globe size={20} /> },
        { name: "React", icon: <Layers size={20} /> },
        // Bases de Datos
        { name: "SQL Server", icon: <Database size={20} /> },
        { name: "MySQL", icon: <Database size={20} /> },
        // Infraestructura
        { name: "Docker", icon: <Container size={20} /> },
        { name: "Google Cloud", icon: <Cloud size={20} /> },
        // Herramientas
        { name: "Git", icon: <GitBranch size={20} /> },
        { name: "Postman", icon: <Terminal size={20} /> },
        // Arquitectura
        { name: "Microservicios", icon: <Server size={20} /> },
        { name: "RabbitMQ", icon: <Terminal size={20} /> },
    ];

    return (
        <section id="about" className="py-24 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-light">
                        Sobre <span className="text-primary">Mí</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p>
                                Soy estudiante de Ingeniería en Informática, con interés en el desarrollo de software y en la aplicación de tecnologías para resolver problemas reales.
                            </p>

                            <p>
                                Me destaco por mi pensamiento analítico, curiosidad y capacidad de aprendizaje continuo. Disfruto trabajar en equipo, adaptarme a distintos contextos y participar en proyectos que integren áreas técnicas y organizativas.
                            </p>

                            <p>
                                Actualmente busco oportunidades para seguir desarrollando mis habilidades tanto técnicas como de gestión dentro del sector tecnológico, aportando compromiso y ganas de crecer profesionalmente.
                            </p>
                        </div>

                        {/* Caja de habilidades (Stack) */}
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
                            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                                <Terminal className="text-secondary" />
                                Mi Stack Técnico
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-2 bg-black/40 hover:bg-primary/20 border border-white/10 hover:border-primary/50 px-3 py-1.5 rounded-lg transition-all cursor-default"
                                    >
                                        <span className="text-secondary">{skill.icon}</span>
                                        <span className="font-medium text-gray-200 text-sm">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;