import { Button, LinkButton } from '@/app/components/ui/Button';
import Link from 'next/link';
import EditForm from '@/app/[boardType]/[_id]/edit/EditForm';
import { getPost } from '@/lib/post';
import DeleteForm from '@/app/[boardType]/[_id]/DeleteForm';

export default async function EditPage({ params }: { params: Promise<{ boardType: string, _id: string }> }) { 
  const { boardType, _id } = await params;
  const res = await getPost(_id);

  if (!res.ok) { 
    return <div>{ res.message }</div>
  }

  const post = res.item;

  return {
    title: `${boardType} - 게시글 수정`,
    description: `${boardType} - 게시글을 수정하세요.`,
    openGraph: {
      title: `${boardType} - 게시글 수정`,
      description: `${boardType} - 게시글을 수정하세요.`,
      url: `/${boardType}/${_id}/edit`,
      images: {
        url: '/front-end.png'
      }
    }
  }

  return (
    <main className="flex-1 min-w-[320px] p-4">
          <div className="text-center py-4">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 수정</h2>
          </div>
          <section className="mb-8 p-4">
            <div className="flex justify-end my-4">
              <LinkButton href={`/${boardType}`}>목록</LinkButton>
              <LinkButton href={`/${boardType}/${_id}/edit`} bgColor="gray" ownerId={post.user._id}>수정</LinkButton>
              <DeleteForm boardType={boardType} _id={_id} ownerId={post.user._id} />
            </div>
          </section>
        </main>
  );
}