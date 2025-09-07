import { AppHader, AppFooter, AppSidebar } from './components/common'
import { ThemeProvider } from './components/ThemeProvider'
import { ChevronDownIcon } from 'lucide-react'

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="page">
          <AppHader />
          <div className="container">
            <main className='w-full h-full min-h-[720px] flex p-6 gap-6'>
              {/* 카테고리 사이드바 */}
              <aside className='min-w-60 w-60 flex flex-col gap-6'>                
                <div className='flex items-center gap-2'>
                  <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>카테고리</h4>
                  <ChevronDownIcon className='w-4 h-4' />
                </div>
                <AppSidebar />
              </aside>


              {/* 메인 컨텐츠 */}
              <section>
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
