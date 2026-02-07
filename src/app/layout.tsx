import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Earthe - Sustainable Coconut & Wood Products',
    description: 'Sustainable Coconut & Wood Products from India',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-sans antialiased text-gray-900 bg-[#FCFBF9]">
                {children}
            </body>
        </html>
    );
}
