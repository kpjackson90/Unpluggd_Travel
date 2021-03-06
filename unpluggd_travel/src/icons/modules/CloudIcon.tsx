import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CloudIcon(props) {
  return (
    <Svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
      <Path
        d='M18.3608 16.4544C19.465 16.2301 20.4464 15.6033 21.1147 14.6957C21.7829 13.7881 22.0902 12.6644 21.977 11.5429C21.8638 10.4213 21.338 9.38186 20.5019 8.62629C19.6658 7.87073 18.5789 7.45297 17.4522 7.4541H16.3073C16.0063 6.28799 15.4205 5.21493 14.6026 4.33126C13.7847 3.44759 12.7603 2.78098 11.6213 2.39127C10.4823 2.00156 9.26439 1.90096 8.07694 2.09849C6.88949 2.29602 5.76966 2.7855 4.81798 3.52299C3.86629 4.26047 3.11256 5.22288 2.62444 6.3238C2.13633 7.42472 1.92911 8.62969 2.02139 9.83053C2.11368 11.0314 2.50258 12.1905 3.15317 13.2038C3.80377 14.2171 4.6957 15.0529 5.74888 15.6362'
        stroke='#3081ED'
        stroke-width='2.125'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <Path
        d='M12.909 11.0908L9.27441 16.5455H14.7263L11.0917 22.0002'
        stroke='#3081ED'
        stroke-width='2.125'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </Svg>
  );
}

export { CloudIcon };
