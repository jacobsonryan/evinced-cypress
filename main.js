let path = window.location.pathname
let page = path.split('/').pop()
page = page.split('.').slice(0 , -1).join('.')

let jsonData = []

fetch(`http://localhost:3000/${page}`)
	.then(res => res.json())
	.then(data => {
		let issuesCount = document.createElement('p')
		issuesCount.innerHTML = `Issues Count: ${data.length}` 
		issuesCount.innerHTML += `<br>Page Url: ${data[0].elements[0].pageUrl}` 
		document.body.appendChild(issuesCount)
		let table = document.createElement('table')
		
		let headingRow = document.createElement('tr')
		let idHeading = document.createElement('th')
		idHeading.innerHTML = 'ID'
		headingRow.appendChild(idHeading)

		let impactHeading = document.createElement('th')
		impactHeading.innerHTML = 'Impact'
		headingRow.appendChild(impactHeading)

		let descHeading = document.createElement('th')
		descHeading.innerHTML = 'Description'
		headingRow.appendChild(descHeading)

		let nodeHeading = document.createElement('th')
		nodeHeading.innerHTML = 'Location'
		headingRow.appendChild(nodeHeading)	

		let helpHeading = document.createElement('th')
		helpHeading.innerHTML = 'Help'
		headingRow.appendChild(helpHeading)

		table.appendChild(headingRow)

		for(let i = 0; i < data.length; i++) {
			let tableRow = document.createElement('tr')
			
			let tableId = document.createElement('td')
			let id = data[i].type.id.replaceAll('_', ' ')
			id = id.toLowerCase()
			tableId.innerHTML = id
			tableId.style.textTransform = 'capitalize'
			tableRow.appendChild(tableId)

			let tableImpact = document.createElement('td')
			let impact = data[i].severity.name
			tableImpact.innerHTML = impact
			tableRow.appendChild(tableImpact)
			
			let tableDescription = document.createElement('td')
			let description = data[i].summary
			tableDescription.innerHTML = description
			tableRow.appendChild(tableDescription)

			let tableHtml = document.createElement('td')
			data[i].elements.forEach(node => {
				let li = document.createElement('li')
				let plainText = document.createTextNode(node.domSnippet.replace('<!--NOTE: snippet was trimmed due to its size-->', ''))
				li.appendChild(plainText)
				tableHtml.appendChild(li)
				tableRow.appendChild(tableHtml)
			})
			
			let tableHelp = document.createElement('td')
			let link = document.createElement('a')
			let help = data[i].knowledgeBaseLink
			link.innerHTML = data[i].type.name
			link.href = help
			tableRow.appendChild(link)

			tableRow.onclick = () => {
				console.clear()
				console.log('ID: ' + id)
				console.log('Impact: ' + impact)
				console.log('Description: ' + description)
				console.log('Help: ' + help)
			}	
			table.appendChild(tableRow)
		}
		document.body.appendChild(table)
	})


