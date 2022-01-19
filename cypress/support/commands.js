// Downloads HTML Report
Cypress.Commands.add('logReport', () => {
	let today = new Date()
	let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
	let time = today.getHours() + '-' + today.getMinutes() + '-' + today.getSeconds()
	
	cy.evStop({ logIssues: true }).should((report) => {
		cy.writeFile(`Report-${date + '-' + time}.json`, report)
		cy.writeFile(`Report-${date + '-' + time}.html`, '<!doctype html><html><head><link rel="stylesheet" href="styles.css"></head><body></body><script src="main.js"></script>')
	})
})
