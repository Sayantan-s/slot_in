import { ComponentProps, FC } from "react";

export const CSS: FC<ComponentProps<"svg">> = (props) => {
  return (
    <svg width={112} height={126} viewBox="0 0 112 126" {...props}>
      <path
        d="M0.759766 0L10.8148 112.883L55.9328 125.463L101.177 112.837L111.24 0H0.759766ZM90.3508 25.862L87.0038 63.467L87.0138 63.67L86.9998 64.137V64.133L84.6218 90.427L84.3598 92.763L55.9998 100.607V100.608L55.9778 100.627L27.6668 92.739L25.7498 71H39.6328L40.6178 82.054L56.0038 86.224L55.9998 86.232V86.23L71.4428 82.001L73.0748 64H40.7918L40.5148 60.957L39.8838 53.828L39.5528 50H74.3018L75.5658 36H22.6398L22.3628 32.959L21.7328 25.828L21.4008 22H90.6818L90.3508 25.862Z"
        fill="#1572B6"
      />
    </svg>
  );
};
