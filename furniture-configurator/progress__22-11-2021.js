// function customRange(){
//   // $('input[type="range"]').next('output').css('border','1px solid red');
// };

// jQuery('input[type="range"]').on('input', function() {
// //  console.log( $(this).val() );
//   var thisInput = $(this),
//       thisInputValue = thisInput.val(),
//       thisInputOutput = thisInput.next("output");
  
// //  console.log( thisInputValue );
//   thisInputOutput.text( thisInputValue );
  
//   thisInputOutput.css( 'left', thisInputValue + '%');
// });
// var rangeMeter = document.getElementById('rangeMeter');
// var rangeValue = document.getElementById('rangeValue');
// document.getElementById('oneForty').addEventListener('click', function(){
//     rangeMeter.value = 140;
//     rangeValue.innerHTML = 140;
//     // console.log(rangeValue)
// });

// document.getElementById('oneSixty').addEventListener('click', function(){
//     rangeMeter.value = 160;
//     rangeValue.innerHTML = 160;
//     // console.log(rangeValue)
// });
//  oneEighty = document.getElementById('oneEighty')
//  console.log(oneEighty)
// document.getElementById('oneEighty').addEventListener('click', function(){
//     rangeMeter.value = 180;
//     rangeValue.innerHTML = 180;
//     // console.log(rangeValue)
// });
// document.getElementById('twoHundred').addEventListener('click', function(){
//     rangeMeter.value = 200;
//     rangeValue.innerHTML = 200;
//     // console.log(rangeValue)
// });

var app = document.getElementById("app");
// width btns
var widthBtns = document.querySelectorAll('.widthBtns');
widthBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log(btn.id);
        app.contentWindow.postMessage(btn.id, '*');
        // console.log(app)
        // btn.style.backgroundColor = 'black'
    })
})
// attach btns
var attachBtns = document.querySelectorAll('.attachBtns');
attachBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        console.log(btn.id);
        app.contentWindow.postMessage(btn.id, '*');
        // console.log(app)
    })
})

// width btns
$(document).ready(function() {
    $(".widthBtns").click(function () {
    $(this).siblings().removeClass("widthBtnActive");
    $(this).addClass("widthBtnActive");  
    console.log(this)
    console.log(this.classList) 
    // app.contentWindow.postMessage(this.id, '*');
    });
    });

// colors row by row
$(document).ready(function() {
$(".colorRow1").click(function () {
$(".colorRow1").children().removeClass("tickmarkActive");
$(this).children().addClass("tickmarkActive");  
console.log(this.id) 
app.contentWindow.postMessage(this.id, '*');
});
});
// 
$(document).ready(function() {
$(".colorRow2").click(function () {
$(".colorRow2").children().removeClass("tickmarkActive");
$(this).children().addClass("tickmarkActive");
console.log(this.id) 
app.contentWindow.postMessage(this.id, '*');  
});
});
// 
$(document).ready(function() {
$(".colorRow3").click(function () {
$(".colorRow3").children().removeClass("tickmarkActive");
$(this).children().addClass("tickmarkActive");
console.log(this.id) 
app.contentWindow.postMessage(this.id, '*');   
});
});
// 
$(document).ready(function() {
$(".colorRow4").click(function () {
$(".colorRow4").children().removeClass("tickmarkActive");
$(this).children().addClass("tickmarkActive");
console.log(this.id) 
app.contentWindow.postMessage(this.id, '*');   
});
});  
//    
$(document).ready(function() {
$(".colorRow5").click(function () {
$(".colorRow5").children().removeClass("tickmarkActive");
$(this).children().addClass("tickmarkActive");
console.log(this.id) 
app.contentWindow.postMessage(this.id, '*');   
});
});            
//  Full Screen and exit Full Screen Code
var fullScreenBtn = document.getElementById('fullScreenBtn');
var exitFullScreenBtn = document.getElementById('exitFullScreenBtn');
var sidebar = document.querySelector('.sidebar');
var containerMain = document.querySelector('.containerMain');
fullScreenBtn.addEventListener("click", function(){
    // containerMain.requestFullscreen();
    containerMain.style.display = "grid";
    containerMain.style.gridTemplateColumns = "auto"
    // containerMain.style.transition = "width 2s linear 2s;";
    console.log(containerMain)
    sidebar.style.width = "0px";
    sidebar.style.display = 'none'
    console.log(sidebar)
    // sidebar.style.transition = "width 2s linear 2s;"
    fullScreenBtn.style.display = "none"
    exitFullScreenBtn.style.display = "block"
    app.classList.add('fulScrnMobile')
}   
)
exitFullScreenBtn.addEventListener("click", function(){
    // containerMain.requestFullscreen();
    containerMain.style.display = "grid";
    containerMain.style.gridTemplateColumns = "3fr 1fr"
    console.log(containerMain)
    sidebar.style.width = "auto";
    sidebar.style.display = 'block'
    // sidebar.style.transition = "all 1s"
    console.log(sidebar)
    exitFullScreenBtn.style.display = "none"
    fullScreenBtn.style.display = "block"
    app.classList.remove('fulScrnMobile')
}
)
// scale
var scale = document.getElementById('scale');
scale.addEventListener('click', function(){
    console.log(scale.id)
    app.contentWindow.postMessage(scale.id, '*');
}
)
// Color tab
var colorTab = document.getElementById('colorTab');
colorTab.addEventListener('click', function(){
    console.log(colorTab.id)
    app.contentWindow.postMessage(colorTab.id, '*');
}
)


// 
var drawerBtns = document.querySelectorAll('.drawerBtns');
var screenBtn = document.querySelector('.screenBtn');
var colorsRow3 = document.querySelectorAll('.colorsRow3');
var colorsRow4 = document.querySelectorAll('.colorsRow4');
var colorsRow5 = document.querySelectorAll('.colorsRow5');

// 
// console.log(drawerBtns)
drawerBtns.forEach(function(btn){
    btn.addEventListener('click', function(){   
        colorsRow3.forEach((item)=>{
            item.classList.remove('d-none')
        })
        colorsRow4.forEach((item)=>{
            item.classList.remove('d-none')
        })
        colorsRow5.forEach((item)=>{
            item.classList.add('d-none')
        })        
        
    })
}
)

screenBtn.addEventListener('click', function(){
    colorsRow3.forEach((item)=>{
        item.classList.add('d-none')
    })
    colorsRow4.forEach((item)=>{
        item.classList.add('d-none')
    })
    colorsRow5.forEach((item)=>{
        item.classList.remove('d-none')
    }) 
}
)


var otherAttachBtns = document.querySelectorAll('.otherAttachBtns');
otherAttachBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        colorsRow3.forEach((item)=>{
            item.classList.add('d-none')
        })
        colorsRow4.forEach((item)=>{
            item.classList.add('d-none')
        })
        colorsRow5.forEach((item)=>{
            item.classList.add('d-none')
        }) 
    }
    )
}
)
// calculator
var sizePrice = 0; var drawerPrice = 0; var standPrice = 0;  var shelfPrice = 0; var screenPrice = 0; var capPrice = 0;
var pillerColor = 0; var tableFront = 0; var drawerColor = 0; var drawerFront = 0; var screenColor = 0;


function updatePrice()
{
    // console.log(parseInt(sizePrice));
    // console.log(parseInt(drawerPrice));
    totalPrice = (parseInt(sizePrice) + parseInt(drawerPrice) + parseInt(standPrice) + parseInt(shelfPrice) + parseInt(screenPrice) + parseInt(capPrice) + parseInt(pillerColor) + parseInt(tableFront) + parseInt(drawerColor) + parseInt(drawerFront) + parseInt(screenColor) );
    $("#totalCalculation").html( "$ "+totalPrice);
    console.log(totalPrice);
}

updatePrice()

$(".widthBtns").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.sizePrice = classList[3];
    updatePrice(sizePrice);
})

$(".drawerBtn").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.drawerPrice = parseInt(classList[3]);
    updatePrice(drawerPrice);
})

$(".standBtn").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.standPrice = classList[3];
    updatePrice(standPrice);
})

$(".shelfBtn").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.shelfPrice = classList[3];
    updatePrice(shelfPrice);
})

$(".screenBtn").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.screenPrice = classList[3];
    updatePrice(screenPrice);
})

$(".capBtn").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.capPrice = classList[3];
    updatePrice(capPrice);
})

$(".colorRow1").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.pillerColor = classList[3];
    updatePrice(pillerColor);
})

$(".colorRow2").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.tableFront = classList[3];
    updatePrice(tableFront);
})

$(".colorRow3").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.drawerColor = classList[3];
    updatePrice(drawerColor);
})


$(".colorRow4").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.drawerFront = classList[3];
    updatePrice(drawerFront);
})

$(".colorRow5").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.screenColor = classList[3];
    updatePrice(screenColor);
})

// window.onmessage = function(event) { 
//     console.log(event.data);

//     if(event.data == "Drawer"){

//     }
//     else if(event.data == "Screen"){

//     }
//     else if(event.data == "Drawer,Screen"){
        
//     }
// }