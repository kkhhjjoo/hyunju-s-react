import CommentNew from "@/pages/board/CommentNew";
import type { BoardReplyListRes } from "@/types/board";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const axiosInstance = getAxiosInstance();

function CommentList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', '3', 'replies'],
    queryFn: () => axiosInstance.get<BoardReplyListRes>('/posts/3/replies'),
    select: (response) => response.data.item,
  });

  const list = data?.map(reply => <li key={reply._id}>{reply.content}</li>);

  return (
    <>
      { isLoading && <><h3>로딩중...</h3><p>잠시만 기다려 주세요</p></> }
      { error && <><h3>에러 발생!!!</h3><p>{ error.message }</p></> }

      { data && <>
        <h3>댓글 목록</h3>
        <ul>
          { list }
        </ul>
      </> }

      <CommentNew />
    </>
  );
}

export default CommentList;