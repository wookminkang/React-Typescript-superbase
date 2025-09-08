import { AppHader, AppFooter, AppSidebar } from "./components/common"
import { ThemeProvider } from "./components/ThemeProvider"
import { ChevronDownIcon } from "lucide-react"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="page">
          <AppHader />
          <div className="container">
            <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
              {/* 카테고리 사이드바 */}
              <AppSidebar />

              {/* 메인 컨텐츠 */}
              <section className="flex-1 flex flex-col gap-12">
                {/* 핫토픽 */}
                <div className="w-full flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://github.com/wookminkang.png"
                        alt="logo"
                        className="w-6 h-6 cursor-pointer"
                      />
                      <h4>HOT 토픽</h4>
                    </div>
                    <p className="text-muted-foreground">
                      지금 가장 주목받는 주제들을 살펴보세요.
                    </p>
                  </div>

                  {/* 리스트 영역 */}
                  <div className="grid grid-cols-4 gap6"></div>
                </div>

                {/* 최근 등록된 강의 */}
                <div className="w-full flex flex-col gap-6"></div>
              </section>
            </main>
          </div>
          <AppFooter />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
