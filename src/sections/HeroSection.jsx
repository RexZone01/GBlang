const HeroSection = () => {
    return (
        <section id="beranda" className="relative w-full h-[80vh] bg-[#3D1C10] overflow-hidden flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-center bg-cover opacity-25 filter invert" style={{ backgroundImage: "url('/background.svg')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#3D1C10]/70 via-transparent to-[#3D1C10]/80 pointer-events-none"></div>

            <div className="relative z-10 space-y-4 animate-fade-in-up">
                <h2 className="text-white text-5xl md:text-7xl font-bold drop-shadow-xl font-playfair tracking-in-expand">
                    A home, a craft,<br /> a timeless pottery
                </h2>
                <p className="text-[#F5D6C6] text-xl font-light tracking-in-expand">Eksplorasi warna Terracotta Serenity pada setiap karya.</p>
                <a href="#katalog" className="inline-block mt-8 bg-[#9E472A] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-white hover:text-[#3D1C10] hover:scale-105 transition-all tracking-in-expand">
                    Lihat Koleksi
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
