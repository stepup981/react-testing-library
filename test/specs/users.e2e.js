const { expect  } = require('@wdio/globals')
const UsersPage = require('../pageobjects/users-test.page')

describe('My Login application', () => {
    // it('vision users list', async () => {

    //   await UsersPage.loadData()
    // })

    it('vision users list', async () => {
      await UsersPage.loadData()
      await UsersPage.deleteUser()
    })
})

