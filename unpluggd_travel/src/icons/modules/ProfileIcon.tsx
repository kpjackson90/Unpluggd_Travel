import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ProfileIcon(props) {
  return (
    <Svg
      width='18'
      height='24'
      viewBox='0 0 18 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M9 15.8087C13.8802 15.8087 18 16.6539 18 19.9184C18 23.1829 13.8537 24 9 24C4.11984 24 0 23.1535 0 19.8902C0 16.6257 4.14507 15.8087 9 15.8087ZM9 0C12.3055 0 14.9552 2.82522 14.9552 6.34969C14.9552 9.87417 12.3055 12.6994 9 12.6994C5.69451 12.6994 3.04484 9.87417 3.04484 6.34969C3.04484 2.82522 5.69451 0 9 0Z'
        fill={props.color}
      />
    </Svg>
  );
}

export { ProfileIcon };
