import LoginPage from '../pageobjects/login.page';
import { mloginButton,mSignUpButton,mSignUpButton2 } from "../constants"

describe('Application Main page', () => {
    it(' has Login button', () => {
        LoginPage.open();
        expect(mloginButton).toBeDisplayed;
     
    })
    it(' has Login button is clickable', () => {
        mloginButton.isClickable;
    })
    it('has SignUp button', () => {
        expect(mSignUpButton).toBeDisplayed;
    })
    it(' has SignUp button is clickable', () => {
        mSignUpButton.isClickable;
    })
    it('has 2nd SignUp button', () => {
      expect(mSignUpButton2).toBeDisplayed;
    })
    it(' has 2nd SignUp button is clickable', () => {
        mSignUpButton2.isClickable;
    })
})