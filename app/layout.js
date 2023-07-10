import GoBackButton from './components/backButton'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next app attempt',
  description: 'Just a mockup project to get my hands dirty with nextJs',
  keywords: "Ducks, Waterfowl, Birdwatching, Wildlife, Feathered Friends, Duck Species, Duck Behavior, Duck Conservation, Pond Life, Wetlands, Duck Migration, Duck Anatomy, Next.js Development, Front-end Framework, React, Server-side Rendering, JavaScript, Web Development, Component-based Architecture, Scalability"
}/*Keywords generated using chatGPT */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} duck`}>
        <app className="flex flex-col min-h-max ">
        <GoBackButton ></GoBackButton>
        {children}
        </app>
        </body>
    </html>
  )
}
