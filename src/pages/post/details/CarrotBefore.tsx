import { ChevronLeft, Phone, MoreVertical, Plus, Smile, Send } from 'lucide-react'

function CarrotBefore() {
  return (
    <div className="flex flex-col bg-background text-foreground relative">
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
      <main className="h-[calc(100vh-580px)] space-y-4 overflow-y-auto px-4 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {/* Date divider */}
        <div className="relative my-4 text-center text-xs text-muted-foreground">
          <span className="relative z-10 bg-background px-2">2025년 9월 16일</span>
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-border" />
        </div>

        {/* My message */}
        <div className="flex justify-end">
          <div className="max-w-[80%] rounded-2xl bg-orange-500 px-3 py-2 text-sm text-white shadow">
            안녕하세요. 관심 있어서 문의드려요.
            <div className="mt-1 text-right text-[10px] opacity-80">오후 12:48</div>
          </div>
        </div>

        {/* Other message */}
        <div className="flex items-end gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full bg-cover" style={{ backgroundImage: `url(https://github.com/wookminkang.png)` }} />
          <div className="max-w-[75%] rounded-2xl bg-muted px-3 py-2 text-sm text-foreground shadow">
            안녕하세요요
            <div className="mt-1 text-right text-[10px] text-muted-foreground">오후 12:49</div>
          </div>
        </div>
      </main>

      {/* Quick phrases */}
      <div className="pointer-events-auto sticky bottom-16 z-5 -mt-12 w-full px-4">
        <div className="no-scrollbar flex gap-2 overflow-x-auto py-2">
          <button className="shrink-0 rounded-full border px-3 py-1.5 text-sm hover:bg-muted">안녕하세요.</button>
          <button className="shrink-0 rounded-full border px-3 py-1.5 text-sm hover:bg-muted">구매 가능할까요?</button>
          <button className="shrink-0 rounded-full border px-3 py-1.5 text-sm hover:bg-muted">혹시 예약 가능한가요?</button>
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
              readOnly
            />
            <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-muted">
              <Smile className="h-5 w-5" />
            </button>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white hover:opacity-90">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </footer>
    </div>
  )
}

export { CarrotBefore }
