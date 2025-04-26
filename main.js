document.getElementById("menubtn").addEventListener("click", function() {
    document.querySelector(".sidebar").style.display="block"
});
    document.getElementById("closebtn").addEventListener("click",function (){ document.getElementById("sidebar").style.display ="none";});
    /*scroll to section*/
    function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
    
    /* frame shirt one*/
const frame = document.getElementById('shirtframe');
const slider = document.getElementById('slider');
let startX = 0;
let currentIndex= 0;

frame.addEventListener('touchstart',(e)=>{
  startX= e.touches[0].clientX;
});
frame.addEventListener('touchend',(e)=>{
  endX= e.changedTouches[0].clientX;
  const diff = startX-endX;

 if (diff > 50 && currentIndex < 1) {
      currentIndex++; // swipe left
    } else if (diff < -50 && currentIndex > 0) {
      currentIndex--; // swipe right
    }

    slider.style.transform = `translateX(-${currentIndex * 1000}px)`;
});
/* frame two*/
const frame2 = document.getElementById('shirtframe2');
const slider2 = document.getElementById('slider2');
let startX2 = 0;
let currentIndex2= 0;

frame2.addEventListener('touchstart',(e)=>{
  startX2= e.touches[0].clientX;
});
frame2.addEventListener('touchend',(e)=>{
  endX2= e.changedTouches[0].clientX;
  const diff2 = startX2-endX2;

 if (diff2 > 50 && currentIndex2 < 1) {
      currentIndex2++; // swipe left
    } else if (diff2 < -50 && currentIndex2 > 0) {
      currentIndex2--; // swipe right
    }

    slider2.style.transform = `translateX(-${currentIndex2 * 1000}px)`;
});
/*frame three*/
const frame3 = document.getElementById('shirtframe3');
const slider3 = document.getElementById('slider3');
let startX3 = 0;
let currentIndex3= 0;

frame3.addEventListener('touchstart',(e)=>{
  startX3= e.touches[0].clientX;
});
frame3.addEventListener('touchend',(e)=>{
  endX3= e.changedTouches[0].clientX;
  const diff3 = startX3-endX3;

 if (diff3 > 50 && currentIndex3 < 2) {
      currentIndex3++; // swipe left
    } else if (diff3 < -50 && currentIndex3 > 0) {
      currentIndex3--; // swipe right
    }

    slider3.style.transform = `translateX(-${currentIndex3 * 1000}px)`;
});

/*Trouser one*/

const tFrame = document.getElementById('trouserframe');
const tSlider = document.getElementById('Tslider');
let tStartX = 0;
let tCurrentIndex= 0;

tFrame.addEventListener('touchstart',(e)=>{
  tStartX= e.touches[0].clientX;
});
tFrame.addEventListener('touchend',(e)=>{
  tEndX= e.changedTouches[0].clientX;
  const tDiff = tStartX-tEndX;

 if (tDiff > 50 && tCurrentIndex < 1) {
      tCurrentIndex++; // swipe left
    } else if (tDiff < -50 && tCurrentIndex > 0) {
      tCurrentIndex--; // swipe right
    }

    tSlider.style.transform = `translateX(-${tCurrentIndex * 1000}px)`;
});
/*Trouser two*/
const tFrame2 = document.getElementById('trouserframe2');
const tSlider2 = document.getElementById('Tslider2');
let tStartX2 = 0;
let tCurrentIndex2= 0;

tFrame2.addEventListener('touchstart',(e)=>{
  tStartX2= e.touches[0].clientX;
});
tFrame2.addEventListener('touchend',(e)=>{
  tEndX2= e.changedTouches[0].clientX;
  const tDiff2 = tStartX2-tEndX2;

 if (tDiff2 > 50 && tCurrentIndex2 < 3) {
      tCurrentIndex2++; // swipe left
    } else if (tDiff2 < -50 && tCurrentIndex2 > 0) {
      tCurrentIndex2--; // swipe right
    }

    tSlider2.style.transform = `translateX(-${tCurrentIndex2 * 1000}px)`;
});
/* trouser 3*/
const tFrame3 = document.getElementById('trouserframe3');
const tSlider3 = document.getElementById('Tslider3');
let tStartX3 = 0;
let tCurrentIndex3= 0;

tFrame3.addEventListener('touchstart',(e)=>{
  tStartX3= e.touches[0].clientX;
});
tFrame3.addEventListener('touchend',(e)=>{
  tEndX3= e.changedTouches[0].clientX;
  const tDiff3 = tStartX3-tEndX3;

 if (tDiff3 > 50 && tCurrentIndex3< 3) {
      tCurrentIndex3++; // swipe left
    } else if (tDiff3 < -50 && tCurrentIndex3 > 0) {
      tCurrentIndex3--; // swipe right
    }

    tSlider3.style.transform = `translateX(-${tCurrentIndex3 * 1000}px)`;
});
/*trouser 4*/
const tFrame4 = document.getElementById('trouserframe4');
const tSlider4 = document.getElementById('Tslider4');
let tStartX4= 0;
let tCurrentIndex4= 0;

tFrame4.addEventListener('touchstart',(e)=>{
  tStartX4= e.touches[0].clientX;
});
tFrame4.addEventListener('touchend',(e)=>{
  tEndX4= e.changedTouches[0].clientX;
  const tDiff4= tStartX4-tEndX4;

 if (tDiff4 > 50 && tCurrentIndex4< 1) {
      tCurrentIndex4++; // swipe left
    } else if (tDiff4 < -50 && tCurrentIndex4 > 0) {
      tCurrentIndex4--; // swipe right
    }

    tSlider4.style.transform = `translateX(-${tCurrentIndex4 * 1000}px)`;
});

/*watch section*/
const wFrame = document.getElementById('watchframe');
const wSlider = document.getElementById('Wslider');
let wStartX = 0;
let wCurrentIndex= 0;

wFrame.addEventListener('touchstart',(e)=>{
  wStartX= e.touches[0].clientX;
});
wFrame.addEventListener('touchend',(e)=>{
  wEndX= e.changedTouches[0].clientX;
  const wDiff = wStartX-wEndX;

 if (wDiff > 50 && wCurrentIndex < 1) {
      wCurrentIndex++; // swipe left
    } else if (wDiff < -50 && wCurrentIndex > 0) {
      wCurrentIndex--; // swipe right
    }

    wSlider.style.transform = `translateX(-${wCurrentIndex * 1000}px)`;
});
/*watch frame 2*/
const wFrame2 = document.getElementById('watchframe2');
const wSlider2 = document.getElementById('Wslider2');
let wStartX2 = 0;
let wCurrentIndex2= 0;

wFrame2.addEventListener('touchstart',(e)=>{
  wStartX2= e.touches[0].clientX;
});
wFrame2.addEventListener('touchend',(e)=>{
  wEndX2= e.changedTouches[0].clientX;
  const wDiff2 = wStartX2-wEndX2;

 if (wDiff2 > 50 && wCurrentIndex2 < 3) {
      wCurrentIndex2++; // swipe left
    } else if (wDiff2 < -50 && wCurrentIndex2 > 0) {
      wCurrentIndex2--; // swipe right
    }

    wSlider2.style.transform = `translateX(-${wCurrentIndex2 * 1000}px)`;
});
/* shoes section*/
const sFrame = document.getElementById('shoesframe');
const sSlider = document.getElementById('Sslider');
let sStartX = 0;
let sCurrentIndex= 0;

sFrame.addEventListener('touchstart',(e)=>{
  sStartX= e.touches[0].clientX;
});
sFrame.addEventListener('touchend',(e)=>{
  sEndX= e.changedTouches[0].clientX;
  const sDiff = sStartX-sEndX;

 if (sDiff > 50 && sCurrentIndex < 3) {
      sCurrentIndex++; // swipe left
    } else if (sDiff< -50 && sCurrentIndex > 0) {
      sCurrentIndex--; // swipe right
    }

    sSlider.style.transform = `translateX(-${sCurrentIndex * 1000}px)`;
});
/* cart functionality*/
let cart = [];

    function add(name, price) {
      const found = cart.find(item => item.name === name);
      if (found) {
        found.quantity++;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      updateCartCount();
    }

    function updateCartCount() {
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cart-count').textContent = count;
    }

    function updateCartDisplay() {
      const cartItems = document.getElementById('cart-items');
      const totalAmount = document.getElementById('total-amount');
      
      cartItems.innerHTML = "";
      let total = 0;

      cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = "cart-item";
        div.innerHTML = `
          ${item.name} (x${item.quantity}) - $${item.price * item.quantity}
        `;
        cartItems.appendChild(div);
      });

      totalAmount.textContent = total.toFixed(2);
    }

    function toggleCart() {
      const drawer = document.getElementById('cart-drawer');
      const overlay = document.getElementById('overlay');

      drawer.classList.toggle('open');
      overlay.classList.toggle('active');

      if (drawer.classList.contains('open')) {
        updateCartDisplay();
      }
    }

    function clearCart() {
      cart = [];
      updateCartCount();
      updateCartDisplay();
    }

    function payNow() {
      if (cart.length === 0) {
        alert("Your cart is empty!");
      } else {
        alert("Proceeding to payment...");
        // You can redirect to payment page or integrate payment here
      }
    }