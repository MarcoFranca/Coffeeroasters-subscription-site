const createPlan = document.querySelector('#open-modal')
const modal = document.querySelector('#modal')
const checkout = document.querySelector('#modal-button')
const fade = document.querySelector('#fade')

/*******get texts order | modal*********/

/********** first choice | how do you drink coffe? ***********/

getText('#capsule','#filter','#espresso','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2', "#step1", "#step1Num", "#accordion1")
getText('#filter','#espresso','#capsule','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2', "#step1", "#step1Num", "#accordion1")
getText('#espresso','#filter','#capsule','Capsule', 'Filter', 'Espresso',
    '#howTxt','#howTxt2', "#step1", "#step1Num", "#accordion1")

/********** second choice | What type of coffee? ***********/

getText('#single','#decaf','#blended','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2', "#step2", "#step2Num", "#accordion2")
getText('#decaf','#single','#blended','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2', "#step2", "#step2Num", "#accordion2")
getText('#blended','#single','#decaf','Single origin', 'Decaf', 'Blended',
    '#typeTxt','#typeTxt2', "#step2", "#step2Num", "#accordion2")

/********** third choice | How much would you like? ***********/

getText('#q250','#q500','#q1000','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2', "#step3", "#step3Num", "#accordion3")
getText('#q500','#q250','#capsule','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2', "#step3", "#step3Num", "#accordion3")
getText('#q1000','#q500','#q250','250g', '500g', '1000g',
    '#muchTxt', '#muchTxt2', "#step3", "#step3Num", "#accordion3")

/********** fourth choice | Want us to grind them? ***********/

getText('#wholebean','#aeropress','#cafetiere','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2', "#step4", "#step4Num", "#accordion4")
getText('#aeropress','#wholebean','#cafetiere','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2', "#step4", "#step4Num", "#accordion4")
getText('#cafetiere','#wholebean','#aeropress','Wholebean', 'Filter', 'Cafetiére',
    '#grindTxt', '#grindTxt2', "#step4", "#step4Num", "#accordion4")

/********** fifth choice | How often should we deliver? ***********/

getText('#every','#every2','#month','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2', "#step5", "#step5Num","#accordion5")
getText('#every2','#every','#month','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2', "#step5", "#step5Num","#accordion5")
getText('#month','#every','#every2','Every week', 'Every 2 weeks', 'Every month',
    '#oftenTxt', '#oftenTxt2', "#step5", "#step5Num","#accordion5")

/************  checkout  ****************/



createPlan.addEventListener('click', ()=>{
if (document.querySelector('#open-modal').classList.value !== "button_gray") {
    scroll(0, 0)
    toggleModal()
}
})

checkout.addEventListener('click', ()=>{
    if (validateBill()){
        alert("success")
        console.log('success')
        toggleModal()
    }

})




