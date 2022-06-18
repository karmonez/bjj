import Image from "next/image"

function navbar_logo() {
  return (
    <div className="flex items-center">
        <Image src="/bjj.png" width={100} height={40} />
    </div>
  )
}

export default navbar_logo