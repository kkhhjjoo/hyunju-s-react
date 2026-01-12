'use client';

import { createPost } from '@/actions/post';
import { Button, LinkButton } from '@/app/components/ui/Button';
import { useEffect, useActionState } from 'react';
import useUserStore from "@/zustand/userStore";
import { useRouter } from "next/navigation";

export default function RegistForm({ boardType }: {boardType: string}) {
  const [state, formAction, isPending] = useActionState(createPost, null);

  const { user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      //렌더링 중에 페이지를 이동하면 에러가 발생하므로 렌더링 완료 후 이동한다.
      router.replace(`/login?redirect=${boardType}/new`);
    }
  }, [user, router, boardType]);
  
  return (
    <>
      {!user ? (<div className="flex justify-center items-center min-h-[300px]">
        <h3 className='text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4'>
          로그인 페이지로 이동합니다.
        </h3>
      </div>) : (<form action={formAction}>
          <input type="hidden" name="type" value={boardType} />
          <input type="hidden" name="accessToken" value={user?.token?.accessToken} />
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요." 
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
            />
        {state?.ok === 0 && state.errors?.title?.msg}
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">내용</label>
            <textarea 
              id="content"
              rows={15} 
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
            ></textarea>
        {state?.ok === 0 && state.errors?.content?.msg}
        </div>
          <hr />
          <div className="flex justify-end my-6">
          <Button type="submit" disabled={isPending} className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">등록</Button>
            <LinkButton href={`/${boardType}`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</LinkButton>
          </div>
        </form>)}
    </> 
  );
}