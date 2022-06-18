import { GoMarkGithub } from 'react-icons/go'

function navbar_menu({pagina}) {
  return (
    <div className="flex items-center  ">
      <ul className="flex divide-x-2 ">
        <li className="p-2 text-lg text-white cursor-pointer hover:scale-110 hover:underline decoration-4 tracking-widest">Home</li>
        <li className="p-2 text-lg text-white cursor-pointer tracking-widest">{pagina}</li>
        <li className="p-2 text-lg text-white flex cursor-pointer tracking-widest">Github<GoMarkGithub /></li>
      </ul>
    </div>
  )
}

export default navbar_menu