// 数组对象根据某个键排序
export const sortArr = (arr, key) => arr.sort(((key) => ((m, n) => (m[key] - n[key]) > 0 ? 1 : -1))(key))

// 获取数组对象中最小的n项
export const sortAndFilter = (arr, n, key) => {
  if (!Array.isArray(arr)) return arr
  if (!arr.length) return []
  let t = arr
  if (key) {
    t = sortArr(arr, key)
  } else {
    t = arr.sort() // 暂无使用,没时间调整,实际需要一个冒泡排序
  }
  return t.slice(0, n)
}
