"use client"

import React, { useContext } from 'react';
import userContext from '@/pages/waiter/Service.jsx';
import { Store, Pizza, Salad, Coffee, BeerIcon, WineIcon, ForkKnife, CupSodaIcon } from 'lucide-react'
import { MenuItem } from "@/components/ui/waiter/menu-item.js"
import { NotificationCard } from "@/components/ui/waiter/notification-card.js"
import { TakeOrderButton } from "@/components/ui/waiter/take-order-button.js"

export default function Dashboard() {
  const user = useContext(userContext);
  const [currentTime, setCurrentTime] = React.useState(new Date())

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-EN', { day: 'numeric', month: 'long', weekday: 'long' })
  }

  const menuItems = [
    { icon: ForkKnife, label: "Main Dishes", href: "/service/meals" },
    { icon: Pizza, label: "Pizzas", href: "/service/meals" },
    { icon: Salad, label: "Salads", href: "/service/meals" },
    { icon: Store, label: "Soups", href: "/service/meals" },
    { icon: Coffee, label: "Hot Drinks", href: "/service/beverages" },
    { icon: BeerIcon, label: "Alcoholic Drinks", href: "/service/beverages" },
    { icon: CupSodaIcon, label: "Soft Drinks", href: "/service/smoothies" },
    { icon: WineIcon, label: "Wines", href: "/service/beverages" },
  ]
  const notifications = [
    {
      icon: 'home' as const,
      title: 'Home page',
      time: 15.27,
      href: '/service/home'
    },
    {
      icon: 'bill' as const,
      title: 'Bill details',
      time: 14.56,
      href: '/service/orders'
    },
    {
      icon: 'services' as const,
      title: 'My services',
      time: 13.40,
      href: '/service/my-services'
    }
  ]

  return (
    <div className="min-h-screen bg-[hsl(30,30%,97%)] text-[hsl(30,10%,20%)]">
      <header className="flex items-center justify-between p-4 bg-[hsl(30,25%,95%)] text-[hsl(30,10%,20%)] border-b border-[hsl(30,15%,90%)]">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Maze POS</h1>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm">Internet</span>
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Server</span>
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Staff Portal</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-72 p-6 bg-[hsl(30,25%,95%)] text-[hsl(30,10%,20%)] border-r border-[hsl(30,15%,90%)]">
          <div className="mb-6">
            <div className="text-6xl font-light">{formatTime(currentTime)}</div>
            <div className="mt-2 text-sm opacity-80">{formatDate(currentTime)}</div>
            <div className="mt-2 flex items-center">
              <span className="text-2xl">12°</span>
              <span className="ml-2 text-sm opacity-80">Sunny</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-sm uppercase tracking-wider opacity-80">Notifications</h2>
            {notifications.map((notification) => (
              <NotificationCard
                key={notification.href}
                icon={notification.icon}
                title={notification.title}
                time={notification.time}
                href={notification.href}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-white">
          <div className="grid grid-cols-4 gap-6">
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                icon={item.icon}
                label={item.label}
                href={item.href}
              />
            ))}
          </div>
          <TakeOrderButton />
        </div>
      </div>
    </div>
  )
}




