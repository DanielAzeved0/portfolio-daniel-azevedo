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
  'Portfólio de Daniel da Silva Azevedo, Desenvolvedor Full Stack com experiência em suporte, infraestrutura de TI, redes, automação e projetos com React, Next.js, React Native, .NET, C# e Python.';

const socialImage = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Portfólio profissional de Daniel Azevedo, Desenvolvedor Full Stack com suporte e infraestrutura de TI.',
};

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
    'Python',
    'Infraestrutura de TI',
    'Suporte Técnico',
    'Active Directory',
    'Zabbix',
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
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Azevedo | Desenvolvedor Full Stack',
    description: siteDescription,
    images: [socialImage],
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
