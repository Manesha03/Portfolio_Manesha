import { motion } from "framer-motion";

export function Loader() {
  // Star constellation points (5-point star, viewBox 400x400, center 200,200)
  const starPts: [number, number][] = [
    [200, 50], // outer top
    [235, 151], // inner
    [343, 154], // outer top-right
    [257, 218], // inner
    [288, 321], // outer bottom-right
    [200, 260], // inner
    [112, 321], // outer bottom-left
    [143, 218], // inner
    [57, 154], // outer top-left
    [165, 151], // inner
  ];
  const starPath = starPts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ") + " Z";

  // Extra constellation cross-links inside the star for the "network" look
  const crossLinks: [number, number][] = [
    [0, 5],
    [2, 7],
    [4, 9],
    [6, 1],
    [8, 3],
    [1, 9],
    [3, 5],
    [5, 7],
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative">
        {/* Ambient glow - using theme primary color */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, oklch(0.7 0.16 265 / 45%), transparent 70%)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <svg
          width="320"
          height="320"
          viewBox="0 0 400 400"
          className="relative overflow-visible"
          fill="none"
        >
          {/* Star constellation outline - using theme primary */}
          <motion.path
            d={starPath}
            stroke="oklch(0.7 0.16 265)"
            strokeWidth="1.2"
            strokeOpacity="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ filter: "drop-shadow(0 0 4px oklch(0.7 0.16 265 / 60%))" }}
          />

          {/* Inner cross-link network - using theme secondary */}
          {crossLinks.map(([a, b], i) => (
            <motion.line
              key={`cl-${i}`}
              x1={starPts[a][0]}
              y1={starPts[a][1]}
              x2={starPts[b][0]}
              y2={starPts[b][1]}
              stroke="oklch(0.85 0.11 230)"
              strokeWidth="0.8"
              strokeOpacity="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.03, ease: "easeOut" }}
            />
          ))}

          {/* Constellation node dots - theme primary and secondary */}
          {starPts.map((p, i) => (
            <motion.circle
              key={`sn-${i}`}
              cx={p[0]}
              cy={p[1]}
              r={i % 2 === 0 ? 4 : 2.5}
              fill={i % 2 === 0 ? "oklch(0.7 0.16 265)" : "oklch(0.85 0.11 230)"}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.04, duration: 0.25, ease: "backOut" }}
              style={{
                filter: `drop-shadow(0 0 6px ${i % 2 === 0 ? "oklch(0.7 0.16 265)" : "oklch(0.85 0.11 230)"})`,
              }}
            />
          ))}

          <motion.g
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "200px 200px" }}
          >
            <motion.circle
              cx="200"
              cy="200"
              r="74"
              stroke="oklch(0.85 0.11 230)"
              strokeWidth="1.4"
              strokeOpacity="0.55"
              fill="oklch(0.17 0.05 255 / 42%)"
              animate={{ opacity: [0.55, 0.95, 0.55] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ filter: "drop-shadow(0 0 14px oklch(0.7 0.16 265 / 55%))" }}
            />
            <motion.text
              x="200"
              y="221"
              textAnchor="middle"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="76"
              fontWeight="600"
              letterSpacing="2"
              fill="oklch(0.98 0.005 240)"
              stroke="oklch(0.82 0.13 220)"
              strokeWidth="0.8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              style={{ filter: "drop-shadow(0 0 12px oklch(0.85 0.11 230 / 70%))" }}
            >
              MK
            </motion.text>
            <motion.line
              x1="200"
              y1="138"
              x2="200"
              y2="258"
              stroke="oklch(0.85 0.11 230)"
              strokeWidth="1"
              strokeOpacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.55, delay: 1.1 }}
            />
          </motion.g>
        </svg>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-8 font-display text-lg tracking-wide text-muted-foreground"
      >
        Loading Manesha&apos;s data universe
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ...
        </motion.span>
      </motion.p>
    </motion.div>
  );
}
