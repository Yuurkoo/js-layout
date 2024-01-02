import {
  createElement,
  createHeader,
  createMainImage,
} from '../../script/layout'

const page = document.querySelector('.page')
const header = createHeader()
page.append(header)

const communityPanel = createElement(
  'div',
  'panel panel__component',
)
page.append(communityPanel)

const title = createElement(
  'h1',
  'panel__title',
  'Community',
)
communityPanel.appendChild(title)

const panelComponent = createElement(
  'div',
  'panel__component',
)
communityPanel.appendChild(panelComponent)

const important = createElement(
  'div',
  'panel__category panel__category--1',
  'База знань',
)

const info = createElement(
  'div',
  'panel__category panel__category--2',
  'Інформація',
)

panelComponent.appendChild(important)
panelComponent.appendChild(info)

const image = createMainImage()
page.append(image)

//================================================================
// -------------------main------------------------------

const main = createElement('main', 'main')
page.append(main)

//================================================================

const INFO_BLOCK = [
  {
    title: 'Що таке база знань?',
    description:
      'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
    src: '/svg/community-bg.svg',
  },
]

const createInfo = () => {
  const post = createElement('div', 'main info')

  INFO_BLOCK.forEach((data) => {
    const dataTitle = createElement(
      'h2',
      'info__title',
      data.title,
    )

    const dataDescription = createElement(
      'span',
      'info__description',
      data.description,
    )

    post.appendChild(dataTitle)
    post.appendChild(dataDescription)
  })

  return post
}

const dataInfo = createInfo()
page.append(dataInfo)

//================================================================

const footer = createElement('footer', 'footer')
const button = createElement(
  'button',
  'button tg__button',
  "Перейти до ком'юніті у Телеграм",
)

page.append(footer)
footer.appendChild(button)
