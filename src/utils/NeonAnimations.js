import { keyframes } from 'styled-components';

export const colors = {
  neon_yellow: '#ffd64c',
  neon_orange: '#ffb20b',
  neon_red: '#fe616c',
  neon_green: '#00be8e',
  neon_blue: '#0197e3',
  neon_purple: '#af0089',
  neon_pink: '#f900b8',
  electric_blue: '#40eef9',
  neon_lime: '#e7f701',
  neon_lemon: '#f7e600',
  neon_violet: '#9957f0',
  white: '#ffffff',
};

// animation: ${flicker} 2.5s infinite alternate;
export const flicker = {
  neon_yellow: keyframes`
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
    0 0 4px ${colors.white},
    0 0 11px ${colors.white},
    0 0 19px ${colors.white},
    0 0 40px ${colors.neon_yellow},
    0 0 80px ${colors.neon_yellow},
    0 0 90px ${colors.neon_yellow},
    0 0 100px ${colors.neon_yellow},
    0 0 150px ${colors.neon_yellow};
  }
  20%, 24%, 55% {        
    text-shadow: none;
  }`,
  neon_orange: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_orange},
      0 0 80px ${colors.neon_orange},
      0 0 90px ${colors.neon_orange},
      0 0 100px ${colors.neon_orange},
      0 0 150px ${colors.neon_orange};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_red: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_red},
      0 0 80px ${colors.neon_red},
      0 0 90px ${colors.neon_red},
      0 0 100px ${colors.neon_red},
      0 0 150px ${colors.neon_red};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_green: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_green},
      0 0 80px ${colors.neon_green},
      0 0 90px ${colors.neon_green},
      0 0 100px ${colors.neon_green},
      0 0 150px ${colors.neon_green};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_blue: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_blue},
      0 0 80px ${colors.neon_blue},
      0 0 90px ${colors.neon_blue},
      0 0 100px ${colors.neon_blue},
      0 0 150px ${colors.neon_blue};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_purple: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_purple},
      0 0 80px ${colors.neon_purple},
      0 0 90px ${colors.neon_purple},
      0 0 100px ${colors.neon_purple},
      0 0 150px ${colors.neon_purple};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_pink: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_pink},
      0 0 80px ${colors.neon_pink},
      0 0 90px ${colors.neon_pink},
      0 0 100px ${colors.neon_pink},
      0 0 150px ${colors.neon_pink};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  electric_blue: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.electric_blue},
      0 0 80px ${colors.electric_blue},
      0 0 90px ${colors.electric_blue},
      0 0 100px ${colors.electric_blue},
      0 0 150px ${colors.electric_blue};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_lime: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_lime},
      0 0 80px ${colors.neon_lime},
      0 0 90px ${colors.neon_lime},
      0 0 100px ${colors.neon_lime},
      0 0 150px ${colors.neon_lime};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_lemon: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_lemon},
      0 0 80px ${colors.neon_lemon},
      0 0 90px ${colors.neon_lemon},
      0 0 100px ${colors.neon_lemon},
      0 0 150px ${colors.neon_lemon};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
  neon_violet: keyframes`
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
      text-shadow:
      0 0 4px ${colors.white},
      0 0 11px ${colors.white},
      0 0 19px ${colors.white},
      0 0 40px ${colors.neon_violet},
      0 0 80px ${colors.neon_violet},
      0 0 90px ${colors.neon_violet},
      0 0 100px ${colors.neon_violet},
      0 0 150px ${colors.neon_violet};
    }
    20%, 24%, 55% {        
      text-shadow: none;
    }`,
};

// animation: ${pulsate} 2.5s infinite alternate;
export const pulsate = {
  neon_yellow: keyframes`
    100% {
      /* Larger blur radius */
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_yellow},
        0 0 80px ${colors.neon_yellow},
        0 0 90px ${colors.neon_yellow},
        0 0 100px ${colors.neon_yellow},
        0 0 150px ${colors.neon_yellow};
    }
    0% {
      /* Smaller blur radius */
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_yellow},
        0 0 45px ${colors.neon_yellow},
        0 0 55px ${colors.neon_yellow},
        0 0 70px ${colors.neon_yellow},
        0 0 80px ${colors.neon_yellow};
    }`,
  neon_orange: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_orange},
        0 0 80px ${colors.neon_orange},
        0 0 90px ${colors.neon_orange},
        0 0 100px ${colors.neon_orange},
        0 0 150px ${colors.neon_orange};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_orange},
        0 0 45px ${colors.neon_orange},
        0 0 55px ${colors.neon_orange},
        0 0 70px ${colors.neon_orange},
        0 0 80px ${colors.neon_orange};
    }`,
  neon_red: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_red},
        0 0 80px ${colors.neon_red},
        0 0 90px ${colors.neon_red},
        0 0 100px ${colors.neon_red},
        0 0 150px ${colors.neon_red};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_red},
        0 0 45px ${colors.neon_red},
        0 0 55px ${colors.neon_red},
        0 0 70px ${colors.neon_red},
        0 0 80px ${colors.neon_red};
    }`,
  neon_green: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_green},
        0 0 80px ${colors.neon_green},
        0 0 90px ${colors.neon_green},
        0 0 100px ${colors.neon_green},
        0 0 150px ${colors.neon_green};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_green},
        0 0 45px ${colors.neon_green},
        0 0 55px ${colors.neon_green},
        0 0 70px ${colors.neon_green},
        0 0 80px ${colors.neon_green};
    }`,
  neon_blue: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_blue},
        0 0 80px ${colors.neon_blue},
        0 0 90px ${colors.neon_blue},
        0 0 100px ${colors.neon_blue},
        0 0 150px ${colors.neon_blue};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_blue},
        0 0 45px ${colors.neon_blue},
        0 0 55px ${colors.neon_blue},
        0 0 70px ${colors.neon_blue},
        0 0 80px ${colors.neon_blue};
    }`,
  neon_purple: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_purple},
        0 0 80px ${colors.neon_purple},
        0 0 90px ${colors.neon_purple},
        0 0 100px ${colors.neon_purple},
        0 0 150px ${colors.neon_purple};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_purple},
        0 0 45px ${colors.neon_purple},
        0 0 55px ${colors.neon_purple},
        0 0 70px ${colors.neon_purple},
        0 0 80px ${colors.neon_purple};
    }`,
  neon_pink: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_pink},
        0 0 80px ${colors.neon_pink},
        0 0 90px ${colors.neon_pink},
        0 0 100px ${colors.neon_pink},
        0 0 150px ${colors.neon_pink};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_pink},
        0 0 45px ${colors.neon_pink},
        0 0 55px ${colors.neon_pink},
        0 0 70px ${colors.neon_pink},
        0 0 80px ${colors.neon_pink};
    }`,
  electric_blue: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.electric_blue},
        0 0 80px ${colors.electric_blue},
        0 0 90px ${colors.electric_blue},
        0 0 100px ${colors.electric_blue},
        0 0 150px ${colors.el};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.electric_blue},
        0 0 45px ${colors.electric_blue},
        0 0 55px ${colors.electric_blue},
        0 0 70px ${colors.electric_blue},
        0 0 80px ${colors.electric_blue};
    }`,
  neon_lime: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_lime},
        0 0 80px ${colors.neon_lime},
        0 0 90px ${colors.neon_lime},
        0 0 100px ${colors.neon_lime},
        0 0 150px ${colors.neon_lime};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_lime},
        0 0 45px ${colors.neon_lime},
        0 0 55px ${colors.neon_lime},
        0 0 70px ${colors.neon_lime},
        0 0 80px ${colors.neon_lime};
    }`,
  neon_lemon: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_lemon},
        0 0 80px ${colors.neon_lemon},
        0 0 90px ${colors.neon_lemon},
        0 0 100px ${colors.neon_lemon},
        0 0 150px ${colors.neon_lemon};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_lemon},
        0 0 45px ${colors.neon_lemon},
        0 0 55px ${colors.neon_lemon},
        0 0 70px ${colors.neon_lemon},
        0 0 80px ${colors.neon_lemon};
    }`,
  neon_violet: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_violet},
        0 0 80px ${colors.neon_violet},
        0 0 90px ${colors.neon_violet},
        0 0 100px ${colors.neon_violet},
        0 0 150px ${colors.neon_violet};
    }
    0% {
      text-shadow:
        0 0 2px ${colors.white},
        0 0 4px ${colors.white},
        0 0 6px ${colors.white},
        0 0 10px ${colors.neon_violet},
        0 0 45px ${colors.neon_violet},
        0 0 55px ${colors.neon_violet},
        0 0 70px ${colors.neon_violet},
        0 0 80px ${colors.neon_violet};
    }`,
};

// animation: ${subtleFlicker} 0.11s ease-in-out infinite alternate;
export const subtleFlicker = {
  neon_yellow: keyframes`
    100% {
      /* Larger blur radius */
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_yellow},
        0 0 80px ${colors.neon_yellow},
        0 0 90px ${colors.neon_yellow},
        0 0 100px ${colors.neon_yellow},
        0 0 150px ${colors.neon_yellow};
    }
    0% {
      /* A slightly smaller blur radius */
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_yellow},
        0 0 73px ${colors.neon_yellow},
        0 0 80px ${colors.neon_yellow},
        0 0 94px ${colors.neon_yellow},
        0 0 140px ${colors.neon_yellow};
    }`,
  neon_orange: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_orange},
        0 0 80px ${colors.neon_orange},
        0 0 90px ${colors.neon_orange},
        0 0 100px ${colors.neon_orange},
        0 0 150px ${colors.neon_orange};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_orange},
        0 0 73px ${colors.neon_orange},
        0 0 80px ${colors.neon_orange},
        0 0 94px ${colors.neon_orange},
        0 0 140px ${colors.neon_orange};
    }`,
  neon_red: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_red},
        0 0 80px ${colors.neon_red},
        0 0 90px ${colors.neon_red},
        0 0 100px ${colors.neon_red},
        0 0 150px ${colors.neon_red};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_red},
        0 0 73px ${colors.neon_red},
        0 0 80px ${colors.neon_red},
        0 0 94px ${colors.neon_red},
        0 0 140px ${colors.neon_red};
    }`,
  neon_green: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_green},
        0 0 80px ${colors.neon_green},
        0 0 90px ${colors.neon_green},
        0 0 100px ${colors.neon_green},
        0 0 150px ${colors.neon_green};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_green},
        0 0 73px ${colors.neon_green},
        0 0 80px ${colors.neon_green},
        0 0 94px ${colors.neon_green},
        0 0 140px ${colors.neon_green};
    }`,
  neon_blue: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_blue},
        0 0 80px ${colors.neon_blue},
        0 0 90px ${colors.neon_blue},
        0 0 100px ${colors.neon_blue},
        0 0 150px ${colors.neon_blue};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_blue},
        0 0 73px ${colors.neon_blue},
        0 0 80px ${colors.neon_blue},
        0 0 94px ${colors.neon_blue},
        0 0 140px ${colors.neon_blue};
    }`,
  neon_purple: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_purple},
        0 0 80px ${colors.neon_purple},
        0 0 90px ${colors.neon_purple},
        0 0 100px ${colors.neon_purple},
        0 0 150px ${colors.neon_purple};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_purple},
        0 0 73px ${colors.neon_purple},
        0 0 80px ${colors.neon_purple},
        0 0 94px ${colors.neon_purple},
        0 0 140px ${colors.neon_purple};
    }`,
  neon_pink: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_pink},
        0 0 80px ${colors.neon_pink},
        0 0 90px ${colors.neon_pink},
        0 0 100px ${colors.neon_pink},
        0 0 150px ${colors.neon_pink};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_pink},
        0 0 73px ${colors.neon_pink},
        0 0 80px ${colors.neon_pink},
        0 0 94px ${colors.neon_pink},
        0 0 140px ${colors.neon_pink};
    }`,
  electric_blue: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.electric_blue},
        0 0 80px ${colors.electric_blue},
        0 0 90px ${colors.electric_blue},
        0 0 100px ${colors.electric_blue},
        0 0 150px ${colors.electric_blue};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.electric_blue},
        0 0 73px ${colors.electric_blue},
        0 0 80px ${colors.electric_blue},
        0 0 94px ${colors.electric_blue},
        0 0 140px ${colors.electric_blue};
    }`,
  neon_lime: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_lime},
        0 0 80px ${colors.neon_lime},
        0 0 90px ${colors.neon_lime},
        0 0 100px ${colors.neon_lime},
        0 0 150px ${colors.neon_lime};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_lime},
        0 0 73px ${colors.neon_lime},
        0 0 80px ${colors.neon_lime},
        0 0 94px ${colors.neon_lime},
        0 0 140px ${colors.neon_lime};
    }`,
  neon_lemon: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_lemon},
        0 0 80px ${colors.neon_lemon},
        0 0 90px ${colors.neon_lemon},
        0 0 100px ${colors.neon_lemon},
        0 0 150px ${colors.neon_lemon};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_lemon},
        0 0 73px ${colors.neon_lemon},
        0 0 80px ${colors.neon_lemon},
        0 0 94px ${colors.neon_lemon},
        0 0 140px ${colors.neon_lemon};
    }`,
  neon_violet: keyframes`
    100% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 11px ${colors.white},
        0 0 19px ${colors.white},
        0 0 40px ${colors.neon_violet},
        0 0 80px ${colors.neon_violet},
        0 0 90px ${colors.neon_violet},
        0 0 100px ${colors.neon_violet},
        0 0 150px ${colors.neon_violet};
    }
    0% {
      text-shadow:
        0 0 4px ${colors.white},
        0 0 10px ${colors.white},
        0 0 18px ${colors.white},
        0 0 38px ${colors.neon_violet},
        0 0 73px ${colors.neon_violet},
        0 0 80px ${colors.neon_violet},
        0 0 94px ${colors.neon_violet},
        0 0 140px ${colors.neon_violet};
    }`,
};
