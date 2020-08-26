import BasePage from './base.page';
const user = require ('../data/user');

class LoginPage extends BasePage {

    get signInBtn () { return $('a.login') }
    get createAnAccount () { return $('#email_create') }
    get createAnAccountBtn () {return $('#SubmitCreate') }
    get genderM () { return $('#id_gender1') }
    get genderF () { return $('#id_gender2') }
    get inputFirstName () { return $('#customer_firstname') }
    get inputLastName () { return $('#customer_lastname') }
    get emailInput () {return $('#email')}
    get inputPassword () { return $('#passwd') }
    get days () { return $('#days') }
    get months () { return $('#months') }
    get years () { return $('#years') }
    get firstName () { return $('#firstname') }
    get lastName () { return $('#lastname') }
    get company () { return $('#company') }
    get address () { return $('#address1') }
    get city () { return $('#city') }
    get state () { return $('#id_state.form-control')}
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

    register (tempUser)//gender, firstName, lastName, email, password, month, day, year, company, address, city, state, zip, country, aI, phone, aliasEmail)
     {
        this.genderM.click();
        this.inputFirstName.setValue(tempUser.firstName);
        this.inputLastName.setValue(tempUser.lastName);
        this.emailInput.setValue(tempUser.email);
        this.inputPassword.setValue(tempUser.password);
        browser.pause(2000)
        this.days.selectByAttribute('value',tempUser.day);
        this.months.selectByAttribute('value',tempUser.month);
        this.years.selectByAttribute('value',tempUser.year);
        this.firstName.setValue(tempUser.firstName);
        this.lastName.setValue(tempUser.lastName);
        this.company.setValue(tempUser.company);
        this.address.setValue(tempUser.address);
        this.city.setValue(tempUser.city);
        this.state.selectByVisibleText(tempUser.state);
        browser.pause(5000);
        this.zipCode.setValue(tempUser.zipCode);
        this.country.setValue(tempUser.country);
        browser.pause(5000);
        this.addInformation.setValue(tempUser.additionalInformation);
        this.phone.setValue(tempUser.phone);
        this.aliasEmail.setValue(tempUser.email);
        this.btnSubmit.click();
    }

    open () {
        return super.open('/');
    }
}

export default new LoginPage();
