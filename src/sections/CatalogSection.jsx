import { useState } from 'react';
import { katalogProduk, KATEGORI_LIST } from '../data/index.js';
import KatalogCard from '../components/KatalogCard.jsx';

const CatalogSection = () => {
    const [selectedKategori, setSelectedKategori] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProduk = katalogProduk.filter((produk) => {
        const matchesKategori = selectedKategori === 'Semua' || produk.kategori === selectedKategori;
        const matchesSearch = produk.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              produk.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesKategori && matchesSearch;
    });

    return (
        <section id="katalog" className="py-24 bg-gray-50 px-6 scroll-mt-20">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#9E472A] mb-2">Koleksi Lengkap</p>
                    <h3 className="text-4xl font-bold text-[#3D1C10] font-playfair mb-4">Katalog Koleksi Terracotta</h3>
                    <p className="text-gray-600">Temukan ragam karya gerabah buatan tangan terbaik untuk melengkapi estetika rumah Anda.</p>
                </div>

                {/* Search Bar & Filter Controls */}
                <div className="w-full max-w-3xl mb-12 space-y-6">
                    
                    {/* Search Bar */}
                    <div className="relative max-w-md mx-auto">
                        <input
                            type="text"
                            placeholder="Cari produk gerabah (contoh: Vas, Pot, Gelas)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-5 py-3.5 pl-12 rounded-full border border-gray-200 focus:border-[#9E472A] focus:ring-2 focus:ring-[#9E472A]/20 outline-none transition-all shadow-sm text-sm"
                        />
                        <svg
                            className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                    {/* Filter Kategori Buttons */}
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {KATEGORI_LIST.map((kategori) => {
                            const isActive = selectedKategori === kategori;
                            return (
                                <button
                                    key={kategori}
                                    onClick={() => setSelectedKategori(kategori)}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm ${
                                        isActive
                                            ? 'bg-[#9E472A] text-white shadow-md scale-105'
                                            : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#9E472A] border border-gray-200'
                                    }`}
                                >
                                    {kategori}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Grid Produk */}
                {filteredProduk.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-8 w-full">
                        {filteredProduk.map((produk, index) => (
                            <KatalogCard key={produk.id} produk={produk} index={index} />
                        ))}
                    </div>
                ) : (
                    /* State Jika Produk Tidak Ditemukan */
                    <div className="text-center py-16 px-6 bg-white rounded-3xl border border-dashed border-gray-300 max-w-md w-full my-8">
                        <div className="text-4xl mb-3">🏺</div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Produk Tidak Ditemukan</h4>
                        <p className="text-sm text-gray-500 mb-6">Maaf, kami tidak dapat menemukan produk dengan kata kunci atau kategori tersebut.</p>
                        <button
                            onClick={() => { setSelectedKategori('Semua'); setSearchQuery(''); }}
                            className="bg-[#9E472A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#84381E] transition"
                        >
                            Reset Filter & Pencarian
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};

export default CatalogSection;
