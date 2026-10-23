import { useState } from 'react';
import { NOMOR_WA } from '../constants/config.js';

const KatalogCard = ({ produk, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [gambarAktif, setGambarAktif] = useState(produk.gambarUrl);

    return (
        <div
            className="perspective-1000 w-[320px] h-[480px] animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>

                {/* --- SISI DEPAN (FRONT) --- */}
                <div className="!absolute inset-0 backface-hidden card !m-0 w-full h-full max-w-none max-h-none !flex flex-col p-5">

                    <div
                        onClick={() => setIsFlipped(true)}
                        className="go-corner cursor-pointer z-20 hover:scale-110 transition-transform"
                        title="Lihat Deskripsi"
                    >
                        <div className="go-arrow">→</div>
                    </div>

                    <img
                        src={gambarAktif}
                        alt={produk.nama}
                        className="w-full h-48 object-cover rounded-md mb-4 border-2 border-white/30 relative z-10 transition-all duration-300"
                    />

                    <h4 className="card-title font-playfair relative z-10">{produk.nama}</h4>
                    <p className="small-desc font-bold text-lg mb-2 relative z-10">{produk.harga}</p>

                    <div className="flex gap-2 mb-6 relative z-10 mt-auto">
                        {produk.pilihanWarna.map((warna) => (
                            <div
                                key={warna.nama}
                                title={warna.nama}
                                style={{ backgroundColor: warna.hex }}
                                onClick={() => setGambarAktif(warna.gambarKhusus || produk.gambarUrl)}
                                className="w-8 h-8 rounded-full border border-white/50 cursor-pointer shadow-inner hover:scale-125 hover:shadow-lg transition-all duration-300"
                            ></div>
                        ))}
                    </div>

                    <a
                        href={`https://wa.me/${NOMOR_WA}?text=Halo,%20saya%20tertarik%20dengan%20${produk.nama}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 block text-center bg-white/20 backdrop-blur-sm border border-white/50 text-[#3D1C10] font-semibold py-2.5 rounded-lg hover:bg-white hover:text-[#9E472A] transition"
                    >
                        Pesan via WhatsApp
                    </a>
                </div>

                {/* --- SISI BELAKANG (BACK) --- */}
                <div className="!absolute inset-0 backface-hidden rotate-y-180 card group !m-0 w-full h-full max-w-none max-h-none !flex flex-col justify-center items-center text-center p-6">

                    <div
                        onClick={() => setIsFlipped(false)}
                        className="go-corner cursor-pointer z-20 hover:scale-110 transition-transform"
                        title="Tutup Deskripsi"
                    >
                        <div className="go-arrow" style={{ marginTop: '-2px', marginRight: '-2px' }}>✕</div>
                    </div>

                    <div className="relative z-10">
                        <h4 className="text-2xl font-bold font-playfair text-[#3D1C10] group-hover:text-white mb-4 border-b border-[#9E472A]/30 group-hover:border-white/30 pb-2 transition-colors duration-500">
                            Detail Produk
                        </h4>
                        <p className="text-[#3D1C10] group-hover:text-white/90 font-medium leading-relaxed transition-colors duration-500">
                            {produk.deskripsi}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default KatalogCard;
