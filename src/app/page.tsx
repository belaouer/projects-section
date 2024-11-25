import App from "@/components/App";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis root options={{ autoRaf: true }}>
      <svg className="pointer-events-none absolute cursor-none max-w-full block">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency="0.5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <App />
    </ReactLenis>
  );
}
