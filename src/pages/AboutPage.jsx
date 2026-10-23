import AboutSection from '../sections/AboutSection.jsx';
import { NOMOR_WA } from '../constants/config.js';

const AboutPage = () => {
    return (
        <main>
            {/* Header Banner */}
            <section className="py-20 bg-[#3D1C10] text-white text-center px-6">
                <div className="max-w-3xl mx-auto space-y-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#F5D6C6]">Sejarah & Keahlian</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair">Warisan Seni Kasihan</h1>
                    <p className="text-[#F5D6C6] text-lg font-light leading-relaxed">
                        Mengenal lebih dekat perjalanan para pengrajin gerabah tradisional dalam menghidupkan keindahan tanah liat Yogyakarta.
                    </p>
                </div>
            </section>

            {/* Slider Section Cerita */}
            <AboutSection />

            {/* Nilai Kami / Pillars */}
            <section className="py-20 bg-gray-50 px-6 border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-[#3D1C10] font-playfair mb-3">Keunggulan Oemah Gerabah</h2>
                        <p className="text-gray-600">Alasan mengapa produk kami menjadi pilihan dekorasi tempat tinggal dan kafe favorit.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center space-y-4">
                            <div className="w-14 h-14 bg-[#9E472A]/10 text-[#9E472A] rounded-2xl flex items-center justify-center text-2xl mx-auto">🖐️</div>
                            <h3 className="text-xl font-bold text-gray-800">100% Buatan Tangan</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Setiap bagian dibentuk secara manual menggunakan roda putar tradisional oleh tangan terampil pengrajin berpengalaman.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center space-y-4">
                            <div className="w-14 h-14 bg-[#9E472A]/10 text-[#9E472A] rounded-2xl flex items-center justify-center text-2xl mx-auto">🔥</div>
                            <h3 className="text-xl font-bold text-gray-800">Pembakaran Suhu Tinggi</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Dipanggang pada suhu tinggi khusus sehingga badan gerabah menjadi sangat kokoh, padat, dan tidak mudah retak.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center space-y-4">
                            <div className="w-14 h-14 bg-[#9E472A]/10 text-[#9E472A] rounded-2xl flex items-center justify-center text-2xl mx-auto">🌱</div>
                            <h3 className="text-xl font-bold text-gray-800">Ramah Lingkungan</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Menggunakan bahan baku tanah liat murni tanpa campuran zat kimia berbahaya, aman untuk tanaman maupun makanan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hubungi / Lokasi Galeri */}
            <section className="py-20 bg-white px-6">
                <div className="max-w-4xl mx-auto bg-[#FAFBFD] p-10 md:p-14 rounded-3xl border border-gray-200 text-center space-y-6">
                    <h3 className="text-3xl font-bold text-[#3D1C10] font-playfair">Kunjungi Galeri Kami di Yogyakarta</h3>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Ingin melihat proses pembuatan gerabah secara langsung atau berdiskusi pesanan khusus? Kami menyambut hangat kedatangan Anda di Kasihan, Bantul, Yogyakarta.
                    </p>
                    <a
                        href={`https://wa.me/${NOMOR_WA}?text=Halo%20Oemah%20Gerabah,%20saya%20ingin%20berkunjung%20ke%20galeri`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#9E472A] text-white px-8 py-3.5 rounded-full font-semibold shadow-md hover:bg-[#84381E] transition"
                    >
                        Jadwalkan Kunjungan via WhatsApp
                    </a>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
