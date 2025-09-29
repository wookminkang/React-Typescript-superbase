// portfolios.tsx
import { AppSubHeader } from "@/components/common"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useParams } from "react-router-dom"
import { PostExample } from "./post/PostExample"
import { items } from "@/api/portfolio"


function Portfolios() {
  const { id } = useParams()
  const navigate = useNavigate()
  

  const move = (id: number) => {
    navigate(`/post/${id}`)
  }

  return (
    <div className="sub-page bg-[#121212] overflow-y-auto">
      <AppSubHeader />

      {/* 목록 영역 */}
      <div className="max-w-[640px] min-w-[640px] mx-auto py-[60px]">

        <div className="flex flex-col rounded-[14px] bg-gradient-to-br from-[#181818] to-[#0f0f0f] border border-[#f3f5f720] rounded-b-none backdrop-blur-sm shadow-lg">

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

          {/* 리스트 - 01*/}
          {items.map((it) => (
          <div className="px-[16px] py-[12px] border-t border-[#f3f5f720] overflow-x-hidden">
              <div className="flex" key={it.id}>
                {/* 프로필 */}
                <div className="flex w-[48px] pt-[4px]">
                  <div className="w-[36px] h-[36px] rounded-full bg-gradient-to-br from-[#181818] to-[#0f0f0f] border border-[#f3f5f720] backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center">
                    <img src="https://github.com/wookminkang.png" alt="logo" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>

                {/* 내용 카드(공유 layoutId 부여) */}
                <div className="flex-1">      
                  <div
                    onClick={() => move(it.id)}
                    className="w-full text-left cursor-pointer rounded-[10px]"
                  >
                    <div className="flex items-center text-white">
                      <span>Tommy</span>
                      <span className="text-[#999999] text-[13px] ml-[4px]">{it.date}</span>
                    </div>

                    <div className="flex flex-col gap-[8px] text-white">
                      <div>{it.title}</div>
                    </div>

                    <div className="mt-[12px] text-[14px] text-white flex flex-col gap-[10px]">
                      <div>
                        ⏰ 작업 시간
                        <span className="block mt-[3px] text-[#d1d1d1]">{it.workTime}</span>
                      </div>
                      <div>
                        ✏️ 개선 내용
                        <span className="block mt-[3px] text-[#d1d1d1]">{it.content}</span>
                      </div>
                    </div>

                    {/* 썸네일도 공유하려면 아래에도 layoutId 부여 가능 */}
                    <div className="relative min-h-[240px] mt-[16px]">
                      <div className="flex flex-wrap items-center gap-[8px] pb-2 overflow-hidden">
                        <div
                          className="w-[240px] h-[240px] bg-gradient-to-br border border-[#f3f5f720] bg-[#ffffff] rounded-[8px] flex items-center justify-center text-[#222222] text-[12px] flex-shrink-0"
                        >
                          이미지1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          ))}

         

        </div>

            

      </div>


      <AnimatePresence>
      {
        id && 
          <PostExample id={Number(id)} lists={items} />
      }
      </AnimatePresence>



    </div>
  )
}

export { Portfolios }
