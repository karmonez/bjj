import Navbar_logo from "./navbar_logo"
import Navbar_menu from "./navbar_menu"
import Navbar_button from "./navbar_button"

function navbar() {
  return (
    <header className=" flex justify-around pt-4 pb-2 sticky top-0 z-10 bg-gray-600 border-b-4">
        <Navbar_logo />
        <Navbar_menu pagina="Technieken"/>
        <Navbar_button />

    </header>
  )
}

export default navbar