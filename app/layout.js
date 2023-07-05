import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "./components/Provider";
import Nav from "./components/Nav";
import { signIn, signOut, useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="flex bg-pink-900 min-h-screen mt-10">
          <Nav />
          <div className="bg-gray-100 flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}