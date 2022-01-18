let path = window.location.pathname
let page = path.split('/').pop()
page = page.split('.').slice(0 , -1).join('.')
console.log(page)


fetch(`http://localhost:3000/${page}`)
	.then(res => res.json())
	.then(data => console.log(data))
