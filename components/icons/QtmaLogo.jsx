import Image from "next/image";

export function QtmaLogo({ className = "" }) {
  return (
    <div className={`relative overflow-visible ${className} aspect-[1172/448]`}>
      <Image
        src="/assets/Visuals/QTMALogo2.svg"
        alt="QTMA Logo"
        fill
        style={{ objectFit: "contain" }}
        sizes="100%"
        priority
      />
    </div>
  );
}
