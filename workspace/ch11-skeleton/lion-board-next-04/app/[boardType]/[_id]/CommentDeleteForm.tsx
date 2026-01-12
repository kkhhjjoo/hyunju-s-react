'use client';

import { Button } from '@/app/components/ui/Button';
import { deleteReply } from '@/actions/post';
import { Post, Reply } from '@/app/types/post';
import useUserStore from '@/zustand/userStore';
import { useActionState } from 'react';
import { useParams } from 'next/navigation';

export default function CommentDeleteForm({ reply }: { reply: Reply }) { 
  const { type, _id } = useParams();

  const { user } = useUserStore();
  const [state, formAction, isPending] = useActionState(deleteReply, null);
  console.log(state, isPending);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) event.preventDefault();
  }

   return (
    <form action={formAction} onSubmit={handleSubmit} className="inline ml-2">
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="_id" value={_id} />
      <input type="hidden" name="replyId" value={reply._id} />
      <input type="hidden" name="accessToken" value={user?.token?.accessToken ?? ''} />
      <Button type="submit" bgColor="red" size="sm" ownerId={reply.user._id}>삭제</Button>
    </form>
  )
}