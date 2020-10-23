import Page from './page';
//import * as from './constants';
import {linputUsername,linputPassword,lbtnSubmit} from './constants';


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
   
    //get inputUsername () { return $('[data-test="form-field-login-email"') }
    //get inputPassword () { return $('[data-test="form-field-login-password"') }
    //get btnSubmit () { return $('[data-test="button-login-submit"') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.linputUsername.setValue(username);
        this.linputPassword.setValue(password);
        this.lbtnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        super.open('/');
        $('body > form > input[type=password]:nth-child(1)').setValue('Hbgn2tSsxamzGbNh');
        $('[type="submit"]').click();

    }
}

export default new LoginPage()
