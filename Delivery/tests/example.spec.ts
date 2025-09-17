

import { test, expect } from '@playwright/test';


test.describe( 

    'cricket match tests',()=>{

        test('shoulld open cricbuzz',async ({page})=>{

           await page.goto('https://www.cricbuzz.com');

           await expect(page).toHaveTitle(/Cricbuzz/);

        });

          test('shoulld open playwright',async ({page})=>{


/*
           await page.goto('https://playwright.dev/');

           await expect(page).toHaveTitle(/Playwright/);

           */


            await page.goto("https://www.redbus.in/");


 const fromInput= page.locator("#src");
 await expect(fromInput).toBeVisible();

        });


        test('connect reedbus',async ({page})=>{

            await page.goto('https://redbus.in/')

                await expect(page).toHaveTitle(/India's No. 1 online/);
        } )

    }
)