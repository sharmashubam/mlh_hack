

export default function Up_loadingform() {
  return (
    
    
    <div class="container mx-[10%] my-10">
            <h1 class="text-3xl font-bold mb-6 text-center text-book w-[60%] text-amber-900">Sell Item</h1>
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[60%]" action="/upload" method="post">
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2 hover:text-blue-800" for="book-name" >
                    Item Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book-name" type="text" placeholder="Enter book name"/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="book-price">
                    Item Price
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book-price" type="number" placeholder="Enter book price"/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="writer-name">
                    Seller Name
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="writer-name" type="text" placeholder="Enter writer name"/>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="book-details">
                    Item Details
                </label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book-details" placeholder="Enter book details"></textarea>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="book-image">
                    Item Image
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="book-image" type="file" accept="image/*"/>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="submit">
                    Submit
                </button>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="button">
                    Cancel
                </button>
            </div>
        </form>
    
      
    </div>
  )
}
