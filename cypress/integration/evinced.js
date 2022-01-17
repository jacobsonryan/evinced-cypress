context('Evinced Demo Site Tests', () => {
	before(() => {
		cy.evStart()
	})

	after(() => {
		cy.logReport()
	})

	it('Visits Google', () => {
		cy.visit('https://google.com')
	})
})
