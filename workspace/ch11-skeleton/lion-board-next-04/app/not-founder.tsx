import CustomError from "@/app/components/common/CustomError";

export default function NotFoundPage() {
  return (
    <CustomError message="존재하지 않는 페이지입니다." />
  );
}