import { ThemeProvider } from "@/components/common/ThemeProvider";
import { LenisProvider } from "@/contexts/AnimationContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neel - Portfolio",
  description: "Neel - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-hanken-grotesk antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
