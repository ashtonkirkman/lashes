import { services } from "../data/services";
import ServiceCard from "../components/ServiceCard";

export default function Services(){
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-serif text-brown mb-6">Services & Prices</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map(s => <ServiceCard key={s.id} s={s} />)}
      </div>
      <p className="text-sm text-brown/80 mt-6">Prices may vary depending on lash condition. Consult during your appointment.</p>
    </section>
  );
}
