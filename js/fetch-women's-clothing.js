$(document).ready(function () {
  $.ajax({
    url: `https://fakestoreapi.com/products/category/women's%20clothing`,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      data.forEach(function (product) {
        var productHTML = `          
        <div class="max-w-xs mx-auto overflow-hidden text-center">
          <div class="flex h-20 w-20 items-center justify-center">
              <img class="h-20 w-20" src="${product.image}" alt="${product.title}" />
          </div>
          <div class="p-6">
            <p class="font-bold">${product.title}</p>
            <p class="mb-2">$ ${product.price.toFixed(2)}</p>
          </div>
        </div>
        `;
        $('#womens-clothing-container').append(productHTML);
        // add animations with CSS 
        $('#womens-clothing-container').find('img').last().hover(function () {
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

