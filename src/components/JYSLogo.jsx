export default function JYSLogo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JYS Logo"
    >
      {/* Background shape — rounded square with gradient */}
      <defs>
        <linearGradient id="jys-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f8ef7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="jys-grad-sm" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f8ef7" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>

      {/* Outer rounded square */}
      <rect width="40" height="40" rx="10" fill="url(#jys-grad)" />

      {/* Inner glow overlay */}
      <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.06" />

      {/* Letter J — left */}
      <text
        x="5"
        y="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="16"
        fill="white"
        fillOpacity="0.75"
      >J</text>

      {/* Letter Y — center, larger and fully opaque */}
      <text
        x="13"
        y="29"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="900"
        fontSize="19"
        fill="white"
      >Y</text>

      {/* Letter S — right */}
      <text
        x="27"
        y="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="16"
        fill="white"
        fillOpacity="0.75"
      >S</text>

      {/* Bottom accent line */}
      <rect x="8" y="34" width="24" height="2" rx="1" fill="white" fillOpacity="0.25" />
    </svg>
  )
}
