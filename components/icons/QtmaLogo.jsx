import Image from "next/image";

/**
 * @param {Object} props
 * @param {string} [props.className="w-[175px] h-[175px]"]
 */
export function QtmaLogo({ className = "w-[175px] h-[175px]" } = {}) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <Image
        src="/assets/Visuals/QTMALogo.svg"
        alt="QTMA Logo"
        fill
        style={{ objectFit: "contain" }}
        sizes="100%"
        priority
      />
    </div>
  );
}
