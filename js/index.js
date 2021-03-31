// ITERATION 1

function updateSubtotal(product) {
  
let price = product.querySelector('.price span').innerText
let quantity = product.querySelector('.quantity input').value
console.log(quantity)
console.log(price)
let subtotal = product.querySelector('.subtotal span')
console.log(subtotal)
subtotal.innerText = Number(price) * Number(quantity)
console.log(subtotal)



return subtotal

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
let allProducts = document.querySelectorAll('.product')

allProducts.forEach((allProducts)=>{
  updateSubtotal(allProducts)
})

  // ITERATION 3
  //... your code goes here
  let sumOfSubTotal = document.querySelectorAll('.subtotal span')
   let total = 0

  sumOfSubTotal.forEach((element)=>{
    total += Number(element.innerText)
  })  
  console.log(total)

  const totalCart = document.querySelector('#total-value span')
  console.log(totalCart)

  totalCart.innerText = total 

  console.log(totalCart)




  //basketTotal.innerText =  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeProductBtn = document.querySelectorAll('.btn-remove');
  removeProductBtn.forEach((element)=>{
    addEventListener('click', removeProduct)
  })
    


  //... your code goes here
});
