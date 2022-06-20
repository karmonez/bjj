

function purple() {
  return (
    <>
      <div className=' h-14 w-full bg-gradient-to-b from-blue-100 to-purple-100'></div>
      <div className=' bg-purple-100 h-screen w-full'>
          <h2 className=' text-4xl text-purple-800 font-mono pl-32 pt-20'>PURPLE BELT</h2>
          <div className=' grid grid-cols-3 grid-rows-6 h-full w-10/12 pl-28 '>
            <p className='border-2 border-solid h-96 mr-8 mt-4 row-span-6 col-span-2 p-4 font-medium text-lg text-black bg-white border-purple-200 shadow-purple-50 shadow-[10px_10px_1px_0px_rgba(0,0,0,0.1)] pr-12'>De Purple belt heeft de basis onder de knie en kan <i>effectief</i> aanvallen en verdedigen. De purple belt beperkt en elimineert onnodige handelingen. In deze fase is de BJJ beoefenaar opzoek naar een eigen style en perfectioneert de technieken die al effectief in de praktijk worden uitgevoerd.</p>
            <div className='row-span-4'>
              <p className='mt-4 ml-8 bg-white grid grid-cols-2 p-4 border-2 border-solid border-purple-200 shadow-purple-50 shadow-[10px_10px_1px_0px_rgba(0,0,0,0.1)]'>
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
              <button className='ml-8 w-44 h-12 rounded-lg border-4 border-solid border-white bg-purple-400 text-white '>PROGRAM</button>   
            </div>

          </div>    

      </div>
    </>
  )
}

export default purple