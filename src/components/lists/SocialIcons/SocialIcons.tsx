import { motion } from 'framer-motion'
import { useRef } from 'react'
import Facebook from '@/assets/icons/facebook.svg?react'
import Instagram from '@/assets/icons/instagram.svg?react'
import Youtube from '@/assets/icons/youtube.svg?react'
import Tiktok from '@/assets/icons/tiktok.svg?react'

export const SocialIcons = () => {
  return (
    <motion.ul
      className="text-white flex gap-3"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 }}
    >
      <li>
        <GlowIcon
          href="https://www.facebook.com/profile.php?id=61559913531013&locale=uk_UA"
          label="facebook"
        >
          <Facebook />
        </GlowIcon>
      </li>
      <li>
        <GlowIcon
          href="https://www.instagram.com/drone.pegasusarms?igsh=MXVyYzV3aGVlbWRoNg%3D%3D&utm_source=qr"
          label="instagram"
        >
          <Instagram />
        </GlowIcon>
      </li>
      <li>
        <GlowIcon
          href="https://youtube.com/@pegasusarmsukraine?si=phZUjIuPs0lCvMd_"
          label="youtube"
        >
          <Youtube />
        </GlowIcon>
      </li>
      <li>
        <GlowIcon
          href="https://www.tiktok.com/@drone.pegasusarms?_t=ZM-8vlt5EPwJHD"
          label="tiktok"
        >
          <Tiktok />
        </GlowIcon>
      </li>
    </motion.ul>
  )
}

function GlowIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement | null>(null)

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--x', `${x}px`)
    el.style.setProperty('--y', `${y}px`)
  }

  return (
    <motion.a
      ref={ref}
      target="_blank"
      rel="nofollow noopener"
      aria-label={label}
      href={href}
      onMouseMove={onMove}
      whileHover={{ scale: 1.05, rotate: 2, y: -2 }}
      whileTap={{ scale: 0.98, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`
        relative block rounded-sm border border-[#FDFFFF] p-[3px]
        overflow-hidden
        
        transition-[border-color,box-shadow] duration-300
        hover:border-[#FF6600]/60
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6600]
        [background:
          radial-gradient(140px_140px_at_var(--x,50%)_var(--y,50%),
          rgba(255,102,0,0.18),transparent 60%)
        ]
        hover:shadow-[0_0_0_1px_rgba(255,102,0,0.35),0_0_22px_rgba(255,102,0,0.25)]
      `}
      style={{
        ['--x' as any]: '50%',
        ['--y' as any]: '50%',
      }}
    >
      <div className="grid place-items-center">{children}</div>
    </motion.a>
  )
}
