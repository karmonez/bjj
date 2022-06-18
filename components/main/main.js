import Image from 'next/image'
import { VscFoldDown } from 'react-icons/vsc'
import { BsGithub } from 'react-icons/bs'

function main() {

  return (
    <>
    <div className=' h-screen w-100 relative '>
      <Image 
        src="/weg.jpg"
        layout="fill"
        objectFit="responsive"
      />
      <div className='flex justify-between p-8 '>
        <span className='relative text-5xl font-mono font-bold tracking-widest text-gray-500'>BJJ</span>
        <button className=' flex p-4 relative border-2 border-solid border-black hover:scale-125 transition duration-700 ease-in-out hover:border-red-600 font-semibold'><a className='flex whitespace-pre '>GITHUB <BsGithub /></a></button>
      </div>
      <h1 className='text-white text-7xl font-bold relative z-20 font-mono text-center pt-40 whitespace-pre'>  THE ROAD <br></br><span className='text-black'>TO</span><br></br> <span className='text-black tracking-wide'> BLACK </span><span className='underline underline-offset-4  decoration-black decoration-8'>BELT</span><span className='text-black'>.</span> </h1>
      <h3 className='relative z-10 flex justify-center text-6xl pt-12 animate-bounce text-red-600'><VscFoldDown /></h3>   
    </div>
    </>
  )
}

export default main