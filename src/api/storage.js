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
 */
const setItem = (name) => {
  // 设定当前值，暂时不考虑重复的情况
  let nameArr = window.localStorage.getItem('nameArr')
  nameArr = nameArr ? nameArr + ',' + name : name
  window.localStorage.setItem('nameArr', nameArr)
}

/**
 * 获取所有的数据
 */
const getAllItem = () => {
  let nameArr = getItem('nameArr')
  if (nameArr) {
    nameArr = nameArr.split(',')
    return nameArr
  } else {
    return []
  }
}
/**
 * 删除某一项
 * @param {名称} name
 */
const delItem = (name) => {
  let nameStr = getItem('nameArr')
  let nameArr = nameStr.split(',')
  // 如果有匹配项
  let index = nameArr.indexOf(name)
  console.log(index, '---index')
  if (index > -1) {
    nameArr.splice(index, 1)
    window.localStorage.setItem('nameArr', nameArr.join(','))
  }
}

export {
  delItem,
  setItem,
  getAllItem
}
