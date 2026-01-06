import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
  description: '회원가입 페이지입니다',
}

export default function SignUp() {
  return (
    <h1>회원가입</h1>
  );
}