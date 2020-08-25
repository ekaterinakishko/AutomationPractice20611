import BasePage from './base.page';

class LoginPage extends BasePage {

    get signInBtn () { return $('a.login') }
    get createAnAccount () { return $('#email_create') }
    get genderM () { return $('#id_gender1') }
    get genderF () { return $('#id_gender2') }
    get inputFirstName () { return $('#customer_firstname') }
    get inputLastName () { return $('#customer_lastname') }
    get inputPassword () { return $('#passwd') }
    get days () { return $$('#days')[8] }
    get months () { return $$('#months')[5] }
    get years () { return $$('#years')[1995] }
    get firstName () { return $('#firstname') }
    get lastName () { return $('#lastname') }
    get company () { return $('#company') }
    get address () { return $('#address1') }
    get city () { return $('#city') }
    get state () { return $$('#id_state')[9] }
    get zipCode () { return $('#postcode') }
    get country () { return $('#id_country') }
    get addInformation () { return $('#other') }
    get phone () { return $('#phone_mobile') }
    get aliasEmail () { return $('#alias') }
    get btnSubmit () { return $('#submitAccount') }
    get header () { return $('.page-heading') }


    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    // days (n) {
    //     return $$('#days')[n];

    open () {
        return super.open('/');
    }
}

export default new LoginPage();
