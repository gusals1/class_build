import { useRouter } from "next/router";

export default function SubPage() {
  const router = useRouter();
  return (
    <>
      <div>동적페이지 메인입니다</div>
      <div>ㅁㄴㅇㅁㄴㅇㅁㄴㅇ</div>
      <div>게시글 아이디: {router.query.boardId}</div>
    </>
  );
}
