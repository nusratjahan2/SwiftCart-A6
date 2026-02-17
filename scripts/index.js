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
     <div class="card bg-base-100 shadow-sm h-[400px] px-4">
  <figure class="h-[200px] p-4">
    <img
    class="h-full w-full object-contain"
      src="${product.image}"
      alt="Shoes" />
  </figure>

  <div class="card-actions justify-between">
  <div class="badge badge-soft badge-primary">${product.category}</div>
  <div class="flex items-center">
     <i class="fa-solid fa-star text-yellow-500"></i>
     <p>${product.rating.rate}</p>
     <p>(${product.rating.count})</p>
  </div>
  
    </div>

  <div class="card-body flex flex-col justify-between">
    <h2 class="card-title text-sm line-clamp-2">
      ${product.title}
    </h2>
    <p class="text-xl font-bold">$${product.price}</p>
   <div>
      <button class="btn btn-outline btn-primary"><i class="fa-regular fa-eye"></i>Details</button>
      <button class="btn btn-outline btn-primary"><i class="fa-solid fa-cart-shopping"></i>Add</button>
   </div>
  </div>
</div>
    `

    allProducts.appendChild(creatediv);
    })
}

