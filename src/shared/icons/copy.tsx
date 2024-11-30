type Props = {
  className?: string;
} & React.ComponentProps<'svg'>;

export const Copy = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        fill="currentColor"
        d="M13.3333 1.33325H6.66666C5.93133 1.33325 5.33333 1.93125 5.33333 2.66659V5.33325H2.66666C1.93133 5.33325 1.33333 5.93125 1.33333 6.66658V13.3333C1.33333 14.0686 1.93133 14.6666 2.66666 14.6666H9.33333C10.0687 14.6666 10.6667 14.0686 10.6667 13.3333V10.6666H13.3333C14.0687 10.6666 14.6667 10.0686 14.6667 9.33325V2.66659C14.6667 1.93125 14.0687 1.33325 13.3333 1.33325ZM2.66666 13.3333V6.66658H9.33333L9.33466 13.3333H2.66666ZM13.3333 9.33325H10.6667V6.66658C10.6667 5.93125 10.0687 5.33325 9.33333 5.33325H6.66666V2.66659H13.3333V9.33325Z"
      />
    </svg>
  );
};
