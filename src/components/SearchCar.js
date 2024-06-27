
export default function SearchCar() {
    return (
        <section className="relative w-full mx-auto mt-8 p-4 bg-blue rounded-lg shadow-lg">
        <form className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {/* Jenis BBM */}
            <div className="mb-4">
                <label htmlFor="jenisBBM" className="block text-white font-bold mb-2 ml-2">Jenis BBM</label>
                <select id="jenisBBM" name="jenisBBM" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="bensin">Bensin</option>
                    <option value="solar">Solar</option>
                </select>
            </div>
    
            {/* Tipe/Merk */}
            <div className="mb-4">
            <label htmlFor="merk" className="block text-white font-bold mb-2 ml-2">Merk</label>
                <select id="merk" name="merk" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="bensin">Toyota</option>
                    <option value="solar">Honda</option>
                    <option value="solar">Daihatsu</option>
                </select>
            </div>

            <div className="mb-4">
            <label htmlFor="tipe" className="block text-white font-bold mb-2 ml-2">Tipe</label>
                <select id="tipe" name="tipe" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="suv">SUV</option>
                    <option value="mpv">MPV</option>
                    <option value="lcgc">LCGC</option>
                </select>
            </div>
            {/* Range Harga */}
            <div className="mb-4">
            <label htmlFor="range_harga" className="block text-white font-bold mb-2 ml-2">Range Harga</label>
                <select id="range_harga" name="range_harga" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="suv">250rb-350rb</option>
                    <option value="mpv">350rb-500rb</option>
                    <option value="lcgc">500rb-1jt</option>
                </select>
            </div>
        </form>
    </section>
    
    );
}
