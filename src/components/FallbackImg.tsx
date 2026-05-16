"use client";

interface Props {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}

export default function FallbackImg({ src, alt, fallback, className }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        (e.target as HTMLImageElement).src = fallback;
      }}
    />
  );
}
