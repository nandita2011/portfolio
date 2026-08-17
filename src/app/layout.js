import './globals.css';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Nandita Behera | Student Portfolio - Class 9, Loyola School',
  description:
    'Explore the personal student portfolio of Nandita Behera, Class 9 student at Loyola School. Discover academic achievements, STEM & coding projects, leadership activities, school exhibitions, and extracurricular passions.',
  keywords: [
    'Nandita Behera',
    'Loyola School',
    'Class 9 Student Portfolio',
    'Science Projects',
    'Student Coding',
    'Olympiads',
    'Loyola School Student',
  ],
  authors: [{ name: 'Nandita Behera' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable}`}>
      <body className="bg-[#080c14] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}