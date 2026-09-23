export const site = {
  phone: '+375 25 910 14 15',
  phoneHref: 'tel:+375259101415',
  messengers: 'viber/telegram',
  email: 'zhiobich@outlook.com',
  social: {
    behance: 'https://www.behance.net/',
    instagram: 'https://www.instagram.com/',
  },
}

export const copy = {
  ru: {
    aboutNav: 'О нас / контакты',
    projectsNav: 'Проекты',
    aboutTitle: 'О нас',
    aboutLead:
      'apxi — это мы, Андрей и Дарья Жибович — архитекторы из Минска.',
    aboutP1:
      'Более 7-ми лет мы вместе создаём комфортные, продуманные пространства для жизни и отдыха. Полностью берём на себя все заботы при создании интерьеров. Ответственно относимся к своей работе и бюджету клиента.',
    aboutP2:
      'Мы открыты к сотрудничеству и взаимодействию. Работаем с частными клиентами и готовы подключиться на любом этапе — от идеи до реализации.',
    publicationsTitle: 'Публикации',
    contactsInvite:
      'Мы открыты к сотрудничеству и взаимодействию и с удовольствием ответим на ваши вопросы.',
    menu: 'Меню',
    close: 'Закрыть',
  },
  en: {
    aboutNav: 'About / contacts',
    projectsNav: 'Projects',
    aboutTitle: 'About',
    aboutLead:
      'apxi is Andrey and Daria Zhibovich — architects based in Minsk.',
    aboutP1:
      'For more than 7 years we have been creating comfortable, considered spaces for living and rest. We take full care of the interior — from the first sketch to completion — and treat both the work and the client’s budget with equal attention.',
    aboutP2:
      'We are open to collaboration. We work with private clients and can join at any stage, from the first idea to the finished space.',
    publicationsTitle: 'Publications',
    contactsInvite:
      'We are open to collaboration and will be glad to answer your questions.',
    menu: 'Menu',
    close: 'Close',
  },
  by: {
    aboutNav: 'Пра нас / кантакты',
    projectsNav: 'Праекты',
    aboutTitle: 'Пра нас',
    aboutLead:
      'apxi — гэта мы, Андрэй і Дар’я Жыбовіч — архітэктары з Мінска.',
    aboutP2:
      'Мы адкрытыя да супрацоўніцтва. Працуем з прыватнымі кліентамі і можам далучыцца на любым этапе — ад ідэі да рэалізацыі.',
    aboutP1:
      'Больш за 7 гадоў мы разам ствараем камфортныя, прадуманыя прасторы для жыцця і адпачынку. Бярэм на сябе ўсе клопаты пры стварэнні інтэр’ераў. Адказныя да сваёй працы і бюджэту кліента.',
    publicationsTitle: 'Публікацыі',
    contactsInvite:
      'Мы адкрытыя да супрацоўніцтва і з задавальненнем адкажам на вашы пытанні.',
    menu: 'Меню',
    close: 'Закрыць',
  },
}

export const publications = [
  { year: '2023', project: 'Левада', source: 'Interior+design' },
  { year: '2023', project: 'Левада', source: 'Обстановка' },
  { year: '2023', project: 'Левада', source: 'Design mate' },
]

export const projects = [
  {
    slug: 'levada',
    year: '2022',
    cover: '/images/levada-cover.jpg',
    meta: {
      ru: 'Боровляны / 2018',
      en: 'Borovlyany / 2018',
      by: 'Бараўляны / 2018',
    },
    gallery: [
      '/images/levada/web-01.jpg',
      '/images/levada/web-02.jpg',
      '/images/levada/web-03.jpg',
      '/images/levada/web-07.jpg',
      '/images/levada/web-04.jpg',
      '/images/levada/web-05.jpg',
      '/images/levada/web-10.jpg',
      '/images/levada/web-12.jpg',
    ],
    title: { ru: 'Левада', en: 'Levada', by: 'Левада' },
    description: {
      ru: 'Небольшая мансардная квартира 30 м² для молодой семьи с ребёнком в Боровлянах. На антресоли — спальня и игровая. На первом уровне — кухня, гостиная, рабочая зона, санузел, открытый балкон и лестница, соединяющая этажи.',
      en: 'A small and simple attic apartment of 30 square meters for a young couple with a child, located in Borovlyany, Belarus. The apartment has a mezzanine floor containing a sleeping and playing area. On the ground floor there is a kitchen, a living room, a working area, a bathroom, a small open balcony and a staircase that connects the two levels.',
      by: 'Невялікая мансардная кватэра 30 м² для маладой сям’і з дзіцем у Бараўлянах. На антрэсолі — спальня і гульнявая. На першым узроўні — кухня, гасцёўня, рабочая зона, санвузел, адкрыты балкон і лесвіца, якая злучае паверхі.',
    },
  },
  {
    slug: 'promenad',
    year: '2022',
    cover: '/images/promenad-cover.jpg',
    gallery: ['/images/promenad-cover.jpg'],
    title: { ru: 'Променад', en: 'Promenad', by: 'Праменад' },
    description: {
      ru: 'Квартира с тёмной кухней и спокойным светом: камень, дерево и крупные конические светильники. Интерьер собран вокруг общей зоны — готовка, стол, разговор.',
      en: 'An apartment organised around a dark kitchen: stone, wood and large conical lamps. The interior is built for cooking, the table, and conversation.',
      by: 'Кватэра з цёмнай кухняй і спакойным святлом: камень, дрэва і вялікія канічныя свяцільні. Інтэр’ер сабраны вакол агульнай зоны.',
    },
  },
  {
    slug: 'petrovskie-verfi',
    year: '2022',
    cover: '/images/petrovskie-cover.jpg',
    gallery: ['/images/petrovskie-cover.jpg'],
    title: {
      ru: 'Петровские верфи',
      en: 'Petrovskie Verfi',
      by: 'Пятроўскія верфі',
    },
    description: {
      ru: 'Интерьер с деревянными панелями и бетонным потолком: тёплый массив и холодный свет врезных светильников. Тихая геометрия плоскостей.',
      en: 'An interior of timber panelling and a concrete ceiling: warm wood against the cool light of recessed fittings. Quiet geometry of planes.',
      by: 'Інтэр’ер з драўлянымі панэлямі і бетоннай столлю: цёплы масіў і халоднае святло ўбудаваных свяцільняў.',
    },
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
