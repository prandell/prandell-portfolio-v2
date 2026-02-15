import React from 'react'

const base =
  'inline-flex items-center justify-center border border-black/12 bg-[#f2efe9] px-3 py-2 font-display text-[11px] uppercase tracking-[0.16em] text-black transition-[170ms] hover:bg-[#ddd8cf] hover:text-black'

type BrutalButtonProps =
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: 'a' })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' })

const BrutalButton = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  BrutalButtonProps
>((props, ref) => {
  const { as, className, ...rest } = props
  const cn = className ? `${base} ${className}` : base

  if (as === 'button') {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={cn}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    )
  }

  return (
    <a
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={cn}
      {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    />
  )
})

BrutalButton.displayName = 'BrutalButton'

export default BrutalButton
