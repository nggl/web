// 箭头函数返回参数
// let fn = e => ({name: 'zhang'})
// console.log(fn().name)

// `*`函数 - js函数生成器
// function* fn() {
// 	console.log(1)
// 	yield
// 	console.log(2)
// }
// let f = fn()
// f.next()
// f.next()

function* add(x) {
	let y = yield x + 2
	return y
}
let obj = add(1)
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
