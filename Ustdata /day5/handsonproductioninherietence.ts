

import { test, Page } from '@playwright/test';

// --- Base Page ---
class BasePage {
    constructor(protected page: Page) {}  // type added

    async click(selector: string) {
        await this.page.click(selector);
        console.log(`Clicked ${selector}`);
    }

    async type(selector: string, text: string) {
        await this.page.fill(selector, text);
        console.log(`Typed "${text}" into ${selector}`);
    }
}

// --- Home Page inherits BasePage ---
class HomePage extends BasePage {
    async open() {
        await this.page.goto('https://example.com');
        console.log('Home Page opened 🌐');
    }

    async search(term: string) {
        await this.type('#search', term);
        await this.click('#search-button');
        console.log(`Searched for "${term}"`);
    }
}

// --- Login Page inherits BasePage ---
class LoginPage extends BasePage {
    async open() {
        await this.page.goto('https://example.com/login');
        console.log('Login Page opened 🔑');
    }

    async login(user: string, pass: string) {
        await this.type('#username', user);
        await this.type('#password', pass);
        await this.click('#login-button');
        console.log(`Logged in as ${user}`);
    }
}

// --- Test ---
test('inheritance simple example', async ({ page }: { page: Page }) => {
    const home = new HomePage(page);
    await home.open();
    await home.search('Playwright');

    const login = new LoginPage(page);
    await login.open();
    await login.login('user1', 'pass123');
});
