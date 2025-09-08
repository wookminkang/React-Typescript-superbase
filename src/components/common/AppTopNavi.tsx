import { Separator } from "@/components/ui"

function AppTopNavi() {
  return (
    <div className="flex items-center gap-5">
      <div className="font-semibold text-white hover:text-muted-foreground transition-all duration-500">
        돌멩이1
      </div>
      <Separator orientation="vertical" className="!h-4" />
      <div className="font-semibold text-white hover:text-muted-foreground transition-all duration-500">
        돌멩이2
      </div>
    </div>
  )
}

export { AppTopNavi }
