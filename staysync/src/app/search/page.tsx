import FilterQuerySchema from '@/lib/schemas/search';

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const parsed = FilterQuerySchema.safeParse(params);

  // 파싱 안될 시 에러문구 띄우기
  if (!parsed.success) {
    return <div>잘못된 검색 조건입니다.</div>;
  }

  const validatedFilter = parsed.data;
// 데이터 가져오는 함수 호출 
  const stays = await getDatas(validatedFilter);

  return (
    <main>
    </main>
  );
}