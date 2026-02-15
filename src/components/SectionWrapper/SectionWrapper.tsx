import React from 'react'

import { styles } from '../../config/styles'

const SectionWrapper = (Component: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <section className={`${styles.padding} mt-1.5 relative z-0 mx-auto max-w-7xl`}>
        <span className="-mt-[100px] block pb-[100px]" id={idName}>
          &nbsp;
        </span>

        <Component />
      </section>
    )
  }

export default SectionWrapper
