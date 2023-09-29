import React from 'react';
import ReactToPrint from 'react-to-print';

export default function Keramaian() {
  return (
<div className="bg-gray-700 min-h-screen flex items-center justify-center">
<div className=" bg-white flex flex-col items-center border-2 p-5 rounded-2xl">
  <div className = "text-black font-bold mb-6">
  <label>Surat Keterangan Keramain</label>
  </div>
  <div className="flex items-center mb-4  ">
    <label className="text-black ">NIK :</label>
    <input className="p-2 ml-4 rounded-xl border" type="number" name="nik" style={{ color: 'black' }} />
  </div>
  <button className="bg-[#002D74] rounded-xl border p-4 text-white py-2 hover:scale-110 duration-150 flex items-center">
    <a href="">Submit</a>
  </button>
</div>


</div>
  );
};