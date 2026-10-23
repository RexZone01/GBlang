import { useState, useMemo } from 'react';
import { katalogProduk, KATEGORI_LIST } from '../data/index.js';
import KatalogCard from '../components/KatalogCard.jsx';
import Pagination from '../components/Pagination.jsx';

const ITEMS_PER_PAGE = 6;

const KatalogPage = () => {
    const [selectedKategori, setSelectedKategori] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);

    // Reset ke halaman 1 ketika pencarian, kategori, atau sorting berubah
    const handleKategoriChange = (kategori) => {
        setSelectedKategori(kategori);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
        setCurrentPage(1);
    };

    // Filter dan Sort Produk
    const filteredAndSortedProduk = useMemo(() => {
        let result = katalogProduk.filter((produk) => {
            const matchesKategori = selectedKategori === 'Semua' || produk.kategori === selectedKategori;
            const matchesSearch = produk.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  produk.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesKategori && matchesSearch;
        });

        if (sortBy === 'harga-low') {
            result.sort((a, b) => a.hargaNumeric - b.hargaNumeric);
        } else if (sortBy === 'harga-high') {
            result.sort((a, b) => b.hargaNumeric - a.hargaNumeric);
        } else if (sortBy === 'nama') {
            result.sort((a, b) => a.nama.localeCompare(b.nama));
        }

        return result;
    }, [selectedKategori, searchQuery, sortBy]);

    // Menghitung data per halaman (Pagination)
    const totalPages = Math.ceil(filteredAndSortedProduk.length / ITEMS_PER_PAGE);
    const paginatedProduk = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredAndSortedProduk.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredAndSortedProduk, currentPage]);

    return (
        <main className="py-16 bg-gray-50 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Page Title */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#9E472A] bg-[#9E472A]/10 px-4 py-1.5 rounded-full inline-block mb-3">
                        Koleksi Lengkap ({katalogProduk.length} Produk)
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#3D1C10] font-playfair mb-4">
                        Katalog Terracotta Serenity
                    </h1>
                    <p className="text-gray-600">
                        Jelajahi seluruh koleksi hasil kerajinan tangan pengrajin Kasihan Yogyakarta.
                    </p>
                </div>

                {/* Filter, Search & Sort Control Bar */}
                <div className="w-full max-w-4xl mb-12 space-y-6 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-80">
                            <input
                                type="text"
                                placeholder="Cari vas, pot, cangkir..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="w-full px-5 py-3 pl-11 rounded-full border border-gray-200 focus:border-[#9E472A] focus:ring-2 focus:ring-[#9E472A]/20 outline-none transition-all text-sm"
                            />
                            <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs">
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* Sorting Selector */}
                        <div className="flex items-center gap-2 w-full md:w-auto">
                            <label className="text-xs font-semibold text-gray-500 whitespace-nowrap">Urutkan:</label>
                            <select
                                value={sortBy}
                                onChange={handleSortChange}
                                className="w-full md:w-auto px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 bg-white focus:border-[#9E472A] outline-none"
                            >
                                <option value="default">Unggulan</option>
                                <option value="harga-low">Harga: Termurah → Termahal</option>
                                <option value="harga-high">Harga: Termahal → Termurah</option>
                                <option value="nama">Nama (A-Z)</option>
                            </select>
                        </div>
                    </div>

                    {/* Filter Kategori Pill Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2 border-t border-gray-100">
                        {KATEGORI_LIST.map((kategori) => {
                            const isActive = selectedKategori === kategori;
                            return (
                                <button
                                    key={kategori}
                                    onClick={() => handleKategoriChange(kategori)}
                                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                                        isActive
                                            ? 'bg-[#9E472A] text-white shadow-md'
                                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-[#9E472A]'
                                    }`}
                                >
                                    {kategori}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Status Ringkasan Hasil */}
                <div className="w-full max-w-7xl flex justify-between items-center mb-6 px-2 text-xs font-medium text-gray-500">
                    <span>Menampilkan {paginatedProduk.length} dari {filteredAndSortedProduk.length} produk</span>
                    {totalPages > 1 && <span>Halaman {currentPage} dari {totalPages}</span>}
                </div>

                {/* Grid Produk */}
                {paginatedProduk.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-8 w-full">
                        {paginatedProduk.map((produk, index) => (
                            <KatalogCard key={produk.id} produk={produk} index={index} />
                        ))}
                    </div>
                ) : (
                    /* State Jika Produk Tidak Ditemukan */
                    <div className="text-center py-16 px-6 bg-white rounded-3xl border border-dashed border-gray-300 max-w-md w-full my-8">
                        <div className="text-4xl mb-3">🏺</div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Produk Tidak Ditemukan</h4>
                        <p className="text-sm text-gray-500 mb-6">Maaf, tidak ada produk gerabah yang cocok dengan kata kunci atau filter ini.</p>
                        <button
                            onClick={() => { setSelectedKategori('Semua'); setSearchQuery(''); setSortBy('default'); setCurrentPage(1); }}
                            className="bg-[#9E472A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#84381E] transition"
                        >
                            Reset Semua Filter
                        </button>
                    </div>
                )}

                {/* Pagination Controls */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                />

            </div>
        </main>
    );
};

export default KatalogPage;
