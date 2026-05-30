import { useEffect, useRef, useState } from "react";
import "./ReflectiveCard.css";
import { Activity, Fingerprint, Lock } from "lucide-react";

type ReflectiveCardProps = {
  blurStrength?: number;
  color?: string;
  metalness?: number;
  roughness?: number;
  overlayColor?: string;
  displacementStrength?: number;
  noiseScale?: number;
  specularConstant?: number;
  grayscale?: number;
  glassDistortion?: number;
  className?: string;
  style?: React.CSSProperties;
};

const ReflectiveCard = ({
  blurStrength = 12,
  color = "white",
  metalness = 1,
  roughness = 0.4,
  overlayColor = "rgba(255, 255, 255, 0.1)",
  displacementStrength = 20,
  noiseScale = 1,
  specularConstant = 1.2,
  grayscale = 1,
  glassDistortion = 30,
  className = "",
  style = {},
}: ReflectiveCardProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const prefersReducedMotionRef = useRef(false);

  const rafRef = useRef<number | null>(null);
  const motion = useRef({ targetX: 0, targetY: 0, x: 0, y: 0 });

  useEffect(() => {
    const imgEl = imgRef.current;
    const cardEl = containerRef.current;
    if (!imgEl || !cardEl) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    prefersReducedMotionRef.current = prefersReducedMotion;
    if (prefersReducedMotion) return;

    const onPointerMove = (e: PointerEvent) => {
      const rect = imgEl.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      motion.current.targetX = (px - 0.5) * 2; // -1..1
      motion.current.targetY = (py - 0.5) * 2; // -1..1
    };

    const tick = () => {
      const m = motion.current;
      m.x += (m.targetX - m.x) * 0.08;
      m.y += (m.targetY - m.y) * 0.08;
      imgEl.style.transform = `scale(1.18) scaleX(-1) translate(${m.x * 8}px, ${m.y * 6}px) rotate(${m.x * 2}deg)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    cardEl.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cardEl.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const baseFrequency = 0.03 / Math.max(0.1, noiseScale);

  const saturation = 1 - Math.max(0, Math.min(1, grayscale));

  const cssVariables = {
    "--blur-strength": `${blurStrength}px`,
    "--metalness": String(metalness),
    "--roughness": String(roughness),
    "--overlay-color": overlayColor,
    "--text-color": color,
    "--saturation": String(saturation)
  } as React.CSSProperties;

  return (
    <div
      ref={containerRef}
      className={`reflective-card-container ${isInteracting ? "is-interacting" : ""} ${className}`}
      style={{ ...style, ...cssVariables }}
      onPointerDown={() => {
        if (!prefersReducedMotionRef.current) setIsInteracting(true);
      }}
      onPointerUp={() => setIsInteracting(false)}
      onPointerCancel={() => setIsInteracting(false)}
      onPointerLeave={() => setIsInteracting(false)}
      onTouchStart={() => {
        if (!prefersReducedMotionRef.current) setIsInteracting(true);
      }}
      onTouchEnd={() => setIsInteracting(false)}
      onTouchCancel={() => setIsInteracting(false)}

    >
      <svg className="reflective-svg-filters" aria-hidden="true">
        <defs>
          <filter id="metallic-displacement" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="turbulence"
              baseFrequency={baseFrequency}
              numOctaves="2"
              result="noise"
            />
            <feColorMatrix in="noise" type="luminanceToAlpha" result="noiseAlpha" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={displacementStrength}
              xChannelSelector="R"
              yChannelSelector="G"
              result="rippled"
            />
            <feSpecularLighting
              in="noiseAlpha"
              surfaceScale={displacementStrength}
              specularConstant={specularConstant}
              specularExponent="20"
              lightingColor="#ffffff"
              result="light"
            >
              <fePointLight x="0" y="0" z="300" />
            </feSpecularLighting>
            <feComposite in="light" in2="rippled" operator="in" result="light-effect" />
            <feBlend in="light-effect" in2="rippled" mode="screen" result="metallic-result" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
              result="solidAlpha"
            />
            <feMorphology in="solidAlpha" operator="erode" radius="45" result="erodedAlpha" />
            <feGaussianBlur in="erodedAlpha" stdDeviation="10" result="blurredMap" />
            <feComponentTransfer in="blurredMap" result="glassMap">
              <feFuncA type="linear" slope="0.5" intercept="0" />
            </feComponentTransfer>
            <feDisplacementMap
              in="metallic-result"
              in2="glassMap"
              scale={glassDistortion}
              xChannelSelector="A"
              yChannelSelector="A"
              result="final"
            />
          </filter>
        </defs>
      </svg>

      <img
        ref={imgRef}
        src="/download (1).jpg"
        alt="Profile reflective background"
        className="reflective-photo"
      />


      <div className="reflective-noise" />
      <div className="reflective-sheen" />
      <div className="reflective-border" />

      <div className="reflective-content">
        <div className="card-header">
          <div className="security-badge">
            <Lock size={14} className="security-icon" />
            <span>SECURE ACCESS</span>
          </div>
          <Activity className="status-icon" size={20} />
        </div>

        <div className="card-body">
          <div className="user-info">
            <h2 className="user-name interactive-text">
              EMJAY GUSELA
              <span className="text-highlight">EMJAY GUSELA</span>
            </h2>
            <p className="user-role interactive-text">
              FULL-STACK DEVELOPER
              <span className="text-highlight">FULL-STACK DEVELOPER</span>
            </p>
          </div>
        </div>


        <div className="card-footer">
          <div className="id-section">
            <span className="label">ID NUMBER</span>
            <span className="value">0009-0024-2004</span>
          </div>
          <div className="fingerprint-section">
            <Fingerprint size={32} className="fingerprint-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveCard;



