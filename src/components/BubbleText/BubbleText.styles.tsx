import styled from 'styled-components'

export const BubbleTextLetter = styled.h2<{ id: string }>`
  .bubble-char-${({ id = 'default' }) => id} {
    font-family: 'Montserrat', sans-serif;
    transition: 0.35s font-weight, 0.35s color;
  }

  .hover-text-${({ id = 'default' }) => id} {
    font-weight: 900;
    color: rgb(238, 242, 255);
  }

  .hover-text-adj-${({ id = 'default' }) => id} {
    font-weight: 500;
    color: rgb(199, 210, 254);
  }

  .hover-text-adj-adj-${({ id = 'default' }) => id} {
    font-weight: 300;
  }
`
