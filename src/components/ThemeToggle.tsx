"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
