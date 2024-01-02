export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}
//===============================================================

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header__back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/svg/header__avatar.svg',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.append(button)
  })

  return header
}
//===============================================================

const MAIN_IMAGE = [
  {
    src: '/svg/community-bg.svg',
  },
]

export const createMainImage = () => {
  const image = createElement('div', 'main__img')

  MAIN_IMAGE.forEach((data) => {
    const img = createElement('img', data.src)

    Object.entries(data).forEach(([key, value]) => {
      img[key] = value
    })

    image.append(img)
  })

  return image
}
