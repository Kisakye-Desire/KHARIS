document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  const preloader = document.querySelector('#preloader')
  window.setTimeout(() => preloader?.classList.add('is-hidden'), 250)

  const menu = document.querySelector('.header-menu-toggle')
  const nav = document.querySelector('.header-nav-wrap')
  menu?.addEventListener('click', (event) => {
    event.preventDefault()
    nav?.classList.toggle('is-open')
    menu.classList.toggle('is-open')
  })

  document.querySelectorAll('a[href="#0"]').forEach((link) => link.addEventListener('click', (event) => event.preventDefault()))

  if (body.classList.contains('events-page') || location.pathname.endsWith('events.html')) {
    const list = document.querySelector('.events-list')
    if (list) {
      const events = [
        ['31st December 2026', 'Prophetic Crossover Night', 'A night of worship, prayer, thanksgiving, and prophetic declarations as we step into a new season.', 'Kauga Kharis Word Ministries', 'images/img (38).jpeg'],
        ['January 2027', 'Flames of Fire Youth Convention', 'A vibrant youth gathering to ignite faith, spiritual fire, and purpose in the next generation.', 'Iganga, Uganda', 'images/img (39).jpeg'],
        ['8th March 2027', 'Women Conference', 'A life-giving gathering for women to grow in grace, identity, leadership, and purpose.', 'Kauga Mukono', 'images/img (40).jpeg'],
        ['April 2027', 'Flames of Fire Convention', 'A powerful convention of worship, teaching, fellowship, and spiritual renewal.', 'Nairobi, Kenya', 'images/img (41).jpeg'],
        ['June 2027', 'Flames of Fire Conference', 'An inspiring conference bringing the church together for prayer, teaching, and community.', 'Bungoma, Kenya', 'images/img (42).jpeg'],
        ['August 2027', 'Flames of Fire Convention', 'A joyful regional gathering celebrating faith, unity, and the transforming power of God.', 'Mukono, Uganda', 'images/img (43).jpeg']
      ]
      list.innerHTML = events.map(([date, title, description, location, image]) => `<article class="events-list__item"><img class="event-card-image" src="${image}" alt="${title}"><p class="event-date">${date}</p><h3 class="display-1 events-list__item-title"><a href="contact.html">${title}</a></h3><p>${description}</p><ul class="events-list__meta"><li class="events-list__meta-location">${location}</li></ul></article>`).join('')
    }
  }

  if (body.classList.contains('about-page') || location.pathname.endsWith('about.html')) {
    const staff = document.querySelector('.church-staff')
    if (staff) {
      const people = [
        ['Apostle Etindi Moses', 'Head, Kharis Word Ministries'],
        ['Minister Agnes Alikoba Etindi', 'Head, Women of Grace'],
        ['Mrs. Suzan Waidhuba', 'Church Administrator']
      ]
      staff.innerHTML = people.map(([name, role]) => `<article class="church-staff__item"><h4 class="church-staff__name">${name}</h4><span class="church-staff__position">${role}</span></article>`).join('')
    }
  }

  if (body.classList.contains('contact-page') || location.pathname.endsWith('contact.html')) {
    document.querySelectorAll('.page-content p').forEach((paragraph) => {
      if (paragraph.textContent.includes('kharis@gmail.com')) paragraph.innerHTML = 'Phone: <a href="tel:+256782430097">+256 782 430097</a><br>Alternative email: <a href="mailto:mose2015kabs@gmail.com">mose2015kabs@gmail.com</a>'
    })
  }
})
