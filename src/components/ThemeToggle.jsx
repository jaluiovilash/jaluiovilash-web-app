import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Laptop, ChevronDown } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = [
    {
      label: "System Default",
      value: "system",
      icon: <Laptop className="w-4 h-4" />,
    },
    { label: "Light Mode", value: "light", icon: <Sun className="w-4 h-4" /> },
    { label: "Dark Mode", value: "dark", icon: <Moon className="w-4 h-4" /> },
  ];

  const currentIcon =
    theme === "dark" ? (
      <Moon className="w-5 h-5" />
    ) : theme === "light" ? (
      <Sun className="w-5 h-5" />
    ) : (
      <Laptop className="w-5 h-5" />
    );

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        title="Change Theme"
      >
        {currentIcon}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg animate-fadeIn">
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                toggleTheme(opt.value);
                setOpen(false);
              }}
              className={`flex items-center gap-2 w-full px-4 py-2 text-sm text-left transition
                ${
                  theme === opt.value
                    ? "bg-gray-200 dark:bg-gray-700 font-semibold"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {opt.icon}
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
