import React, { useRef, useEffect, useState } from 'react';

const AnimatedVisibilityWrapper = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    // Memastikan window.IntersectionObserver tersedia (untuk lingkungan pratinjau/browser)
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      setIsVisible(true); // Jika IntersectionObserver tidak didukung, langsung tampilkan
      return;
    }

    const observer = new window.IntersectionObserver(entries => {
      entries.forEach(entry => {
        // Memperbarui isVisible berdasarkan apakah elemen saat ini berpotongan dengan viewport
        // Ini akan menyebabkan animasi terpicu setiap kali elemen masuk ke dalam viewport
        setIsVisible(entry.isIntersecting);
      });
    }, { threshold: 0.15 }); // Memicu saat 15% elemen terlihat

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    // Fungsi cleanup untuk menghentikan pengamatan saat komponen di-unmount
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []); // Dependensi kosong agar observer hanya dibuat sekali

  return (
    <div
      ref={domRef}
      // Tambahkan transition-transform agar animasi hover pada children bekerja dengan lancar
      className={`transform transition-all duration-800 ease-out ${isVisible ? 'animate-fade-in-slide-up opacity-100' : 'opacity-0 translate-y-10'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedVisibilityWrapper;
