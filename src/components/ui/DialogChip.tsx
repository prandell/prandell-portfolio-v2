import React from 'react'

const DialogChip: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => (
  <button
    type="button"
    className={`border border-white/20 bg-[#1d1d1d] px-2.5 py-[7px] font-mono text-[10px] uppercase tracking-[0.08em] text-[#d5d0c6] hover:bg-[#2a2a2a] hover:text-[#f2efe9]${className ? ` ${className}` : ''}`}
    {...props}
  >
    {children}
  </button>
)

export default DialogChip
