export default function Footer(){
  return (
    <footer className="bg-beige border-t border-ivory">
      <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-brown">
        <p>© {new Date().getFullYear()} The Lash Burrow — Cozy lash extensions in town.</p>
        <p className="mt-2">Follow us on Instagram • Contact: (555) 555-5555</p>
      </div>
    </footer>
  );
}
