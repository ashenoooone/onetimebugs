import React from 'react';

type Props = {
  className?: string;
} & React.ComponentProps<'svg'>;

export const Share = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M4.16667 10.0001C4.75019 9.99739 5.31153 9.77618 5.74 9.38005L9.91333 11.7667C9.85964 11.9508 9.8327 12.1416 9.83333 12.3334C9.82905 12.8744 10.0113 13.4004 10.3495 13.8228C10.6876 14.2451 11.1609 14.5381 11.6898 14.6523C12.2186 14.7665 12.7707 14.695 13.253 14.4499C13.7353 14.2047 14.1184 13.8008 14.3378 13.3062C14.5572 12.8117 14.5994 12.2566 14.4575 11.7345C14.3155 11.2124 13.998 10.7552 13.5584 10.4398C13.1187 10.1245 12.5839 9.97019 12.0438 10.003C11.5038 10.0358 10.9915 10.2538 10.5933 10.6201L6.42 8.23339C6.47072 8.06918 6.49766 7.89856 6.5 7.72672L10.6 5.38005C10.996 5.73795 11.5031 5.94878 12.0361 5.97719C12.5692 6.0056 13.0958 5.84986 13.5276 5.53609C13.9594 5.22232 14.2703 4.7696 14.4079 4.25387C14.5456 3.73813 14.5017 3.19074 14.2837 2.70351C14.0657 2.21627 13.6868 1.81882 13.2105 1.57781C12.7342 1.3368 12.1895 1.26689 11.6678 1.3798C11.1461 1.49272 10.6791 1.7816 10.345 2.19798C10.011 2.61437 9.83037 3.13294 9.83333 3.66672C9.83595 3.85823 9.86283 4.04864 9.91333 4.23339L6.12 6.40005C5.90021 6.06002 5.59571 5.78304 5.23646 5.59632C4.8772 5.40961 4.47553 5.31959 4.07095 5.33511C3.66637 5.35064 3.27278 5.47117 2.92889 5.68486C2.58499 5.89856 2.30262 6.19806 2.10953 6.55393C1.91643 6.90981 1.81927 7.3098 1.82757 7.71459C1.83588 8.11939 1.94937 8.51506 2.1569 8.86271C2.36443 9.21036 2.65885 9.49803 3.01122 9.69744C3.36359 9.89685 3.76179 10.0011 4.16667 10.0001ZM12.1667 11.3334C12.3644 11.3334 12.5578 11.392 12.7222 11.5019C12.8867 11.6118 13.0149 11.768 13.0905 11.9507C13.1662 12.1334 13.186 12.3345 13.1475 12.5285C13.1089 12.7225 13.0136 12.9006 12.8738 13.0405C12.7339 13.1803 12.5557 13.2756 12.3618 13.3142C12.1678 13.3528 11.9667 13.333 11.784 13.2573C11.6013 13.1816 11.4451 13.0534 11.3352 12.889C11.2253 12.7245 11.1667 12.5312 11.1667 12.3334C11.1667 12.0682 11.272 11.8138 11.4596 11.6263C11.6471 11.4387 11.9015 11.3334 12.1667 11.3334ZM12.1667 2.66672C12.3644 2.66672 12.5578 2.72537 12.7222 2.83525C12.8867 2.94513 13.0149 3.10131 13.0905 3.28404C13.1662 3.46676 13.186 3.66783 13.1475 3.86181C13.1089 4.05579 13.0136 4.23397 12.8738 4.37383C12.7339 4.51368 12.5557 4.60892 12.3618 4.64751C12.1678 4.68609 11.9667 4.66629 11.784 4.5906C11.6013 4.51491 11.4451 4.38674 11.3352 4.22229C11.2253 4.05784 11.1667 3.8645 11.1667 3.66672C11.1667 3.4015 11.272 3.14715 11.4596 2.95961C11.6471 2.77208 11.9015 2.66672 12.1667 2.66672ZM4.16667 6.66672C4.36445 6.66672 4.55779 6.72537 4.72224 6.83525C4.88669 6.94513 5.01486 7.10131 5.09055 7.28404C5.16623 7.46676 5.18604 7.66783 5.14745 7.86181C5.10887 8.05579 5.01363 8.23397 4.87377 8.37383C4.73392 8.51368 4.55574 8.60892 4.36176 8.64751C4.16778 8.68609 3.96671 8.66629 3.78398 8.5906C3.60126 8.51491 3.44508 8.38674 3.3352 8.22229C3.22532 8.05784 3.16667 7.8645 3.16667 7.66672C3.16667 7.4015 3.27202 7.14715 3.45956 6.95961C3.6471 6.77208 3.90145 6.66672 4.16667 6.66672Z"
        fill="currentColor"
      />
    </svg>
  );
};