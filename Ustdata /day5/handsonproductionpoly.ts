
import { test, Page } from '@playwright/test';

// --- Base Page class ---
abstract class BasePage {
    constructor(protected page: Page) {}

    async click(selector: string) {
        await this.page.click(selector);
        console.log(`Clicked ${selector}`);
    }

    async type(selector: string, text: string) {
        await this.page.fill(selector, text);
        console.log(`Typed "${text}" into ${selector}`);
    }

    // Virtual method: each page will implement its own open
    abstract open(): Promise<void>;
}

// --- Home Page ---
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

// --- Login Page ---
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

// --- Test with polymorphism ---
test('polymorphism simulation', async ({ page }) => {
    // Store pages in BasePage array
    const pages: BasePage[] = [
        new HomePage(page),
        new LoginPage(page)
    ];

    // Polymorphism: open all pages using same method
    for (const p of pages) {
        await p.open(); // each page opens differently
    }

    // Use specific methods for extra actions
    const home = pages[0] as HomePage;
    await home.search('Playwright');

    const login = pages[1] as LoginPage;
    await login.login('user1', 'pass123');
});
