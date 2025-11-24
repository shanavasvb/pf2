import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shyama - Social Media Manager, Content Creator & Model',
  description: 'Portfolio of Shyama - a creative digital storyteller, social media manager, content creator, and model passionate about creating visuals that connect.',
  keywords: 'Shyama, social media manager, content creator, model, digital influencer, portfolio',
  authors: [{ name: 'Shyama' }],
  openGraph: {
    title: 'Shyama - Social Media Manager, Content Creator & Model',
    description: 'Creative digital storyteller and influencer specializing in social media management, content creation, and modeling.',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200',
        width: 1200,
        height: 630,
        alt: 'Shyama Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shyama - Social Media Manager, Content Creator & Model',
    description: 'Creative digital storyteller and influencer',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
