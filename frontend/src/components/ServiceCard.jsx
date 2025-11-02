export default function ServiceCard({s}){
  return (
    <div className="bg-ivory p-4 rounded-2xl shadow-sm border border-beige">
      <h3 className="font-serif text-lg text-brown">{s.name}</h3>
      <p className="text-sm text-brown/80">{s.desc}</p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-sm text-brown/80">{s.duration}</span>
        <span className="font-semibold text-brown">{s.price}</span>
      </div>
    </div>
  );
}
