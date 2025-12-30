import type { BoardReplyCreateRes } from "@/types/board";
import { getAxiosInstance } from "@/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";

const axiosInstance = getAxiosInstance();

function CommentNew() {

  const { mutate: requestAddComment } = useMutation({
    mutationFn: (formData: FormData) => axiosInstance.post<BoardReplyCreateRes>('/posts/3/replies', formData),
  });
  
  // 등록 버튼 누르면 댓글 등록 요청
  const handleAddComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // submit 기본 동작 취소
    const formElem = event.currentTarget;
    const formData = new FormData(formElem);
    requestAddComment(formData, {
      onSuccess: () => {
        formElem.reset();
      }
    });
  }

  return (
    <>
      <h4>댓글 등록</h4>
      <form onSubmit={handleAddComment}>
        <textarea rows={3} cols={30} placeholder="댓글 내용" name="content"></textarea><br />
        <button type="submit">등록</button>
      </form>
    </>
  );
}

export default CommentNew;