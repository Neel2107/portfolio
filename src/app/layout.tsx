import { ThemeProvider } from "@/contexts/ThemeProvider";
import { LenisProvider } from "@/contexts/AnimationContext";
import { TooltipProvider } from "@/components/ui/tooltip";
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
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <LenisProvider>{children}</LenisProvider>
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
  );
}
