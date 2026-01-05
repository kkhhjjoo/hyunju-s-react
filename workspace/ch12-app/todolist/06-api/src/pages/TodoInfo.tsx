// import { getTodoInfo } from "@/api/todo";
import type { ResData, TodoInfoRes } from "@/types/todo";
// import { useEffect } from "react";
import { Link, Outlet, useLoaderData, useLocation, useMatch, useParams } from "react-router";

// 임시 데이터 - API 연동 전까지 사용할 더미 데이터
// const dummyData: Todo = {
//   _id: 5,
//   title: "임시 데이터",
//   content: "임시 데이터 입니다.",
//   done: true,
//   createdAt: "2026.12.12 12:23:45",
//   updatedAt: "2026.12.12 13:45:12",
// };

function TodoInfo() {
  // path가 '/list/:_id'로 지정하고 실제 URL이 '/list/3'일 때 useParams()는 { _id: '3' }을 반환
  const { _id } = useParams();

  // useEffect(() => {
  //   getTodoInfo(_id!).then((result) => console.log(result));
  // }, [_id]);

  // 현재의 URL이 지정한 패턴의 URL과 일치하면 PathMatch 객체를, 일치하지 않으면 null을 반환
  const infoMatch = useMatch("/todolist/list/:_id"); // 동적 세그먼트 지정 가능

  // const data = dummyData;
  //loader에서 반환한 값
  const data = useLoaderData<ResData<TodoInfoRes>>();

  // 요청된 URL 정보를 담고 있는 location 객체 반환
  const location = useLocation();

  return (
    <div id="main">
      <h2>할일 상세 보기</h2>
      <p>{location.state?.message}</p>
      {data.ok ? (
        <>
          <div className="todo">
            <div>id : { _id }</div>
            <div>제목 : { data.item.title }</div>
            <div>내용 : { data.item.content }</div>
            <div>상태 : { data.item.done ? '완료' : '미완료' }</div>
            <div>작성일 : { data.item.createdAt }</div>
            <div>수정일 : { data.item.updatedAt }</div>
            { data.item.category && <div>카테고리: { data.item.category }</div> }
            { data.item.important && <div>중요함</div> }
            { data.item.finishAt && <div>마감일: { data.item.finishAt }</div> }

            {infoMatch && (
              <>
                <Link to={`/todolist/list/${_id}/todoedit`}>수정</Link>
                <Link to={`/todolist/todolist`}>목록</Link>
              </>
            )}
          </div>

          {/* 중첩된 라우트의 컴포넌트를 표시하고 할일 정보를 전달 */}
          <Outlet context={{ item: data.item }} />
        </>
      ) : (
        <p>{data.message}</p>
      )}
    </div>
  );
}

export default TodoInfo;