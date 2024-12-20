export const Server = (
  props: React.ComponentProps<'svg'> & {
    className?: string;
  },
) => {
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
        d="M20.5 3H4.5C3.96957 3 3.46086 3.21071 3.08579 3.58579C2.71071 3.96086 2.5 4.46957 2.5 5V9C2.5 9.53043 2.71071 10.0391 3.08579 10.4142C3.46086 10.7893 3.96957 11 4.5 11H20.5C21.0304 11 21.5391 10.7893 21.9142 10.4142C22.2893 10.0391 22.5 9.53043 22.5 9V5C22.5 4.46957 22.2893 3.96086 21.9142 3.58579C21.5391 3.21071 21.0304 3 20.5 3ZM4.5 9V5H20.5V9H4.5ZM20.5 13H4.5C3.96957 13 3.46086 13.2107 3.08579 13.5858C2.71071 13.9609 2.5 14.4696 2.5 15V19C2.5 19.5304 2.71071 20.0391 3.08579 20.4142C3.46086 20.7893 3.96957 21 4.5 21H20.5C21.0304 21 21.5391 20.7893 21.9142 20.4142C22.2893 20.0391 22.5 19.5304 22.5 19V15C22.5 14.4696 22.2893 13.9609 21.9142 13.5858C21.5391 13.2107 21.0304 13 20.5 13ZM4.5 19V15H20.5V19H4.5Z"
        fill="currentColor"
      />
      <path
        d="M17.5 6H19.5V8H17.5V6ZM14.5 6H16.5V8H14.5V6ZM17.5 16H19.5V18H17.5V16ZM14.5 16H16.5V18H14.5V16Z"
        fill="currentColor"
      />
    </svg>
  );
};
