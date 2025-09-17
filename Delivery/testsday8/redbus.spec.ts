

import {test,expect}  from  '@playwright/test';



    //  object or function    // acessing folder 

test( "rebus search journey" ,async ({page})=>{

 await page.goto("https://www.redbus.in");


await page.getByLabel("From").fill("banaglore");

 /*
 const fromInput= page.locator("#src");
 await expect(fromInput).toBeVisible();

 await fromInput.fill("bangalore");

 */
 /*

 const frominput=page.locator("input[placeholder='From'] , input[aria-label='From'],input[name='source']");
 await expect(frominput).toBeVisible();
 await frominput.fill("bangalore");

*/

} )



/*
test.describe( 

    'cricket match tests',()=>{

        test('shoulld open cricbuzz',async ({page})=>{

           await page.goto('https://www.cricbuzz.com');

           await expect(page).toHaveTitle(/Cricbuzz/);

        });

          test('shoulld open playwright',async ({page})=>{



           await page.goto('https://playwright.dev/');

           await expect(page).toHaveTitle(/Playwright/);

           


            await page.goto("https://www.redbus.in");


 const fromInput= page.locator("#src");
 await expect(fromInput).toBeVisible;

        });


        test('connect reedbus',async ({page})=>{

            await page.goto('https://redbus.in')

                await expect(page).toHaveTitle(/India's No. 1 online/);
        } )

    }
)

*/