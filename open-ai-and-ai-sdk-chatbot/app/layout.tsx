import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { DatabaseIcon } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crustdata AI Assistant',
  description: 'Interactive guide for Crustdata\'s API endpoints and integration',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          'flex min-h-svh flex-col antialiased bg-gradient-to-b from-gray-900 via-gray-900 to-black',
          inter.className
        )}
      >
        <header className="sticky top-0 z-50 border-b border-gray-800/50 bg-gray-900/80 backdrop-blur-sm px-6 py-3">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-lg bg-gradient-to-br from-[#00D37F] to-emerald-600 p-1.5">
                <DatabaseIcon className="w-full h-full text-black" />
              </div>
              <span className="font-semibold text-white">
                Crustdata AI Assistant
              </span>
            </div>
            <select className="rounded-lg border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm px-3 py-1.5 text-sm text-white
              focus:border-[#00D37F]/50 focus:outline-none transition-all duration-300">
              <option value="gpt-4o-mini">gpt-4o-mini</option>
            </select>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}



import './globals.css'