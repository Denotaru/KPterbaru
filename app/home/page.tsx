import Image from 'next/image';

export default function Home() {
  return (
<div className="bg-gray-700 min-h-screen flex flex-col">
  <header className="bg-blue-500 p-4">
    <nav className=" space-x-4 flex items-center justify-center">
     <a className="bg-blue-500 text-white ">LAYANAN PEMBUATAN SURAT YANG KAMI SEDIAKAN</a>
    </nav>
  </header>
<div className="bg-gray-700 min-h-screen flex items-center justify-center">
<div className="bg-gray-200 rounded-2xl p-5  ">
  <div className="space-y-2 ">
  
  <div className="flex items-center justify-center mb-10 text-black font-bold ">MENU SURAT</div>
  <div className="flex justify-between space-x-4">
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-10">
    <a href="/kematian">Surat Kematian</a>
  </button>
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-10">
    <a href="/kematian">Surat Keramaian</a>
  </button>
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-10">
    <a href="/kematian">Surat Keramaian</a>
  </button>
</div>

<div className="flex justify-between space-x-4">
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-auto">
    <a href="/kematian">Surat BPJS</a>
  </button>
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-auto">
    <a href="/kematian">Surat BPJS</a>
  </button>
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-10">
    <a href="/kematian">Surat Keramaian</a>
  </button>
</div>

<div className="flex justify-between space-x-4">
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-auto">
    <a href="/kematian">Surat BPJS</a>
  </button>
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150  flex justify-center items-center w-full h-auto">
    <a href="/kematian">Surat BPJS</a>
  </button>
  <button className="bg-blue-500 rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex justify-center items-center w-full h-10">
    <a href="/kematian">Surat Keramaian</a>
  </button>
</div>


    {/* <div className="flex items-center space-x-6">
      <button className="text-black bg-gray-400 border-none p-2">
        <a href="/kematian">Surat Kematian</a></button>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat Keramaian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat BPJS</a>
    </div>
    <div className="flex items-center space-x-6">
      <a href="/kematian" className="text-black bg-gray-400 border-2 p-2">Surat Kematian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat Keramaian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat BPJS</a>
    </div>
    <div className="flex items-center space-x-6">
      <a href="/kematian" className="text-black bg-gray-400 border-2 p-2">Surat Kematian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat Keramaian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat BPJS</a>
    </div>
    <div className="flex items-center space-x-6">
      <a href="/kematian" className="text-black bg-gray-400 border-2 p-2">Surat Kematian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat Keramaian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Surat BPJS</a>
    </div> */}
</div> 
</div>
</div>

      <footer className="bg-blue-500 p-4">
        <p className="text-white text-center">PRINGOMBO © 2023</p>
      </footer>
    </div>
  );
}
