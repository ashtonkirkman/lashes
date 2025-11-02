import { useState } from "react";
import axios from "axios";

export default function Booking(){
  const [form, setForm] = useState({ name: "", email: "", serviceId: "", datetime: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post("http://localhost:5000/book", form); // backend url
      setStatus("sent");
      setForm({ name: "", email: "", serviceId: "", datetime: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-md mx-auto px-6 py-12">
      <h2 className="text-2xl font-serif text-brown mb-4">Book an Appointment</h2>
      <form onSubmit={submit} className="space-y-3">
        <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})}
          placeholder="Your name" className="w-full p-3 rounded border" />
        <input required value={form.email} onChange={e=>setForm({...form, email:e.target.value})}
          placeholder="Email" className="w-full p-3 rounded border" />
        <select required value={form.serviceId} onChange={e=>setForm({...form, serviceId:e.target.value})} className="w-full p-3 rounded border">
          <option value="">Choose Service</option>
          <option value="1">Classic Full Set</option>
          <option value="2">Hybrid Full Set</option>
          <option value="3">Volume Full Set</option>
          <option value="4">Refill</option>
        </select>
        <input required value={form.datetime} onChange={e=>setForm({...form, datetime:e.target.value})}
          type="datetime-local" className="w-full p-3 rounded border" />
        <button type="submit" className="w-full py-3 rounded-full bg-blush text-brown font-semibold">Request Booking</button>
      </form>
      {status === "sending" && <p className="mt-3 text-sm">Sending...</p>}
      {status === "sent" && <p className="mt-3 text-sm text-green-600">Booking request sent!</p>}
      {status === "error" && <p className="mt-3 text-sm text-red-600">Error sending. Try again.</p>}
    </section>
  );
}
