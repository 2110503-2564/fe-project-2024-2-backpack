//for wrapping Redux or NextAuthProvider ...
"use client";

import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/libs/store";
import "@/app/globals.css"; // Root global styles
import Sidebar from "@/components/Sidebar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Function to switch body classes
  const getBodyClass = () => {
    if (pathname.startsWith("/login") || pathname.startsWith("/register")) {
      return "logInReg-body"; // Class for login/register
    }
    return "general-body"; // Default for general group
  };
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable} ${geistMono.variable} antialiased ` +
          getBodyClass()
        }
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
