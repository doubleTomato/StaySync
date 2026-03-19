import { searchSchema, type SearchParams } from '@/lib/schemas/search';
import {getDatas} from '@/features/search/api';
import TopHeader from '@/components/common/topHeader';
import LeftFilter from '@/components/search/leftFilter';
import CardList from '@/components/search/cardList';
export default async function SearchPage({ searchParams }: 
  { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const parsed = searchSchema.safeParse(params);

  if (!parsed.success) {
    return <div>잘못된 검색 조건입니다.</div>;
  }

  const validatedFilter = parsed.data;
  const stays = await getDatas(validatedFilter);



  const res = await fetch('http://localhost:3000/api/accommodations');
  const listData = await res.json()

  
  return (
    <>
      <TopHeader></TopHeader>
      <div className='flex gap-10  mt-10 px-40'>
        <LeftFilter></LeftFilter>
        <div id="rightSec" className='p-6 rounded-lg w-300 shadow-lg'>
            <dl className='flex gap-1 mb-5 px-5 py-2.5 text-md font-semibold'>
              <dt className='text-blue-600 text-lg'>지역명</dt>
              <dd>
                <span>의 숙소</span>
                <span className='font-bold text-gray-700 text-lg'> 1,244</span>
                <span>개 검색결과</span>
              </dd>
            </dl>
            {/* 이 박스만 스크롤할지 위에 검색결과를 고정할지 고민중 */}
            <div>
              {listData.map((x,i) => <CardList cardObj={x} key={'searchCard'+i}></CardList>)}
            </div>
        </div>
      </div>
    </>
  );
}