import { useState, useEffect } from 'react';
import pdfjs from 'pdfjs-dist/build/pdf';
import { useClient } from '@react-ssr/server';

const PDFViewer = () => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    // Lokasi file PDF Anda
    const pdfUrl = '/ijinKeramaian.pdf'; // Ganti dengan path yang benar

    // Muat file PDF menggunakan pdfjs
    pdfjs.getDocument(pdfUrl).promise.then((pdf) => {
      // Ambil halaman pertama dari PDF
      pdf.getPage(1).then((page) => {
        // Render halaman ke elemen HTML
        const canvas = document.getElementById('pdf-canvas');
        const context = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        page.render({ canvasContext: context, viewport });
      });
    });
  }, []);

  return (
    <div>
      <canvas id="pdf-canvas"></canvas>
    </div>
  );
};

// Menandai komponen sebagai "Client Component"
useClient(PDFViewer);

export default PDFViewer;
