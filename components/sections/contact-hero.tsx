export default function ContactHero() {
  return (
    <section className="relative h-[50vh]  top-16   sm:h-[70vh] w-full flex items-center justify-center overflow-hidden ">
      {/* Background Image with Overlay */}
      <div
        className="absolute h-full inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/contact_us.png")' }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}