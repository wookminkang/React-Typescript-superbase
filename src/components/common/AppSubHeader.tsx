import { ArrowLeftIcon } from "lucide-react"

function AppSubHeader() {
  return (
    <header className="fixed h-[60px] top-0 left-1/2 -translate-x-1/2 z-10 max-w-[640px] min-w-[640px] flex items-center justify-center bg-[#121212]">
      <div className="flex items-center justify-between w-full">
        <div className="transition-all duration-300 hover:scale-105 w-[24px] h-[24px] rounded-full bg-gradient-to-br from-[#181818] to-[#0f0f0f] border-[#f3f5f720] border backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center justify-center">
          <ArrowLeftIcon className="w-[16px] h-[16px] text-white cursor-pointer" />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[16px] font-[500] text-white">Portfolios</h1>
          <div className="text-[12px] mt-[-2px] text-[#555555]">list: 28</div>
        </div>
        <div className="w-[24px]"></div>
      </div>
    </header>
  )
}


export { AppSubHeader }