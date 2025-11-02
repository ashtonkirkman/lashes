import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="bg-ivory/80 backdrop-blur-sm border-b border-beige">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-brown font-serif">LB</div>
          <span className="text-brown font-serif text-xl">The Lash Burrow</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-brown hover:underline">Home</Link>
          <Link to="/services" className="text-brown hover:underline">Services</Link>
          <Link to="/booking" className="text-brown hover:underline">Book</Link>
          <Link to="/about" className="text-brown hover:underline">About</Link>
        </div>
      </div>
    </nav>
  );
}
