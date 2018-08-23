/**
 * 根据名称获取项
 * @param {名称} name
 */
const getItem = (name) => {
  return window.localStorage.getItem(name) || ''
}

/**
 * 设置项
 * @param {名称} name
 * @param {值} val
 */
const setItem = (name, val) => {
  // 设定当前值，暂时不考虑重复的情况
  window.localStorage.setItem(name, val)
  let nameArr = window.localStorage.getItem('nameArr')
  nameArr = nameArr.split(',').push(val).join(',')
  window.localStorage.setItem('nameArr', nameArr)
}

/**
 * 获取所有的数据
 */
const getAllItem = () => {
  const nameArr = getItem('nameArr')
  nameArr.map((val) => {
    return { [val]: getItem(val) }
  })
}

export { getItem, setItem, getAllItem }
