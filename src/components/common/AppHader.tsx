import { Separator } from "@/components/ui"



function AppHader() {
  return (
    <header className="fixed top-0 left-0 z-10 w-full flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1380px] flex items-center justify-between px-6 py-3">

        {/* 기타  */}
        <div className="flex items-center gap-5">
          <img src="https://github.com/9diin.png" alt="logo" className="w-6 h-6 cursor-pointer" />
          <div className="flex items-center gap-5">
            <div className="font-semibold text-white hover:text-muted-foreground transition-all duration-500">돌멩이1</div>
            <Separator orientation="vertical" className="!h-4" />
            <div className="font-semibold text-white hover:text-muted-foreground transition-all duration-500">돌멩이2</div>
          </div>
        </div>

        {/* 로그인 */}
        <div className="font-semibold text-white hover:text-muted-foreground transition-all duration-500">로그인</div>
      </div>
      
    </header>
  )
}

export { AppHader }

