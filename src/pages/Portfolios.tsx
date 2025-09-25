// portfolios.tsx
import { AppSubHeader } from "@/components/common"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate, useParams } from "react-router-dom"
import { PostExample } from "./post/PostExample"



type Item = {
  id: number
  title: string
  date: string
  workTime: string
  content: string
  type: string
}

const items: Item[] = [
  { 
    id: 1, 
    title: "첫 번째 작업물 - GS Barcoding 개선", 
    date: "2025-09-02", 
    workTime: "3일", 
    content: "저는 평소 편의점이나 음식점에서 카카오페이를 자주 사용합니다. 결제를 진행하는 과정에서 직원분은 저의 핸드폰 화면을 보고 어디를 찍어야 할지 혼란스러워하시거나 헷갈려하는 모습을 보게 됩니다. 이런 경험을 개선해보고자 UI를 반대 방향으로 디자인하는 아이디어를 떠올렸고, 직접 구현해본 결과 꽤 괜찮은 사용자 경험을 만들 수 있었습니다. 단순한 시도가 아니라, 실제 사용 과정에서 느낀 불편함을 바탕으로 문제를 정의하고 이를 해결하는 방식을 디자인에 적용한 사례라고 할 수 있습니다.",
    type: "barcode"
  },
  { 
    id: 2, 
    title: "두 번째 작업물 - 토스(계좌, 잔액 블러처리)", 
    date: "2025-09-05", 
    workTime: "1일", 
    content: "토스앱을 초기부터 사용하면서 느낀 불편함은, 앱을 실행하자마자 계좌번호와 잔액이 그대로 노출된다는 점이었습니다. 개인 프라이버시 측면에서 노출이 되지 않는 것이 더 좋다고 생각했고, 이를 개선하기 위해 사용자가 선택 옵션에따라 노출 여부를 선택할 수 있도록 개선했습니다.",
    type: "toss"
  },
  {
    id: 3,
    title: "세 번째 작업물 - 당근마켓 가격제안 개선",
    date: "2025-09-08", 
    workTime: "2일",
    content: "판매자가 상품을 올릴 때 가격 제안을 받을 수  있도록 옵션 설정이 있습니다. 하지만 가격 제안을 받지 않도록 설정했음에도 구매자가 채팅을 통해 가격 제안을 보내는 경우가 많습니다. 이를 개선하기 위해 가격 제안 옵션이 꺼진 상태에서는 채팅방에 입장했을 때 가격 제안을 받을 수 없다는 메시지를 노출하도록 개선했습니다.",
    type: "carrot"
  },
  {
    id: 4,
    title: "한국전력공사 앱 메인 개선",
    date: "2025-09-11", 
    workTime: "3일",
    content: "헌국전력 앱을 사용하는 이유에 대한 생각을 해봤습니다. 저는 자취를 하기 때문에 매달 전기 요금이 얼마나 나가는지 궁금했고, 또한 전월과 당월요금을 비교하여, 절약하기 위해 메인 화면을 어떻게 바꾸면 좋을지 고민했습니다. 이를 해결하기 위해 가장 궁금한 부분 중 하나인 1일부터 현재까지 전기 요금을 비교하여 메인 화면에 노출하도록 개선했습니다.",
    type: "korea"
  }        
]

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
