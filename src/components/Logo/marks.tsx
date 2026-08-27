/**
 * Hand-recreated approximations of real client logo marks, built from
 * direct visual inspection of reference images (no exact source file was
 * obtainable — Figma's raw asset URLs aren't reachable from this
 * environment's network policy, and file uploads for these images didn't
 * land as accessible files). These are best-effort visual matches (shape,
 * color, wordmark), not pixel-perfect vector traces — expect minor
 * inaccuracy, especially on the more detailed marks (Club Pilates,
 * StretchLab, Spartans, F45). Swap in official brand assets when available.
 */

export function AktMark() {
  return (
    <svg width="72" height="28" viewBox="0 0 72 28" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AKT">
      <text
        x="0"
        y="21"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="800"
        letterSpacing="1"
        fill="#161616"
      >
        AKT
      </text>
      <line x1="4" y1="14" x2="30" y2="14" stroke="#161616" strokeWidth="1" />
    </svg>
  );
}

export function ClubPilatesMark() {
  return (
    <svg width="210" height="34" viewBox="0 0 210 34" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Club Pilates">
      <text x="0" y="22" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="600" letterSpacing="1.5" fill="#5a6570">
        CLUB
      </text>
      <g transform="translate(97, 17)">
        <circle r="15" fill="none" stroke="#5b7fc4" strokeWidth="1.4" strokeDasharray="1.6 2.2" />
        <path
          d="M0 -10 C2 -4 8 -2 10 0 C8 2 2 4 0 10 C-2 4 -8 2 -10 0 C-8 -2 -2 -4 0 -10Z"
          fill="#5b7fc4"
        />
        <path
          d="M0 -10 C2 -4 8 -2 10 0 C8 2 2 4 0 10 C-2 4 -8 2 -10 0 C-8 -2 -2 -4 0 -10Z"
          fill="#5b7fc4"
          transform="rotate(45)"
        />
        <circle r="2.5" fill="#fff" />
      </g>
      <text x="122" y="22" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="600" letterSpacing="1.5" fill="#5a6570">
        PILATES
      </text>
    </svg>
  );
}

export function F45Mark() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="F45">
      <line x1="0" y1="10" x2="32" y2="10" stroke="#c8102e" strokeWidth="1.5" />
      <line x1="0" y1="15" x2="32" y2="15" stroke="#1b1b4b" strokeWidth="3" />
      <line x1="0" y1="20" x2="32" y2="20" stroke="#c8102e" strokeWidth="1.5" />
      <rect x="34" y="2" width="52" height="28" rx="8" fill="none" stroke="#1b1b4b" strokeWidth="2.5" />
      <text
        x="60"
        y="22"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="18"
        fontWeight="800"
        fill="#1b1b4b"
      >
        F45
      </text>
      <line x1="88" y1="10" x2="120" y2="10" stroke="#c8102e" strokeWidth="1.5" />
      <line x1="88" y1="15" x2="120" y2="15" stroke="#1b1b4b" strokeWidth="3" />
      <line x1="88" y1="20" x2="120" y2="20" stroke="#c8102e" strokeWidth="1.5" />
    </svg>
  );
}

export function JazzerciseMark() {
  return (
    <svg width="110" height="24" viewBox="0 0 110 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Jazzercise">
      <text
        x="0"
        y="18"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="18"
        fontStyle="italic"
        fontWeight="700"
        fill="#14213d"
      >
        Jazzercise
      </text>
    </svg>
  );
}

export function RumbleMark() {
  return (
    <svg width="60" height="42" viewBox="0 0 60 42" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rumble">
      <path
        d="M30 2C18 2 9 11 9 21c0 10 9 15 21 15s21-5 21-15C51 11 42 2 30 2Z"
        fill="#e2231a"
      />
      <path
        d="M22 15l6 6-6 6M38 15l-6 6 6 6"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <text
        x="30"
        y="40"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
        fontWeight="800"
        letterSpacing="1"
        fill="#e2231a"
      >
        RUMBLE
      </text>
    </svg>
  );
}

export function SnapFitnessMark() {
  return (
    <svg width="130" height="26" viewBox="0 0 130 26" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Snap Fitness 24/7">
      <text x="0" y="19" fontFamily="Arial, Helvetica, sans-serif" fontSize="17" fontWeight="800" fontStyle="italic" fill="#f15a29">
        snap
      </text>
      <text x="42" y="19" fontFamily="Arial, Helvetica, sans-serif" fontSize="17" fontWeight="400" fill="#6b7280">
        fitness
      </text>
      <text x="107" y="11" fontFamily="Arial, Helvetica, sans-serif" fontSize="8" fontWeight="600" fill="#6b7280">
        24/7
      </text>
    </svg>
  );
}

export function SpartansMark() {
  return (
    <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Spartans">
      <path
        d="M50 4c-4.5 0-8 2.8-8 6.4v3.6c0 3.2 1.8 5.4 3.4 6.4l-2.4 4h14l-2.4-4c1.6-1 3.4-3.2 3.4-6.4v-3.6c0-3.6-3.5-6.4-8-6.4Z"
        fill="none"
        stroke="#1c2431"
        strokeWidth="1.6"
      />
      <path d="M45 10.5c1.6-1.4 3.3-1.4 5-1.4s3.4 0 5 1.4" fill="none" stroke="#1c2431" strokeWidth="1.2" />
      <text
        x="50"
        y="34"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="9"
        fontWeight="800"
        letterSpacing="1"
        fill="#1c2431"
      >
        SPARTANS
      </text>
    </svg>
  );
}

export function StretchLabMark() {
  return (
    <svg width="165" height="30" viewBox="0 0 165 30" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="StretchLab">
      <rect x="0" y="10" width="8" height="14" fill="#1ea6a0" />
      <rect x="10" y="4" width="8" height="20" fill="#e2483a" />
      <rect x="20" y="0" width="8" height="24" fill="#1b2a5b" />
      <text x="36" y="19" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.5" fill="#1b2a5b">
        STRETCH
      </text>
      <text x="120" y="19" fontFamily="Arial, Helvetica, sans-serif" fontSize="15" fontWeight="800" letterSpacing="0.5" fill="#1ea6a0">
        LAB
      </text>
    </svg>
  );
}

export const LOGO_MARKS: Partial<Record<string, () => JSX.Element>> = {
  akt: AktMark,
  'club pilates': ClubPilatesMark,
  f45: F45Mark,
  jazzercise: JazzerciseMark,
  rumble: RumbleMark,
  'snap fitness': SnapFitnessMark,
  'snap fitness 24/7': SnapFitnessMark,
  spartans: SpartansMark,
  stretchlab: StretchLabMark,
  'stretch lab': StretchLabMark,
};
