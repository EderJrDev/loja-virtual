$(document).ready(function () {
  $.ajax({
    url: 'https://fakestoreapi.com/products/category/jewelery',
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      data.forEach(function (product) {
        var productHTML = `          
        <div class="bg-white">
          <div class="flex items-center justify-center">
              <img class="h-48 w-48 object-cover mx-auto" src="${product.image}" alt="${product.title}" />
          </div>
          <div class="p-6">
              <p class="font-bold text-center">${product.title}</p>
              <p class="text-center mb-2">$ ${product.price.toFixed(2)}</p>
          </div>
        </div>
        `;
        $('#jewelery-container').append(productHTML);
        $('#jewelery-container').find('img').last().hover(function () {
          $(this).css('transform', 'scale(1.1)');
          $(this).css('transition', 'transform 0.3s ease-in-out');
        }, function () {
          $(this).css('transform', 'scale(1)');
          $(this).css('transition', 'transform 0.3s ease-in-out');
        });
      });
    },
    error: function (xhr, status, error) {
      console.error('Error:', error);
    }
  });
});