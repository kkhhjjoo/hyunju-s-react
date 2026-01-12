import Link from 'next/link';
import { Metadata } from 'next';
import RegistForm from '@/app/[boardType]/new/RegistForm';

// 메타데이터 생성 함수 (별도 export)
export async function generateMetadata({ params }: { params: Promise<{ boardType: string }> }): Promise<Metadata> {
  const { boardType } = await params;
  return {
    title: `${boardType} - 게시글 등록`,
    description: `${boardType} - 게시글을 등록하세요.`,
    openGraph: {
      title: `${boardType} - 게시글 등록`,  // 작은따옴표 제거
      description: `${boardType} - 게시글을 등록하세요.`,
      url: `/${boardType}/new`,
      images: {
        url: '/front-end.png'
      }
    }
  }
}

// 페이지 컴포넌트 (default export)
export default async function NewPage({ params }: { params: Promise<{ boardType: string }> }) { 
  const { boardType } = await params;
  
  return (
    <main className="flex-1 min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 등록</h2>
      </div>
      <section className="mb-8 p-4">
        <RegistForm boardType={boardType} />
      </section>
    </main>
  );
}