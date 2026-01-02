import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark text-light">
            {/* Fondos degradados suaves */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wide uppercase">
                        Hola, soy
                    </h2>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Miranda Julieta Guerra
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        <span className="text-white font-semibold">Full Stack</span> Developer
                        <br />
                        Estudiante de Ingeniería en Informática
                        <br />
                        Apasionada por crear soluciones tecnológicas innovadoras
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a
                            href="#projects"
                            className="bg-primary hover:brightness-110 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-primary/25 transform hover:scale-105"
                        >
                            Ver Proyectos
                        </a>
                        <a
                            href="#contact"
                            className="border border-gray-600 hover:border-light text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all hover:bg-white/5"
                        >
                            Contactar
                        </a>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6">
                        <SocialLink href="https://github.com/miriip" icon={<Github size={24} />} />
                        <SocialLink href="https://www.linkedin.com/in/miranda-guerra-893256375" icon={<Linkedin size={24} />} />
                        <SocialLink href="mailto:guerra.mirandamg@gmail.com" icon={<Mail size={24} />} />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
            >
                <a href="#about" className="text-gray-500 hover:text-white transition-colors">
                    <ArrowDown size={32} />
                </a>
            </motion.div>
        </section>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 bg-white/5 p-3 rounded-full hover:bg-white/10 border border-white/5 hover:border-white/20"
    >
        {icon}
    </a>
);

export default Hero;