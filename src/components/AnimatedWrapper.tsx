'use client'

import { LayoutGroup } from "framer-motion"

interface AnimatedWrapperProps {
  children: React.ReactNode
}
export function AnimatedWrapper({ children}: AnimatedWrapperProps) {
  return (
    <LayoutGroup>
      {children}
    </LayoutGroup>
  )
}