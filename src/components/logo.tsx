import React from 'react';

const Logo = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => {
  return (
    <svg
      ref={ref}
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 92 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.509 31.1871C21.1742 20.5301 25.5236 7.58353 36.2235 2.27013C46.9234 -3.04327 59.9222 1.2886 65.257 11.9456L89.7207 60.8156C95.0555 71.4726 90.7062 84.4192 80.0063 89.7326C69.3063 95.046 56.3076 90.7141 50.9728 80.0571L26.509 31.1871ZM60.99 21.0655C60.99 29.2917 54.2945 35.9604 46.0351 35.9604C37.7757 35.9604 31.0801 29.2917 31.0801 21.0655C31.0801 12.8392 37.7757 6.17048 46.0351 6.17048C54.2945 6.17048 60.99 12.8392 60.99 21.0655ZM2.27927 60.8157L15.1891 35.0264L39.1086 83.1406L39.1453 83.1458C33.0386 91.5044 21.5914 94.4987 11.9937 89.7327C1.29379 84.4193 -3.05555 71.4727 2.27927 60.8157Z"
        fill="#1f1f23"
        className="dark:fill-white"
      />
    </svg>
  );
});

Logo.displayName = 'Logo';

export { Logo };
