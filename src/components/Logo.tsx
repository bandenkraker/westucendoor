export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo-light" : ""}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="40" height="40" rx="3" fill="#1F4E6B" />
        {/* Drie lagen pleister – drie generaties */}
        <path d="M8 27h24" stroke="#F5F2EC" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M8 20.5h18" stroke="#D9CBB3" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M8 14h11" stroke="#C08A3E" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        <strong>We Stucen Door</strong>
        <small>sinds 1969</small>
      </span>
    </span>
  );
}
