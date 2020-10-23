export const mloginButton = $('[data-test="button-open-login"')//Login buttn on main page
export const mSignUpButton = $('[data-test="button-login-submit"')//Sign up button on main page
export const mSignUpButton2 = $('#root > div.gkrlz._3iyo8._1hRfj > div > div > div > div.col-md-6.col-sm-7.col-12.order-sm-1.order-2 > button')//second sign up button
export const linputUsername = $('[data-test="form-field-login-email"')//email input on login form
export const linputPassword = $('[data-test="form-field-login-password"')//password input on login form
export const lbtnSubmit = $('[data-test="button-login-submit"')//button submit onlogin form
export const lLoginForm = $('[data-test="form-login"')//login form on login menu


export class Helpers{
  //wait till element is clickable and click on it
   wclick(btnelem){
    browser.waitUntil(() => btnelem.isClickable())
    btnelem.click()
    }
}
