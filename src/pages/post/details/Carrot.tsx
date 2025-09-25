import { ChevronLeft, Phone, MoreVertical, Plus, Smile, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Carrot() {
  const navigate = useNavigate()
  const [showToast, setShowToast] = useState(true)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "안녕하세요. 관심 있어서 문의드려요.",
      isMe: true,
      time: "오후 12:48",
      isFiltered: false
    },
    {
      id: 2,
      text: "안녕하세요요",
      isMe: false,
      time: "오후 12:49",
      isFiltered: false
    }
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getCurrentTime = () => {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const period = hours >= 12 ? '오후' : '오전'
    const displayHours = hours > 12 ? hours - 12 : hours
    return `${period} ${displayHours}:${minutes.toString().padStart(2, '0')}`
  }

  const handleSendMessage = () => {
    if (message.trim()) {
      // 가격 제안 관련 키워드 필터링
      const priceKeywords = [
        '네고', '가격 제안', '가격 흥정', '흥정', '할인', '깎아주세요', '싸게', '가격 협상', '협상',
        '될까요', '가능할까요', '어때요', '어떠세요', '해주세요', '부탁드려요'
      ]
      
      // 숫자 + 만원/천원/원 패턴 감지
      const pricePattern = /\d+[만천]?원.*(될까요|가능할까요|어때요|어떠세요|해주세요|부탁드려요)/
      
      const hasPriceKeyword = priceKeywords.some(keyword => 
        message.toLowerCase().includes(keyword.toLowerCase())
      ) || pricePattern.test(message)

      const newMessage = {
        id: messages.length + 1,
        text: message,
        isMe: true,
        time: getCurrentTime(),
        isFiltered: hasPriceKeyword
      }
      setMessages([...messages, newMessage])
      setMessage('')

      if (hasPriceKeyword) {
        // 1초 후 자동 응답
        setTimeout(() => {
          const autoResponse = {
            id: messages.length + 2,
            text: "가격 제안을 할 수 없습니다.",
            isMe: true,
            time: getCurrentTime(),
            isFiltered: false
          }
          setMessages(prev => [...prev, autoResponse])
        }, 100)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }


  return (
    <div className="flex flex-col bg-background text-foreground relative w-full h-full">
      <AnimatePresence>
        {showToast && (
          <>
            {/* Background Overlay */}
            <motion.div 
              className="absolute inset-0 z-10 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowToast(false)}
            />
            
            <motion.div 
              className="absolute z-11 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-gradient-to-br from-orange-500/95 to-orange-600/95 backdrop-blur-md border border-orange-400/30 shadow-2xl rounded-2xl"
              initial={{ y: -100, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -100, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-6 pb-6 px-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-white/90 rounded-full animate-pulse"></div>
                  <div className="text-[18px] font-[700] text-white drop-shadow-lg">가격 제안 불가</div>
                  <div className="w-2 h-2 bg-white/90 rounded-full animate-pulse"></div>
                </div>
                <div className="text-[14px] text-white/95 text-center leading-relaxed drop-shadow-md font-medium">
                  이 상품은 가격 제안을 받을 수 없는 상품입니다.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>


      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 px-3 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="leading-tight">
            <p className="text-sm font-semibold">맴매</p>
            <p className="text-xs text-muted-foreground">보통 10분 이내 응답</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button 
            className="px-3 py-1 text-xs bg-orange-500 text-white rounded-full hover:bg-orange-600"
            onClick={() => navigate('/comparison')}
          >
            비교보기
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
            <Phone className="h-5 w-5" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-muted">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product summary */}
      <section className="border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-md bg-muted" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">판매중 스튜디오 디스플레이 VESA</p>
            <div className="mt-1 flex items-center gap-2 text-sm">
              <span className="font-semibold">150만원</span>
              <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">가격제안불가</span>
            </div>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <button className="h-9 rounded-md border text-sm hover:bg-muted">약속잡기</button>
          <button className="h-9 rounded-md border text-sm hover:bg-muted">당근페이</button>
          <button className="h-9 rounded-md border text-sm hover:bg-muted">물품추가</button>
        </div>
      </section>

      {/* Notice banner */}
      <section className="px-4 py-3">
        <div className="rounded-lg border bg-muted/40 px-3 py-2 text-sm text-muted-foreground">
          Tommy님은 당근페이 사용자예요. 채팅방에서 바로 송금하거나 안심결제를 요청해 보세요.
        </div>
      </section>

      {/* Chat area */}
      <main className="h-[calc(100vh-580px)] space-y-4 overflow-y-auto px-4 pb-20 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Date divider */}
        <div className="relative my-4 text-center text-xs text-muted-foreground">
          <span className="relative z-10 bg-background px-2">2025년 9월 16일</span>
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />
        </div>

        {/* Messages */}
        {messages.map((msg) => {
          return (
            <div key={msg.id}>
              {msg.isMe ? (
                <div className="flex justify-end">
                  <div className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow ${
                    msg.isFiltered 
                      ? 'bg-gray-500 text-white opacity-60 border-2 border-gray-400' 
                      : 'bg-orange-500 text-white'
                  }`}>
                    {msg.text}
                    <div className="mt-1 text-right text-[10px] opacity-80">{msg.time}</div>
                  </div>
                </div>
              ) : (
                <div className="flex items-end gap-2">
                  <div className="h-8 w-8 shrink-0 rounded-full bg-cover" style={{ backgroundImage: `url(https://github.com/wookminkang.png)` }} />
                  <div className="max-w-[75%] rounded-2xl bg-muted px-3 py-2 text-sm text-foreground shadow">
                    {msg.text}
                    <div className="mt-1 text-right text-[10px] text-muted-foreground">{msg.time}</div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </main>

      {/* Quick phrases */}
      <div className="pointer-events-auto sticky bottom-16 z-5 -mt-12 w-full px-4">
        <div className="no-scrollbar flex gap-2 overflow-x-auto py-2">
          <button className="shrink-0 rounded-full border bg-white px-3 py-1.5 text-sm hover:bg-gray-50">안녕하세요.</button>
          <button className="shrink-0 rounded-full border bg-white px-3 py-1.5 text-sm hover:bg-gray-50">구매 가능할까요?</button>
          <button className="shrink-0 rounded-full border bg-white px-3 py-1.5 text-sm hover:bg-gray-50">혹시 예약 가능한가요?</button>
        </div>
      </div>

      {/* Input area */}
      <footer className="pointer-events-auto sticky bottom-0 z-5 border-t bg-background px-3 py-2">
        <div className="flex items-end gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-muted">
            <Plus className="h-5 w-5" />
          </button>
          <div className="flex min-h-10 flex-1 items-center gap-2 rounded-2xl border bg-background px-3">
            <input
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              placeholder="메시지 보내기"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted">
              <Smile className="h-5 w-5" />
            </button>
          </div>
          <button 
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white hover:opacity-90"
            onClick={handleSendMessage}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </footer>
    </div>
  )
}

export { Carrot }