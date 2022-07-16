import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function StarIcon(props) {
  return (
    <Svg width='20' height='19' viewBox='0 0 20 19' fill='none' {...props}>
      <Path
        d='M19.5688 7.38334H12.3409L10.1 0.376465L7.85906 7.38334H0.631248L6.47031 11.7074L4.26094 18.6827L10.1 14.3587L15.9391 18.6827L13.6981 11.6758L19.5688 7.38334Z'
        fill={props.color || '#F8F8F8'}
      />
    </Svg>
  );
}

export { StarIcon };
