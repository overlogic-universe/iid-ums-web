import { NextPage } from 'next'


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return <embed className='w-screen h-screen' src='/guide-book.pdf'/>
}

export default Page