import { Link } from "react-router-dom";

export default function Home(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-5xl font-serif text-brown leading-tight">Welcome to The Lash Burrow</h1>
          <p className="mt-4 text-brown/80">A cozy, cottage-style lash studio — gentle care, beautiful lashes. Book your pamper time with us.</p>
          <div className="mt-6 space-x-3">
            <Link to="/services" className="px-5 py-2 bg-blush rounded-full text-brown font-semibold border border-beige">Our Services</Link>
            <Link to="/booking" className="px-5 py-2 border border-beige rounded-full text-brown">Book Now</Link>
          </div>
        </div>
        <div className="rounded-xl bg-[url('/placeholder-floral.jpg')] bg-cover bg-center h-64" />
      </div>
    </section>
  );
}
