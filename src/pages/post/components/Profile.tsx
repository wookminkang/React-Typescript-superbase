function Profile() {
  return (
    <>
      {/* 포트폴리오_닉네임, 이미지 */}
      <div className="px-[16px] py-[24px]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-[20px] font-[500] text-white">강민욱</h1>
            <div className="text-[14px] mt-[-2px] text-[#999999]">Tommy</div>
          </div>
          <div className="flex items-center w-[84px] h-[84px] rounded-full border border-[#f3f5f720] backdrop-blur-sm shadow-lg hover:shadow-xl justify-center">
            <img src="https://github.com/wookminkang.png" alt="logo" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>

      {/* 소개 */}
      <div className="px-[16px] pb-[24px]">
        <div className="flex flex-col gap-[3px]">
          <div className="text-white text-[15px] font-[400]">😎 안녕하세요, 프론트엔드 개발자 토미입니다.</div>
          <div className="text-white text-[15px] font-[400]">💎 늘 새로운 것을 탐구하고 분석하고,</div>
          <div className="text-white text-[15px] font-[400]">🔫 일상 속 익숙해진 불편함을 해결하는 데 집중하면서</div>
          <div className="text-white text-[15px] font-[400]">📮 내 맘대로 작업물을 업로드하고 있어요.</div>              
        </div>
      </div>
    </>
  )
}

export { Profile }
