import React from 'react'

const FocusChip: React.FC<React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }> = ({
  className,
  children,
  ...props
}) => (
  <span
    className={`inline-flex items-center justify-center bg-white/8 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#d7d2c9]${className ? ` ${className}` : ''}`}
    {...props}
  >
    {children}
  </span>
)

export default FocusChip
