import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
    title: "Drone Defender | Counter UAS Advisory for High-Risk Sites",
    description: "Independent consultancy and specialist training delivered by a senior practitioner with thirty years operational experience in law and order.",
};

export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased" suppressHydrationWarning>
                <LoadingScreen />
                <Header />
                <main style={{ paddingTop: '90px' }}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
