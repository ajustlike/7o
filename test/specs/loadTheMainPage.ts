describe('7option page', () => {
    it('Prod should have the right title', () => {
        browser.url('https://7option.com/')
        expect(browser).toHaveTitle('Online platform 📈 for Binary Option on forex, exchange, Stocks and Indices | 7option');
    })
})