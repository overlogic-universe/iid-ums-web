import { Button } from '@/components/ui/button';
import { TrashIcon } from '@radix-ui/react-icons';
import { NextPage } from 'next'

interface Props {
    onClick: () => void
}

const RemoveButton: NextPage<Props> = ({onClick}) => {
  return <Button
  className="absolute top-0 left-0 items-center justify-center w-45 h-45 flex bg-red-500 rounded-sm m-2 p-1 cursor-pointer hover:bg-red-700 shadow-lg shadow-red-300"
  onClick={onClick}
>
  <TrashIcon className="text-white w-6 h-6"/>
</Button>
}

export default RemoveButton