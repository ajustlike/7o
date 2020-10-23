//import { linputUsername,linputPassword,lbtnSubmit } from "../constants";
import Page from './page';
import LoginPage from './login.page';
//import { linputUsername,linputPassword,lbtnSubmit,mloginButton } from "../constants"
get mloginButton () { return $('[data-test="button-open-login"') }
get linputUsername () { return $('[data-test="button-open-login"') }
get linputPassword () { return $('[data-test="form-field-login-password"') }
get lbtnSubmit () { return $('[data-test="button-login-submit"') }
//get mloginButton(){ return $('[data-test="button-open-login"')}//Login buttn on main page
//get linputUsername(){return $('[data-test="form-field-login-email"')}//email input on login form
//get linputPassword(){ return $('[data-test="form-field-login-password"')}//password input on login form
//get lbtnSubmit(){ return $('[data-test="button-login-submit"')}//button submit onlogin form


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
   
    login (username, password) {
        LoginPage.open();
        //browser.waitUntil(() => mloginButton.isClickable());
        mloginButton.waitForClickable({ timeout: 50000 });
        mloginButton.click();
        this.linputUsername.setValue(username);
        this.linputPassword.setValue(password);
        this.lbtnSubmit.click()
    }
}

export default new  SecurePage();
