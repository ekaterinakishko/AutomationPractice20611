import BasePage from './base.page';
//const user = require('../data/user');

class LoginPage extends BasePage {
  get signInBtn() {
    return $('a.login');
  }
  get createAnAccount() {
    return $('#email_create');
  }
  get createAnAccountBtn() {
    return $('#SubmitCreate');
  }
  get genderM() {
    return $('#id_gender1');
  }
  get inputFirstName() {
    return $('#customer_firstname');
  }
  get inputLastName() {
    return $('#customer_lastname');
  }
  get emailInput() {
    return $('#email');
  }
  get inputPassword() {
    return $('#passwd');
  }
  get days() {
    return $('#days');
  }
  get months() {
    return $('#months');
  }
  get years() {
    return $('#years');
  }
  get firstName() {
    return $('#firstname');
  }
  get lastName() {
    return $('#lastname');
  }
  get company() {
    return $('#company');
  }
  get address() {
    return $('#address1');
  }
  get city() {
    return $('#city');
  }
  get state() {
    return $('#id_state');
  }
  get zipCode() {
    return $('#postcode');
  }
  get country() {
    return $('#id_country');
  }
  get addInformation() {
    return $('#other');
  }
  get phone() {
    return $('#phone_mobile');
  }
  get aliasEmail() {
    return $('#alias');
  }
  get btnSubmit() {
    return $('#submitAccount');
  }
  get header() {
    return $('.page-heading');
  }
  get accountNameHeaderTab() {
    return $('.account');
  }
  get loginEmail(){
    return $('#email')
  }
  get loginPassword(){
    return $('#passwd')
  }
  get loginSignInBtn(){
    return $('#SubmitLogin')
  }
  get signOutBtn(){
    return $('.logout')
  }
  get womanTab(){
    return $('.sf-with-ul')
  }
  get tShirtsItem (){
    return $("//ul[@class='submenu-container clearfix first-in-line-xs']//ul//li//a[contains(text(),'T-shirts')]")//"//a[contains(text(),'T-shirts')]")
  }
  get pageBottom(){
    return $(".product-count")
  }
  get moreBtn(){
    return $("//span[contains(text(),'More')]")
  }
  get firstItem(){
    return $(".product-container")
  }
  get itemQty(){
    return $("#quantity_wanted")
  }
  get itemSize(){
    return $("#group_1")
  }
  get blueColor(){
    return $('#color_14')
  }
  get addToCartBtn(){
    return $("#add_to_cart")
  }
  get itemsAddedMessage(){
    return $("h2")
  }
  login(tempUser) {
    this.loginEmail.setValue(tempUser.userEmail);
    this.loginPassword.setValue(tempUser.password);
    this.loginSignInBtn.click();
  }
  register(tempUser,email=tempUser.email) {
    this.signInBtn.click();
    this.createAnAccount.setValue(`${email}`);
    this.createAnAccountBtn.click();
    this.genderM.click();
    this.inputFirstName.setValue(tempUser.firstName);
    this.inputLastName.setValue(tempUser.lastName);
    this.emailInput.setValue(`${email}`);
    this.inputPassword.setValue(tempUser.password);
    this.days.selectByAttribute('value', tempUser.day);
    this.months.selectByAttribute('value', tempUser.month);
    this.years.selectByAttribute('value', tempUser.year);
    this.firstName.setValue(tempUser.firstName);
    this.lastName.setValue(tempUser.lastName);
    this.company.setValue(tempUser.company);
    this.address.setValue(tempUser.address);
    this.city.setValue(tempUser.city);
    this.state.selectByVisibleText(tempUser.state);
    this.zipCode.setValue(tempUser.zipCode);
    this.addInformation.setValue(tempUser.additionalInformation);
    this.phone.setValue(tempUser.mobilePhone);
    this.aliasEmail.setValue(`${email}`);
    this.btnSubmit.click();
  }
  open() {
    return super.open('/index.php?controller=authentication&back=my-account');
  }
}
export default new LoginPage();

