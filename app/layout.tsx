import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ERTH Ecosystem Flywheel",
    description: "Two-Axis Value & Operations Matrix",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
}
