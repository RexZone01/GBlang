import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="py-12 bg-white px-6 text-center border-t">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                <Link to="/" className="flex items-center justify-center gap-2">
                    <img src="/logo.svg" alt="Logo Oemah Gerabah" className="h-8 w-auto object-contain" />
                    <h2 className="text-2xl font-bold tracking-tight text-[#9E472A] font-playfair">Oemah Gerabah</h2>
                </Link>

                <div className="flex gap-6 text-sm font-medium text-gray-600">
                    <Link to="/" className="hover:text-[#9E472A] transition">Beranda</Link>
                    <Link to="/katalog" className="hover:text-[#9E472A] transition">Katalog Koleksi</Link>
                    <Link to="/tentang-kami" className="hover:text-[#9E472A] transition">Tentang Kami</Link>
                </div>

                <p className="text-sm text-gray-500 pt-2 border-t border-gray-100 w-full max-w-md">
                    © 2026 Kasihan, Yogyakarta. Dibuat dengan cinta & tanah liat.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
