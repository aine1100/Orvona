import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full  min-h-[50vh] md:min-h-[70vh]">
      {/* Hero Content Area */}
      <div className="relative h-[50vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {/* Additional background fill */}
        <div className="absolute inset-0  z-0" />

        {/* Background Image Container */}
        <div className="absolute inset-0 w-full md:top-28  h-[500px] md:h-full bg-[#141414] z-[1]">
          <Image
            src="/contact_us.png"
            alt="Contact Us Background"
            fill
            priority
            className="object-cover w-full h-full object-center opacity-80"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Dark overlay to ensure no light/white bands show through on small screens */}
        <div className="absolute inset-0 bg-[#141414] opacity-10 z-10 pointer-events-none" />

        {/* Text Content */}
      </div>
    </section>
  );
}