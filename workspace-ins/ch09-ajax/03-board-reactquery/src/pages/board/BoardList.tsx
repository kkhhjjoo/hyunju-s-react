import BoardInfo from "@/pages/board/BoardInfo";

function BoardList(){
  return (
    <>
      <h1>게시물 목록</h1>
      <ul>
        <li>1번 어쩌고 저쩌고</li>
        <li>2번 이랬고 저랬고</li>
      </ul>
      <BoardInfo postId={4}/>
    </>
  );
}

export default BoardList;