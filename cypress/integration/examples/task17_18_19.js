describe('Bloglist app', function() {
  // task 18
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3000/api/testing/reset')
    const user = {
      name: 'Ismo',
      username: 'Ismo',
      password: 'test'
    }

    cy.request('POST', 'http://localhost:3000/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  describe('when logged in', function() {
    // task 17
    beforeEach(function() {
      cy.contains('login')
        .click()
      cy.get('#username')
        .type('Ismo')
      cy.get('#password')
        .type('test')
      cy.contains('login')
        .click()
    })

    // task 17
    it('name of the user is shown', function() {
      cy.contains('Ismo logged in')
    })

    describe('and a blog is created', function () {
      // initialize with 1 blog
      // task 18
      beforeEach(function () {
        cy.contains('new blog')
          .click()
        cy.get('#title')
          .type('testing is fun')
        cy.get('#author')
          .type('author')
        cy.get('#url')
          .type('http://localhost:3000/')
        cy.contains('create')
          .click()
        cy.contains('cancel')
          .click()
      })
      // task 18
      it('a new blog can be created', function() {
        cy.contains('new blog')
          .click()
        cy.get('#title')
          .type('Pekka')
        cy.get('#author')
          .type('test')
        cy.get('#url')
          .type('http://localhost:3000/')
        cy.contains('create')
          .click()
        cy.contains('Pekka')
      })
      // task 19
      it('a new blog information can be seen', function() {
        cy.contains('new blog')
          .click()
        cy.get('#title')
          .type('Pekka')
        cy.get('#author')
          .type('test')
        cy.get('#url')
          .type('http://localhost:3000/')
        cy.contains('create')
          .click()
        cy.contains('Pekka')
        cy.get('#Pekka')
          .click()
        cy.contains('http://localhost:3000/')
        cy.contains('0 likes')
        cy.contains('added by')
      })
    })
    // task 19
    describe('User information', function () {
      it('can be seen on site', function() {
        cy.get('#usersPage')
          .click()
        cy.get('#Ismo')
          .click()
        cy.contains('There is nothing to be seen')
      })
    })
    // task 19
    describe('you can logout', function () {
      it('logging out', function() {
        cy.get('#logOut')
          .click()
        cy.contains('Log in to application')
        cy.contains('login')
      })
    })
  })
})