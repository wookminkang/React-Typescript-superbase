import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BarcodeItem, TossApp, Carrot } from './details'
import { useState, useEffect } from 'react'

type LISTS = {
  id: number
  title: string
  date: string
  workTime: string
  content: string
  type: string
}

type Props = { id: number, lists: LISTS[] }

export function PostExample({ id, lists }: Props) {  
  const navigate = useNavigate()
  const onClose = () => navigate(-1)

  const [info, setInfo] = useState<LISTS>()


  useEffect(() => {
    const info = lists.find((list) => list.id === id)
    setInfo(info)
  }, [id])


  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[3px] "
      onClick={onClose}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* 모달 카드 */}
      <motion.div
        className="relative z-10 bg-[#121212] border border-[#f3f5f720] rounded-[14px] overflow-hidden w-[min(400px,92vw)]"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="p-6">
          <h2 className="text-white text-xl mb-3">
            {info?.title}
          </h2>
          <div className='text-white text-[14px]'>
            {info?.content}
          </div>

          <div className="text-gray-300 my-[12px]">
            {info?.type === "barcode" && <BarcodeItem number={'123456789'}/>}
              {info?.type === "toss" && <TossApp />}
              {info?.type === "carrot" && <Carrot />}
              {info?.type === "korea" && <Korea />}
          </div>

          <div className="flex justify-end">
            <button onClick={onClose} className="main-bg-color transition-all duration-300  text-white px-4 py-2 rounded cursor-pointer">
              닫기
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
    
}
