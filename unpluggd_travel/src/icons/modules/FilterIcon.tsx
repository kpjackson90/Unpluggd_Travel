import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function FilterIcon(props) {
  return (
    <Svg width='24' height='18' viewBox='0 0 24 18' fill='none'>
      <Path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M13.3652 3.16676C13.6062 2.48364 14.0532 1.8921 14.6445 1.47368C15.2359 1.05526 15.9424 0.830566 16.6668 0.830566C17.3912 0.830566 18.0978 1.05526 18.6891 1.47368C19.2805 1.8921 19.7275 2.48364 19.9685 3.16676H22.5002C22.8096 3.16676 23.1063 3.28967 23.3251 3.50847C23.5439 3.72726 23.6668 4.02401 23.6668 4.33343C23.6668 4.64284 23.5439 4.93959 23.3251 5.15838C23.1063 5.37718 22.8096 5.50009 22.5002 5.50009H19.9685C19.7275 6.18321 19.2805 6.77475 18.6891 7.19317C18.0978 7.61159 17.3912 7.83628 16.6668 7.83628C15.9424 7.83628 15.2359 7.61159 14.6445 7.19317C14.0532 6.77475 13.6062 6.18321 13.3652 5.50009H1.50016C1.19074 5.50009 0.893997 5.37718 0.675205 5.15838C0.456412 4.93959 0.333496 4.64284 0.333496 4.33343C0.333496 4.02401 0.456412 3.72726 0.675205 3.50847C0.893997 3.28967 1.19074 3.16676 1.50016 3.16676H13.3652ZM4.03183 12.5001C4.27287 11.817 4.71986 11.2254 5.3112 10.807C5.90253 10.3886 6.6091 10.1639 7.3335 10.1639C8.0579 10.1639 8.76446 10.3886 9.3558 10.807C9.94713 11.2254 10.3941 11.817 10.6352 12.5001H22.5002C22.8096 12.5001 23.1063 12.623 23.3251 12.8418C23.5439 13.0606 23.6668 13.3573 23.6668 13.6668C23.6668 13.9762 23.5439 14.2729 23.3251 14.4917C23.1063 14.7105 22.8096 14.8334 22.5002 14.8334H10.6352C10.3941 15.5165 9.94713 16.1081 9.3558 16.5265C8.76446 16.9449 8.0579 17.1696 7.3335 17.1696C6.6091 17.1696 5.90253 16.9449 5.3112 16.5265C4.71986 16.1081 4.27287 15.5165 4.03183 14.8334H1.50016C1.19074 14.8334 0.893997 14.7105 0.675205 14.4917C0.456412 14.2729 0.333496 13.9762 0.333496 13.6668C0.333496 13.3573 0.456412 13.0606 0.675205 12.8418C0.893997 12.623 1.19074 12.5001 1.50016 12.5001H4.03183ZM16.6668 5.50009C16.9762 5.50009 17.273 5.37718 17.4918 5.15838C17.7106 4.93959 17.8335 4.64284 17.8335 4.33343C17.8335 4.02401 17.7106 3.72726 17.4918 3.50847C17.273 3.28967 16.9762 3.16676 16.6668 3.16676C16.3574 3.16676 16.0607 3.28967 15.8419 3.50847C15.6231 3.72726 15.5002 4.02401 15.5002 4.33343C15.5002 4.64284 15.6231 4.93959 15.8419 5.15838C16.0607 5.37718 16.3574 5.50009 16.6668 5.50009ZM7.3335 14.8334C7.64292 14.8334 7.93966 14.7105 8.15845 14.4917C8.37725 14.2729 8.50016 13.9762 8.50016 13.6668C8.50016 13.3573 8.37725 13.0606 8.15845 12.8418C7.93966 12.623 7.64292 12.5001 7.3335 12.5001C7.02408 12.5001 6.72733 12.623 6.50854 12.8418C6.28975 13.0606 6.16683 13.3573 6.16683 13.6668C6.16683 13.9762 6.28975 14.2729 6.50854 14.4917C6.72733 14.7105 7.02408 14.8334 7.3335 14.8334Z'
        fill='#444444'
      />
    </Svg>
  );
}

export { FilterIcon };
