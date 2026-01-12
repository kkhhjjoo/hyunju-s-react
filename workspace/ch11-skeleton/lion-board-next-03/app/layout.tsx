import './globals.css';
import type { Metadata } from 'next';
import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';


export const metadata: Metadata = {
  metadataBase: new URL('https://lion-board.vercel.app'),
  
};




export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="ko">
      <header>
        <meta charSet="UTF-8" />
      </header>
      <body className='font-sans'>
        <div id="root">
          <div className="flex flex-col min-h-screen dark:bg-gray-700 dark:text-gray-200 transition-color duration-500 ease-in-out">
            <Header />

              { children}
            
            <Footer />
        </div>
      </div>
    </body>
</html>

  )
}