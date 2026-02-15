import React, { useEffect, useRef } from 'react'
import type { MouseEvent } from 'react'
import { BubbleTextLetter } from './BubbleText.styles'

interface BubbleTextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  bubbleText: string
  off?: boolean
  id: string
}

const prevIndexFinder = (idx: number | null) => {
  return idx === 0 || idx === null ? null : idx - 1
}

const nextIndexFinder = (idx: number | null, wordLength: number) => {
  return idx === null || idx === wordLength - 1 ? null : idx + 1
}

const getElByIdx = (idx: number | null, id: string) => {
  return idx !== null
    ? document.querySelector(`.bubble-char-${id}[data-index="${idx}"]`)
    : null
}

const bubbleCharOnHover = (
  e: MouseEvent<HTMLSpanElement>,
  textLength: number,
  id: string
) => {
  const el = e.currentTarget
  const hoverIdxRaw = el.getAttribute('data-index')
  const hoverIdx = hoverIdxRaw ? parseInt(hoverIdxRaw) : null

  const prevIdx = prevIndexFinder(hoverIdx)
  const nextIdx = nextIndexFinder(hoverIdx, textLength)
  const prevPrevIdx = prevIndexFinder(prevIdx)
  const nextNextIdx = nextIndexFinder(nextIdx, textLength)

  const prevEl = getElByIdx(prevIdx, id)
  const prevPrevEl = getElByIdx(prevPrevIdx, id)
  const nextEl = getElByIdx(nextIdx, id)
  const nextNextEl = getElByIdx(nextNextIdx, id)

  el.classList.add(`hover-text-${id}`)
  prevEl && prevEl.classList.add(`hover-text-adj-${id}`)
  nextEl && nextEl.classList.add(`hover-text-adj-${id}`)
  prevPrevEl && prevPrevEl.classList.add(`hover-text-adj-adj-${id}`)
  nextNextEl && nextNextEl.classList.add(`hover-text-adj-adj-${id}`)
}

const BubbleText: React.FC<BubbleTextProps> = ({
  bubbleText,
  id,
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

      child.classList.remove(`hover-text-${id}`)
      child.classList.remove(`hover-text-adj-${id}`)
      child.classList.remove(`hover-text-adj-adj-${id}`)
    })
  }

  useEffect(() => {
    removeClasses()
  }, [off])

  return (
    <BubbleTextLetter
      id={id}
      ref={bubbleChars}
      onMouseLeave={removeClasses}
      {...props}
    >
      {bubbleText.split('').map((child, idx) => (
        <span
          onMouseOver={(e) => {
            removeClasses()
            !off && bubbleCharOnHover(e, bubbleText.length, id)
          }}
          className={`bubble-char-${id}`}
          data-index={idx}
          key={idx}
        >
          {child}
        </span>
      ))}
    </BubbleTextLetter>
  )
}

export default BubbleText
