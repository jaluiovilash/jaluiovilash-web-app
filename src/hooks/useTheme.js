import { useEffect, useState } from "react";

export function useTheme() {
  // read theme from localStorage or fallback to system
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    const root = window.document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = () => {
      const systemPrefersDark = darkQuery.matches;
      const activeTheme =
        theme === "system" ? (systemPrefersDark ? "dark" : "light") : theme;

      // remove both first to avoid class conflict
      root.classList.remove("dark", "light");
      root.classList.add(activeTheme);
    };

    applyTheme();

    // re-apply theme if system preference changes
    darkQuery.addEventListener("change", applyTheme);
    return () => darkQuery.removeEventListener("change", applyTheme);
  }, [theme]);

  // change theme + persist
  const toggleTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  };

  return { theme, toggleTheme };
}
