import { LoginPage } from "./loginpage.spec"
import {test as base} from "@playwright/test"

type baseFixtures = {
    loginPage : LoginPage,
}

export const test = base.extend<baseFixtures>({
    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));
    }
})