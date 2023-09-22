import React from 'react';

const Kematian = () => {
  return (
    <section className="bg-gray-700 min-h-screen flex justify-center">
    <main className="bg-gray-100 max-w-3xl p-5 items-center">
    {/* Konten utama halaman Anda di sini */}
    <img
    src="/surart1.png" // Ganti dengan path atau URL gambar yang sesuai
    alt="Kabupaten Gunungkidul"
    className="w-100 h-100 mx-auto mt-20" // Sesuaikan ukuran gambar dan margin atas sesuai kebutuhan Anda
    />
      
      <li className="flex justify-between items-center "> 
      <h1 className="text-black block text-center mx-auto font-bold py-2 "><u>SURAT KETERANGAN KEMATIAN</u></h1>
      </li>
      <li> 
      <a className="text-black block text-center ">Nomor :......../Reg/......../2023</a>
      <p className="text-black">Yang bertanda tangan dibawah ini Lurah Pringombo Kapanewon Rongkop Kabupaten Gunungkidul, menerangkan bahwa :</p> 
      </li>
      
       <form>
       <div className="flex items-center mt">
        <span className=" text-black">Nama </span>
        <a className='ml-20 text-black'>:</a>
        <input type="text" id="nama" className="text-black ml-20 w-200 px-2  border rounded-lg focus:ring focus:ring-blue-100"/>
        </div>

        <div className="flex items-center">
        <span className=" text-black">NIK </span>
        <a className='ml-20 text-black'>:</a>
        <input type="text" id="nik" className="text-black ml-20 w-200 px-2  border rounded-lg focus:ring focus:ring-blue-100"/>
        </div>

        <div className="flex items-center">
        <span className=" text-black">Tempat dan Tanggal Lahir</span>
        <a className='ml-20 text-black'>:</a>
        <input type="text" id="tglLahir" className="text-black ml-20 w-200 px-2  border rounded-lg focus:ring focus:ring-blue-100"/>
        </div>

        <div className="flex items-center">
        <span className=" text-black">Agama </span>
        <a className='ml-20 text-black'>:</a>
        <input type="text" id="agama" className="text-black ml-20 w-200 px-2  border rounded-lg focus:ring focus:ring-blue-100"/>
        </div>

        <div className="flex items-center">
        <span className=" text-black">Pekerjaan </span>
        <a className='ml-20 text-black'>:</a>
        <input type="text" id="pekerjaan" className="text-black ml-20 w-200 px-2  border rounded-lg focus:ring focus:ring-blue-100"/>
        </div>

        <div className="flex items-center">
        <span className="text-black">Alamat</span>
        <a className='ml-20 text-black'>:</a>
        <input
        type="text"
        id="alamat"
        className="text-black px-2 border rounded-lg focus:ring focus:ring-blue-100"/>
        </div>
        
        <div>
        <p className=' text-black mt-5'>
        Orang tersebut meninggal dunia di Padukuhan Pakel pada tanggal __________________ adalah benar-benar  
        penduduk Kalurahan Pringombo, Kapanewon Rongkop, Kabupaten Gunungkidul, sesuai dengan alamat terakhir tersebut 
        dan anak ________________ yang dilahirkan dari pasangan suami istri:</p>
        </div>
        <div className="text-center mt-5">
        <input type="text" id="suamiIstri" className="text-black ml-15 w-200 px-2  border rounded-lg focus:ring focus:ring-blue-100 "/>
        <p className="text-black mr-14 mt-8">Demikian surat keterangan ini dibuat untuk dapat dipergunakan sebagaimana mestinya..</p>
        </div>
        <div className="mt-10">
        <p className="text-lg text-black text-right">Pringombo, 12 Mei 2023</p>
        <p className="font-bold text-black text-right mr-5">a.n. Lurah Pringombo</p>
        <p className="font-bold text-black text-right mr-9">Kaur. Tatalaksana</p>
        <p className="font-bold text-black text-right py-20 mr-10">SUHARWANTO</p>
        </div>
        <div className="text-center">
          {/* <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Kirim
          </button> */}
        </div>
      </form>
      </main>

    </section>
  );
};

export default Kematian;

