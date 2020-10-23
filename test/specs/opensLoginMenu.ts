import LoginPage from '../pageobjects/login.page';
import { linputUsername,linputPassword,lbtnSubmit,mloginButton,lLoginForm} from "../constants"

describe('Login Menu', () => {
    it('is dislayed', () => {
        LoginPage.open();
        mloginButton.waitForClickable({ timeout: 50000 });
        //browser.waitUntil(() => mloginButton.isClickable());
        mloginButton.click();

        expect(lLoginForm).toBeDisplayed;
       
    });
    it('e-mail input is clickable', () => {
        linputUsername.isClickable;
    });
    it('password input is clickable', () => {
        linputPassword.isClickable;
    });
    it('button  Enter is clickable', () => {
        lbtnSubmit.isClickable;
    });
    it('remember checkbox is clickable', () => {
        $('[for="remember"]').isClickable;
    });
});