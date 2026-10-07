import type { Metadata } from 'next';
import './globals.css';
import { assetUrl, siteUrl } from '@/lib/site';
export const metadata: Metadata = { title: 'Aadesh Kapadnis | Data Analyst Portfolio', description: 'Portfolio of Aadesh Kapadnis, a 2026 Electronics & Telecommunication graduate focused on Data Analytics, SQL, Python, Excel, Power BI and Machine Learning.', icons: { icon: assetUrl('/favicon.svg') }, openGraph: { title: 'Aadesh Kapadnis | Data Analyst Portfolio', description: 'Turning raw data into clear insights, dashboards, and decisions.', type: 'website' }, twitter: { card: 'summary', title: 'Aadesh Kapadnis | Data Analyst Portfolio', description: 'Turning raw data into clear insights, dashboards, and decisions.' } };
const origin=siteUrl;
metadata.metadataBase=new URL(origin);
metadata.alternates={canonical:origin+'/'};
const person={'@context':'https://schema.org','@type':'Person',name:'Aadesh Kapadnis',url:origin,jobTitle:'Data Analyst',email:'mailto:aadeshkapadnis@gmail.com',sameAs:['https://github.com/Shree1194','https://www.linkedin.com/in/aadesh-kapadnis/'],knowsAbout:['SQL','Python','Excel','Power BI','Data Analytics','Machine Learning']};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(person)}}/>{children}</body></html>; }

