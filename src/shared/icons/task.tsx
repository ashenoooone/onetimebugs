type Props = {
  className?: string;
} & React.ComponentProps<'svg'>;

export const Task = (props: Props) => {
  const { className, ...rest } = props;
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M5.16663 22H19.1666C20.2696 22 21.1666 21.103 21.1666 20V5C21.1666 3.897 20.2696 3 19.1666 3H17.1666C17.1666 2.73478 17.0613 2.48043 16.8737 2.29289C16.6862 2.10536 16.4318 2 16.1666 2H8.16663C7.90141 2 7.64706 2.10536 7.45952 2.29289C7.27198 2.48043 7.16663 2.73478 7.16663 3H5.16663C4.06363 3 3.16663 3.897 3.16663 5V20C3.16663 21.103 4.06363 22 5.16663 22ZM5.16663 5H7.16663V7H17.1666V5H19.1666V20H5.16663V5Z"
        fill="currentColor"
      />
      <path
        d="M11.1666 13.586L9.37359 11.793L7.95959 13.207L11.1666 16.414L16.3736 11.207L14.9596 9.79297L11.1666 13.586Z"
        fill="currentColor"
      />
    </svg>
  );
};
