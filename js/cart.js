const products = [
  {
    id: 1,
    name: 'Handle Bag',
    image: 'imgs/bag.png',
    price: '1,323,000',
    oldprice: '4,321,000',
    desciption: 'The Handle Bag is the perfect combination of style and functionality. Its simple yet sophisticated design, with convenient handles and adjustable shoulder strap, allows you to carry everything with ease and comfort.        '

  },
  {
    id: 2,
    name: 'Jogging Shoes',
    image: 'imgs/giay.png',
    price: '5,523,000',
    oldprice: '8,387,000',
    desciption: 'The Jogging Shoes are the ideal choice for running or everyday sports activities. With a comfortable design, cushioned sole, and high durability, they will be the perfect companion to keep you active and confident on every path.'

  },
  {
    id: 3,
    name: 'City Bag',
    image: 'imgs/bag1.png',
    price: '3,253,000',
    oldprice: '4,000,000',
    desciption: 'The City Bag is a symbol of modern urban style. With its simple yet elegant design, this is the perfect choice for those who appreciate convenience and fashion. Easy to match with any outfit, from office wear to street style.'

  },
  {
    id: 4,
    name: 'Classic Shirt',
    image: 'imgs/products/n8.jpg',
    price: '2,470,000',
    oldprice: '5,125,000',
    desciption: 'The Classic Shirt is a timeless design that never goes out of style. With premium fabric, traditional cut, and meticulous stitching, this is the ideal choice for any occasion, from work to social gatherings.      '

  },
  {
    id: 5,
    name: 'Floral Pattern Shirt',
    image: 'imgs/products/f1.jpg',
    price: '1,323,000',
    oldprice: '4,321,000',
    desciption: 'The Floral Pattern Shirt is an elegant blend of classic silhouette and romantic floral patterns. With soft, smooth fabric and vibrant colors, this is a must-have item in the wardrobe of men who love dynamic and distinctive styles.      '

  },
  {
    id: 6,
    name: 'Hawaiian Shirt',
    image: 'imgs/products/f2.jpg',
    price: '5,523,000',
    oldprice: '8,387,000',
    desciption: 'The Hawaiian Shirt is a symbol of island style and comfort. With bold patterns, vibrant colors, and breathable fabric, it is the perfect choice for outdoor activities, parties, or travel.    '

  },
  {
    id: 7,
    name: 'Shoulder Bag',
    image: 'imgs/tui1.png',
    price: '3,253,000',
    oldprice: '4,000,000',
    desciption: 'The Shoulder Bag is the perfect combination of style and utility. With its versatile design, multiple compartments, and water-resistant fabric, it is a reliable companion for any occasion.    '

  },
  {
    id: 8,
    name: 'Patterned Shirt',
    image: 'imgs/products/f4.jpg',
    price: '2,470,000',
    oldprice: '5,125,000',
    desciption: 'The Patterned Shirt is a unique combination of classic design and stylish patterns. With intricate prints and soft fabric, it is the ideal choice for those who want to express their own style and personality.'

  },
  {
    id: 9,
    name: 'Floral women dress',
    image: 'imgs/vay.png',
    price: '1,323,000',
    oldprice: '4,321,000',
    desciption: 'The Floral Women Dress is a captivating blend of elegance and femininity. With its delicate floral patterns and flowing silhouette, this dress exudes grace and charm. Perfect for both casual outings and special occasions, it effortlessly enhances the wearer is beauty and radiance, making it a wardrobe essential for any stylish woman.    '

  }
];




//kiem tra xem trong localstorage co items cua products chua, neu co giai ma no bang parse con k thi tra ve mang rong
let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];


function saveToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(productInCart))
}

function renderProducts() {
  let data = '';
  products.map(value => {
    data += `
      
      <div class="col-lg-4 col-md-6 col-sm-12 pb-1" >
      <div class="card product-item border-0 mb-4" >
      <div class='card-header product-img position-relative overflow-hidden bg-transparent border p-0 productImg'>
      <img class='img-fluid w-100' src='${value.image}' alt=''>
  </div>
  <div class='card-body border-left border-right text-center p-0 pt-4 pb-3'>
      <h6 class='text-truncate mb-3 product-name' id='productName'>${value.name}</h6>
      <div class='d-flex justify-content-center'>
          <h6 class='price'><span>${value.price}</span><sup>VND</sup></h6> 
          <h6 class='text-muted ml-2'><del>${value.oldprice}<sup>VND</sup></del></h6>
      </div>
  </div>
  <div class='card-footer d-flex justify-content-between bg-light border product'>
  <a href="detail.html?id=${value.id}" class="btn btn-sm text-dark p-0 btn-view-detail">
  <i class="fas fa-eye text-primary mr-1"></i>View Detail
</a>

      <a href='' class='btn btn-sm text-dark p-0 btnCart' onclick='checkLoginBeforeAddToCart(${value.id})'><i class='fas fa-shopping-cart text-primary mr-1 cartIcon'></i>Add To Cart</a>
  </div>
  </div>
  </div>
  
      `;
  });

  document.getElementById('products').innerHTML = data;
}
// Đăng ký
$("#register-form").submit(function (event) {
  event.preventDefault(); // Ngăn chặn việc submit form mặc định

  // Lấy thông tin từ form đăng ký
  var username = $("#inputFirstName").val().trim();
  var password = $("#inputChoosePassword").val().trim();
  var repassword = $("#inputEmailAddress").val().trim();


  // Kiểm tra xem đã nhập thông tin hay chưa
  if (username && password && password == repassword) {
    // Tạo một đối tượng user
    var user = {
      username: username,
      password: password,
      repassword: repassword
    };

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Hiển thị thông báo hoặc chuyển hướng người dùng
    alert("Registration successful! Please sign in.");
    window.location.href = "signin.html"; // Chuyển hướng đến trang đăng nhập
  }
  else {
    alert("Please fill in all fields."); // Thông báo lỗi nếu thông tin chưa được nhập đầy đủ
  }
});

// Đăng nhập
$("#login-form").submit(function (event) {
  event.preventDefault(); // Ngăn chặn việc submit form mặc định

  // Lấy thông tin từ form đăng nhập
  var username = $("#inputLoginUsername").val().trim();
  var password = $("#inputLoginPassword").val().trim();

  // Kiểm tra xem đã nhập thông tin hay chưa
  if (username && password) {
    // Kiểm tra xem thông tin đăng nhập có khớp với thông tin đã đăng ký không
    var storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Nếu đăng nhập thành công, có thể chuyển hướng người dùng đến trang chính
      alert("Login successful!");
      window.location.href = "index.html"; // Chuyển hướng đến trang chính
    } else {
      alert("Invalid username or password."); // Thông báo lỗi nếu thông tin không khớp
    }
  } else {
    alert("Please fill in all fields."); // Thông báo lỗi nếu thông tin chưa được nhập đầy đủ
  }
});

function checkLoginBeforeAddToCart(id) {
  var loggedInUser = localStorage.getItem("user");
  if (loggedInUser) {
    // Người dùng đã đăng nhập, cho phép thêm vào giỏ hàng và hiển thị thông báo thành công
    alert("You have successfully added to cart!");
    addToCart(id);
    
  } else {
    // Người dùng chưa đăng nhập, yêu cầu đăng nhập trước khi thêm vào giỏ hàng
    alert("Please sign in before adding to cart.");
  }
}

function addToCart(id) {
  let checkProduct = productInCart.some(value => value.id === id)
  // console.log(checkProduct)

  //neu khong co sp thi se luu moi dua vao gio hang 
  if (!checkProduct) {
    let product = products.find(value => value.id === id)
    // console.log(product)

    //sau khi lay duoc du lieu 1 mng, luu no vao array gio hang
    productInCart.unshift({
      //lay toan bo product
      ...product,
      quantity: 1
    })
    saveToLocalStorage()
    caculatorTotal()
    renderProductsToTable();
    

  }
  else {
    //lay vi tri cua no trong gio hang
    let getIndex = productInCart.findIndex(value => value.id === id)
    // console.log(getIndex)

    //lay ra san pham cua no trong gio hang
    let product = productInCart.find(value => value.id === id)
    //sua trong arr
    productInCart[getIndex] = {
      ...product,
      quantity: ++product.quantity

    }
    //luu lai vao liocalstorage
    saveToLocalStorage()
    caculatorTotal()


  }
}


function caculatorTotal() {
  document.getElementById("totalCart").innerHTML = productInCart.length

}

function indexLoadPage() {
  caculatorTotal();
  renderProducts();
}



//---------------------trang gio hang--------------------------

function renderProductsToTable() {
  let data = '';
  productInCart.map((value, index) => {
    data += `
    <tr>
    <td class="align-middle"><img src='${value.image}' alt="" style="width: 100px;"> ${value.name} </td>
    <td class="align-middle">${value.price} <sup>VND</sup> </td>
    <td class="align-middle">
    <button onclick ='minusQuantity(${index},${value.quantity})' class='btn btn-secondary'>-</button>
    <span class='mx-2'>${value.quantity}</span>
    <button onclick ='plusQuantity(${index})' class='btn btn-secondary'>+</button>
    </td>
    <td class="align-middle">${(value.quantity * value.price.replace(/,/g, '')).toLocaleString()}<sup>VND</sup></td>
    <td class="align-middle"><button onclick ='deleteProductIncart(${index})' class="btn btn-sm btn-primary btn-remove"><i class="fa fa-times"></i></button></td>
    </tr>

    `;
  });

  document.getElementById("products-cart").innerHTML = data
  totalMoney(); // Gọi hàm tính tổng tiền và phí ship

}

function plusQuantity(index) {
  productInCart[index] = {
    ...productInCart[index],
    quantity: ++productInCart[index].quantity
  }
  saveToLocalStorage()
  renderProductsToTable()
  totalMoney()


}

function minusQuantity(index, quantity) {
  if (quantity > 1) {
    productInCart[index] = {
      ...productInCart[index],
      quantity: --productInCart[index].quantity
    }
    saveToLocalStorage()
    renderProductsToTable()
    totalMoney()

  }
  else {
    alert("Quantity min is 1")

  }

}

function deleteProductIncart(index) {
  productInCart.splice(index, 1)
  saveToLocalStorage()
  renderProductsToTable()
  totalMoney()
  // Kiểm tra xem giỏ hàng còn sản phẩm không
  if (productInCart.length === 0) {
    // Nếu giỏ hàng không còn sản phẩm, ẩn form checkout
    document.getElementById("checkoutContainer").style.display = "none";
  }
}



function totalMoney() {
  if (productInCart.length > 0) {
    let total = 0;
    for (let i = 0; i < productInCart.length; i++) {
      total += productInCart[i].quantity * productInCart[i].price.replace(/,/g, '');
    }
    let shipping = 10000;
    let subtotal = total;
    var totals = total + 10000;
    let totalWithShipping = total + shipping;

    // Hiển thị tổng tiền sản phẩm vào Subtotal
    document.getElementById("Subtotal").innerHTML = subtotal.toLocaleString();

    // Hiển thị tổng tiền cộng với phí ship vào Total
    document.getElementById("totalAll").innerHTML = totalWithShipping.toLocaleString();

    document.getElementById("total-money").innerHTML = total.toLocaleString();

    if (total === 0) {
      // Nếu total-money bằng 0, thiết lập giá trị của totalship thành 0
      document.getElementById("totalship").innerHTML = "0";
    } else {
      document.getElementById("totalship").innerHTML = totals.toLocaleString();
    }
  } else {
    // Nếu không có sản phẩm trong giỏ hàng, thiết lập total-money và totalship thành 0
    document.getElementById("total-money").innerHTML = "0";
    document.getElementById("totalship").innerHTML = "0";
  }
}




function cartLoadPage() {
  renderProductsToTable();
  totalMoney();
}

// --------------------- validate form checkout------------------------


// ----------------------form details------------------------
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');
// Thêm Sản Phẩm vào Giỏ Hàng từ Trang Chi Tiết Sản Phẩm
function addToCartFromDetails() {
  // Kiểm tra xem người dùng đã đăng nhập hay chưa
  var loggedInUser = localStorage.getItem("user");
  if (!loggedInUser) {
    // Nếu chưa đăng nhập, hiển thị thông báo yêu cầu đăng nhập
    alert("Please sign in before adding to cart.");
    return; // Dừng lại và không thực hiện thêm sản phẩm vào giỏ hàng
  }

  // Lấy số lượng từ input
  let quantity = parseInt(document.getElementById("quantityInput").value);

  // Lấy thông tin sản phẩm từ URL
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = parseInt(urlParams.get('id'));

  // Tìm sản phẩm trong mảng productInCart dựa trên productId
  const productIndex = productInCart.findIndex(item => item.id === productId);

  if (productIndex !== -1) {
    // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
    productInCart[productIndex].quantity += quantity;
    // Cập nhật giỏ hàng trong Local Storage
    saveToLocalStorage();
    // Hiển thị thông báo
    alert("Added to cart successfully!");
  } else {
    // Tìm sản phẩm trong mảng products dựa trên productId
    const product = products.find(item => item.id === productId);

    if (!product) {
      console.error("Product not found");
      return;
    }

    // Thêm sản phẩm mới vào giỏ hàng
    productInCart.push({
      ...product,
      quantity: quantity
    });

    // Cập nhật giỏ hàng trong Local Storage
    saveToLocalStorage();

    // Hiển thị thông báo
    alert("Added to cart successfully!");
  }

  // Cập nhật UI của giỏ hàng
  renderProductsToTable();
}
// -----------tang giam so luong------------
// Hàm tăng số lượng sản phẩm
function increaseQuantity(productId) {
  const inputQuantity = document.getElementById(`quantityInput-${productId}`);
  let quantity = parseInt(inputQuantity.value);
  quantity++;
  inputQuantity.value = quantity;
}

// Hàm giảm số lượng sản phẩm
function decreaseQuantity(productId) {
  const inputQuantity = document.getElementById(`quantityInput-${productId}`);
  let quantity = parseInt(inputQuantity.value);
  if (quantity > 1) {
      quantity--;
      inputQuantity.value = quantity;
  } else {
      alert("Quantity min is 1");
  }
}

// -----------------------------------------
function renderProductDetails(productId) {
  // Chuyển đổi productId thành số nguyên
  productId = parseInt(productId);

  // Lọc ra sản phẩm tương ứng với id từ mảng products
  const product = products.find(item => item.id === productId);
  if (!product) {
    console.error("Product not found");
    return;
  }

  // Tạo biến data để chứa HTML của sản phẩm chi tiết
  let data = `
  <div class="container-fluid py-5">
  <div class="row px-xl-5">
      <div class="col-lg-5 pb-5">
          <div id="product-carousel" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner border">
                  <div class="carousel-item active">
                      <img class="w-100 h-100" src="${product.image}" alt="Image">
                  </div>
                  <div class="carousel-item">
                      <img class="w-100 h-100" src="imgs/bag0.png" alt="Image">
                  </div>
                  <div class="carousel-item">
                      <img class="w-100 h-100" src="imgs/bag3.png" alt="Image">
                  </div>
                  <div class="carousel-item">
                      <img class="w-100 h-100" src="imgs/bag4.png" alt="Image">
                  </div>
              </div>
              <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                  <i class="fa fa-2x fa-angle-left text-dark"></i>
              </a>
              <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                  <i class="fa fa-2x fa-angle-right text-dark"></i>
              </a>
          </div>
      </div>

      <div class="col-lg-7 pb-5">
          <h3 class="font-weight-semi-bold pName">${product.name}</h3>
          <div class="d-flex mb-3">
              <div class="text-primary mr-2">
                  <small class="fas fa-star"></small>
                  <small class="fas fa-star"></small>
                  <small class="fas fa-star"></small>
                  <small class="fas fa-star-half-alt"></small>
                  <small class="far fa-star"></small>
              </div>
              <small class="pt-1">(50 Reviews)</small>
          </div>
          <h3 class="font-weight-semi-bold mb-4 pPrice">${product.price}<sup>VND</sup></h3>
          <p class="mb-4">${product.desciption}</p>
          <div class="d-flex mb-3">
              <p class="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
              <form>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="size-1" name="size">
                      <label class="custom-control-label" for="size-1">XS</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="size-2" name="size">
                      <label class="custom-control-label" for="size-2">S</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="size-3" name="size">
                      <label class="custom-control-label" for="size-3">M</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="size-4" name="size">
                      <label class="custom-control-label" for="size-4">L</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="size-5" name="size">
                      <label class="custom-control-label" for="size-5">XL</label>
                  </div>
              </form>
            
          </div>
          <div class="d-flex mb-4">
              <p class="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
              <form>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="color-1" name="color">
                      <label class="custom-control-label" for="color-1">Black</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="color-2" name="color">
                      <label class="custom-control-label" for="color-2">White</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="color-3" name="color">
                      <label class="custom-control-label" for="color-3">Red</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="color-4" name="color">
                      <label class="custom-control-label" for="color-4">Blue</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                      <input type="radio" class="custom-control-input" id="color-5" name="color">
                      <label class="custom-control-label" for="color-5">Green</label>
                  </div>
              </form>
          </div>
          <div class="d-flex align-items-center mb-4 pt-2">
          <div class="input-group quantity mr-3 soluong" style="width: 130px;">
          <div class="input-group-btn">
              <button class="btn btn-primary btn-minus" type="button">
                  <i class="fa fa-minus"></i>
              </button>
          </div>
          <input type="text" class="form-control bg-secondary text-center" value="1" id="quantityInput">
          <div class="input-group-btn">
              <button class="btn btn-primary btn-plus" type="button">
                  <i class="fa fa-plus"></i>
              </button>
          </div>
          </div>
      
            </div>
              <button id="btnAddTocart" class="btn btn-primary px-3" onclick="addToCartFromDetails()">
              <i class="fa fa-shopping-cart mr-1"></i> Add To Cart
              </button>

          </div>
          <div class="d-flex pt-2">
              <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
              <div class="d-inline-flex">
                  <a class="text-dark px-2" href="">
                      <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="text-dark px-2" href="">
                      <i class="fab fa-twitter"></i>
                  </a>
                  <a class="text-dark px-2" href="">
                      <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="text-dark px-2" href="">
                      <i class="fab fa-pinterest"></i>
                  </a>
              </div>
          </div>
      </div>
  </div>
  <div class="row px-xl-5">
      <div class="col">
          <div class="nav nav-tabs justify-content-center border-secondary mb-4">
              <a class="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
              <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
              <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (1)</a>
          </div>
          <div class="tab-content">
              <div class="tab-pane fade show active" id="tab-pane-1">
                  <h4 class="mb-3">Product Description</h4>
                  <p>Material: High quality 1000D Polyester fabric - Waterproof</p>
                  <p>Dimensions: 34 x 24 x 10 (cm)</p>
                  <p>There is a shockproof compartment that can fit a laptop up to 13.3 inches</p>
                  <p>There is a quick access compartment on the back of the bag</p>
                  <p>There is a water bottle compartment inside the bag</p>
                  <p>Has crossbody strap - Detachable, adjustable length</p>
              </div>
              <div class="tab-pane fade" id="tab-pane-2">
                  <h4 class="mb-3">Additional Information</h4>
                
                  <div class="row">
                      <div class="col-md-6">
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item px-0">
                                  Two-way zip closure 
                              </li>
                              <li class="list-group-item px-0">
                                  Side zip pockets
                              </li>
                              <li class="list-group-item px-0">
                                  Elasticated cuffs
                              </li>
                              <li class="list-group-item px-0">
                                  Relaxed fit: a looser cut than our regular fit.
                              </li>
                            </ul> 
                      </div>
                      <div class="col-md-6">
                          <ul class="list-group list-group-flush">
                              <li class="list-group-item px-0">
                                  Length: 76.5cm/30.1in (size UK S)
                              </li>
                              <li class="list-group-item px-0">
                                  Model’s height: 180cm/5ft 11in. Model wears size UK S
                              </li>
                              <li class="list-group-item px-0">
                                  Trim: 100% polyester
                              </li>
                              <li class="list-group-item px-0">
                                  Item 80872311
                              </li>
                            </ul> 
                      </div>
                  </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-3">
                  <div class="row">
                      <div class="col-md-6">
                          <h4 class="mb-4">1 review for "${product.name}"</h4>
                          <div class="media mb-4">
                              <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style="width: 45px;">
                              <div class="media-body">
                                  <h6>Hoang Duong<small> - <i>01 Jan 2045</i></small></h6>
                                  <div class="text-primary mb-2">
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star"></i>
                                      <i class="fas fa-star-half-alt"></i>
                                      <i class="far fa-star"></i>
                                  </div>
                                  <p>Quan ao xin xo, giao hang nhanh chong, 10 diem nhe moi nguoi oi <333</p>
                              </div>
                              
                          </div>
                      </div>
                      <div class="col-md-6">
                          <h4 class="mb-4">Leave a review</h4>
                          <small>Your email address will not be published. Required fields are marked *</small>
                          <div class="d-flex my-3">
                              <p class="mb-0 mr-2">Your Rating * :</p>
                              <div class="text-primary">
                                  <i class="far fa-star"></i>
                                  <i class="far fa-star"></i>
                                  <i class="far fa-star"></i>
                                  <i class="far fa-star"></i>
                                  <i class="far fa-star"></i>
                              </div>
                          </div>
                          <form>
                              <div class="form-group">
                                  <label for="message">Your Review *</label>
                                  <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                              </div>
                              <div class="form-group">
                                  <label for="name">Your Name *</label>
                                  <input type="text" class="form-control" id="name">
                              </div>
                              <div class="form-group">
                                  <label for="email">Your Email *</label>
                                  <input type="email" class="form-control" id="email">
                              </div>
                              <div class="form-group mb-0">
                                  <input type="submit" value="Leave Your Review" class="btn btn-primary px-3">
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
  `;

  // Gán HTML vào phần tử có id là productsDetails để hiển thị trên trang
  document.getElementById('productsDetails').innerHTML = data;
}




function loadPage() {
  cartLoadPage();

}








