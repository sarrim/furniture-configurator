// alert('test');
pdfBtn = document.querySelector("#generatePDF");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");

if(pdfBtn){

    pdfBtn.addEventListener('click',()=>{
        // alert('test');
        // takeshot();
        generatePDF()
    })
}

function generatePDF() {

    window.onmessage = (event) => {

        if(event.data.substring(0,6)=='image1'){
          var str1 = event.data.replace('image1','');
          img1.setAttribute('src', str1);
        //   console.log(str1);
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
        }
      //    if (event.data.substring(0,14)=='app:image1') {
      //     let baseImg = event.data.replace('app:image1','test');
      //     console.log(baseImg);
      //     }
      
      // Choose the element that our invoice is rendered in.
      // Choose the element and save the PDF for our user.
      // element.style.display = 'none';

      var element = document.getElementById('pdfDiv');
      element.style.display = 'block';
      html2pdf().from(element).save();
      
    };


}