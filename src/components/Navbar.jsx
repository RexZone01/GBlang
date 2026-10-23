import { Link, NavLink } from 'react-router-dom';
import { NOMOR_WA } from '../constants/config.js';

const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/katalog', label: 'Katalog Koleksi' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
];

const Navbar = () => {
    return (
        <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
                {/* Logo & Brand Name */}
                <Link to="/" className="flex items-center gap-2.5 no-underline group">
                    <img src="/logo.svg" alt="Logo Oemah Gerabah" className="h-9 w-auto group-hover:scale-110 transition-transform object-contain" />
                    <span className="text-2xl font-bold tracking-tight text-[#9E472A] font-playfair">Oemah Gerabah</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end={item.path === '/'}
                            className={({ isActive }) =>
                                `py-1 relative transition-colors ${
                                    isActive
                                        ? 'text-[#9E472A] font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#9E472A] after:rounded-full'
                                        : 'text-gray-600 hover:text-[#9E472A]'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* WhatsApp Call to Action */}
                <div className="flex items-center gap-4 text-sm font-medium">
                    <a
                        href={`https://wa.me/${NOMOR_WA}?text=Halo%20Oemah%20Gerabah,%20saya%20ingin%20bertanya`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#9E472A] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-[#84381E] transition-all shadow-sm hover:shadow"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex md:hidden justify-center gap-6 py-2.5 bg-gray-50 border-t border-gray-100 text-xs font-semibold">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                        className={({ isActive }) => (isActive ? 'text-[#9E472A] font-bold' : 'text-gray-600')}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
