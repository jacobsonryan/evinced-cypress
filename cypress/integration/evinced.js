context('Evinced Demo Site Tests', () => {
	before(() => {
		cy.evStart()
	})

	after(() => {
		cy.evStop({ logIssues: true }).should((report) => {
			console.log(report)
		})
	})

	it('Visits Google', () => {
		cy.visit('https://google.com')
	})
})
