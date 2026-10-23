import { useState } from 'react';
import { DataTentangKami } from '../data/index.js';

const AboutSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        setTimeout(() => {
            setSlideIndex((prev) => (prev === DataTentangKami.length - 1 ? 0 : prev + 1));
            setIsAnimating(false);
        }, 750);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        setTimeout(() => {
            setSlideIndex((prev) => (prev === 0 ? DataTentangKami.length - 1 : prev - 1));
            setIsAnimating(false);
        }, 750);
    };

    return (
        <section id="tentang-kami" className="py-24 bg-white px-6 scroll-mt-20">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="relative group rotate-2">
                    <img
                        key={DataTentangKami[slideIndex].id}
                        src={DataTentangKami[slideIndex].gambarUrl}
                        alt={DataTentangKami[slideIndex].judul}
                        className={`w-full h-80 object-cover rounded-3xl shadow-2xl ${isAnimating ? 'animate-bounce-out' : 'animate-bounce-in'}`}
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <div
                        key={DataTentangKami[slideIndex].id}
                        className={`space-y-4 ${isAnimating ? 'animate-bounce-out' : 'animate-bounce-in'}`}
                    >
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#9E472A]">Cerita Kami</p>
                        <h3 className="text-3xl font-bold text-gray-800 tracking-tight">
                            {DataTentangKami[slideIndex].judul}
                        </h3>
                        <p className="text-gray-600 leading-relaxed min-h-[100px]">
                            {DataTentangKami[slideIndex].deskripsi}
                        </p>
                    </div>

                    <div className="flex gap-3 mt-8 pt-4 border-t border-gray-100">
                        <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#9E472A] hover:text-white transition-colors shadow-sm">&#8592;</button>
                        <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#9E472A] hover:text-white transition-colors shadow-sm">&#8594;</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
