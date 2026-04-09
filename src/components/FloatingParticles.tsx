export function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Green glow blob - top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

      {/* Purple glow blob - bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      {/* Small green glow - center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
