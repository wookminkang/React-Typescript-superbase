type NUMBER_TYPE = {
  number: string
}


import Barcode from 'react-barcode'




export function BarcodeItem( { number }: NUMBER_TYPE) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[min(420px,100%)] rounded-[24px] bg-white dark:bg-[#1a1a1a] shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-[#f3f5f720] overflow-hidden">
        {/* 상단 탭 */}
        <div className="p-3">
          <div className="grid grid-cols-2 gap-2 bg-zinc-100 dark:bg-white/5 rounded-[14px] p-1">
            <div className="text-center py-2 rounded-[12px] bg-white dark:bg-zinc-800 shadow text-zinc-900 dark:text-white text-[14px] font-[600]">바코드</div>
            <div className="text-center py-2 rounded-[12px] text-zinc-400 dark:text-zinc-400 text-[14px] font-[600]">QR스캔</div>
          </div>
        </div>

        {/* 바코드 박스 */}
        <div className="px-4">
          <div className="relative rounded-[18px] border border-[#f3f5f720] bg-zinc-50 dark:bg-zinc-900 p-4">



            {/* 바코드 하단 텍스트들 - 자리표시자 */}
            <div className="space-y-1 text-center rotate-[180deg]">
              <div className="text-zinc-900 dark:text-white text-[20px] font-[700]">결제 준비가 완료되었습니다.</div>
              <div className="text-muted-foreground dark:text-white text-[18px] font-[600] mt-[-6px]">바코드를 찍어주세요</div>
            </div>


            <div className='flex justify-center items-center rotate-[180deg] my-[20px]'>
              <Barcode value={number} />
            </div>


            {/* 중앙 캡션 버튼 자리표시자 */}
            <div className="flex items-center justify-center m-auto text-center rotate-[180deg]">
              <div className="px-[6px] py-[4px] pt-[6px] rounded-full bg-black text-white dark:bg-white dark:text-black text-[12px] font-[700]">일회용번호</div>
            </div>

          </div>
        </div>

        {/* 구분선 */}
        <div className="mt-7 border-t border-[#f3f5f720]" />

        {/* 결제수단 영역 */}
        <div className="px-4 py-4">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[15px] font-[700] text-zinc-900 dark:text-white">페이머니</div>
              <div className="text-[12px] text-zinc-400">국민 1234</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-[15px] font-[700] text-zinc-900 dark:text-white">1,280,000원</div>
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">···</div>
            </div>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-[#f3f5f720]" />

        {/* 포인트 사용 스위치 영역 */}
        <div className="px-4 py-4 flex items-center justify-between">
          <div>
            <div className="text-[15px] font-[700] text-zinc-900 dark:text-white">페이포인트 사용</div>
            <div className="text-[12px] text-blue-600 mt-1">1,000원</div>
          </div>
          <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-300 dark:bg-zinc-700">
            <span className="inline-block h-5 w-5 translate-x-[2px] rounded-full bg-white shadow transition" />
          </div>
        </div>

        {/* 하단 여백 */}
        <div className="h-2" />
      </div>
    </div>
  )
}


