import { searchSchema, type SearchParams } from '@/lib/schemas/search';
import {getDatas} from '@/features/search/api';
import TopHeader from '@/components/common/topHeader';
import LeftFilter from '@/components/search/leftFilter';
import CardList from '@/components/search/cardList';
export default async function SearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const parsed = searchSchema.safeParse(params);

  // 파싱 안될 시 에러문구 띄우기
  if (!parsed.success) {
    return <div>잘못된 검색 조건입니다.</div>;
  }

  const validatedFilter = parsed.data;
// 데이터 가져오는 함수 호출 
  const stays = await getDatas(validatedFilter);
  const testobj = {imgUrl:"a", "title":"test", rating: 5.0,
  customersCount: 3,
  price: 590000}
  return (
    <>
      <TopHeader></TopHeader>
      <div className='flex gap-5'>
        <LeftFilter></LeftFilter>
        <div id="rightSec" className='p-6 border border-solid border-amber-900 rounded-lg'>
            <dl className='flex gap-2'>
              <dt>지역명</dt>
              <dd>
                <span>의 숙소</span>
                <span>1,244</span>
                <span>개 검색 결과</span>
              </dd>
            </dl>
            <div>
              <CardList cardObj={testobj}></CardList>
            </div>
        </div>
      </div>
    </>
  );
}