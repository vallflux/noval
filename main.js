try {
      var typed = new Typed(".text", {
        strings: ["Network Setup", "Firewall Security", "Network Optimization"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
      });
    } catch (e) { /* ignore if library missing */ }

    // Minimal modal behaviour (kept lightweight, safe if main.js exists)
    (function(){
      const certImgs = document.querySelectorAll('.cert-img');
      const modal = document.getElementById('cert-modal');
      const modalOverlay = modal ? modal.querySelector('.modal-overlay') : null;
      const modalImg = document.getElementById('modal-img');
      const closeBtn = modal ? modal.querySelector('.close-btn') : null;

      function openModal(src){
        if(!modal) return;
        modal.classList.add('show');
        if(modalImg) modalImg.src = src;
      }
      function closeModal(){
        if(!modal) return;
        modal.classList.remove('show');
        if(modalImg) modalImg.src = '';
      }

      certImgs.forEach(img=>{
        img.addEventListener('click', ()=> openModal(img.dataset.cert || img.src));
      });
      if(closeBtn) closeBtn.addEventListener('click', closeModal);
      if(modalOverlay) modalOverlay.addEventListener('click', closeModal);
      document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
    })();