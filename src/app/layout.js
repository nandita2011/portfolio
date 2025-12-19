import './globals.css'  // <--- This imports Tailwind CSS
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Debashree Priyadarshini',
  description: 'Pediatrician & General Physician',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}