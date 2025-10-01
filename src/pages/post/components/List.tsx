import { items } from "@/api/portfolio"
import { useNavigate } from "react-router-dom"


type childProps = {
  onMessage: (message: string) => void
}

function List({ onMessage } : childProps) {
  const navigate = useNavigate()
  const move = (id: number) => {
    navigate(`/post/${id}`)
  }

  const handleMessage = () => {
    onMessage('안녕 나는 강민욱이야')
  }
  
  return (
    <>
      {items.map((it) => (
          <div key={it.id} className="px-[16px] py-[12px] border-t border-[#f3f5f720] overflow-x-hidden">
              <div className="flex" >
                {/* 프로필 */}
                <div className="flex w-[48px] pt-[4px]" onClick={handleMessage}>
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
    </>
  )
}

export { List }
