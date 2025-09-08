import { ConstansCategory } from "@/Constans/ConstansCategory"
import { ChevronDownIcon } from "lucide-react"

function AppSidebar() {
  return (
    <aside className="min-w-60 w-60 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          카테고리
        </h4>
        <ChevronDownIcon className="w-4 h-4" />
      </div>
      <ConstansCategory />
    </aside>
  )
}

export { AppSidebar }
