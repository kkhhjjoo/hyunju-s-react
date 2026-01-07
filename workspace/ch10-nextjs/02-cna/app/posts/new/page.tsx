import RegistForm from '@/app/posts/new/RegistForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '게시글 등록',
  description: '게시글 등록 페이지입니다.'
}

export default function PostNew() {

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // }
  return (
    <>
      <h1>게시글 등록</h1>
      {/* TODO 1. title, content 입력 필드와 등록 기능의 submit 버튼 추가 */}
      <RegistForm />
      {/* TODO 2. submit 이벤트 등록 */}
    </>
  );
}