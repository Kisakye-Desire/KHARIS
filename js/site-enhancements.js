document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('.s-footer');
  if (footer) {
    footer.innerHTML = `<div class="site-footer-inner"><div class="site-footer-brand"><a class="site-footer-logo" href="index.html"><img src="images/kharis-logo.png" alt="Kharis Word Ministries"></a><p>Kharis Word Ministries is a faith-based organization founded in 2018 by Apostle Etindi Moses, committed to worship, discipleship, prayer, and practical service.</p><div class="site-footer-social"><a href="#0">Facebook</a><a href="#0">YouTube</a><a href="#0">Instagram</a></div></div><div><h4>Quick Links</h4><ul><li><a href="index.html">Home</a></li><li><a href="about.html">About Us</a></li><li><a href="events.html">Events</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="contact.html">Contact Us</a></li><li><a href="connect-group.html">Connect Groups</a></li></ul></div><div><h4>Our Ministries</h4><ul><li><a href="about.html">Worship & Prayer</a></li><li><a href="about.html">Women of Grace</a></li><li><a href="about.html">Youth Ministry</a></li><li><a href="about.html">Children’s Ministry</a></li><li><a href="about.html">Community Development</a></li></ul></div><div><h4>Contact Us</h4><p>Kauga Mukono<br>Mukono District, Uganda</p><p><a href="tel:+256782430097">+256 782 430097</a><br><a href="mailto:kharis@gmail.com">kharis@gmail.com</a></p><a class="footer-direction" href="https://www.google.com/maps/search/?api=1&query=Kauga%20Mukono" target="_blank" rel="noreferrer">Get Directions <span>↗</span></a></div></div><div class="site-footer-bottom"><span>© Kharis Word Ministries</span><span>Knowing God and Doing Exploits</span></div>`;
  }

  if (document.querySelector('.events-list')) {
    document.querySelectorAll('.events-list__item').forEach(function (card) {
      const title = card.querySelector('.events-list__item-title');
      if (!title || card.querySelector('.event-read-more')) return;
      const link = title.querySelector('a');
      const button = document.createElement('button');
      button.className = 'event-read-more'; button.type = 'button'; button.textContent = 'Read More';
      button.addEventListener('click', function () {
        const modal = document.querySelector('#event-modal') || document.body.appendChild(Object.assign(document.createElement('div'), { id: 'event-modal', className: 'event-modal' }));
        modal.innerHTML = '<div class="event-modal__dialog" role="dialog" aria-modal="true"><button class="event-modal__close" aria-label="Close">×</button><h2></h2><div class="event-modal__body"></div></div>';
        modal.querySelector('h2').textContent = link ? link.textContent.trim() : title.textContent.trim();
        modal.querySelector('.event-modal__body').innerHTML = '<p>' + (card.querySelector('p')?.innerHTML || '') + '</p>' + (card.querySelector('.events-list__meta')?.outerHTML || '');
        modal.classList.add('is-open'); modal.querySelector('.event-modal__close').focus();
        modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.event-modal__close')) modal.classList.remove('is-open'); }, { once: true });
      });
      card.appendChild(button);
    });
  }

  if (document.querySelector('.gallery-grid')) {
    const grid = document.querySelector('.gallery-grid'), items = Array.from(grid.querySelectorAll('figure')), perPage = 9;
    items.forEach((item, i) => { item.dataset.galleryIndex = i; item.addEventListener('click', () => { const lightbox = document.querySelector('#gallery-lightbox') || document.body.appendChild(Object.assign(document.createElement('div'), { id: 'gallery-lightbox', className: 'gallery-lightbox' })); lightbox.innerHTML = '<button aria-label="Close">×</button><img alt="">'; lightbox.querySelector('img').src = item.querySelector('img').src; lightbox.querySelector('img').alt = item.querySelector('img').alt; lightbox.classList.add('is-open'); lightbox.onclick = e => { if (e.target === lightbox || e.target.tagName === 'BUTTON') lightbox.classList.remove('is-open'); }; }); });
    if (items.length > perPage) { const pager = document.createElement('nav'); pager.className = 'gallery-pagination'; pager.setAttribute('aria-label', 'Gallery pages'); const render = page => { items.forEach((item, i) => item.hidden = Math.floor(i / perPage) !== page); pager.innerHTML = ''; for (let i = 0; i < Math.ceil(items.length / perPage); i++) { const b = document.createElement('button'); b.textContent = i + 1; b.className = i === page ? 'is-active' : ''; b.onclick = () => render(i); pager.appendChild(b); } }; grid.after(pager); render(0); }
  }
});
