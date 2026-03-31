import { useTheme } from "../context/ThemeProvider";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle dark mode"
      data-cursor="disable"
    >
      {theme === "light" ? (
        <MdDarkMode size={20} />
      ) : (
        <MdLightMode size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
