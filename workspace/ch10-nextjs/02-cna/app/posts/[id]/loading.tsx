import { SyncLoader } from 'react-spinners';

export default function PostLoading() { 
  return (
    // <p>게시물 상세 조회 중...</p>
    <p className="flex justify-center items-center"><SyncLoader /></p>
  );
}