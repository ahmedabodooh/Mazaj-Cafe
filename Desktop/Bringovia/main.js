document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftButton = document.querySelector(".scroll-arrow.left");
    const scrollRightButton = document.querySelector(".scroll-arrow.right");

    scrollLeftButton.addEventListener("click", function() {
      const container = document.getElementById("scrollContainer");
      container.scrollBy({
        left: -450,
        behavior: "smooth"
      });
    });

    scrollRightButton.addEventListener("click", function() {
      const container = document.getElementById("scrollContainer");
      container.scrollBy({
        left: 450,
        behavior: "smooth"
      });
    });
  });
//   -------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftButtonBottom = document.getElementById("scrollLeftBtnBottom");
    const scrollRightButtonBottom = document.getElementById("scrollRightBtnBottom");
    const scrollContainerBottom = document.getElementById("scrollContainerBottom");
    scrollLeftButtonBottom.addEventListener("click", function() {
      scrollContainerBottom.scrollBy({
        left: -450, 
        behavior: "smooth"
      });
    });
  
    scrollRightButtonBottom.addEventListener("click", function() {
      scrollContainerBottom.scrollBy({
        left: 450, 
        behavior: "smooth"
      });
    });
  });
  
// ------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const scrollLeftButtonBottom = document.getElementById("scrollLeftBtnBottom2");
  const scrollRightButtonBottom = document.getElementById("scrollRightBtnBottom2");
  const scrollContainerBottom = document.getElementById("scrollContainerBottom2");
  scrollLeftButtonBottom.addEventListener("click", function() {
    scrollContainerBottom.scrollBy({
      left: -450, 
      behavior: "smooth"
    });
  });

  scrollRightButtonBottom.addEventListener("click", function() {
    scrollContainerBottom.scrollBy({
      left: 450, 
      behavior: "smooth"
    });
  });
});
// -------------------------------scroll start-----------------------------------
document.addEventListener("DOMContentLoaded", function() {
  const scrollLeftButtonBottom = document.getElementById("scrollLeftBtnBottom3");
  const scrollRightButtonBottom = document.getElementById("scrollRightBtnBottom3");
  const scrollContainerBottom = document.getElementById("scrollContainerBottom3");
  scrollLeftButtonBottom.addEventListener("click", function() {
    scrollContainerBottom.scrollBy({
      left: -450, 
      behavior: "smooth"
    });
  });

  scrollRightButtonBottom.addEventListener("click", function() {
    scrollContainerBottom.scrollBy({
      left: 450, 
      behavior: "smooth"
    });
  });
});
// -------------------------------scroll end-----------------------------------
// --------------------- filter the best restaurant start --------------------------------
function showAllRestaurants() {
  const allRestaurants = document.querySelectorAll('.col-md-4');
  allRestaurants.forEach(restaurant => {
      restaurant.classList.remove('hidden');
      restaurant.style.display = '';
  });
}

function showBestRestaurants() {
  const allRestaurants = document.querySelectorAll('.col-md-4');
  allRestaurants.forEach(restaurant => {
      if (restaurant.id === 'the-best') {
          restaurant.classList.remove('hidden');
          restaurant.style.display = ''; 
      } else {
          restaurant.classList.add('hidden');
          restaurant.style.display = 'none';
      }
  });
}
// --------------------- filter the best restaurant end--------------------------------
// ------------------------------search start--------------------------------------------------
function search() {
  let searchBar = document.querySelector(".search-input").value.toUpperCase();
  let products = document.querySelectorAll(".product");
  let productTexts = document.querySelectorAll("h6, p");

  products.forEach(product => product.style.display = "none");

  productTexts.forEach(element => {
      let text = element.textContent || element.innerText;
      let parentProduct = element.closest('.product');

      element.innerHTML = text; 

      if (text.toUpperCase().includes(searchBar) && searchBar !== "") {
          let startIndex = text.toUpperCase().indexOf(searchBar);
          let endIndex = startIndex + searchBar.length;
          element.innerHTML = text.substring(0, startIndex) + "<span class='highlight'>" + text.substring(startIndex, endIndex) + "</span>" + text.substring(endIndex);

          if (parentProduct) {
              parentProduct.style.display = "";
          }
      } else if (searchBar === "") {
          if (parentProduct) {
              parentProduct.style.display = "";
          }
      }
  });
}
// ------------------------------search end--------------------------------------------------
// --------------------popop start------------------------
let count = 0;
    let cartCount = 0;

    function openPopup(event) {
        event.preventDefault();
        document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    function increment() {
        count++;
        document.getElementById("count").innerText = count;
    }

    function decrement() {
        if (count > 0) {
            count--;
            document.getElementById("count").innerText = count;
        }
    }

    function addProduct() {
        cartCount++;
        document.getElementById("cart-count").innerText = cartCount;
    }

    function openCart() {
      }
      // // --------------------popop end------------------------
      // ---------------------cart start--------------------------------------
    
let itemCount = 0;

function openCart() {
    document.getElementById("cart-popup").style.display = "block";
    showSection("section1");
}

function closeCart() {
    document.getElementById("cart-popup").style.display = "none";
}

function increment() {
    itemCount++;
    document.getElementById("count").innerText = itemCount;
    document.getElementById("cart-count").innerText = itemCount;
}

function decrement() {
    if (itemCount > 0) {
        itemCount--;
        document.getElementById("count").innerText = itemCount;
        document.getElementById("cart-count").innerText = itemCount;
    }
}

function addProduct() {
    increment();
}

function showSection(sectionId) {
    let sections = document.querySelectorAll(".cart-section");
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}
    // ---------------------cart end--------------------------------------
// ------------------------Popup start----------------------------------
document.getElementById('payButton').addEventListener('click', function() {
  var checkbox = document.getElementById('paymentCheckbox');
  if (checkbox.checked) {
      document.getElementById('paymentModal').style.display = 'flex';
  } else {
      alert('Please select the option to pay with card.');
  }
});

function closeModal() {
  document.getElementById('paymentModal').style.display = 'none';
}
// ------------------------Popup End----------------------------------
// ------------------------------profile start--------------------------
function displaySection(sectionId) {
  const sections = document.querySelectorAll('.profile-section');
  sections.forEach(section => {
      section.classList.remove('active');
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  displaySection('personal-info'); 
});


// --------------------------------profile end----------------------------
// --------------------------------table start----------------------------
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('date-section');
});
// ----------------------------table end--------------------
