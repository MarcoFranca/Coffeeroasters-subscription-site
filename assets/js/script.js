const navButton = document.querySelector('#header__nav__button');
const menuImg = document.querySelector('#header__nav__img')
const navegationBar = document.querySelector('#navBar')
const createPlan = document.querySelector('#create')
const modal = document.querySelector('#modal')
const checkout = document.querySelector('#checkout')

/******** main menu *********/

navButton.addEventListener('click', ()=>{
    console.log(navegationBar.style)
    if (navegationBar.style.display ===''){
        navegationBar.style.display = 'flex'
        menuImg.setAttribute('src','assets/images/shared/mobile/icon-close.svg')
    }else {
        navegationBar.style.display = ''
        menuImg.setAttribute('src','assets/images/shared/mobile/icon-hamburger.svg')
    }
})

createPlan.addEventListener('click', ()=>{

        if (modal.style.display ===''){
                modal.style.display = 'flex'
            scroll(0,0)
        }
})

/************  checkout  ****************/

checkout.addEventListener('click', ()=>{
    if (validateBill()){
        modal.style.display = ''
        alert("success")
        console.log('success')
    }

})

/*******get texts order | modal*********/

/********** first choice | how do you drink coffe? ***********/

getText('#capsule','#filter','#espresso','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2')
getText('#filter','#espresso','#capsule','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2')
getText('#espresso','#filter','#capsule','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2')

/********** second choice | What type of coffee? ***********/

getText('#single','#decaf','#blended','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2')
getText('#decaf','#single','#blended','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2')
getText('#blended','#filter','#decaf','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2')

/********** third choice | How much would you like? ***********/

getText('#q250','#q500','#q1000','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2')
getText('#q500','#q250','#capsule','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2')
getText('#q1000','#q500','#q250','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2')

/********** fourth choice | Want us to grind them? ***********/

getText('#wholebean','#aeropress','#cafetiere','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2')
getText('#aeropress','#wholebean','#cafetiere','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2')
getText('#cafetiere','#wholebean','#aeropress','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2')

/********** fifth choice | How often should we deliver? ***********/

getText('#every','#every2','#month','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2')
getText('#every2','#every','#month','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2')
getText('#month','#every','#every2','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2')


