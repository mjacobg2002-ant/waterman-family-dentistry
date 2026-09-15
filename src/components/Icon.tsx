import {
  Users,
  Sparkles,
  Smile,
  ShieldCheck,
  Anchor,
  Stethoscope,
  HeartHandshake,
  MessageCircle,
  Target,
  Leaf,
  type LucideProps,
} from 'lucide-react'

const map = {
  Users,
  Sparkles,
  Smile,
  ShieldCheck,
  Anchor,
  Stethoscope,
  HeartHandshake,
  MessageCircle,
  Target,
  Leaf,
} as const

export type IconName = keyof typeof map

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name]
  return <Cmp {...props} />
}
