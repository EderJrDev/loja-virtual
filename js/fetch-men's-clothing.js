$(document).ready(function () {
  $.ajax({
    url: `https://fakestoreapi.com/products/category/men's%20clothing`,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      data.forEach(function (product) {
        var productHTML = `          
        <div class="bg-white shadow rounded overflow-hidden group">
        <div class="relative">
          <img
            class="w-96 h-96 rounded object-fill"
            src="${product.image}"
            alt="${product.title}"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="view product"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <a
              href="#"
              class="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
              title="add to wishlist"
            >
              <i class="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>
        <div class="pt-4 pb-3 px-4">
          <a href="#">
            <h4
              class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"
            >
              ${product.title}
            </h4>
          </a>
          <div class="flex items-baseline mb-1 space-x-2">
            <p class="text-xl text-primary font-semibold">${product.price}</p>
            <p class="text-sm text-gray-400 line-through">$55.90</p>
          </div>
          <div class="flex items-center">
            <div class="flex gap-1 text-sm text-yellow-400">
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
              <span><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="text-xs text-gray-500 ml-3">(150)</div>
          </div>
        </div>
      </div>
        `;
        $('#men-clothing-container').append(productHTML);

      });
    },
    error: function (xhr, status, error) {
      console.error('Error:', error);
    }
  });
});

