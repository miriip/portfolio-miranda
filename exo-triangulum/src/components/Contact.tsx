//import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark text-light">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12 text-primary">Contáctame</h2>

                <p className="mb-12 text-lg text-gray-300 max-w-2xl mx-auto">
                    ¿Te interesa mi perfil o quieres colaborar en un proyecto?
                    ¡Envíame un mensaje directo o contáctame por redes!
                </p>

                {/* Contenedor de los botones */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">

                    {/* Botón de Email */}
                    <a
                        href="mailto:guerra.mirandamg@gmail.com"
                        className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-primary transition-colors duration-300 rounded-lg shadow-lg group"
                    >
                        <Mail className="w-6 h-6 text-primary group-hover:text-white" />
                        <span className="font-medium">guerra.mirandamg@gmail.com</span>
                    </a>

                    {/* Botón de LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/miranda-guerra-893256375"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-[#0077b5] transition-colors duration-300 rounded-lg shadow-lg group"
                    >
                        <Linkedin className="w-6 h-6 text-primary group-hover:text-white" />
                        <span className="font-medium">LinkedIn</span>
                    </a>

                    {/* Botón de GitHub */}
                    <a
                        href="https://github.com/miriip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-black transition-colors duration-300 rounded-lg shadow-lg group"
                    >
                        <Github className="w-6 h-6 text-primary group-hover:text-white" />
                        <span className="font-medium">GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;