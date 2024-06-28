const { expect } = require('@wdio/globals')
const HelloPage = require('../pageobjects/hello.page')

describe('My Login application', () => {
    it('should toggle', async () => {
        await HelloPage.open()

        await HelloPage.toggleTittleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleBtn.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })

    it('should not toggle', async () => {
        await HelloPage.open()

        await HelloPage.toggleTittleWithInput('bla-bla')
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
})

