import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Vitrine Express AI — Des publicités prêtes à vendre', description: 'Transformez les informations de vos produits en contenus publicitaires prêts à publier.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
