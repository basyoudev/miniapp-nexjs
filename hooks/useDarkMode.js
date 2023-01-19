import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (!localStorage.theme) {
      setTheme("light");
    } else {
      setTheme(localStorage.theme);
    }
  }, []);

  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    if (!theme) return;
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
