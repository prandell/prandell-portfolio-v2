import * as React from 'react'

import Lightbox from 'yet-another-react-lightbox'
import Inline from 'yet-another-react-lightbox/plugins/inline'
import 'yet-another-react-lightbox/styles.css'
import { map, home, login, nws, risk } from '../../assets'

const slides = [
  { src: map },
  { src: login },
  { src: home },
  { src: nws },
  { src: risk }
]

const PhotoLightbox: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  const toggleOpen = (state: boolean) => () => setOpen(state)

  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current)

  return (
    <>
      <Lightbox
        index={index}
        slides={slides}
        plugins={[Inline]}
        on={{
          view: updateIndex,
          click: toggleOpen(true)
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: 'cover'
        }}
        styles={{ container: { borderRadius: '5px' } }}
        inline={{
          style: {
            width: '100%',
            maxWidth: '900px',
            aspectRatio: '3 / 2',
            margin: '0 auto',
            cursor: 'pointer'
          }
        }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={slides}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </>
  )
}

export default PhotoLightbox
