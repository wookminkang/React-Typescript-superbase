// portfolios.tsx
import { AppSubHeader } from "@/components/common"
import { AnimatePresence } from "framer-motion"
import { useParams } from "react-router-dom"
import { PostExample } from "./post/PostExample"
import { items } from "@/api/portfolio"
import { Profile, List } from "./post/components"


function Portfolios() {
  const { id } = useParams()
  
  const parentMessage = (message: string) => {
    console.log("parentMessage", message)
  }

  return (
    <div className="sub-page bg-[#121212] overflow-y-auto">
      <AppSubHeader />

      {/* 목록 영역 */}
      <div className="max-w-[640px] min-w-[640px] mx-auto py-[60px]">
        <div className="flex flex-col rounded-[14px] bg-gradient-to-br from-[#181818] to-[#0f0f0f] border border-[#f3f5f720] rounded-b-none backdrop-blur-sm shadow-lg">
          <Profile />
          <List onMessage={parentMessage}/>
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
