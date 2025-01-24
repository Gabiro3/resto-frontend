import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.js'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/01.png' alt='Avatar' />
          <AvatarFallback>FT</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Soft Drinks</p>
            <p className='text-sm text-muted-foreground'>
              e.g. Fanta, Juices, etc.
            </p>
          </div>
          <div className='font-medium'>Rwf 1,999.00</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/avatars/02.png' alt='Avatar' />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Alcoholic Drinks</p>
            <p className='text-sm text-muted-foreground'>
              e.g. Primus, Skol, Mutzig, etc.
            </p>
          </div>
          <div className='font-medium'>Rwf 39.00</div>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>AL</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Food & Meals</p>
            <p className='text-sm text-muted-foreground'>
              e.g. Pizza, Burgers, etc.
            </p>
          </div>
          <div className='font-medium'>Rwf 299.00</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>CF</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Tea & Coffee</p>
            <p className='text-sm text-muted-foreground'>e.g. Black Coffee, African Tea etc.</p>
          </div>
          <div className='font-medium'>Rwf 99.00</div>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>LQ</AvatarFallback>
        </Avatar>
        <div className='flex flex-1 flex-wrap items-center justify-between'>
          <div className='space-y-1'>
            <p className='text-sm font-medium leading-none'>Liquors & Spirits</p>
            <p className='text-sm text-muted-foreground'>
              e.g. Vodka, Konyagi, etc.
            </p>
          </div>
          <div className='font-medium'>Rwf 39.00</div>
        </div>
      </div>
    </div>
  )
}