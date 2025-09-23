

import {test,expect} from '@playwright/test';
import path from 'path';



test('Daily times demo automotion',async ({page,context})=>{
  

  await page.goto('file://C:/Users/Administrator/Delivery/Day13/codescratch/newspaper.html');

  // ----- Locator 

   const texts= page.getByText('Breaking News')
   await expect(texts).toBeVisible()


   await page.getByLabel('Username:').fill('bonds') 
   await page.getByLabel('Password:').fill('smiles')
   await page.getByRole('button',{name:'Login'}).click();


   //---- check boxes


   await page.locator('#remember').check();
   await page.locator('#category').selectOption('Technology')


  //-- capture test 

     const headingtext=page.locator('h1').innerText();
     console.log("heading",headingtext)
  
// web table validation 

  //const techArticles = await page.locator('#newsTable tr td:text("Technology") + td').innerText();
  //expect(techArticles).toBe('15');

  const techarticles = await page.locator('#newsTable tr td:text("Technology") + td').innerText();
  expect(techarticles).toBe('15');

  // -- multi tabs 


   const [newPage]=await Promise.all([ context.waitForEvent('page'),page.locator('#extLink').click()]);
    await newPage.waitForLoadState();
    console.log("new tab title",  await newPage.title());
    await newPage.close();


    //--iframe 

    const frame=page.frameLocator('#adFrame')
   await expect(frame.getByText('Buy 1 Get 1 Free!')).toBeVisible();


   //-- shadow dom 

   const shadwobutton=page.locator('#shadow-host').locator('button')
   await shadwobutton.click();


 // file upload 

const filepath= path.resolve(__dirname,'data/sample.txt');
await page.setInputFiles('#fileUpload',filepath);


// keyboard actions 


await page.keyboard.press('PageDown');
await page.keyboard.type('End of page')


})

