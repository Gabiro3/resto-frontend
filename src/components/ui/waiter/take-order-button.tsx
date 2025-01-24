import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function TakeOrderButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/service/service');
  };

  return (
    <button
      onClick={handleClick}
      className="w-full mt-6 p-4 bg-[hsl(0,0%,0%)] text-white rounded-lg flex items-center justify-center text-xl font-semibold hover:bg-[hsl(0,0%,10%)] transition-colors"
    >
      <Plus className="mr-2" size={24} />
      Take Order
    </button>
  )
}

