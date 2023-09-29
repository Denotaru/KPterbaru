export default function Daftar() {
    return(
        <div className="flex justify-center">
        <ul className="border border-gray-300 rounded p-4 space-x-4">
          <li><a href="/" className="text-blue-500">Beranda</a></li>
          <li><a href="/about" className="text-blue-500">Tentang Kami</a></li>
          <li><a href="/services" className="text-blue-500">Layanan</a></li>
          <li><a href="/portfolio" className="text-blue-500">Portofolio</a></li>
          <li><a href="/blog" className="text-blue-500">Blog</a></li>
        </ul>
      </div>
    );
  };
