import { TypeIcon as type, LucideIcon } from 'lucide-react'

interface MenuItemProps {
  icon: LucideIcon
  label: string
  href: string
}

export function MenuItem({ icon: Icon, label, href }: MenuItemProps) {
  return (
    <a href={href} className="group flex cursor-pointer flex-col items-center justify-center p-6 transition-all hover:bg-[hsl(30,25%,95%)] bg-[hsl(30,30%,97%)] rounded-lg border border-[hsl(30,15%,90%)]">
      <Icon className="h-12 w-12 text-[hsl(30,45%,50%)]" />
      <span className="mt-4 text-[hsl(30,10%,20%)] font-medium">{label}</span>
    </a>
  )
}




