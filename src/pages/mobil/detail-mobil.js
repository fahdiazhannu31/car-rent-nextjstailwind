import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CardRow from "@/components/CardRow";

const dataMobil = [
  {
    id: 1,
    title: 'Toyota Fortuner 2024',
    description: 'Description for Card 1',
    imageUrl: '/images/mobil/fortuner.png',
    additionalImages: [
      '/images/mobil/fortuner1.jpg',
      '/images/mobil/fortuner2.jpg',
      '/images/mobil/fortuner3.jpg',
    ],
    hargaPerhari: 450000,
    href: '#',
    rating: 4.5,
    star: '/images/star.png'
  }
];

export default function DetailMobil() {
  const [activeTab, setActiveTab] = useState('detail');
  const [mainImage, setMainImage] = useState(dataMobil[0].imageUrl);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withDriver, setWithDriver] = useState(false);
  const toggleDriverOption = () => {
    setWithDriver(!withDriver);
  };

  const calculateTotalPrice = () => {
    let totalPrice = dataMobil[0].hargaPerhari;
    if (withDriver) {
      totalPrice += 150000; // Tambahan harga jika memilih dengan supir
    }
    return totalPrice.toLocaleString();
  };
  const content = `
    <p><strong>1. Umum</strong></p>
    <p>1.1. Penyewa harus berusia minimal 21 tahun dan memiliki SIM yang masih berlaku.</p>
    <p>1.2. Penyewa harus menyerahkan KTP asli yang masih berlaku dan fotokopi KTP pada saat penyewaan.</p>
    <p>1.3. Penyewa harus menyetujui semua syarat dan ketentuan yang ditetapkan oleh penyedia layanan penyewaan mobil.</p>
    
    <p><strong>2. Durasi Penyewaan</strong></p>
    <p>2.1. Durasi penyewaan minimal adalah 24 jam (1 hari).</p>
    <p>2.2. Penyewa harus mengembalikan mobil tepat waktu sesuai dengan waktu yang telah disepakati. Keterlambatan pengembalian akan dikenakan biaya tambahan.</p>
    
    <p><strong>3. Pembayaran</strong></p>
    <p>3.1. Pembayaran dilakukan di muka pada saat pengambilan mobil.</p>
    <p>3.2. Pembayaran dapat dilakukan melalui transfer bank atau metode pembayaran lainnya yang disetujui.</p>
    <p>3.3. Harga yang tertera sudah termasuk biaya asuransi dasar tetapi belum termasuk biaya bahan bakar, tol, parkir, dan denda tilang.</p>
    
    <p><strong>4. Penggunaan Mobil</strong></p>
    <p>4.1. Mobil hanya boleh digunakan untuk keperluan pribadi dan tidak boleh digunakan untuk tujuan komersial tanpa izin tertulis dari penyedia layanan.</p>
    <p>4.2. Penyewa bertanggung jawab untuk menjaga kondisi mobil tetap baik dan mengembalikannya dalam kondisi yang sama seperti saat diterima.</p>
    <p>4.3. Dilarang merokok di dalam mobil.</p>
    
    <p><strong>5. Bahan Bakar</strong></p>
    <p>5.1. Mobil akan diserahkan dengan tangki bahan bakar penuh dan harus dikembalikan dengan tangki bahan bakar penuh.</p>
    <p>5.2. Jika mobil dikembalikan dengan tangki bahan bakar kurang dari penuh, biaya bahan bakar akan dikenakan sesuai tarif yang berlaku.</p>
    
    <p><strong>6. Asuransi dan Tanggung Jawab</strong></p>
    <p>6.1. Mobil sudah diasuransikan dengan asuransi dasar yang mencakup kerusakan dan kecelakaan.</p>
    <p>6.2. Penyewa bertanggung jawab atas biaya kerusakan yang tidak tercakup oleh asuransi atau yang terjadi akibat kelalaian penyewa.</p>
    <p>6.3. Penyewa harus segera melaporkan setiap kecelakaan atau kerusakan kepada penyedia layanan dan pihak berwenang yang relevan.</p>
    
    <p><strong>7. Pembatalan</strong></p>
    <p>7.1. Pembatalan penyewaan yang dilakukan dalam waktu kurang dari 24 jam sebelum waktu pengambilan akan dikenakan biaya pembatalan sebesar 50% dari total biaya penyewaan.</p>
    <p>7.2. Pembatalan pada saat pengambilan mobil atau setelah mobil diambil tidak akan mengembalikan biaya penyewaan.</p>
    
    <p><strong>8. Pengembalian Mobil</strong></p>
    <p>8.1. Mobil harus dikembalikan ke lokasi yang telah disepakati pada waktu yang telah ditentukan.</p>
    <p>8.2. Penyewa harus memastikan bahwa semua barang pribadi telah dikeluarkan dari mobil sebelum pengembalian.</p>
    <p>8.3. Penyewa bertanggung jawab atas biaya pembersihan jika mobil dikembalikan dalam kondisi kotor.</p>
    
    <p><strong>9. Sanksi</strong></p>
    <p>9.1. Penyewa akan dikenakan denda untuk setiap pelanggaran syarat dan ketentuan ini.</p>
    <p>9.2. Penyedia layanan berhak untuk menghentikan penyewaan dan menarik kembali mobil jika penyewa melanggar syarat dan ketentuan ini.</p>
    
    <p><strong>10. Hukum yang Berlaku</strong></p>
    <p>10.1. Syarat dan ketentuan ini diatur dan ditafsirkan sesuai dengan hukum yang berlaku di Indonesia.</p>
    <p>10.2. Setiap perselisihan yang timbul dari syarat dan ketentuan ini akan diselesaikan melalui jalur hukum yang berlaku.</p>
  `;

  const truncatedContent = content.substring(0, 200);

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <section className="py-8">
      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <img className="w-full md:w-auto rounded-lg shadow main-image" src={mainImage} alt="product image" />
          <div className="flex mt-4 space-x-2">
            {[dataMobil[0].imageUrl, ...dataMobil[0].additionalImages].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {dataMobil.map((item) => (
          <div key={item.id} className="ml-4 max-w-xl p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <p className="title__detail">{item.title}</p>
            <p className="font-semibold">Rp
            {withDriver ? `${dataMobil[0].hargaPerhari + 150000}` : `${dataMobil[0].hargaPerhari}`}<span className="day__set">/hari</span>
          </p>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={withDriver}
              onChange={toggleDriverOption}
            />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              dengan driver (+Rp150000)
            </label>
          </div>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${index < Math.floor(item.rating) ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{item.rating}</span>
            </div>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
              <li className="me-2">
                <a
                  href="#"
                  onClick={() => setActiveTab('detail')}
                  className={`inline-block p-4 ${activeTab === 'detail' ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'}`}
                >
                  Detail
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  onClick={() => setActiveTab('info')}
                  className={`inline-block p-4 ${activeTab === 'info' ? 'text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500' : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'}`}
                >
                  Info lainnya
                </a>
              </li>
            </ul>
            <div className="mt-4">
              {activeTab === 'detail' ? (
                <p className="text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id dolor dui, dapibus gravida elit. Donec consequat laoreet sagittis. Suspendisse potenti. Nullam ac erat ante.
                </p>
              ) : (
                <div className="terms text-gray-700 dark:text-gray-300">
              <div dangerouslySetInnerHTML={{ __html: truncatedContent }} />
              <button
                className="text-blue-600 hover:underline mt-4"
                onClick={() => setIsModalOpen(true)}
              >
                Lihat Selengkapnya
              </button>
            </div>

              )}
            </div>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sewa sekarang</button>
                   </div>
                   
        ))}
        
      </div>
{isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full relative">
            <h2 className="text-2xl font-semibold mb-4">Syarat dan Ketentuan Penyewaan Mobil</h2>
            <button
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
              onClick={() => setIsModalOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="terms text-gray-700 dark:text-gray-300 overflow-y-auto max-h-96">
              {content.split('\n').map((line, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: line.replace(/^(\d+\.\s.*)$/, '<strong>$1</strong>') }} />
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setIsModalOpen(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
                <div className="title__card mt-5 mb-4">
      Kendaraan yang mungkin anda suka <a href="#" className="see_details flex-1 float-end">Lihat semua</a>
    </div>

    <CardRow />
    </section>
  );
}
