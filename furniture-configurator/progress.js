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
        console.log($(this).siblings())
    })
})
$(document).ready(function() {
    $(".attachBtns").click(function () {
    $(".attachBtns").removeClass("attachBtnActive");
    $(this).addClass("attachBtnActive");  
    console.log(this)
    // app.contentWindow.postMessage(this.id, '*');
    });
    });
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
    app.contentWindow.postMessage("ab fullscreen he", '*');
    
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
    app.contentWindow.postMessage("ab fullscreen off he", '*');
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
var drawerBtnsRight = document.querySelectorAll('.drawerBtnsRight');
var drawerBtnsLeft = document.querySelectorAll('.drawerBtnsLeft');
// var screenBtn = document.querySelector('.screenBtn');
// var colorsRow3 = document.querySelectorAll('.colorsRow3');
// var colorsRow4 = document.querySelectorAll('.colorsRow4');
// var colorsRow5 = document.querySelectorAll('.colorsRow5');

// 
// console.log(drawerBtns)
drawerBtnsRight.forEach(function(btn){
    btn.addEventListener('click', function(){   
        // colorsRow3.forEach((item)=>{
        //     item.classList.remove('d-none')
        // })
        // colorsRow4.forEach((item)=>{
        //     item.classList.remove('d-none')
        // })
        // colorsRow5.forEach((item)=>{
        //     item.classList.add('d-none')
        // })        
        
    })
}
)

// screenBtn.addEventListener('click', function(){
//     // colorsRow3.forEach((item)=>{
//     //     item.classList.add('d-none')
//     // })
//     // colorsRow4.forEach((item)=>{
//     //     item.classList.add('d-none')
//     // })
//     // colorsRow5.forEach((item)=>{
//     //     item.classList.remove('d-none')
//     // }) 
// }
// )


var otherAttachBtns = document.querySelectorAll('.otherAttachBtns');
otherAttachBtns.forEach(function(btn){
    btn.addEventListener('click', function(){
        // colorsRow3.forEach((item)=>{
        //     item.classList.add('d-none')
        // })
        // colorsRow4.forEach((item)=>{
        //     item.classList.add('d-none')
        // })
        // colorsRow5.forEach((item)=>{
        //     item.classList.add('d-none')
        // }) 
    }
    )
}
)
// calculator
var sizePrice = 60; var drawerPriceRight = 0; var drawerPriceLeft = 0; var standPriceRight = 0; var standPriceLeft = 0;  var shelfPriceRight = 0; var shelfPriceLeft = 0; var screenPrice = 0; var capPriceRight = 0; var capPriceCenter = 0; var capPriceLeft = 0;
var pillerColor = 0; var tableFront = 0; var drawerColor = 0; var drawerFront = 0; var screenColor = 0;
var leg1=5; var leg2=0; var leg3=0;


function updatePrice()
{
    totalPrice = (parseInt(sizePrice) + parseInt(drawerPriceRight) + parseInt(drawerPriceLeft) + parseInt(standPriceRight) + parseInt(standPriceLeft) + parseInt(shelfPriceRight) + parseInt(shelfPriceLeft) + parseInt(screenPrice) + parseInt(capPriceRight) + parseInt(capPriceCenter) + parseInt(capPriceLeft) + parseInt(pillerColor) + parseInt(tableFront) + parseInt(drawerColor) + parseInt(drawerFront) + parseInt(screenColor) + parseInt(leg1) + parseInt(leg2) + parseInt(leg3) );
    $("#totalCalculation").html( "$ "+totalPrice);
    $("#furniturePrice").html("$ "+totalPrice);
    console.log(totalPrice);
}

updatePrice()

$(".widthBtns").on('click', function(){
    var classList = ($(this).prop('classList'));
    globalThis.sizePrice = classList[3];
    document.getElementById('furnitureSize').innerHTML = sizePrice+' Inch';
    updatePrice(sizePrice);
})

// $(".drawerBtn").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.drawerPrice = parseInt(classList[3]);
//     updatePrice(drawerPrice);
// })

// $(".standBtn").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.standPrice = classList[3];
//     updatePrice(standPrice);
// })

// $(".shelfBtn").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.shelfPrice = classList[3];
//     updatePrice(shelfPrice);
// })

// $(".screenBtn").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.screenPrice = classList[3];
//     updatePrice(screenPrice);
// })

// $(".capBtn").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.capPrice = classList[3];
//     updatePrice(capPrice);
// })

// $(".colorRow1").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.pillerColor = classList[3];
//     updatePrice(pillerColor);
// })

// $(".colorRow2").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.tableFront = classList[3];
//     updatePrice(tableFront);
// })

// $(".colorRow3").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.drawerColor = classList[3];
//     updatePrice(drawerColor);
// })


// $(".colorRow4").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.drawerFront = classList[3];
//     updatePrice(drawerFront);
// })

// $(".colorRow5").on('click', function(){
//     var classList = ($(this).prop('classList'));
//     globalThis.screenColor = classList[3];
//     updatePrice(screenColor);
// })
var widthBtn1 = document.getElementById('widthBtn1');
var sidebar1 = document.querySelector('.sidebar1');
var sidebar2 = document.querySelector('.sidebar2');
// var trash = document.querySelector('.trash');
// trash.addEventListener('click',()=>{
//     trash.style.display = 'none';
//     sidebar1.style.display = 'block'
//     sidebar2.style.display = 'none'
//     app.contentWindow.postMessage('trash', '*');
//     // console.log('app clicked')
// })
app.addEventListener('click', function(){
    sidebar1.style.display = 'block'
    sidebar2.style.display = 'none'
    console.log('app clicked')
}
)
$(document).ready(function() {
    $(".drawerBtnsRight").click(function () {
    $(this).siblings().removeClass("drawerBtnRightActive");
    $(this).addClass("drawerBtnRightActive");  
    console.log('ye meri id he',this.id)
    // console.log(this.classList) 
    app.contentWindow.postMessage(this.id, '*');
    });
    });
    $(document).ready(function() {
    $(".drawerBtnsLeft").click(function () {
    $(this).siblings().removeClass("drawerBtnLeftActive");
    $(this).addClass("drawerBtnLeftActive");  
    console.log('ye meri id he',this.id)
    // console.log(this.classList) 
    app.contentWindow.postMessage(this.id, '*');
    });
    });
    var drawerRightSide = document.querySelector('.drawerRightSide');
    var drawerLeftSide = document.querySelector('.drawerLeftSide');
window.onmessage = function(event) { 
    console.log(event.data);

    if(event.data == "DrawerOption"){
        // widthBtn1.addEventListener('click', function(){
            sidebar1.style.display = 'none'
            sidebar2.style.display = 'block'
            // trash.style.display = 'block'
        // }
        // )
    }
    
    else if(event.data == "mousedown" || event.data == "cpustand" || event.data == "Bookshelf"){
            sidebar1.style.display = 'block'
            sidebar2.style.display = 'none'
            console.log('app clicked')
            // trash.style.display = 'none'
    }
    else if(event.data == "cpustand" || event.data == "Bookshelf" || event.data == 'wirecap'){
        // trash.style.display = 'block'
    }
    // calculations for plus
    else if(event.data == 'DrawerRightLggaya'){
        drawerPriceRight = 100;
        // totalPrice+=drawerPriceRight;
        document.getElementById('furnitureAttachmentRight').innerHTML = 'Drawer';
        updatePrice()
        $("#totalCalculation").html( "$ "+ totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
       
    }
    else if(event.data == 'DrawerLeftLggaya'){
        drawerPriceLeft = 100
        // totalPrice+=drawerPriceLeft;
        document.getElementById('furnitureAttachmentLeft').innerHTML = 'Drawer';
        updatePrice()
        $("#totalCalculation").html( "$ "+ totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'computerRightlaggaya'){
        standPriceRight = 50
        // totalPrice+=standPriceRight;
        document.getElementById('furnitureAttachmentRight').innerHTML = 'Computer Stand';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'computerLeftlaggaya'){
        standPriceLeft = 50
        // totalPrice+=standPriceLeft;
        document.getElementById('furnitureAttachmentLeft').innerHTML = 'Computer Stand';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'bookshelfrightlgaya'){
        shelfPriceRight = 40
        // totalPrice+=shelfPriceRight;
        document.getElementById('furnitureAttachmentRight').innerHTML = 'Book Shelf';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'bookshelfleftgaya'){
        shelfPriceLeft = 40
        // totalPrice+=shelfPriceLeft;
        document.getElementById('furnitureAttachmentLeft').innerHTML = 'Book Shelf';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'WireCaprightlggaya'){
        capPriceRight = 20
        // totalPrice+=capPriceRight;
        document.getElementById('furnitureWireCap').innerHTML = 'Wire Cap Right, ';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'WireCapcenterlggaya'){
        capPriceCenter = 20
        // totalPrice+=capPriceCenter;
        document.getElementById('furnitureWireCap').append('Wire Cap Center, ');
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'WireCapleftlggaya'){
        capPriceLeft = 20
        // totalPrice+=capPriceLeft;
        document.getElementById('furnitureWireCap').append('Wire Cap Left, ');
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'roundpiller'){
        leg1 = 5;
        leg2=0;
        leg3=0
        document.getElementById('furnitureLegs').innerHTML = 'Round';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'fourpiller'){
        leg1 = 0;
        leg2=10;
        leg3=0
        document.getElementById('furnitureLegs').innerHTML = 'Four Piller';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'xpiller'){
        leg1 = 0;
        leg2=0;
        leg3=15
        document.getElementById('furnitureLegs').innerHTML = 'Cross';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    
    // calculations for minus / delete
    else if(event.data == 'Complete_DrawersRightdelete'){
        drawerPriceRight=0
        document.getElementById('furnitureAttachmentRight').innerHTML = '';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'Complete_Drawersleftdelete'){
        drawerPriceLeft=0
        updatePrice()
        document.getElementById('furnitureAttachmentLeft').innerHTML = '';
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'Side RackRightdelete'){
        // totalPrice-=50;
        standPriceRight = 0
        document.getElementById('furnitureAttachmentRight').innerHTML = '';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'Side Rackleftdelete'){
        // totalPrice-=50;
        standPriceLeft = 0
        document.getElementById('furnitureAttachmentLeft').innerHTML = '';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'Side Rack (Bookshelf)Rightdelete'){
        // totalPrice-=40;
        shelfPriceRight = 0;
        document.getElementById('furnitureAttachmentRight').innerHTML = '';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'Side Rack (Bookshelf)leftdelete'){
        // totalPrice-=40;
        shelfPriceLeft = 0;
        document.getElementById('furnitureAttachmentLeft').innerHTML = '';
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
    }
    else if(event.data == 'wirecaprightdelete'){
        capPriceRight = 0;
        document.getElementById('furnitureWireCap').replace('Wire Cap Right', '');
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
        
    }
    else if(event.data == 'wirecapcenterdelete'){
        capPriceCenter = 0;
        document.getElementById('furnitureWireCap').replace('Wire Cap Center', '');
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
        
    }
    else if(event.data == 'wirecapleftdelete'){
        capPriceLeft = 0;
        document.getElementById('furnitureWireCap').replace('Wire Cap Left', '');
        updatePrice()
        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
        
    }
    else if(event.data == 'DrawerRight'){
       drawerRightSide.style.display = 'grid'
       drawerLeftSide.style.display = 'none'
        
    }
    else if(event.data == 'DrawerLeft'){
       drawerRightSide.style.display = 'none'
       drawerLeftSide.style.display = 'grid'
        
    }
    
}

        $("#totalCalculation").html( "$ "+totalPrice);
        $("#furniturePrice").html("$ "+totalPrice);
var selectAttach = document.getElementById('selectAttach');
function myFunction() {
  var x = document.getElementById("mySelect").value;
//   document.getElementById("demo").innerHTML = ;
  console.log("You selected: " + x)
  app.contentWindow.postMessage(x, '*');
}
var myModal = document.getElementById('myModal');
myModal.addEventListener('click',()=>{
    // console.log(myModal)
    myModal.id = 'myModal2'
})
var pdfbutton = document.querySelector('.pdfbutton');
pdfbutton.addEventListener('click',()=>{
    console.log('pdfBtn clicked')
    app.contentWindow.postMessage('pdfBtn clicked', '*')
})