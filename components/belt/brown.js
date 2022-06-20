

function brown() {
  return (
    <>
      <div className=' h-14 w-full bg-gradient-to-b from-purple-100 to-amber-100'></div>
      <div className=' bg-amber-100 h-screen w-full'>
          <h2 className=' text-4xl text-amber-800 font-mono pl-32 pt-20'>BROWN BELT</h2>
          <div className=' grid grid-cols-3 grid-rows-6 h-full w-10/12 pl-28 '>
            <p className=' border-2 border-solid h-96 mr-8 mt-4 row-span-6 col-span-2 p-4 font-medium text-lg text-black bg-white border-amber-100 shadow-amber-50 shadow-[10px_10px_1px_0px_rgba(0,0,0,0.1)] pr-12'>De brown belt is bekend met vrijwel ieder trucje en techniek in de kunst. Het enige verschil met de black belt zijn de subtiele nuances. </p>
            <div className='row-span-4'>
              <p className='mt-4 ml-8 bg-white grid grid-cols-2 p-4 border-2 border-solid border-amber-100 shadow-amber-50 shadow-[10px_10px_1px_0px_rgba(0,0,0,0.1)]'>
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
              <button className='ml-8 w-44 h-12 rounded-lg border-4 border-solid border-white bg-amber-600 text-white'>PROGRAM</button>   
            </div>

          </div>
      </div>
    </>
  )
}

export default brown