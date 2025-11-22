// components/FloatingBlobs.tsx
type FloatingBlobsProps = {
  // mousePosition removed — component no longer depends on cursor
  scrollY?: number;
};

export default function FloatingBlobs({ scrollY = 0 }: FloatingBlobsProps) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse"
        style={{
          // Only use scrollY for parallax-like vertical offset; no mouse-based translation
          transform: `translateY(${scrollY * 0.1}px)`,
          top: '10%',
          left: '10%',
        }}
      />
      <div
        className="absolute w-64 h-64 bg-purple-200 opacity-25 rounded-full blur-2xl animate-pulse"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          top: '60%',
          right: '15%',
          animationDelay: '1s',
        }}
      />
      <div
        className="absolute w-48 h-48 bg-indigo-200 opacity-30 rounded-full blur-xl animate-bounce"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
          top: '30%',
          right: '40%',
          animationDuration: '4s',
        }}
      />
    </div>
  );
}