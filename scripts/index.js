const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayProduct(data))
}

const displayProduct = (products) => {
    
    const allProducts = document.getElementById("category-data");
    allProducts.innerHTML = '';
    
        products.forEach(product => {
            console.log(product.title);

        const creatediv = document.createElement('div');
        creatediv.innerHTML = `
     <div class="card bg-base-100 shadow-sm h-[450px]">
  <figure class="h-[200px] p-4">
    <img
    class="h-full w-full object-contain"
      src="${product.image}"
      alt="Shoes" />
  </figure>

  <div class="card-actions justify-end">
  <div class="badge badge-outline">${product.category}</div>
  <div class="flex">
     <i class="fa-solid fa-star"></i>
     <p>${product.rating.rate}</p>
     <p>${product.rating.count}</p>
  </div>
  
    </div>

  <div class="card-body flex flex-col justify-between">
    <h2 class="card-title text-sm line-clamp-2">
      ${product.title}
    </h2>
    <div class="badge badge-secondary">$${product.price}</div>
  </div>
</div>
    `

    allProducts.appendChild(creatediv);
    })
}

