import {
  DraftingCompass,
  Goal,
  List,
  Lightbulb,
  Rocket,
  CodeXml,
  Book,
} from "lucide-react"
import { Button } from "@/components/ui"

const CLASS_CATEGORY = [
  {
    id: 1,
    label: "전체",
    category: "",
    icon: <List className="w-4 h-4" />,
  },
  {
    id: 2,
    label: "인문학",
    category: "humanities",
    icon: <Lightbulb className="w-4 h-4" />,
  },
  {
    id: 3,
    label: "스타트업",
    category: "startup",
    icon: <Rocket className="w-4 h-4" />,
  },
  {
    id: 4,
    label: "IT 프로그래밍",
    category: "programming",
    icon: <CodeXml className="w-4 h-4" />,
  },
  {
    id: 5,
    label: "서비스 전략 기획",
    category: "strategy",
    icon: <Goal className="w-4 h-4" />,
  },
  {
    id: 6,
    label: "마케팅",
    category: "marketing",
    icon: <Goal className="w-4 h-4" />,
  },
  {
    id: 7,
    label: "디자인 일러스트",
    category: "design",
    icon: <DraftingCompass className="w-4 h-4" />,
  },
  {
    id: 8,
    label: "자기계발",
    category: "self-improvement",
    icon: <Book className="w-4 h-4" />,
  },
]

function ConstansCategory() {
  return (
    <div className="flex flex-col gap-2">
      {CLASS_CATEGORY.map((item) => (
        <Button
          key={item.id}
          variant={"ghost"}
          className="justify-start text-muted-foreground hover:text-white hover:pl-6 transition-all duration-500"
        >
          {item.icon}
          {item.label}
        </Button>
      ))}
    </div>
  )
}

export { ConstansCategory }
