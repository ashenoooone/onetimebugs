import { cn } from '../utils';

export const Bug = (
  props: React.ComponentProps<'svg'> & {
    className?: string;
  },
) => {
  const { className, width = '326', height = '326', ...rest } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 326 326"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...rest}
    >
      <g opacity="0.1">
        <path
          d="M170.792 180.054C170.792 153.758 170.792 127.461 170.792 101.164C170.792 100.59 170.792 100.065 170.792 99.4412C170.792 99.0289 171.259 98.602 171.747 98.6021C175.917 98.734 179.178 98.7651 182.881 99.0213C187.042 99.3086 191.134 99.953 195.249 100.66C198.828 101.273 202.314 102.096 205.661 103.408C212.726 106.187 218.727 110.279 222.578 117.142C225.102 121.63 226.437 126.483 227.508 131.405C228.137 134.293 228.394 137.282 228.324 140.287C228.215 145.062 228.409 149.844 228.184 154.612C227.99 158.711 227.462 162.795 226.553 166.824C226.181 168.486 226.196 170.233 225.816 171.933C224.853 176.25 223.953 180.574 222.827 184.852C221.484 189.945 219.962 194.984 218.199 199.953C216.98 203.393 215.692 206.817 214.271 210.178C212.633 214.06 210.987 217.966 209.03 221.692C206.802 225.947 204.449 230.14 201.841 234.193C198.362 239.62 194.511 244.752 190.109 249.441C188.261 251.413 186.204 253.214 184.077 254.899C180.87 257.43 177.369 259.519 173.603 261.141C173.176 261.328 172.726 261.491 172.268 261.584C171.32 261.77 170.73 261.46 170.769 260.373C170.792 259.853 170.769 259.325 170.769 258.797C170.769 232.554 170.769 206.312 170.769 180.062L170.792 180.054Z"
          fill="white"
        />
        <path
          d="M157.151 180.279C157.151 206.575 157.151 232.872 157.151 259.177C157.151 261.902 156.647 262.228 154.108 261.048C149.341 258.835 145.039 255.993 141.103 252.437C134.837 246.77 129.915 240.108 125.381 233.066C123.199 229.673 121.15 226.187 119.372 222.6C116.212 216.211 113.23 209.712 110.87 202.95C109.783 199.852 108.595 196.777 107.64 193.641C106.313 189.254 104.907 184.898 103.991 180.395C103.292 176.979 102.151 173.633 101.755 170.193C101.32 166.412 100.606 162.678 100.163 158.897C99.2939 151.56 99.6898 144.238 99.7519 136.917C99.7752 133.858 100.645 130.869 101.274 127.856C101.864 125.053 102.904 122.476 104.007 119.89C105.094 117.336 106.499 114.945 108.308 112.848C112.337 108.167 117.415 104.984 123.238 103.097C126.188 102.142 129.185 101.319 132.283 100.729C139.573 99.3391 146.879 98.85 154.255 98.9432C154.465 98.9432 154.674 98.9432 154.884 98.9276C156.395 98.7775 157.151 99.497 157.151 101.086C157.151 127.491 157.151 153.889 157.151 180.294V180.279Z"
          fill="white"
        />
        <path
          d="M163.951 85.2788C159.906 85.2788 155.861 85.1235 151.824 85.3254C147.592 85.535 143.307 85.4806 139.153 86.0785C134.238 86.785 129.207 87.1499 124.456 88.8657C123.827 89.0909 123.035 89.3005 122.546 88.6872C122.103 88.1282 122.499 87.4993 122.786 86.9247C125.721 81.0086 129.075 75.3719 133.151 70.1545C134.285 68.7026 135.449 67.3051 136.754 66.0163C137.453 65.3175 137.445 64.774 136.769 64.0287C131.762 58.493 127.748 52.2973 124.23 45.7134C120.768 39.2383 118.268 32.3904 115.612 25.5969C115.209 24.5721 115.263 23.7491 116.661 23.3298C120.108 22.2895 123.501 21.0938 126.909 19.937C129.005 19.2227 129.316 19.541 130.123 21.5752C131.614 25.3562 132.942 29.2072 134.626 32.9261C136.591 37.2584 138.858 41.4199 141.342 45.4572C142.538 47.406 143.943 49.2383 145.333 51.0628C146.342 52.3905 147.476 53.6249 148.571 54.8827C149.223 55.6281 149.906 55.6513 150.783 55.1001C153.027 53.7104 155.613 53.1902 158.089 52.4138C160.628 51.6141 163.268 51.6839 165.877 51.8315C169.883 52.0566 173.633 53.3221 177.181 55.1545C178.105 55.6358 178.765 55.5659 179.394 54.8439C182.01 51.8548 184.533 48.7957 186.614 45.4029C188.299 42.6467 190.038 39.8982 191.405 36.9867C193.315 32.9339 195.31 28.8888 196.614 24.5798C197.033 23.1823 197.81 21.9323 198.074 20.4571C198.291 19.2537 199.487 19.541 200.31 19.7429C201.676 20.0689 203.004 20.5658 204.339 21.0084C206.661 21.777 209.029 22.3981 211.311 23.3298C212.554 23.8345 212.725 24.5488 212.329 25.5037C210.248 30.5193 208.61 35.6901 206.242 40.6047C203.555 46.1715 200.683 51.6141 197.103 56.6374C195.318 59.1374 193.617 61.7383 191.335 63.8579C190.45 64.6809 190.426 65.302 191.288 66.1871C195.535 70.566 198.835 75.6281 201.87 80.8999C203.051 82.9418 204.13 85.0303 205.209 87.1188C205.481 87.6468 205.752 88.2368 205.341 88.7415C204.929 89.2462 204.238 89.1375 203.711 88.9511C199.495 87.476 195.038 87.2663 190.706 86.4201C188.718 86.0319 186.762 86.0785 184.797 85.8688C177.849 85.1312 170.884 85.3021 163.92 85.3021L163.951 85.2788Z"
          fill="white"
        />
        <path
          d="M261.423 247.617C261.423 249.946 261.392 252.275 261.423 254.604C261.485 258.463 259.404 261.266 256.912 263.859C255.126 265.722 253.278 267.508 251.446 269.325C249.691 271.064 247.921 272.788 246.167 274.527C244.458 276.219 242.766 277.927 241.066 279.635C239.326 281.39 237.595 283.152 235.856 284.899C234.078 286.685 232.292 288.463 230.507 290.241C228.76 291.98 226.997 293.719 225.25 295.458C223.511 297.198 221.764 298.944 220.041 300.699C218.302 302.469 216.601 304.317 214.482 305.606C210.32 308.137 203.177 304.542 202.603 299.713C202.23 296.553 203.208 293.89 205.444 291.654C217.999 279.107 230.545 266.545 243.115 254.022C244.14 253.005 244.544 251.987 244.544 250.482C244.544 249.744 244.544 249.053 244.544 248.214C244.544 244.067 243.597 241.211 240.522 238.556C236.881 235.404 233.659 231.763 230.212 228.377C229.249 227.43 229.132 226.615 229.66 225.295C231.407 220.947 232.913 216.506 234.583 212.127C235.351 210.124 235.685 210.085 237.168 211.568C244.171 218.564 251.198 225.536 258.154 232.586C260.266 234.721 261.291 237.438 261.384 240.443C261.462 242.826 261.4 245.218 261.4 247.609L261.423 247.617Z"
          fill="white"
        />
        <path
          d="M67.121 247.617C67.121 249.946 67.1521 252.275 67.121 254.604C67.0589 258.463 69.1397 261.266 71.6319 263.859C73.4176 265.722 75.2655 267.508 77.0978 269.325C78.8524 271.064 80.6226 272.788 82.3773 274.527C84.0854 276.219 85.7779 277.927 87.4782 279.635C89.2174 281.39 90.9487 283.152 92.6879 284.899C94.4658 286.685 96.2515 288.463 98.0373 290.241C99.7842 291.98 101.547 293.719 103.293 295.458C105.033 297.198 106.78 298.944 108.503 300.699C110.242 302.469 111.943 304.317 114.062 305.606C118.224 308.137 125.367 304.542 125.941 299.713C126.314 296.553 125.335 293.89 123.099 291.654C110.545 279.107 97.9984 266.545 85.4285 254.022C84.4037 253.005 84 251.987 84 250.482C84 249.744 84 249.053 84 248.214C84 244.067 84.9472 241.211 88.0217 238.556C91.663 235.404 94.8851 231.763 98.3323 228.377C99.295 227.43 99.4115 226.615 98.8835 225.295C97.1366 220.947 95.6304 216.506 93.9612 212.127C93.1925 210.124 92.8587 210.085 91.3758 211.568C84.3726 218.564 77.3462 225.536 70.3897 232.586C68.2779 234.721 67.253 237.438 67.1598 240.443C67.0822 242.826 67.1443 245.218 67.1443 247.609L67.121 247.617Z"
          fill="white"
        />
        <path
          d="M269.824 80.7989C269.824 88.8346 269.785 96.8703 269.847 104.906C269.871 107.895 268.706 110.45 266.765 112.453C259.746 119.673 252.565 126.738 245.43 133.85C245.041 134.238 244.7 134.898 244.001 134.572C243.326 134.262 243.256 133.579 243.248 132.926C243.24 129.021 243.186 125.155 243.248 121.249C243.279 119.293 243.077 116.591 242.689 115.426C242.255 114.124 241.936 113.563 242.829 112.693C245.779 109.797 248.659 106.839 251.618 103.951C252.557 103.035 252.984 102.064 252.976 100.729C252.93 89.1374 252.922 77.5535 252.976 65.9619C252.984 64.2926 252.495 63.6715 250.802 63.7724C248.714 63.8966 246.61 63.8268 244.513 63.7957C239.04 63.7025 236.066 59.7351 236.214 54.8671C236.33 50.8298 240.072 47.3749 243.799 47.4758C249.622 47.6311 255.453 47.7242 261.268 47.4525C266.796 47.1963 269.715 51.5208 269.793 56.1637C269.925 64.3702 269.832 72.5846 269.832 80.7989H269.824Z"
          fill="white"
        />
        <path
          d="M58.7197 80.7989C58.7197 88.8346 58.7586 96.8703 58.6964 104.906C58.6731 107.895 59.8377 110.45 61.7787 112.453C68.7974 119.673 75.9791 126.738 83.1142 133.85C83.5024 134.238 83.844 134.898 84.5428 134.572C85.2183 134.262 85.2881 133.579 85.2959 132.926C85.3037 129.021 85.358 125.155 85.2959 121.249C85.2649 119.293 85.4668 116.591 85.855 115.426C86.289 114.124 86.608 113.563 85.7152 112.693C82.7649 109.797 79.8844 106.839 76.9263 103.951C75.9869 103.035 75.5599 102.064 75.5676 100.729C75.6142 89.1374 75.622 77.5535 75.5676 65.9619C75.5599 64.2926 76.049 63.6715 77.7415 63.7724C79.8301 63.8966 81.9341 63.8268 84.0304 63.7957C89.504 63.7025 92.4776 59.7351 92.3301 54.8671C92.2136 50.8298 88.4714 47.3749 84.7447 47.4758C78.9217 47.6311 73.0909 47.7242 67.2757 47.4525C61.7477 47.1963 58.8284 51.5208 58.7508 56.1637C58.6188 64.3702 58.712 72.5846 58.712 80.7989H58.7197Z"
          fill="white"
        />
        <path
          d="M269.821 192.732C269.821 196.575 269.845 200.418 269.821 204.261C269.798 207.445 268.672 210.162 266.157 212.188C263.928 213.99 259.557 214.533 256.731 212.382C253.975 210.286 252.919 207.608 252.942 204.269C252.989 198.097 252.935 191.924 252.966 185.76C252.973 183.99 252.251 182.771 250.955 181.567C248.307 179.106 246.367 177.033 243.851 174.432C243.106 173.663 243.042 172.879 243.074 171.715C243.105 170.55 243.098 169.774 243.105 169.075C243.152 163.896 243.175 158.71 243.237 153.531C243.237 152.871 242.966 152.017 243.812 151.683C244.565 151.388 244.938 152.134 245.373 152.561C252.616 159.789 259.852 167.025 267.088 174.261C268.913 176.086 269.736 178.368 269.798 180.853C269.907 184.805 269.829 188.772 269.829 192.724L269.821 192.732Z"
          fill="white"
        />
        <path
          d="M58.7204 192.732C58.7204 196.575 58.6971 200.418 58.7204 204.261C58.7437 207.445 59.8695 210.162 62.385 212.188C64.6133 213.99 68.9844 214.533 71.8105 212.382C74.5667 210.286 75.6226 207.608 75.5993 204.269C75.5527 198.097 75.6071 191.924 75.576 185.76C75.5683 183.99 76.2903 182.771 77.5869 181.567C80.2344 179.106 82.1751 177.033 84.6907 174.432C85.436 173.663 85.4993 172.879 85.4675 171.715C85.4363 170.55 85.4441 169.774 85.4363 169.075C85.3897 163.896 85.3664 158.71 85.3043 153.531C85.3043 152.871 85.5761 152.017 84.7298 151.683C83.9767 151.388 83.604 152.134 83.1692 152.561C75.9254 159.789 68.6894 167.025 61.4533 174.261C59.6288 176.086 58.8058 178.368 58.7437 180.853C58.635 184.805 58.7127 188.772 58.7127 192.724L58.7204 192.732Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
