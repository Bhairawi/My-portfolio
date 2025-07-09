// Swiper Slider Initialization
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Contact Form Logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("userName");
  const emailInput = document.getElementById("userEmail");
  const messageInput = document.getElementById("userMessage");
  const dataList = document.getElementById("dataList");

  // Load existing data
  function loadSubmittedData() {
    const saved = JSON.parse(localStorage.getItem("contactData")) || [];
    dataList.innerHTML = "";
    saved.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = `${entry.name} (${entry.email}): ${entry.message}`;
      dataList.appendChild(li);
    });
  }

  // Save new form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const entry = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim()
    };
    const saved = JSON.parse(localStorage.getItem("contactData")) || [];
    saved.push(entry);
    localStorage.setItem("contactData", JSON.stringify(saved));
    form.reset();
    loadSubmittedData();
  });

  // Load on page load
  loadSubmittedData();
});
