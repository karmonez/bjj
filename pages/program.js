import Link from "next/link"

export default function program() {

  return (
    <div className=" bg-gradient-to-r from-cyan-200 to-blue-200 h-screen w-screen pt-10 ">
        <fieldset className=" text-gray-800 text-lg font-mono border-solid border-2 border-blue-100 mx-96 rounded-lg p-4 bg-blue-50 shadow-sky-100 shadow-[10px_10px_10px_5px_rgba(0,0,0,0.1)]">
          <legend className="bg-blue-800 text-white p-2 text-center">Program blue belt</legend>
          <ul>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 3 submissions from Guard</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 3 submissions from Side Control</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 3 submissions from Mount</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 3 submissions from the back</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 1 Close Guard sweep</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 1 Open Guard sweep</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 1 Butterfly sweep</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 2 Guard passes full Guard</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 2 Half Guard sweeps</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 2 Escapes Side Control</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 2 Escapes from Mount</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 2 Escapes Rear Mount</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 2 straight enkel locks</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> 3 Take Downs</li>
            <li><input type="checkbox" className="accent-green-500 cursor-pointer"></input> Defend: Armbar, Kimora, Triangle Chocke, Guiliotiune</li>
          </ul>
        </fieldset>
        <div className="mx-96">
          <button className=' ml-72 mt-8 w-48 h-12 rounded-lg border-4 border-solid border-white bg-blue-400 text-white cursor-pointer'><Link href="/">HOME</Link></button>
        </div>
    </div>
  )
}

