import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Import images so Vite bundles them
import sharkCellLeandro from "./assets/shark_cell_leandro.png";
import sharkCellRomulo from "./assets/shark_cell_romulo.png";
import sharkCellLeandroRomulo2 from "./assets/shark_cell_leandro_romulo2.png";
import sharkCellLeandroRomulo1 from "./assets/shark_cell_leandro_romulo_1.png";
import sharkCellLeandro2 from "./assets/shark_cell_leandro2.png";
import sharkCellLeandroRomulo from "./assets/shark_cell_leandro_romulo.png";

const images = [
  sharkCellLeandro,
  sharkCellRomulo,
  sharkCellLeandroRomulo2,
  sharkCellLeandroRomulo1,
  sharkCellLeandro2,
  sharkCellLeandroRomulo
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    if (currentIndex + itemsPerPage < images.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 flex items-center justify-center">
      {/* Left Chevron */}
      {currentIndex > 0 && (
        <button
          onClick={prev}
          className="absolute left-2 md:left-6 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaChevronLeft size={28} className="text-white" />
        </button>
      )}

      {/* Images */}
      <div className="flex gap-6">
        {visibleImages.map((img, idx) => (
          <div key={idx} className="w-72 flex-shrink-0">
            <img
              src={img}
              alt={`slide-${currentIndex + idx}`}
              className="w-full object-contain rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Right Chevron */}
      {currentIndex + itemsPerPage < images.length && (
        <button
          onClick={next}
          className="absolute right-2 md:right-6 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaChevronRight size={28} className="text-white" />
        </button>
      )}
    </div>
  );
}
