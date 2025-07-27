
const Detail = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="container mx-auto">
        <div className="flex gap-6 py-10">
          <div className="w-[400px]">
            <img
              className="w-full h-full object-contain"
              src="https://olcha.uz/image/700x700/products/2022-02-21/smartfon-samsung-galaxy-s22-ultra-5g-256gb-8-gb-2-nano-sim-esim-zelenyy-37853-0.png"
              alt=""
            />
          </div>
          <div className="flex-1 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">Galaxy s22 ultra</h1>
              <strong className="block text-2xl font-medium my-4">600 USD</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit animi aut officia ducimus, tempora laboriosam, corporis impedit illum rerum ad natus ab? Doloremque id minima, quis alias libero doloribus facere?</p>
            </div>
            <button className="w-32 border border-gray-300 p-1 rounded-lg">
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
