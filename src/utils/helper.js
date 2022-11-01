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
