import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function LocationIcon(props) {
  return (
    <Svg width='16' height='20' viewBox='0 0 16 20' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8 19.5C8 19.5 0 14.3182 0 8.27273C3.16163e-08 6.21127 0.842855 4.23425 2.34315 2.77658C3.84344 1.31891 5.87827 0.5 8 0.5C10.1217 0.5 12.1566 1.31891 13.6569 2.77658C15.1571 4.23425 16 6.21127 16 8.27273C16 14.3182 8 19.5 8 19.5ZM7.99996 10.8633C6.52721 10.8633 5.3333 9.70333 5.3333 8.27241C5.3333 6.84149 6.52721 5.6815 7.99996 5.6815C9.47272 5.6815 10.6666 6.84149 10.6666 8.27241C10.6666 9.70333 9.47272 10.8633 7.99996 10.8633Z'
        fill='#FF7D0D'
      />
    </Svg>
  );
}

export { LocationIcon };
