import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const FilterDropdown = ({ categories = [], active, onChange }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (category) => {
    onChange(category);
    setOpen(false);
  };

  // Close dropdown when clicking outside or pressing ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between gap-2 bg-zinc-900 text-gray-200 
                   px-5 py-2 rounded-xl font-semibold border border-zinc-700 shadow-sm 
                   hover:border-portfolio hover:text-white transition-all duration-200 focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{active}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            open ? "rotate-180 text-portfolio" : "text-gray-400"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-44 bg-zinc-950 border border-zinc-800 
                     rounded-xl shadow-lg overflow-hidden z-20 backdrop-blur-md 
                     animate-in fade-in slide-in-from-top-1"
          role="listbox"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleSelect(category)}
              className={`w-full text-left px-4 py-2.5 text-sm font-medium 
                          transition-all duration-150 focus:outline-none text-gray-300 hover:text-portfolio hover:bg-zinc-900/70`}
              role="option"
              aria-selected={active === category}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
