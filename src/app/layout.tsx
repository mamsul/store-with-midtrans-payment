import '@/assets/globals.css';
import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yellow Store.',
  description:
    'Example store website, displaying list product and integrated with midtrans sandbox.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen w-full py-10 main-bg">
          <div className="mx-auto h-full max-w-7xl overflow-hidden rounded-lg bg-white/40 p-5 backdrop-blur-sm">
            <Navbar />

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
