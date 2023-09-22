import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gray-700 min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4">
        <nav className=" space-x-4 flex items-center justify-center">
        <a className="bg-blue-500 text-white ">LAYANAN PEMBUATAN SURAT YANG KAMI SEDIAKAN</a>
        </nav>
      </header>
      <section className="bg-gray-700 min-h-screen flex items-center justify-center">

      <main className="bg-gray-200 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        {/* Konten utama halaman Anda di sini */}
        <ul className="space-y-2">
        <li className="flex justify-between items-center ">
            <a href="/kematian" className="text-black bg-gray-400 border-4 p-2">Surat Kematian</a>
            <a className="mx-6"></a>
            <a href="/keramaian" className="text-black bg-gray-400 border-4 p-2">Ijin Keramaian</a>
          </li>
          <li className="flex justify-between items-center ">
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Surat Kematian</a>
            <a className="mx-6"></a>
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Ijin Keramaian</a>
          </li> 
          <li className="flex justify-between items-center ">
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Surat Kematian</a>
            <a className="mx-6"></a>
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Ijin Keramaian</a>
          </li> 
          <li className="flex justify-between items-center ">
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Surat Kematian</a>
            <a  className="mx-6"></a>
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Ijin Keramaian</a>
          </li> 
          <li className="flex justify-between items-center ">
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Surat Kematian</a>
            <a  className="mx-6"></a>
            <a href="#" className="text-black bg-gray-400 border-4 p-2">Ijin Keramaian</a>
          </li>
        </ul>
      </main>
      </section>

      <footer className="bg-blue-500 p-4">
        <p className="text-white text-center">PRINGOMBO © 2023</p>
      </footer>
    </div>
  );
}
