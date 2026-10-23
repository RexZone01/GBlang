import { Link } from 'react-router-dom';
import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import KatalogCard from '../components/KatalogCard.jsx';
import { katalogProduk } from '../data/index.js';
import { NOMOR_WA } from '../constants/config.js';

const HomePage = () => {
    // Ambil 3 produk pertama sebagai highlight di Beranda
    const featuredProduk = katalogProduk.slice(0, 3);

    return (
        <main>
            {/* Hero Banner */}
            <HeroSection />

            {/* Featured Catalog Preview */}
            <section className="py-24 bg-gray-50 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#9E472A] mb-2">Pilihan Populer</p>
                        <h3 className="text-4xl font-bold text-[#3D1C10] font-playfair mb-4">Koleksi Unggulan</h3>
                        <p className="text-gray-600">Beberapa karya gerabah buatan tangan terfavorit dari galeri kami.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 w-full mb-12">
                        {featuredProduk.map((produk, index) => (
                            <KatalogCard key={produk.id} produk={produk} index={index} />
                        ))}
                    </div>

                    <Link
                        to="/katalog"
                        className="inline-flex items-center gap-2 bg-[#9E472A] text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:bg-[#84381E] hover:scale-105 transition-all text-sm tracking-wide"
                    >
                        <span>Lihat Seluruh {katalogProduk.length}+ Koleksi Produk</span>
                        <span className="text-lg">&#8594;</span>
                    </Link>
                </div>
            </section>

            {/* Cerita Kami */}
            <AboutSection />

            {/* CTA Banner Section */}
            <section className="py-20 bg-[#3D1C10] text-white px-6 text-center relative overflow-hidden">
                <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                    <h3 className="text-3xl md:text-5xl font-bold font-playfair">Tertarik dengan Kerajinan Custom?</h3>
                    <p className="text-[#F5D6C6] text-lg font-light leading-relaxed">
                        Kami juga menerima pesanan gerabah khusus (custom size & warna) untuk kebutuhan restoran, dekorasi hotel, maupun souvenir acara.
                    </p>
                    <a
                        href={`https://wa.me/${NOMOR_WA}?text=Halo%20Oemah%20Gerabah,%20saya%20tertarik%20dengan%20pemesanan%20custom`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-[#3D1C10] px-8 py-3.5 rounded-full font-bold shadow-xl hover:bg-[#9E472A] hover:text-white transition-all text-sm"
                    >
                        Konsultasi via WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
