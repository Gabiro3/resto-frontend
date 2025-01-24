import {
    BookOpen,
    Bot,
    Coffee,
    CupSoda,
    CupSodaIcon,
    File,
    FileBadge,
    FileBarChart,
    ForkKnife,
    ForkKnifeCrossed,
    ForkKnifeIcon,
    Frame,
    FrameIcon,
    HomeIcon,
    Map,
    PersonStanding,
    PersonStandingIcon,
    PieChart,
    PieChartIcon,
    PlusIcon,
    Settings,
    Settings2,
    SquareTerminal,
  } from "lucide-react"
  import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
  import { type SidebarData } from './types.js'
  
  export const sidebarData: SidebarData = {
    user: {
      name: 'satnaing',
      email: 'satnaingdev@gmail.com',
      avatar: '/avatars/shadcn.jpg',
    },
    teams: [
      {
        name: 'Shadcn Admin',
        logo: Command,
        plan: 'Vite + ShadcnUI',
      },
      {
        name: 'Acme Inc',
        logo: GalleryVerticalEnd,
        plan: 'Enterprise',
      },
      {
        name: 'Acme Corp.',
        logo: AudioWaveform,
        plan: 'Startup',
      },
    ],
    navGroups: [
      {
        title: 'General',
        items: [
          {
            title: 'Dashboard',
            url: '/',
            icon: HomeIcon,
          },
          {
            title: 'Tasks',
            url: '/tasks',
            icon: Map,
          },
          {
            title: 'Apps',
            url: '/apps',
            icon: PieChartIcon,
          },
          {
            title: 'Chats',
            url: '/chats',
            badge: '3',
            icon: Settings,
          },
          {
            title: 'Users',
            url: '/users',
            icon: File,
          },
        ],
      },
      {
        title: 'Pages',
        items: [
          {
            title: 'Auth',
            icon: FrameIcon,
            items: [
              {
                title: 'Sign In',
                url: '/sign-in',
              },
              {
                title: 'Sign In (2 Col)',
                url: '/sign-in-2',
              },
              {
                title: 'Sign Up',
                url: '/sign-up',
              },
              {
                title: 'Forgot Password',
                url: '/forgot-password',
              },
              {
                title: 'OTP',
                url: '/otp',
              },
            ],
          },
          {
            title: 'Errors',
            icon: FileBadge,
            items: [
              {
                title: 'Unauthorized',
                url: '/401',
                icon: Bot,
              },
              {
                title: 'Forbidden',
                url: '/403',
                icon: CupSodaIcon,
              },
              {
                title: 'Not Found',
                url: '/404',
                icon: ForkKnifeIcon,
              },
              {
                title: 'Internal Server Error',
                url: '/500',
                icon: BookOpen,
              },
              {
                title: 'Maintenance Error',
                url: '/503',
                icon: SquareTerminal,
              },
            ],
          },
        ],
      },
      {
        title: 'Other',
        items: [
          {
            title: 'Settings',
            icon: FileBadge,
            items: [
              {
                title: 'Profile',
                url: '/settings',
                icon: FileBadge,
              },
              {
                title: 'Account',
                url: '/settings/account',
                icon: FileBadge,
              },
              {
                title: 'Appearance',
                url: '/settings/appearance',
                icon: FileBadge,
              },
              {
                title: 'Notifications',
                url: '/settings/notifications',
                icon: FileBadge,
              },
              {
                title: 'Display',
                url: '/settings/display',
                icon: FileBadge,
              },
            ],
          },
          {
            title: 'Help Center',
            url: '/help-center',
            icon: FileBadge,
          },
        ],
      },
    ],
  }