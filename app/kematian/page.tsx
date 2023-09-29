import React from 'react';
import ReactToPrint from 'react-to-print';

export default function Kematian() {
  return (
<div className="bg-gray-700 min-h-screen flex items-center justify-center">
<div className=" bg-white flex flex-col items-center border-2 p-5 rounded-2xl">
  <div className = "text-black font-bold mb-6">
  <label>Surat Keterangan Kematian</label>
  </div>
  <div className="flex items-center mb-4  ">
    <label className="text-black font-bold ">NIK :</label>
    <input className="p-2 ml-4 rounded-xl border bg-gray-100" type="number" name="nik" style={{ color: 'black' }} />
  </div>
  <button className="bg-[#002D74] rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex items-center">
    <a href="">Submit</a>
  </button>
</div>


</div>
  );
};

//     <section className="bg-gray-700 min-h-screen flex justify-center">
//     <main className="bg-gray-100 max-w-3xl p-5 items-center">
//     {/* Konten utama halaman Anda di sini */}
//     <img
//     src="/surart1.png" // Ganti dengan path atau URL gambar yang sesuai
//     alt="Kabupaten Gunungkidul"
//     className="w-100 h-100 mx-auto mt-20" // Sesuaikan ukuran gambar dan margin atas sesuai kebutuhan Anda
//     />
      
//       <li className="flex justify-between items-center "> 
//       <h1 className="text-black block text-center mx-auto font-bold py-2 "><u>SURAT KETERANGAN KEMATIAN</u></h1>
//       </li>
//       <li> 
//       <a className="text-black block text-center ">Nomor :......../Reg/......../2023</a>
//       <p className="text-black">Yang bertanda tangan dibawah ini Lurah Pringombo Kapanewon Rongkop Kabupaten Gunungkidul, menerangkan bahwa :</p> 
//       </li>
      
// <form>
// <div className="flex items-center">
//   <span className="text-black">Nama :</span>
//   <input type="text" id="nama"
//   className="text-black px-2 border rounded-lg focus:ring focus:ring-blue-100 mx-auto max-w-200"
//   />
// </div>

// <div className="flex items-center">
//   <span className="text-black">NIK :</span>
//   <input type="number" id="nik"
//   className="text-black px-2 border rounded-lg focus:ring focus:ring-blue-100 mx-auto max-w-200"
//   />
// </div>

// <div className="flex items-center">
//   <span className="text-black">Tempat dan Tanggal Lahir :</span>
//   <input type="text" id="tglLahir"
//     className="text-black px-2 border rounded-lg focus:ring focus:ring-blue-100 mx-10 max-w-200"
//   />
// </div>

// <div className="flex items-center">
//   <span className="text-black">Agama :</span>
//   <input
//     type="text"
//     id="agama"
//     className="text-black px-2 border rounded-lg focus:ring focus:ring-blue-100 mx-auto max-w-200"
//   />
// </div>

// <div className="flex items-center">
//   <span className="text-black">Pekerjaan :</span>
//   <input type="text" id="pekerjaan"
//   className="text-black px-2 border rounded-lg focus:ring focus:ring-blue-100 mx-auto max-w-200"
//   />
// </div>

// <div className="flex items-center">
//   <span className="text-black">Alamat :</span>
//   <input type="text" id="alamat"
//   className="text-black px-2 border rounded-lg focus:ring focus:ring-blue-100 mx-auto max-w-200"
//   />
// </div>
        
//         <div>
//         <p className=' text-black mt-5'>
//         Orang tersebut meninggal dunia di Padukuhan Pakel pada tanggal __________________ adalah benar-benar  
//         penduduk Kalurahan Pringombo, Kapanewon Rongkop, Kabupaten Gunungkidul, sesuai dengan alamat terakhir tersebut 
//         dan anak ________________ yang dilahirkan dari pasangan suami istri:</p>
//         </div>
//         <div className="text-center mt-5">
//         <input type="text" id="suamiIstri" className="text-black ml-15 w-200 px-2  border rounded-lg focus:ring focus:ring-blue-100 "/>
//         <p className="text-black mr-14 mt-8">Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya..</p>
//         </div>
//         <div className="mt-10">
//         <p className="text-lg text-black ">Pringombo, _____________</p>
//         <p className="font-bold text-black ml-5">a.n. Lurah Pringombo</p>
//         <p className="font-bold text-black ml-9">Kaur. Tatalaksana</p>
//         <p className="font-bold text-black py-20 ml-10">SUHARWANTO</p>
//         </div>
//         <div className="text-center">
//           {/* <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//           >
//             Kirim
//           </button> */}
//         </div>
//       </form>
//       </main>

//     </section>
//   );
// };

// export default Kematian;
// // render(<Kematian/>, document.querySelector("#root"));
  {/* <ul className="space-y-2">
    <li className="flex items-center space-x-6">
      <a href="/kematian" className="text-black bg-gray-400 border-2 p-2">Surat Kematian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Ijin Keramaian</a>
      <a href="/keramaian" className="text-black bg-gray-400 border-2 p-2">Ijin Keramaian</a>
    </li>
    <li className="flex items-center space-x-6">
      <a href="#" className="text-black bg-gray-400 border-2 rounded p-2">Surat Kematian</a>
      <a href="#" className="text-black bg-gray-400 border-2 border-gray-600 rounded p-2">Ijin Keramaian</a>
    </li>
    <li className="flex items-center space-x-6">
      <a href="#" className="text-black bg-gray-400 border-2 border-gray-600 rounded p-2">Surat Kematian</a>
      <a href="#" className="text-black bg-gray-400 border-2 border-gray-600 rounded p-2">Ijin Keramaian</a>
    </li>
    <li className="flex items-center space-x-6">
      <a href="#" className="text-black bg-gray-400 border-2 border-gray-600 rounded p-2">Surat Kematian</a>
      <a href="#" className="text-black bg-gray-400 border-2 border-gray-600 rounded p-2">Ijin Keramaian</a>
    </li>
    <li className="flex items-center space-x-6">
      <a href="#" className="text-black bg-gray-400 border-2 border-gray-600 rounded p-2">Surat Kematian</a>
      <a href="#" className="text-black bg-gray-400 border-2 border-gray-600 rounded p-2">Ijin Keramaian</a>
    </li>
</ul>  */}

