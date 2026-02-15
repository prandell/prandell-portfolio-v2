import React, { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'

interface BubbleTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  bubbleText: string
  off?: boolean
}

const prevIndexFinder = (idx: number | null) => {
  return idx === 0 || idx === null ? null : idx - 1
}

const nextIndexFinder = (idx: number | null, wordLength: number) => {
  return idx === null || idx === wordLength - 1 ? null : idx + 1
}

const getElByIdx = (idx: number | null, container: HTMLElement) => {
  return idx !== null
    ? container.querySelector(`.bubble-char[data-index="${idx}"]`)
    : null
}

const bubbleCharOnHover = (
  e: MouseEvent<HTMLSpanElement>,
  textLength: number,
  container: HTMLElement
) => {
  const el = e.currentTarget
  const hoverIdxRaw = el.getAttribute('data-index')
  const hoverIdx = hoverIdxRaw ? parseInt(hoverIdxRaw) : null

  const prevIdx = prevIndexFinder(hoverIdx)
  const nextIdx = nextIndexFinder(hoverIdx, textLength)
  const prevPrevIdx = prevIndexFinder(prevIdx)
  const nextNextIdx = nextIndexFinder(nextIdx, textLength)

  const prevEl = getElByIdx(prevIdx, container)
  const prevPrevEl = getElByIdx(prevPrevIdx, container)
  const nextEl = getElByIdx(nextIdx, container)
  const nextNextEl = getElByIdx(nextNextIdx, container)

  el.classList.add('hover-active')
  prevEl && prevEl.classList.add('hover-adj')
  nextEl && nextEl.classList.add('hover-adj')
  prevPrevEl && prevPrevEl.classList.add('hover-adj-adj')
  nextNextEl && nextNextEl.classList.add('hover-adj-adj')
}

const BubbleText: React.FC<BubbleTextProps> = ({
  bubbleText,
  off,
  ...props
}) => {
  const bubbleChars = useRef<HTMLHeadingElement | null>(null)

  const removeClasses = () => {
    const children = bubbleChars.current?.children ?? []

    Array.from(children).forEach((child) => {
      if (!(child instanceof HTMLElement)) {
        return
      }

      child.classList.remove('hover-active')
      child.classList.remove('hover-adj')
      child.classList.remove('hover-adj-adj')
    })
  }

  useEffect(() => {
    removeClasses()
  }, [off])

  return (
    <h2
      ref={bubbleChars}
      onMouseLeave={removeClasses}
      {...props}
    >
      {bubbleText.split('').map((child, idx) => (
        <span
          onMouseOver={(e) => {
            removeClasses()
            if (!off && bubbleChars.current) {
              bubbleCharOnHover(e, bubbleText.length, bubbleChars.current)
            }
          }}
          className="bubble-char"
          data-index={idx}
          key={idx}
        >
          {child}
        </span>
      ))}
    </h2>
  )
}

export default BubbleText
