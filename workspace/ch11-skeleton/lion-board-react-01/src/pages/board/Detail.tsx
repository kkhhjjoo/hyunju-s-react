import CommentList from '@/pages/board/CommentList';
import CommentListItem from '@/pages/board/CommentListItem';
import CommentNew from '@/pages/board/CommentNew';

const Detail = () => {
  return (
    <main className="flex-1 container mx-auto mt-4 px-4">
      <CommentList />

      <section className="mb-8">
        <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

        <CommentListItem />

        <CommentListItem />

        <CommentNew />
      </section>
    </main>
  );
};

export default Detail;
