import { Carrot } from './Carrot'
import { CarrotBefore } from './CarrotBefore'

function CarrotComparison() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-[1100px] h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex h-full">
          {/* 변경전 (AS-IS) */}
          <div className="w-1/3 border-r border-gray-200">
            <div className="h-full bg-gradient-to-br from-slate-50 to-slate-100 p-3">
              <div className="text-center text-sm font-semibold text-slate-700 mb-3 bg-slate-200/50 rounded-lg py-2 px-3">
                <span className="inline-block w-2 h-2 bg-slate-500 rounded-full mr-2"></span>
                변경전 (AS-IS)
              </div>
              <div className="h-[calc(100%-50px)] overflow-hidden rounded-lg">
                <CarrotBefore />
              </div>
            </div>
          </div>

          {/* 변경후 (TO-BE) */}
          <div className="w-1/3 border-r border-gray-200">
            <div className="h-full bg-gradient-to-br from-orange-50 to-orange-100 p-3">
              <div className="text-center text-sm font-semibold text-orange-700 mb-3 bg-orange-200/50 rounded-lg py-2 px-3">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                변경후 (TO-BE)
              </div>
              <div className="h-[calc(100%-50px)] overflow-hidden rounded-lg">
                <Carrot />
              </div>
            </div>
          </div>

          {/* 디스크립션 영역 */}
          <div className="w-1/3">
            <div className="h-full bg-gradient-to-br from-blue-50 to-blue-100 p-4">
              <div className="text-center text-sm font-semibold text-blue-700 mb-4 bg-blue-200/50 rounded-lg py-2 px-3">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                개선사항
              </div>
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <h4 className="font-semibold text-[16px] text-gray-800 mb-2">1. 토스트 팝업</h4>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    가격 제안 불가 알림을 화면 중앙의 세련된 토스트 팝업으로 표시하여 사용자 주의를 끌고 클릭으로 닫을 수 있습니다.
                  </p>

                  <br /><br />
                  <h4 className="font-semibold text-[16px] text-gray-800 mb-2">2. 가격 제안 필터링</h4>
                  <p className="text-gray-600 text-[14.5px] leading-relaxed">
                    "네고", "가격 제안" 등 키워드를 자동 감지하여 필터링된 메시지는 회색으로 표시하고 자동 응답합니다.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { CarrotComparison }
