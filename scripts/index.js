
// ----------------------------load all products---------------------------------------------------
const loadProducts = () => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => displayProduct(data))
}

// ---------------------------load category button-------------------------------------------
const loadCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(categories => {

            categories.unshift("all");
            // category button
            const categoryButton = document.getElementById("category-button");
            categoryButton.innerHTML = '';

            categories.forEach(category => {
                console.log(category);

                const createDiv = document.createElement('div');
                createDiv.innerHTML = `
            <button class="btn btn-outline btn-primary" onclick="loadDataCategorywise('${category}')">
                ${category}
            </button>
    `
                categoryButton.append(createDiv);
            })
        })
}

const displayProduct = (products) => {

    const allProducts = document.getElementById("category-data");
    allProducts.innerHTML = '';

    products.forEach(product => {
        if (product.category === 'all') {
            loadProducts();
            return;
        }
        else {
            const url = `https://fakestoreapi.com/products/category/${product.category}`
            fetch(url)
                .then(res => res.json())
                .then(categories => loadDataCategorywise(categories))
        }


    })
}

// load data category wise
const loadDataCategorywise = (category) => {
    console.log(category);


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



}

loadCategory();
