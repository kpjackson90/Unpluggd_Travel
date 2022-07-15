import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HeartIcon(props) {
  return (
    <Svg width='18' height='16' viewBox='0 0 18 16' fill='none'>
      <Path
        d='M0.732635 5.38546C0.732635 8.87033 3.66253 12.3144 8.21652 15.2524C8.46952 15.4157 8.77965 15.5789 8.99184 15.5789C9.20404 15.5789 9.51416 15.4157 9.76716 15.2524C14.3293 12.3144 17.2511 8.87033 17.2511 5.38546C17.2511 2.37395 15.1699 0.284668 12.5012 0.284668C10.9424 0.284668 9.72636 0.994699 8.99184 2.07199C8.27365 1.00286 7.04946 0.284668 5.49066 0.284668C2.81376 0.284668 0.732635 2.37395 0.732635 5.38546ZM2.41386 5.3773C2.41386 3.32066 3.76863 1.92508 5.58859 1.92508C7.05762 1.92508 7.88191 2.81466 8.39607 3.58998C8.62459 3.9246 8.77965 4.03069 8.99184 4.03069C9.2122 4.03069 9.35094 3.91643 9.58762 3.58998C10.1426 2.83098 10.9342 1.92508 12.3951 1.92508C14.2232 1.92508 15.578 3.32066 15.578 5.3773C15.578 8.25007 12.591 11.433 9.14691 13.7181C9.07346 13.7671 9.02449 13.7997 8.99184 13.7997C8.9592 13.7997 8.91023 13.7671 8.84494 13.7181C5.40088 11.433 2.41386 8.25007 2.41386 5.3773Z'
        fill='#444444'
      />
    </Svg>
  );
}

export { HeartIcon };