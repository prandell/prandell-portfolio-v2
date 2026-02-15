import type { Easing, Transition, Variants } from 'framer-motion'

type TransitionType = Transition['type'] | ''

export const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay: delay
      }
    }
  }
}

export enum TransitionDirection {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  DOWN = 'down',
  NONE = ''
}

export const fadeIn = (
  direction: TransitionDirection,
  type: TransitionType,
  delay: number,
  duration: number
): Variants => {
  const transition: Transition = {
    delay,
    duration,
    ease: 'easeOut' as Easing
  }

  if (type) {
    transition.type = type
  }

  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition
    }
  }
}

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut' as Easing
      }
    }
  }
}

export const slideIn = (
  direction: TransitionDirection,
  type: TransitionType,
  delay: number,
  duration: number
): Variants => {
  const transition: Transition = {
    delay,
    duration,
    ease: 'easeOut' as Easing
  }

  if (type) {
    transition.type = type
  }

  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
    },
    show: {
      x: 0,
      y: 0,
      transition
    }
  }
}

export const staggerContainer = (
  staggerChildren?: number,
  delayChildren = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  }
}
