import { Github, Linkedin, Flame } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-dark border-t border-primary/10 text-center relative overflow-hidden">
            {/* Decoración sutil superior para efecto 'glow' */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-center gap-8 mb-8">
                    <SocialLink href="https://github.com/miriip" icon={<Github size={22} />} />
                    <SocialLink href="https://www.linkedin.com/in/miranda-guerra-893256375" icon={<Linkedin size={22} />} />
                </div>

                <p className="text-light/40 text-sm flex items-center justify-center gap-2">
                    &copy; {new Date().getFullYear()} Designed & Built with
                    <Flame size={14} className="text-primary animate-pulse" fill="currentColor" />
                    by <span className="text-light/80 font-medium">Miranda Julieta Guerra</span>.
                </p>
            </div>

            {/* Fondo de luz sutil en la parte inferior */}
            <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[40%] h-[100px] bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
        </footer>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light/50 hover:text-primary hover:bg-primary/10 p-3 rounded-full transition-all duration-300 hover:-translate-y-1"
    >
        {icon}
    </a>
);

export default Footer;