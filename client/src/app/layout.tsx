import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";

import "@rainbow-me/rainbowkit/styles.css";
import {Toaster} from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GITget - Hackathon Bounty Platform",
  description: "Distribute hackathon prizes based on GitHub contributions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: "",
            duration: 5000,
            style: {
              background: "#363636",
              color: "#fff",
            },

            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <Providers>
          <main className="min-h-screen bg-gray-50">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
