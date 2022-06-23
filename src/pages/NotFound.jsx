import React from 'react';
import styled from 'styled-components';
import fourOhFourBkgd from '../img/four_oh_four_bkgd.png';
import { device } from '../utils/Device';
import { colors, subtleFlicker } from '../utils/NeonAnimations';

const FourOhFour = styled.div`
  max-width: 100%;
  max-height: 100vh;
  background-image: url(${fourOhFourBkgd});
  background-repeat: 'no-repeat';
  background-position: 'center center';
  background-attachment: 'fixed';
  background-size: 'cover';
`;

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 85vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    display: flex;
    align-item: center;
    color: ${colors.white};
    font-size: 2rem;
    min-height: 100%;
    animation: ${subtleFlicker.neon_purple} 0.11s ease-in-out infinite
      alternate;
  }
  @media ${device.tablet} {
    min-height: 95vh;
    h2 {
      font-size: 4rem;
    }
  }
  @media ${device.desktop} {
    h2 {
      font-size: 5rem;
    }
  }
`;

function NotFound() {
  return (
    <FourOhFour>
      <Wrapper>
        <h2>404: Page Not Found!</h2>
      </Wrapper>
    </FourOhFour>
  );
}

export default NotFound;
