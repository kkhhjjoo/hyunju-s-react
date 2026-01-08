import './globals.css';
import type { Metadata } from 'next';
import Header from '@/app/components/common/Header';
import Footer from '@/app/components/common/Footer';


export const metadata: Metadata = {
  title: '멋사 게시판 - Lion Board',
  description: '다양한 주제의 커뮤니티와 활발한 소통을 위한 플랫폼입니다. 관심사에 따라 참여하고, 의견을 나누세요.',
  keywords: ['커뮤니티', '소통', '포럼', '관심사', '온라인 모임', '커뮤니티 서비스'],
  authors: [{ name: 'Front-End Boot Camp' }],
  
  // 오픈 그래프
  openGraph: {
    title: '라이언 보드에 오신걸 환영합니다.',
    description: '유용한 정보를 나누고 공유하세요.',
    url: 'https://lion-board.vercel.app',
    siteName: '라이언 보드',
    images: [
      {
        url: '/front-end.png',
        width: 1200,
        height: 630,
        alt: '라이언 보드 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  
  // 파비콘
  icons: {
    icon: '/favicon.svg',
  },
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