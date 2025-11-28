import Image from 'next/image'

interface LogoProps {
  className?: string
  variant?: 'default' | 'light'
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Alignment Logo"
      width={100}
      height={100}
      className={className}
    />
  )
}
