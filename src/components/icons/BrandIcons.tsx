import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Official Google Gmail Vector Logo (2020 - present)
 * Exact geometry from Google Workspace specification with 5 color segments:
 * - Blue: #4285F4
 * - Green: #34A853
 * - Yellow: #FBBC04
 * - Red: #EA4335
 * - Dark Red: #B5222A
 */
export function GoogleGmailLogo({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      fill="none"
      aria-label="Google Gmail"
      {...props}
    >
      {/* Left Blue Pillar */}
      <path
        d="M34.9 448h81.5V250.2L0 163v250.2C0 432.5 15.7 448 34.9 448Z"
        fill="#4285F4"
      />
      {/* Right Green Pillar */}
      <path
        d="M395.6 448h81.5c19.3 0 34.9-15.7 34.9-34.9V163l-116.4 87.3V448Z"
        fill="#34A853"
      />
      {/* Top Right Yellow Shoulder */}
      <path
        d="M395.6 99v151.3L512 163v-46.5c0-43.2-49.3-67.8-83.8-41.9L395.6 99Z"
        fill="#FBBC04"
      />
      {/* Center & Flap Red M */}
      <path
        d="M116.4 250.2V99L256 203.7 395.6 99v151.3L256 355L116.4 250.2Z"
        fill="#EA4335"
      />
      {/* Top Left Dark Red Shoulder */}
      <path
        d="M0 116.4V163l116.4 87.3V99L83.8 74.5C49.2 48.6 0 73.2 0 116.4Z"
        fill="#B5222A"
      />
    </svg>
  );
}

/**
 * Official Zalo App Icon Logo
 * Exact official vector asset (Wikimedia Commons: Icon_of_Zalo.svg)
 * Features official Zalo blue container, white speech bubble, and official Zalo wordmark.
 */
export function ZaloOfficialLogo({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Zalo"
      {...props}
    >
      {/* Blue App Squircle Background */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.782 0.166H27.199C33.265 0.166 36.81 1.057 39.957 2.744C43.104 4.431 45.588 6.896 47.256 10.043C48.943 13.19 49.834 16.735 49.834 22.801V27.199C49.834 33.265 48.943 36.81 47.256 39.957C45.569 43.104 43.104 45.588 39.957 47.256C36.81 48.943 33.265 49.834 27.199 49.834H22.801C16.735 49.834 13.19 49.834 10.043 47.256C6.896 45.569 4.412 43.104 2.744 39.957C1.057 36.81 0.166 33.265 0.166 27.199V22.801C0.166 16.735 1.057 13.19 2.744 10.043C4.431 6.896 6.896 4.412 10.043 2.744C13.171 1.057 16.735 0.166 22.782 0.166Z"
        fill="#0068FF"
      />
      {/* Ambient shadow gradient */}
      <path
        opacity="0.12"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.834 26.474V27.199C49.834 33.266 48.943 36.811 47.256 39.958C45.568 43.105 43.104 45.588 39.957 47.256C36.81 48.943 33.265 49.834 27.199 49.834H22.801C17.837 49.834 14.561 49.238 11.81 48.097L7.275 43.427L49.834 26.474Z"
        fill="#001A33"
      />
      {/* White Speech Bubble */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.779 43.589C10.102 43.846 13.006 43.184 15.068 42.183C24.023 47.132 38.02 46.895 46.492 41.473C46.821 40.98 47.128 40.468 47.413 39.936C49.106 36.778 50 33.22 50 27.132V22.718C50 16.629 49.106 13.071 47.413 9.913C45.739 6.754 43.246 4.281 40.088 2.588C36.929 0.894 33.371 0 27.283 0H22.85C17.664 0 14.298 0.653 11.47 1.899C11.315 2.037 11.164 2.178 11.015 2.321C2.717 10.32 2.087 27.659 9.123 37.078C9.131 37.092 9.139 37.106 9.149 37.12C10.233 38.719 9.187 41.515 7.551 43.152C7.284 43.399 7.379 43.551 7.779 43.589Z"
        fill="white"
      />
      {/* Official Zalo Text: Z */}
      <path
        d="M20.563 17H10.838V19.085H17.587L10.933 27.332C10.724 27.635 10.573 27.919 10.573 28.564V29.095H19.748C20.203 29.095 20.582 28.716 20.582 28.261V27.142H13.492L19.748 19.294C19.843 19.18 20.013 18.972 20.089 18.877L20.127 18.82C20.487 18.289 20.563 17.834 20.563 17.284V17Z"
        fill="#0068FF"
      />
      {/* Official Zalo Text: l */}
      <path
        d="M32.942 29.095H34.326V17H32.24V28.393C32.24 28.773 32.544 29.095 32.942 29.095Z"
        fill="#0068FF"
      />
      {/* Official Zalo Text: a */}
      <path
        d="M25.814 19.692C23.198 19.692 21.075 21.816 21.075 24.432C21.075 27.048 23.198 29.171 25.814 29.171C28.43 29.171 30.553 27.048 30.553 24.432C30.572 21.816 28.449 19.692 25.814 19.692ZM25.814 27.218C24.279 27.218 23.027 25.967 23.027 24.432C23.027 22.896 24.279 21.645 25.814 21.645C27.35 21.645 28.601 22.896 28.601 24.432C28.601 25.967 27.369 27.218 25.814 27.218Z"
        fill="#0068FF"
      />
      {/* Official Zalo Text: o */}
      <path
        d="M40.487 19.616C37.852 19.616 35.71 21.758 35.71 24.393C35.71 27.029 37.852 29.171 40.487 29.171C43.122 29.171 45.264 27.029 45.264 24.393C45.264 21.758 43.122 19.616 40.487 19.616ZM40.487 27.218C38.932 27.218 37.681 25.967 37.681 24.412C37.681 22.858 38.932 21.607 40.487 21.607C42.041 21.607 43.292 22.858 43.292 24.412C43.292 25.967 42.041 27.218 40.487 27.218Z"
        fill="#0068FF"
      />
      {/* Dot accent */}
      <path
        d="M29.456 29.094H30.575V19.957H28.622V28.279C28.622 28.715 29.001 29.094 29.456 29.094Z"
        fill="#0068FF"
      />
    </svg>
  );
}

/**
 * Standard Phone Call Filled Icon (High-definition vector)
 */
export function PhoneCallFilledIcon({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Điện thoại"
      {...props}
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z" />
    </svg>
  );
}

/**
 * Official Facebook Messenger Vector Logo
 */
export function MessengerLogo({ className = "w-6 h-6", size, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Messenger"
      {...props}
    >
      <path
        d="M24 4C12.954 4 4 12.448 4 22.88c0 5.939 2.924 11.25 7.485 14.777V44l6.096-3.348c2.02.56 4.16.868 6.419.868 11.046 0 20-8.448 20-18.88S35.046 4 24 4Z"
        fill="url(#messenger-grad)"
      />
      <path
        d="M11 27.5L21.5 16.5L26.5 22L37 16.5L26.5 27.5L21.5 22L11 27.5Z"
        fill="white"
      />
      <defs>
        <linearGradient id="messenger-grad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B2FF" />
          <stop offset="0.5" stopColor="#006AFF" />
          <stop offset="1" stopColor="#9B00E8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Aliases for compatibility
export const ZaloLogo = ZaloOfficialLogo;
export const ZaloIconOnly = ZaloOfficialLogo;
