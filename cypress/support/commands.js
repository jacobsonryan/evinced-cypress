
// Downloads HTML Report
Cypress.Commands.add('logReport', () => {
	cy.evStop({ logIssues: true }).should((report) => {
		cy.writeFile('Report.json', report)
		cy.writeFile('Report.html', '<!doctype html><html><head></head><body></body><script src="main.js"></script>')
	})
})
