import Link from "next/link"

function blue() {
  return (
    <>
      <div className=' h-14 w-full bg-gradient-to-b from-slate-500 to-blue-100'></div>
      <div className=' bg-blue-100 h-screen w-full '>
          <h2 className=' text-4xl text-blue-800 font-mono pl-32 pt-20'>BLUE BELT</h2>
          <div className=' grid grid-cols-3 grid-rows-6 h-full w-10/12 pl-28 '>
            <p className=' border-2 border-solid h-96 mr-8 mt-4 row-span-6 col-span-2 p-8 font-medium text-lg text-black bg-white border-sky-200 shadow-sky-100 shadow-[10px_10px_1px_0px_rgba(0,0,0,0.1)] pr-12 '>De blue belt is de tweede band in een reeks van vijf. Integenstelling tot de witte band wordt de blauwe band niet zo maar gegeven. Je moet het verdienen. Over het algemeen hebben instructeurs de vrijheid om zelf invulling te geven aan de voorwaarden en eisen waaraan voldoen moet worden om in aanmerking te komen voor de blauwe band. Echter zijn alle BJJ beoefenaars het met elkaar eens dat er een op z'n minst een degelijke kennis en skill van de basis vaardigheden moet zijn. De blue belt moet kunnen aanvallen en verdedigen. Het programma bestaat uit fundamentele vaardiheden die beheerst en uitgevoerd dienen te worden om gepromoveerd te kunnen worden tot BJJ BLUE BELT.</p>
            <div className='row-span-4'>
              <p className=' bg-white grid grid-cols-2 p-4 mt-4 ml-8 border-2 border-solid border-sky-200 shadow-sky-100 shadow-[10px_10px_1px_0px_rgba(0,0,0,0.1)]'>
                <h3 className=' text-xl font-bold'>OFFENCE</h3>
                <ul className=' list-inside p-4'>
                  <li>Guard</li>
                  <li>Close Guard</li>
                  <li>Side Guard</li>
                  <li>Side Control</li>
                  <li>Mount</li>
                  <li>Sweeps</li>
                </ul>
                <h3 className=' text-xl font-bold'>DEFFENCE</h3>
                <ul className=' list-inside p-4'>
                  <li>Guard</li>
                  <li>Close Guard</li>
                  <li>Side Guard</li>
                  <li>Side Control</li>
                  <li>Mount</li>
                  <li>Sweeps</li>
                </ul>
              </p>
            </div>
            <div>
              <button className=' ml-8 w-44 h-12 rounded-lg border-4 border-solid border-white bg-blue-400 text-white hover:scale-105 transition duration-700 ease-in-out hover:border-blue-800 font-semibold'><Link href="/program">PROGRAM</Link></button>  
            </div>
          </div>
      </div>

    </>
  )
}

export default blue