import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import KatalogPage from './pages/KatalogPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

// Komponen Pembantu: Otomatis scroll ke bagian paling atas setiap kali pindah halaman
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="font-poppins antialiased text-gray-800 bg-[#FAFBFD] min-h-screen flex flex-col justify-between">
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/katalog" element={<KatalogPage />} />
                        <Route path="/tentang-kami" element={<AboutPage />} />
                        {/* Fallback route untuk halaman yang tidak ditemukan */}
                        <Route path="*" element={<HomePage />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}