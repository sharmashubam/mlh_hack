function Product({ item }) {
  console.log(item.selectedFile);
  return (
    <div className="mt-[10%] relative rounded-md shadow-lg bg-white w-72 md:w-80">
      <div className="h-44 md:h-48 flex items-center justify-center bg-gray-200">
        <img src={item.selectedFile} className="w-2/3 md:w-3/5 rounded-lg" />
      </div>
      <div className="p-6">
        <h3 className="text-base font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-4">${item.price}</p>
        <button className="bg-yellow-400 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-500 mb-2">
          Click
        </button>
        <p className="text-xs text-gray-500 mb-2">College Name</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={item.selectedFile}
              className="w-4 h-4 rounded-full mr-2"
            />
            <p className="text-gray-500 text-xs">{item.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
