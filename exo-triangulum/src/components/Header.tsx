import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-dark/80 backdrop-blur-md border-b border-primary/10 py-4 shadow-lg shadow-black/20'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:brightness-125 transition-all">
                    Portfolio
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex space-x-8 text-sm font-medium text-light/80">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="hover:text-primary transition-colors hover:scale-105 transform inline-block">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center gap-4 pl-8 border-l border-white/10">
                        <SocialLink href="https://github.com/miriip" icon={<Github size={18} />} />
                        <SocialLink href="https://www.linkedin.com/in/miranda-guerra-893256375" icon={<Linkedin size={18} />} />
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-light hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark border-b border-primary/20 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-light/90 hover:text-primary transition-colors pl-4 border-l-2 border-transparent hover:border-primary"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 pt-6 border-t border-white/10 justify-center">
                                <SocialLink href="https://github.com/miriip" icon={<Github size={20} />} />
                                <SocialLink href="https://www.linkedin.com/in/miranda-guerra-893256375" icon={<Linkedin size={20} />} />
                                <SocialLink href="mailto:guerra.mirandamg@gmail.com" icon={<Mail size={20} />} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-light/60 hover:text-primary transition-colors hover:-translate-y-0.5 transform duration-300"
    >
        {icon}
    </a>
);

export default Header;