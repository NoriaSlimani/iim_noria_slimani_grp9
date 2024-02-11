
/* Index */

/* swiper */
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    allowTouchMove: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
    },
  });
});


/* darkmode */
document.addEventListener('DOMContentLoaded', function() {
  const toggleModeBtn = document.querySelector('.toggle-mode');

  toggleModeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
  });
});

/* tabs */
document.addEventListener('DOMContentLoaded', function() {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(tab) {
        tab.classList.remove('tab-active');
      });

      const contents = document.querySelectorAll('.content');
      contents.forEach(function(content) {
        content.classList.remove('active');
      });

      this.classList.add('tab-active');

      if (this.classList.contains('tab-creaDesign')) {
        document.querySelector('.content-creaDesign').classList.add('active');
      } else if (this.classList.contains('tab-commEtEbusiness')) {
        document.querySelector('.content-commEtEbusiness').classList.add('active');
      } else if (this.classList.contains('tab-jeuxVideo')) {
        document.querySelector('.content-jeuxVideo').classList.add('active');
      } else if (this.classList.contains('tab-coding')) {
        document.querySelector('.content-coding').classList.add('active');
      } else if (this.classList.contains('tab-animation3d')) {
        document.querySelector('.content-animation3d').classList.add('active');
      }
    });
  });
});

/* Formulaire */
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('inscription-form');
  const errorList = document.querySelector('.message-error ul');
  const errorContainer = document.querySelector('.message-error');
  const successContainer = document.querySelector('.message-success');

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    errorList.innerHTML = "";
    errorContainer.classList.remove("visible");
    successContainer.classList.remove("visible");

    const fields = form.querySelectorAll('input, select');

    let hasError = false;

    fields.forEach(function(field) {
      if (field.value.trim() === '') {
        errorContainer.classList.add("visible");
        const err = document.createElement("li");
        err.innerText = `Le champ ${field.name} ne doit pas être vide`;
        errorList.appendChild(err);
        hasError = true;
      }
    });

    if (!hasError) {
      successContainer.classList.add('visible');
    }
  });
});

