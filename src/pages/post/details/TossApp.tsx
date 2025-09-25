import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { Masker, commaizeNumber } from '@toss/utils';

type ITEM = {
  name: string // 계좌명
  balance: number // 잔액
  accountNumber: string // 계좌번호
  bank: string // Toss, KB, Woori, Shinhan, NH
  type: string // 예금, 적금, 대출
  isTransfer: boolean // true: 송금, false: 입금
}


const bankIcon: Record<string, React.ReactNode> = {
  TOSS: <img src="/images/bank/toss.png" alt="Toss" className="w-9 h-9" />,
  KB: <img src="/images/bank/kookmin.png" alt="KB" className="w-9 h-9" />,
  KAKAO: <img src="/images/bank/kakaopay.png" alt="Kakao" className="w-9 h-9" />,
  HANA: <img src="/images/bank/hana.png" alt="Hana" className="w-9 h-9" />,
  KBANK: <img src="/images/bank/kbank.png" alt="KBank" className="w-9 h-9" />
}



function TossApp() {  
  const [list, setList] = useState<ITEM[] | null>(null)
  const [isBlur, setIsBlur] = useState<boolean>(false)

  const arr = [
    {
      name: '토스',
      balance: 1000000,
      accountNumber: '1234567890',
      bank: 'TOSS',
      type: '예금',
      isTransfer: true
    },
    {
      name: '국민은행',
      balance: 1000000,
      accountNumber: '1234567890',
      bank: 'KB',
      type: '예금',
      isTransfer: true
    },
    {
      name: '카카오페이',
      balance: 1000000,
      accountNumber: '1234567890',
      bank: 'KAKAO',
      type: '예금',
      isTransfer: true
    },
    {
      name: '하나은행',
      balance: 1000000,
      accountNumber: '1234567890',
      bank: 'HANA',
      type: '예금',
      isTransfer: true
    },
    {
      name: 'KB뱅크',
      balance: 1000000,
      accountNumber: '1234567890',
      bank: 'KBANK',
      type: '예금',
      isTransfer: true
    }
  ]

  useEffect(() => {
    setList(arr)
  }, [])


  const blur = (e: boolean) => {    
    setIsBlur(e)
  }

  
  return (
    <div className="w-full flex justify-center">
      <div className="w-[min(420px,100%)] rounded-[20px] bg-white dark:bg-[#1a1a1a] border border-[#f3f5f720] shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-3">
        {/* 상단 우측 토글 */}
        <div className="flex justify-end mb-3">
          <Switch onCheckedChange={blur}/>
        </div>

        {/* 리스트 컨테이너 */}
        <div className="space-y-3">
          {list?.map((item, idx) => (
            <div key={idx} className="rounded-[16px] bg-zinc-50 dark:bg-zinc-900 px-3 py-3 flex items-center justify-between">
              {/* 좌측: 아이콘 + 텍스트 */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center ">
                  { bankIcon[item.bank] }
                </div>
                <div className="leading-tight">
                  <div className={`text-[15px] font-[800] text-zinc-900 dark:text-white ${isBlur && '!font-[600]'}`}>{ isBlur ? '비공개' : commaizeNumber(item.balance) + '원' }</div>
                  <div className={`text-[12px] text-zinc-400`}>{ isBlur ? Masker.maskName(item.name) : item.name}</div>
                </div>
              </div>

              {/* 우측: 송금 버튼 */}
              <div className="shrink-0">
                <div className="px-3 py-1.5 rounded-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200 text-[12px] font-[700]">송금</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export { TossApp }