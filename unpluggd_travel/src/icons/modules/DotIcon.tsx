import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function DotIcon(props) {
  return (
    <Svg width='22' height='4' viewBox='0 0 22 4' fill='none'>
      <Path
        d='M2.75 3.125C3.37132 3.125 3.875 2.62132 3.875 2C3.875 1.37868 3.37132 0.875 2.75 0.875C2.12868 0.875 1.625 1.37868 1.625 2C1.625 2.62132 2.12868 3.125 2.75 3.125Z'
        stroke='black'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M11 3.125C11.6213 3.125 12.125 2.62132 12.125 2C12.125 1.37868 11.6213 0.875 11 0.875C10.3787 0.875 9.875 1.37868 9.875 2C9.875 2.62132 10.3787 3.125 11 3.125Z'
        stroke='black'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M19.25 3.125C19.8713 3.125 20.375 2.62132 20.375 2C20.375 1.37868 19.8713 0.875 19.25 0.875C18.6287 0.875 18.125 1.37868 18.125 2C18.125 2.62132 18.6287 3.125 19.25 3.125Z'
        stroke='black'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
}

export { DotIcon };
