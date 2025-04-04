"use client";
import "../app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
