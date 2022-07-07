import * as React from 'react';
import Svg, { Path} from 'react-native-svg';

function GoogleIcon(props) {
    return (
        <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <Path d="M17.4049 7.3213H16.7144V7.28573H9.00014V10.7143H13.8443C13.1376 12.7102 11.2386 14.1429 9.00014 14.1429C6.16 14.1429 3.85728 11.8402 3.85728 9.00002C3.85728 6.15987 6.16 3.85716 9.00014 3.85716C10.3111 3.85716 11.5039 4.35173 12.412 5.15959L14.8364 2.73516C13.3056 1.30845 11.2579 0.428589 9.00014 0.428589C4.26657 0.428589 0.428711 4.26645 0.428711 9.00002C0.428711 13.7336 4.26657 17.5714 9.00014 17.5714C13.7337 17.5714 17.5716 13.7336 17.5716 9.00002C17.5716 8.4253 17.5124 7.8643 17.4049 7.3213Z" fill="#FFC107"/>
        <Path d="M1.41699 5.01045L4.23313 7.07573C4.99513 5.18916 6.84056 3.85716 9.00014 3.85716C10.3111 3.85716 11.5038 4.35173 12.412 5.15959L14.8364 2.73516C13.3056 1.30845 11.2578 0.428589 9.00014 0.428589C5.70785 0.428589 2.85271 2.2873 1.41699 5.01045Z" fill="#FF3D00"/>
        <Path d="M8.99985 17.5714C11.2139 17.5714 13.2256 16.7241 14.7466 15.3463L12.0937 13.1014C11.2042 13.7779 10.1173 14.1437 8.99985 14.1429C6.77043 14.1429 4.87743 12.7213 4.16428 10.7374L1.36914 12.891C2.78771 15.6669 5.66857 17.5714 8.99985 17.5714Z" fill="#4CAF50"/>
        <Path d="M17.4047 7.32134H16.7143V7.28577H9V10.7143H13.8441C13.5061 11.6642 12.8972 12.4943 12.0926 13.1019L12.0939 13.1011L14.7467 15.3459C14.559 15.5165 17.5714 13.2858 17.5714 9.00005C17.5714 8.42534 17.5123 7.86434 17.4047 7.32134Z" fill="#1976D2"/>
        </Svg>
    )
}

export  { GoogleIcon }