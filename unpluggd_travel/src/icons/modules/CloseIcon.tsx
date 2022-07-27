import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CloseIcon(props) {
  return (
    <Svg width='16' height='15' viewBox='0 0 16 15' fill='none'>
      <Path
        d='M1.18861 13.0509C0.819467 13.4201 0.801889 14.0792 1.1974 14.466C1.58412 14.8527 2.2433 14.8439 2.61244 14.4747L7.99134 9.08705L13.379 14.4747C13.757 14.8527 14.4074 14.8527 14.7941 14.466C15.172 14.0704 15.1808 13.4288 14.7941 13.0509L9.41517 7.66322L14.7941 2.28431C15.1808 1.90638 15.1808 1.25599 14.7941 0.869272C14.3986 0.491342 13.757 0.482553 13.379 0.860483L7.99134 6.24818L2.61244 0.860483C2.2433 0.491342 1.57533 0.473764 1.1974 0.869272C0.810678 1.25599 0.819467 1.91517 1.18861 2.28431L6.5763 7.66322L1.18861 13.0509Z'
        fill='#444444'
      />
    </Svg>
  );
}

export { CloseIcon };
