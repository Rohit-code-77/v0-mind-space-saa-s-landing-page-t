import Image from "next/image"

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-32 h-32 flex items-center justify-center hover:scale-105 transition-transform duration-300">
        <Image
          src="/images/6258135566868220830.jpg"
          alt="PF WALLAH Logo"
          width={160}
          height={160}
          className="w-full h-full object-contain drop-shadow-lg"
          priority
          quality={100}
          unoptimized
        />
      </div>

      <span className="font-bold text-3xl text-[#1a3a5c] hidden sm:inline">PF WALLAH</span>
    </div>
  )
}
