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
   // let discountItems = CheckoutPage.discount.map(el => el.getText());//выводим массив скидок
    // discountItems = discountItems.map(el => el.match(/(\d+)/g)).flat().map(el => +el).sort((a,b) => b - a);
    // //убираем '-' и '%', затем убираем массив в массиве, фильтруем стринг в число, сортируем по убыванию
    // let maxDiscount = discountItems[0]; //берем первый самый большой элемент
    // console.log('-------------')
    // console.log(maxDiscount)
    // console.log('-------------')
    // CheckoutPage.addToCartBtn.click();
    // browser.pause(5000);

    //discountItems = discountItems.map(el => el.match(/(\d+)/g)).flat().map(el => +el).filter(el => el > 0);
    // let maxDiscount = Math.max(...discountItems);
    // let index = discountItems.indexOf(maxDiscount);
    // console.log('-------------')
    // console.log(maxDiscount)
    // console.log(discountItems)
    // console.log('-------------')
    CheckoutPage.manufacturer.scrollIntoView();
    let arr =[];
    for(let i = 0; i < CheckoutPage.products.length; i++){
      console.log('-------------')
      console.log(CheckoutPage.discount(i))
      console.log('-------------')
      if(CheckoutPage.discount(i) !== null){

        arr.push(CheckoutPage.discount(i).getText().split('%')[0])
      }
      else {arr.push(0)}
    }
    let maxDiscount = Math.min(...arr);
    let index = arr.indexOf(maxDiscount);
    // console.log('-------------')
    // console.log(maxDiscount)
    // console.log(discountItems)
    // console.log('-------------')
    CheckoutPage.addToCartBtn(index).click();
  });
});
