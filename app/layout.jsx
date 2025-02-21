import { Calistoga, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400'],
});

export const metadata = {
  title: 'Portfolio - Abdullah',
  description: 'My Portfolio Page with Nextjs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calistoga.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
