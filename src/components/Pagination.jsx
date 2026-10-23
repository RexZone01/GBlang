const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center gap-2 mt-12">
            {/* Tombol Previous */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all border ${
                    currentPage === 1
                        ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400'
                        : 'border-gray-200 text-gray-700 hover:bg-[#9E472A] hover:text-white hover:border-[#9E472A] shadow-sm'
                }`}
            >
                &#8592;
            </button>

            {/* Nomor Halaman */}
            {pageNumbers.map((page) => {
                const isActive = currentPage === page;
                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all shadow-sm ${
                            isActive
                                ? 'bg-[#9E472A] text-white shadow-md scale-110'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Tombol Next */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all border ${
                    currentPage === totalPages
                        ? 'opacity-40 cursor-not-allowed border-gray-200 text-gray-400'
                        : 'border-gray-200 text-gray-700 hover:bg-[#9E472A] hover:text-white hover:border-[#9E472A] shadow-sm'
                }`}
            >
                &#8594;
            </button>
        </div>
    );
};

export default Pagination;
