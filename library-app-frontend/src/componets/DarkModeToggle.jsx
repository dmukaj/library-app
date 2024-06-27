import { useEffect, useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState("active");

  useEffect(() => {
    if (darkMode) {
      document.getElementById("root").classList.add("dark");
    } else {
      document.getElementById("root").classList.remove("dark");
    }
  });

  return (
    <button
      className={`bg-gradient-to-r from-blue-400 to-blue-700 hover:bg-gradient-to-br focus:ring-4 text-white dark:text-white font-medium py-2 px-4 rounded-full m-3 ${
        darkMode ? "active" : ""
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
