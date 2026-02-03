"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"     // ✅ default always dark
      enableSystem={false}    // ✅ ignore phone/system theme
      forcedTheme="dark"      // ✅ always dark (even if user tries system)
    >
      {children}
    </ThemeProvider>
  );
}
