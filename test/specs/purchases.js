import LoginPage from '../pages/login.page';
import CheckoutPage from '../pages/checkout.page';
const user = require('../data/user');
before(() => {
  LoginPage.open();
  browser.maximizeWindow();
});

describe('ADDING AND PURCHASING ITEMS', () => {
  it('SHOULD ADD ITEMS IN THE CART', function() {
    LoginPage.login(user);
    CheckoutPage.dressesBtn.moveTo();
    CheckoutPage.summerDresses.click();
    let discountItems = CheckoutPage.discount.map(el => el.getText());//выводим массив скидок
    discountItems = discountItems.map(el => el.match(/(\d+)/g)).flat().map(el => +el).sort((a,b) => b - a);
    //убираем '-' и '%', затем убираем массив в массиве, фильтруем стринг в число, сортируем по убыванию
    let maxDiscount = discountItems[0]; //берем первый самый большой элемент
    console.log('-------------')
    console.log(maxDiscount)
    console.log('-------------')


  });
});
