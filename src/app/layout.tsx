import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { PERSONAL_INFO } from '@/constants/data';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteDescription =
  'Portfólio de Daniel da Silva Azevedo, Desenvolvedor Full Stack e Técnico em Desenvolvimento de Sistemas, com projetos em React, Next.js, React Native, .NET, C# e bancos de dados.';

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.portfolioUrl),
  title: {
    default: 'Daniel Azevedo | Desenvolvedor Full Stack',
    template: '%s | Daniel Azevedo',
  },
  description: siteDescription,
  keywords: [
    'Daniel Azevedo',
    'Desenvolvedor Full Stack',
    'Portfolio',
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'React Native',
    '.NET',
    'C#',
  ],
  authors: [{ name: PERSONAL_INFO.fullName, url: PERSONAL_INFO.linkedin }],
  creator: PERSONAL_INFO.fullName,
  publisher: PERSONAL_INFO.fullName,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Portfólio Daniel Azevedo',
    title: 'Daniel Azevedo | Desenvolvedor Full Stack',
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Azevedo | Desenvolvedor Full Stack',
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
