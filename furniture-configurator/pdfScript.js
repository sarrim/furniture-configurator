// alert('test');
pdfBtn = document.querySelector("#generatePDF");



if(pdfBtn){

    pdfBtn.addEventListener('click',()=>{
        // alert('test');
        // takeshot();
        generatePDF()
    })
}

function generatePDF() {
  var img1 = document.querySelector("#img1");
  console.log()
  var img2 = document.querySelector("#img2");
  var img3 = document.querySelector("#img3");
    window.onmessage = (event) => {

        console.log(event.data);
        if(event.data.substring(0,6)=='image1'){

          str1 = event.data.replace('image1','');
          img1.setAttribute('src', str1);
          console.log(img1);
        }
        else if(event.data.substring(0,6)=='image2'){
          // console.log('image 2 arahi');
          var str2 = event.data.replace('image2','');
          img2.setAttribute('src', str2);
        //   console.log(str2);
        }
        else if(event.data.substring(0,6)=='image3'){
          // console.log('image 3 arahi');
          var str3 = event.data.replace('image3','');
        //   console.log(str3);
          img3.setAttribute('src', str3);
          setTimeout(function(){
            var element = document.getElementById('pdfDiv');
            var clonedElement = element.cloneNode(true);
            // document.body.style.opacity = 0.5;
            clonedElement.style.display = 'block';
            html2pdf().from(clonedElement).save();
            
          }, 1000);

          clonedElement.remove();
          
        }
        // location.reload();
        
        //    if (event.data.substring(0,14)=='app:image1') {
      //     let baseImg = event.data.replace('app:image1','test');
      //     console.log(baseImg);
      //     }
      
      // Choose the element that our invoice is rendered in.
      // Choose the element and save the PDF for our user.
      // element.style.display = 'none';
     
    }

    //     
    reload()

    
  }
  
  function reload(){
    setTimeout(function (){
      location.reload();
    }, 6000);
  }
  // document.getElementById("req").innerHTML = '';

function hideDiv(){
  setTimeout(function(){ 
    var element = document.getElementById('pdfDiv');
    element.style.visibility = 'hidden';
    element.style.overflow = 'none';
    element.style.display = 'none';
    // html2pdf().from(element).save();
    
  }, 500);    
}

// console.log("ye he ", element)
// element.style.display = 'none'

// console.log('yes ')
// console.log(pdfbutton)
// var pdfbutton = document.querySelectorAll('.pdfbutton');
// var pdfDiv1 = document.querySelector('.pdfDiv1');
// var pdfDiv = document.querySelector('.pdfDiv');
// pdfbutton.forEach((item)=>{
//   item.addEventListener('click',()=>{
//     console.log("acha")
//     generatePDF()
//     // pdfDiv.style.display = 'none'
//     pdfDiv.setProperty("display", "none", "important");
//   })
// })