import * as React from "react";

const CameraOutlined = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 7h1.43a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.57 4h2.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 17.57 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"
        />
        <path
            stroke="currentColor"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
    </svg>
);

const CameraFilled = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8.074 4.336A3 3 0 0 1 10.57 3h2.86a3 3 0 0 1 2.496 1.336l.812 1.219A1 1 0 0 0 17.57 6H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.43a1 1 0 0 0 .832-.445zM12 9a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
            clipRule="evenodd"
        />
    </svg>
);

const NotebookOutlined = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3.5H6.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2H9m0-17h8.5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9m0-17v17M13 8h2.5M13 12h2.5"
        />
    </svg>
);

const NotebookFilled = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path fill="currentColor" d="M6 2.541A3 3 0 0 0 3.5 5.5v13A3 3 0 0 0 6 21.458z" />
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M8 21.5h9.5a3 3 0 0 0 3-3v-13a3 3 0 0 0-3-3H8zM13 7a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h2.5a1 1 0 1 0 0-2z"
            clipRule="evenodd"
        />
    </svg>
);

const UserOutlined = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.5 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM12.001 13c-3.391 0-5.964 2.014-7.017 4.863C4.574 18.968 5.519 20 6.698 20h10.606c1.179 0 2.123-1.032 1.715-2.137C17.965 15.014 15.392 13 12 13Z"
        />
    </svg>
);

const UserFilled = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            d="M12 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M12.002 12c-3.832 0-6.765 2.296-7.956 5.516-.34.92-.107 1.828.434 2.473A2.9 2.9 0 0 0 6.698 21h10.607c.877 0 1.69-.383 2.218-1.011a2.46 2.46 0 0 0 .434-2.473C18.767 14.296 15.833 12 12 12"
        />
    </svg>
);

const HomeFilled = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            d="M13.7 3.455a3 3 0 0 0-3.4 0l-6 4.125A3 3 0 0 0 3 10.052V18a3 3 0 0 0 3 3h2.5a1 1 0 0 0 1-1v-3.5a2.5 2.5 0 0 1 5 0V20a1 1 0 0 0 1 1H18a3 3 0 0 0 3-3v-7.948a3 3 0 0 0-1.3-2.472z"
        />
    </svg>
);

const HomeOutlined = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.5 16.5V20H6a2 2 0 0 1-2-2v-7.948a2 2 0 0 1 .867-1.648l6-4.125a2 2 0 0 1 2.266 0l6 4.125A2 2 0 0 1 20 10.052V18a2 2 0 0 1-2 2h-3.5v-3.5a2.5 2.5 0 0 0-5 0Z"
        />
    </svg>
);

const VolumeOnline = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M19.071 4.92968C20.8807 6.73932 22 9.23932 22 12.0007C22 14.7622 20.8807 17.2622 19.071 19.0718M15.8891 8.11132C16.8844 9.10662 17.5 10.4816 17.5 12.0004C17.5 13.5192 16.8844 14.8942 15.8891 15.8895M4 7.99999H5.33333C5.76607 7.99999 6.18714 7.85964 6.53333 7.59999L11.2 4.09999C11.5296 3.85278 12 4.08797 12 4.49999V19.5C12 19.912 11.5296 20.1472 11.2 19.9L6.53333 16.4C6.18714 16.1403 5.76607 16 5.33333 16H4C2.89543 16 2 15.1046 2 14V9.99999C2 8.89542 2.89543 7.99999 4 7.99999Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>
);

const VolumeMuted = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth={2}
            d="m21.5 10-2.121 2.121m0 0-2.122 2.121m2.122-2.12L17.257 10m2.122 2.121 2.121 2.121M4 8h1.333a2 2 0 0 0 1.2-.4L11.2 4.1a.5.5 0 0 1 .8.4v15a.5.5 0 0 1-.8.4l-4.667-3.5a2 2 0 0 0-1.2-.4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z"
        />
    </svg>
);

const Sun = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M12 3V2M12 22V21M18.3598 5.64005L19.0698 4.93005M4.93016 19.07L5.64016 18.36M21 12H22M2 12H3M18.3598 18.36L19.0698 19.07M4.93016 4.93005L5.64016 5.64005M15.5355 8.46447C17.4882 10.4171 17.4882 13.5829 15.5355 15.5355C13.5829 17.4882 10.4171 17.4882 8.46447 15.5355C6.51185 13.5829 6.51185 10.4171 8.46447 8.46447C10.4171 6.51185 13.5829 6.51185 15.5355 8.46447Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CubeFilled = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M10.53 2.68a3 3 0 0 1 2.94 0l6 3.375q.256.144.474.33L12 10.853 4.056 6.385a3 3 0 0 1 .473-.33zM3.051 8.114A3 3 0 0 0 3 8.67v6.66a3 3 0 0 0 1.53 2.615l6 3.375q.228.129.47.214v-8.949zM13 21.534q.241-.085.47-.214l6-3.375A3 3 0 0 0 21 15.331V8.67q0-.283-.052-.555l-7.947 4.47z"
            clipRule="evenodd"
        />
    </svg>
);

const CubeOutlined = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12 4.5 7.781m7.5 4.22v8.5m0-8.5 7.5-4.22m.5.889v6.66a2 2 0 0 1-1.02 1.744l-6 3.375a2 2 0 0 1-1.96 0l-6-3.375A2 2 0 0 1 4 15.33V8.67a2 2 0 0 1 1.02-1.743l6-3.375a2 2 0 0 1 1.96 0l6 3.375A2 2 0 0 1 20 8.67"
        />
    </svg>
);

const Moon = ({ ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M20.9638 12.7674C19.8361 13.5447 18.4693 13.9998 16.9961 13.9998C13.1301 13.9998 9.99609 10.8657 9.99609 6.99975C9.99609 5.52667 10.4511 4.15987 11.2283 3.03223C6.61911 3.42277 3 7.28768 3 11.9979C3 16.9674 7.0286 20.996 11.9981 20.996C16.7084 20.996 20.5734 17.3767 20.9638 12.7674Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" />
    </svg>
);

export {
    CameraOutlined,
    CameraFilled,
    NotebookOutlined,
    NotebookFilled,
    UserOutlined,
    UserFilled,
    HomeFilled,
    HomeOutlined,
    VolumeOnline,
    VolumeMuted,
    CubeFilled,
    CubeOutlined,
    Sun,
    Moon
};

