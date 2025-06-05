import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable} suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        {/* TEMPORARILY BYPASS LAYOUT COMPONENT */}
        {children}

        </body>
        </html>
    );
}