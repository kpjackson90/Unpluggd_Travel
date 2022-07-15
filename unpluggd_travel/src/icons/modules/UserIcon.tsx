import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UserIcon(props) {
  return (
    <Svg
      width='30'
      height='40'
      viewBox='0 0 30 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M15 26.3478C23.1336 26.3478 30 27.7565 30 33.1974C30 38.6382 23.0896 40 15 40C6.86641 40 0 38.5891 0 33.1504C0 27.7096 6.90845 26.3478 15 26.3478ZM15 0C20.5091 0 24.9253 4.70869 24.9253 10.5828C24.9253 16.457 20.5091 21.1656 15 21.1656C9.49086 21.1656 5.07474 16.457 5.07474 10.5828C5.07474 4.70869 9.49086 0 15 0Z'
        fill='#B6B6B6'
      />
    </Svg>
  );
}

export { UserIcon };
