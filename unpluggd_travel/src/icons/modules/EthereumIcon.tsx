import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function EthereumIcon(props) {
  return (
    <Svg width='41' height='41' viewBox='0 0 41 41' fill='none'>
      <Path
        d='M10.0117 23.3589L20.4095 37.9157L30.8072 23.3589L20.4095 29.5975L10.0117 23.3589Z'
        fill='white'
        fill-opacity='0.65'
      />
      <Path
        d='M20.4091 3.81104L10.0114 21.2792L20.4091 27.5178L30.8068 21.2792L20.4091 3.81104Z'
        fill='white'
      />
    </Svg>
  );
}

export { EthereumIcon };
