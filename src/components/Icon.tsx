const paths = {
  trowel: (
    <>
      <path d="M3 17.5 13.5 7l3.5 3.5L6.5 21H3z" />
      <path d="m15 8.5 2.8-2.8a2 2 0 0 1 2.8 0v0a2 2 0 0 1 0 2.8L17.8 11.3" />
    </>
  ),
  drop: <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z" />,
  bath: (
    <>
      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M6 12V5.5A1.5 1.5 0 0 1 9 5.5V6M7 19l-1 2M17 19l1 2" />
    </>
  ),
  facade: (
    <>
      <path d="M4 21V5l8-2 8 2v16z" />
      <path d="M8 9h2M14 9h2M8 13h2M14 13h2M10 21v-4h4v4" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-7 9 7" />
      <path d="M5 10v10h14V10M10 20v-5h4v5" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 6.3-6.3a4 4 0 0 1-5-5L13 5l1.7 1.3zM3 21l6-6" />
  ),
  shield: (
    <>
      <path d="M12 3 4 6v6c0 4.5 3.4 8 8 9 4.6-1 8-4.5 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  roof: (
    <>
      <path d="m2 12 10-8 10 8" />
      <path d="M5 10v10h14V10M16 6V3h2v4.6" />
    </>
  ),
  window: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M12 3v18M5 12h14" />
    </>
  ),
  paint: (
    <>
      <rect x="3" y="3" width="15" height="6" rx="1" />
      <path d="M18 6h3v5h-9v3M11 14h2v7h-2z" />
    </>
  ),
  phone: (
    <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.5 4.5 0 0 1-2.2-2.2l.8-1-1-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m3.5 6 8.5 7 8.5-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V4h10v17M14 9h6v12M2 21h20" />
      <path d="M7 8h1M10 8h1M7 12h1M10 12h1M7 16h1M10 16h1M17 13h0M17 17h0" />
    </>
  ),
  flame: (
    <path d="M12 21a6 6 0 0 0 6-6c0-4-3-6-3-10-2.5 1.5-4 4-4 6-1-1-1.5-2-1.5-3C7 10 6 12.5 6 15a6 6 0 0 0 6 6z" />
  ),
  wind: (
    <path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8" />
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  upload: <path d="M12 16V4M7 9l5-5 5 5M4 16v4h16v-4" />,
  leaf: (
    <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15M5 19l7-7" />
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 9-9M17 6l2 2M15 8l2 2" />
    </>
  ),
  layers: (
    <path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5" />
  ),
  crack: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="m12 3-2 5 3 3-2 4 2 6" />
    </>
  ),
  balcony: (
    <path d="M3 13h18M4 13v7M20 13v7M8 13v7M12 13v7M16 13v7M3 20h18M7 13V4h10v9" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" />
    </>
  ),
  facebook: (
    <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4V8.5a.5.5 0 0 1 .5-.5z" />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h0" />
    </>
  ),
  door: (
    <>
      <path d="M6 21V3h12v18M3 21h18" />
      <path d="M14.5 12h0" />
    </>
  ),
} as const;

export type IconName = keyof typeof paths;

export function Icon({
  name,
  size = 24,
  className,
  label,
}: {
  name: IconName;
  size?: number;
  className?: string;
  label?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
