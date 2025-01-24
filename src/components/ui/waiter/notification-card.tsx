import { Home, Receipt, Settings, TypeIcon as type, LucideIcon } from 'lucide-react'

interface NotificationCardProps {
  icon: 'home' | 'bill' | 'services'
  title: string
  time: number
  href: string
}

const iconMap: Record<NotificationCardProps['icon'], LucideIcon> = {
  home: Home,
  bill: Receipt,
  services: Settings
}

export function NotificationCard({ icon, title, time, href }: NotificationCardProps) {
  const Icon = iconMap[icon]
  
  return (
    <a
      href={href}
      className="block rounded-lg bg-white p-3 border border-[hsl(30,15%,90%)] hover:bg-[hsl(30,25%,95%)] transition-colors"
    >
      <div className="flex items-center space-x-2">
        <Icon className="h-4 w-4 text-[hsl(30,45%,50%)]" />
        <span className="text-[hsl(30,10%,20%)]">{title}</span>
      </div>
      <div className="mt-1 text-sm text-[hsl(30,10%,20%)] opacity-60">Click to view</div>
    </a>
  )
}

