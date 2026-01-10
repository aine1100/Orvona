import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full ">
      {/* Spacer to match Navbar height and background */}

      {/* Hero Content Area */}
      <div className="relative h-[50vh] md:h-[70vh] w-full flex items-center justify-center overflow-visible">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 md:-top-20">
          <Image
            src="/contact_us.png"
            alt="Contact Us Background"
            fill
            priority
            className="object-cover  w-full h-full object-top opacity-80 "
          />
          {/* Subtle Overlay to make image even less visible */}
        </div>

        {/* Text Content */}
       
      </div>
    </section>
  );
}
