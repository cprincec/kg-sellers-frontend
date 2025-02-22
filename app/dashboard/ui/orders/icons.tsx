export const SortDescIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            style={{ width: "20px", height: "20px" }}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2.5 7.5L11.6667 7.50008" stroke="#667085" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M2.5 12.5H8.33333" stroke="#667085" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M2.5 2.5H15.8333" stroke="#667085" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M15 17.5V7.5M15 17.5L12.5 15M15 17.5L17.5 15" stroke="#667085" strokeWidth="1.5" />
        </svg>
    );
};

export const CalendarIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "20px", height: "20px" }}
        >
            <path
                d="M6.6665 1.6665V4.1665"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.3335 1.6665V4.1665"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.9165 7.5752H17.0832"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.5 7.08317V14.1665C17.5 16.6665 16.25 18.3332 13.3333 18.3332H6.66667C3.75 18.3332 2.5 16.6665 2.5 14.1665V7.08317C2.5 4.58317 3.75 2.9165 6.66667 2.9165H13.3333C16.25 2.9165 17.5 4.58317 17.5 7.08317Z"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.0791 11.4167H13.0866"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M13.0791 13.9167H13.0866"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.99607 11.4167H10.0036"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.99607 13.9167H10.0036"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.91209 11.4167H6.91957"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.91209 13.9167H6.91957"
                stroke="#667085"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const DownloadIcon = ({
    className,
    width,
    height,
}: {
    className?: string;
    width?: string;
    height?: string;
}) => {
    return (
        <svg
            className={className || ""}
            style={{ width: width || "24px", height: height || "24px" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.8798 14.9901C11.6898 14.9901 11.4998 14.9201 11.3498 14.7701L8.78977 12.2101C8.49977 11.9201 8.49977 11.4401 8.78977 11.1501C9.07977 10.8601 9.55977 10.8601 9.84977 11.1501L11.8798 13.1801L13.9098 11.1501C14.1998 10.8601 14.6798 10.8601 14.9698 11.1501C15.2598 11.4401 15.2598 11.9201 14.9698 12.2101L12.4098 14.7701C12.2598 14.9201 12.0698 14.9901 11.8798 14.9901Z"
                fill="white"
            />
            <path
                d="M11.8799 14.92C11.4699 14.92 11.1299 14.58 11.1299 14.17V4C11.1299 3.59 11.4699 3.25 11.8799 3.25C12.2899 3.25 12.6299 3.59 12.6299 4V14.17C12.6299 14.58 12.2899 14.92 11.8799 14.92Z"
                fill="white"
            />
            <path
                d="M12 20.9302C6.85 20.9302 3.25 17.3302 3.25 12.1802C3.25 11.7702 3.59 11.4302 4 11.4302C4.41 11.4302 4.75 11.7702 4.75 12.1802C4.75 16.4502 7.73 19.4302 12 19.4302C16.27 19.4302 19.25 16.4502 19.25 12.1802C19.25 11.7702 19.59 11.4302 20 11.4302C20.41 11.4302 20.75 11.7702 20.75 12.1802C20.75 17.3302 17.15 20.9302 12 20.9302Z"
                fill="white"
            />
        </svg>
    );
};

export const VerticalLineIcon2 = ({ className }: { className?: string }) => {
    return (
        <svg
            className={className}
            width="1"
            height="64"
            viewBox="0 0 1 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="0.5" y1="2.18557e-08" x2="0.499997" y2="64" stroke="#D0D5DD" />
        </svg>
    );
};
