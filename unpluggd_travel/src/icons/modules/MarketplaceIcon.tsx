import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function MarketplaceIcon(props) {
  return (
    <Svg
      width='18'
      height='20'
      viewBox='0 0 18 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M0.404297 9.33594C0.404297 10.3115 0.966797 10.7598 1.94238 10.7598H8.15625V5.80273H6.83789C5.49316 5.80273 4.71973 4.98535 4.71973 4.02734C4.71973 3.0957 5.37012 2.52441 6.31934 2.52441C7.33008 2.52441 8.15625 3.33301 8.15625 4.57227V5.80273H9.83496V10.7598H16.0488C17.0332 10.7598 17.5869 10.3115 17.5869 9.33594V7.38477C17.5869 6.29492 16.9805 5.80273 15.8818 5.80273H14.1592C14.6689 5.31055 14.9766 4.64258 14.9766 3.86035C14.9766 2.10254 13.5791 0.854492 11.8301 0.854492C10.5293 0.854492 9.43066 1.58398 9 2.88477C8.56934 1.58398 7.46191 0.854492 6.16113 0.854492C4.41211 0.854492 3.01465 2.10254 3.01465 3.86035C3.01465 4.64258 3.32227 5.31055 3.83203 5.80273H2.10938C1.05469 5.80273 0.404297 6.29492 0.404297 7.38477V9.33594ZM11.6719 2.52441C12.6211 2.52441 13.2715 3.0957 13.2715 4.02734C13.2715 4.98535 12.498 5.80273 11.1533 5.80273H9.83496V4.57227C9.83496 3.33301 10.6611 2.52441 11.6719 2.52441ZM1.61719 17.2285C1.61719 18.7227 2.50488 19.54 4.00781 19.54H8.15625V11.832H1.61719V17.2285ZM9.83496 19.54H13.9834C15.4863 19.54 16.374 18.7227 16.374 17.2285V11.832H9.83496V19.54Z'
        fill={props.color}
      />
    </Svg>
  );
}

export { MarketplaceIcon };