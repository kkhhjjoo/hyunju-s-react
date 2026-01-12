'use client';

import { createReply } from "@/actions/post";
import { Button, LinkButton } from '@/app/components/ui/Button';
import { useActionState } from "react";
import useUserStore from '@/zustand/userStore';

export default function CommentNew({ boardType, _id }: { boardType: string, _id: string }) {
  const [state, formAction, isPending] = useActionState(createReply, null);

  const { user } = useUserStore();
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      { !user ? (
        <p><LinkButton href={`/login?redirect=/${boardType}/${_id}`} size="sm">로그인</LinkButton> 후 이용해주세요.</p>
      ) : (
        <form action={formAction}>
          <input type="hidden" name="accessToken" value={ user?.token?.accessToken ?? ''} />
          ...
        </form>
      )}
    </div>
  );
}