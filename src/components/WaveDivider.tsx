interface WaveDividerProps {
  flip?: boolean;
  fillClass?: string;
}

export default function WaveDivider({ flip = false, fillClass = "fill-background" }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} aria-hidden>
      <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className={`w-full h-16 ${fillClass}`}>
        <path d="M0,36 C360,72 1080,0 1440,36 L1440,72 L0,72 Z" />
      </svg>
    </div>
  );
}
