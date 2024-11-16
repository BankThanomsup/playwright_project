import { expect} from '@playwright/test';
import { test } from '../pages/base.ts'
import { LoginPage } from '../pages/loginpage.spec';
import { validUsers } from '../test-data/user.js';
import { invalidUsers } from '../test-data/user.js';
import { log } from 'console';

test.describe('LOGIN FUNCTION',()=>{  
  
   
test.beforeEach(async({ loginPage }) => {
  await loginPage.goto();

});



test('TC001:Input fields should display as the data that was filled', async ({ loginPage }) => {
    
    await loginPage.fillUserPassword('testuser','password') ;
    expect(await loginPage.getUsername()).toBe('testuser'); 
    expect(await loginPage.getPassword()).toBe('password'); 
  });


test('TC002:Should show an error message if log in without a username', async ({ loginPage }) => {

  await loginPage.fillUserPassword('','password') ;
  await loginPage.clickLogin() ;
  
  const message = await loginPage.getErrorMessage();
  expect(message).toContain('is required')
  expect(loginPage.inValidUrl()).toBe(true);

  
  


});
test('TC003: Should show an error message if log in without a password', async ({ loginPage }) => {
  await loginPage.fillUserPassword('testuser','') ;
  await loginPage.clickLogin() ;
  
  const message = await loginPage.getErrorMessage();
  expect(message).toContain('is required')
  expect(loginPage.inValidUrl()).toBe(true);
});
test('TC004:Should show an error message if log in with both fields blank', async ({ loginPage }) => {
  await loginPage.fillUserPassword('','') ;
  await loginPage.clickLogin() ;

  const message = await loginPage.getErrorMessage();
  expect(message).toContain('is required')
  expect(loginPage.inValidUrl()).toBe(true);

});

validUsers.forEach(({username,password})=>{
  test(`TC005:Should logged in successfully with valid credentials: ${username}`, async ({ loginPage }) => {
    await loginPage.fillUserPassword(username,password);
    await loginPage.clickLogin();
    expect(await loginPage.getErrorMessage()).not.toContain('is required');
    expect(loginPage.inValidUrl()).toBe(false);
  });
});

invalidUsers.forEach(({username,password})=>{
  test(`TC006:Should logged in fails with an error message when using invalid credentials: ${username}`, async ({ loginPage }) => {
    await loginPage.fillUserPassword(username,password);
    await loginPage.clickLogin();
    expect(await loginPage.getErrorMessage()).toContain('Epic sadface:');
    expect(loginPage.inValidUrl()).toBe(true);
  });
});
 
});
