"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type AssetImageProps = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
};

export function AssetImage({
  src,
  fallback,
  alt,
  className,
  fill,
  width,
  height,
  priority,
}: AssetImageProps) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);

  function handleError() {
    if (!failed) {
      setFailed(true);
      setCurrent(fallback);
    }
  }

  if (fill) {
    return (
      <Image
        src={current}
        alt={alt}
        fill
        className={cn("object-cover", className)}
        onError={handleError}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized={current.startsWith("https://")}
      />
    );
  }

  return (
    <Image
      src={current}
      alt={alt}
      width={width ?? 800}
      height={height ?? 1000}
      className={className}
      onError={handleError}
      priority={priority}
      unoptimized={current.startsWith("https://")}
    />
  );
}
