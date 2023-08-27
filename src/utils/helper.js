export const range = (min, max) => {
  min = !isNaN(min) ? parseFloat(min) : 1
  max = !isNaN(max) ? parseFloat(max) : 1
    
  const rangeArray = []

  for (; min < max; min++) {
    rangeArray.push(min)
  }

  return rangeArray
}

export const elementOffsetY = (element) => {
  if (!(typeof HTMLElement === 'function' && element instanceof HTMLElement)) {
    return 0;
  }

  const offset = {
    y: element.offsetTop
  }

  if (element.parentNode instanceof HTMLElement) {
    const parentElementOffsetY = elementOffsetY(element.parentNode)

    return offset.y + parentElementOffsetY
  } else {
    return offset.y
  }
}

export const elementOffsetX = (element) => {
  if (!(typeof HTMLElement === 'function' && element instanceof HTMLElement)) {
    return 0;
  }

  const offset = {
    x: element.offsetLeft
  }

  if (element.parentNode instanceof HTMLElement) {
    const parentElementOffsetX = elementOffsetX(element.parentNode)

    return offset.x + parentElementOffsetX
  } else {
    return offset.x
  }
}

export const encodeURI = (string) => {
  string = encodeURIComponent(string)

  try {
    if (typeof window == 'object' && window.document) {
      return btoa(string)
    }
  
    return !!global.Buffer && Buffer.from(string).toString('base64')
  } catch (err) {
    return
  }
}

export const decodeURI = (string) => {
  if (typeof window == 'object' && window.document) {
    try {
      string = atob(string)
    } catch(err) {}
  } else if (!!global.Buffer) {
    try {
      string = Buffer.from(string, 'base64').toString('ascii')
    } catch (err) {}
  }

  return decodeURIComponent(string)
}

export const dropDuplicatedArrayElements = (array) => {
  const arrayElementIds = []

  return array.filter(arrayElement => {
    if (arrayElementIds.indexOf(arrayElement.id) < 0) {
      arrayElementIds.push(arrayElement.id)

      return true
    }

    return false
  })
}
