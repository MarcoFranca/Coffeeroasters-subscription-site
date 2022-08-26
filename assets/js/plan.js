const createPlan = document.querySelector('#create')
const modal = document.querySelector('#modal')
const checkout = document.querySelector('#checkout')



/*******get texts order | modal*********/

/********** first choice | how do you drink coffe? ***********/

getText('#capsule','#filter','#espresso','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2', "#step1", "#step1Num")
getText('#filter','#espresso','#capsule','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2', "#step1", "#step1Num")
getText('#espresso','#filter','#capsule','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2', "#step1", "#step1Num")

/********** second choice | What type of coffee? ***********/

getText('#single','#decaf','#blended','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2', "#step2", "#step2Num")
getText('#decaf','#single','#blended','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2', "#step2", "#step2Num")
getText('#blended','#filter','#decaf','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2', "#step2", "#step2Num")

/********** third choice | How much would you like? ***********/

getText('#q250','#q500','#q1000','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2', "#step3", "#step3Num")
getText('#q500','#q250','#capsule','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2', "#step3", "#step3Num")
getText('#q1000','#q500','#q250','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2', "#step3", "#step3Num")

/********** fourth choice | Want us to grind them? ***********/

getText('#wholebean','#aeropress','#cafetiere','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2', "#step4", "#step4Num")
getText('#aeropress','#wholebean','#cafetiere','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2', "#step4", "#step4Num")
getText('#cafetiere','#wholebean','#aeropress','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2', "#step4", "#step4Num")

/********** fifth choice | How often should we deliver? ***********/

getText('#every','#every2','#month','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2', "#step5", "#step5Num")
getText('#every2','#every','#month','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2', "#step5", "#step5Num")
getText('#month','#every','#every2','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2', "#step5", "#step5Num")

/************  checkout  ****************/

checkout.addEventListener('click', ()=>{
    if (validateBill()){
        modal.style.display = ''
        alert("success")
        console.log('success')
    }

})

createPlan.addEventListener('click', ()=>{
if (document.querySelector('#create').classList.value !== "button_gray") {
    if (modal.style.display === '') {
        modal.style.display = 'flex'
        scroll(0, 0)
    }
}
})
