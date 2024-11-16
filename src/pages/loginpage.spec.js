import { url } from "inspector";
import { removeSlashUrl } from "../utils";


export class LoginPage{
    
    baseUrl = 'https://www.saucedemo.com';
    locatorUsername = '#user-name';
    locatorPassword = '#password';
    locatorButtonLogin = '#login-button';
    locatorErrorMessage = '[data-test = "error"]'


    /**
     * 
     * @param {import("@playwright/test").Page} page 
     */

    constructor(page) {
        this.page = page;
    }

    async goto(){
        await this.page.goto(this.baseUrl);
    }

    async fillUserPassword(user,password){
        await this.page.locator(this.locatorUsername).fill(user);
        await this.page.locator(this.locatorPassword).fill(password);
    }

    async clickLogin(login){
        await this.page.click(this.locatorButtonLogin)
    }

    async getUsername(){
        return await this.page.locator(this.locatorUsername).inputValue();
    }

    async getPassword(){
        return await this.page.locator(this.locatorPassword).inputValue();
    }

    async getErrorMessage(){
      try{
        return await this.page.locator(this.locatorErrorMessage).textContent({ timeout:1000 })|| "";
        ;  
      }
      catch(error){
        console.error('เกิดข้อผิดพลาด:', error);
        return "";
      }
    }
    inValidUrl(){
        const url = removeSlashUrl(this.page.url())
        return url === this.baseUrl;
    
    }
}