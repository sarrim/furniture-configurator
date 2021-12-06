<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Furniture Configurator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
    <!-- Tooltip -->
    <link rel="icon" href="http://arashm.net/lab/simptip/favicon.ico" sizes="32x32">  
    <link rel="stylesheet" type="text/css" href="simptip-mini.css" media="screen,projection" />
    
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
   <div>
     <a class="navbar-brand" href="#">Furniture Configurator</a>
   </div>
   <div>
    <i class="fa fa-shopping-cart cart" style="font-size: 48px;
    color: #343a40;
    margin-right: 80px;"></i>
   </div>
   
    </nav>
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <!--<h4 class="modal-title">Modal title</h4>-->
      </div>
      <div class="modal-body">
        <p>
            
            Click on light blue selector to attach items
        </p>
      </div>
      <!--<div class="modal-footer">-->
      <!--  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>-->
      <!--  <button type="button" class="btn btn-primary">Save changes</button>-->
      <!--</div>-->
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
    <div class="containerMain ">
       
        <div class="mainbody">
          <div>
            <img src="./bin.png" alt="" width="80" class="trash">
          </div>
          <iframe class="iframeDiv" id="app" src="https://playcanv.as/e/p/XUp9lc5W/" width="100%" height="100%" frameborder="0"></iframe>
          <div class="iframeBtns">            
              <div class="iframeBtnDiv">
                <span id="fullScreenBtn" class="simptip-position-right screenBtns" data-tooltip="Fullscreen">                                
                  position right
                </span>
                </div>
              <div class="iframeBtnDiv">
                <span id="exitFullScreenBtn" class="simptip-position-right screenBtns" data-tooltip="Exit Fullscreen">                                
                  position right
                </span>
            
              </div>
              <div class="iframeBtnDiv">
                <span id="scale" class="simptip-position-right" data-tooltip="Scale" width="35" height="35">                                
                  position right
                </span>
          </div>
        </div>
        </div>
        <div class="sidebar sidebar1">
          <div class="pdfDiv"> 
        <!--  <button class="learn-more pdfbutton">-->
        <!--  <span aria-hidden="true" class="circle">-->
        <!--  <span class="icon arrow"></span>-->
        <!--  </span>-->
        <!--  <span class="button-text">Generate PDF</span>-->
        <!--</button>-->
        
        <button class="c-button c-button--gooey pdfbutton" id="generatePDF"> Generate PDF
          <div class="c-button__blobs">
          <div></div>
          <div></div>
          <div></div>
          </div>
        </button>
        <svg style="display: block; height: 0; width: 0;" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
              <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
              <feBlend in2="goo" in="SourceGraphic"></feBlend>
            </filter>
          </defs>
        </svg>
        
          </div>  
          
                <div class="accordionStart">
                  <div class="accordion" id="exampleAccordion">
                    <div class="card">
                      <div class="card-header" id="exItem1Header">
                        
                        <button class="btn btn-link btnHeadings" type="button" data-toggle="collapse" data-target="#exItem1" aria-expanded="true" aria-controls="exItem1">Size

                        </button>
                      </div>
                      <div id="exItem1" class="collapse show" aria-labelledby="exItem1Header" data-parent="#exampleAccordion">
                        <div class="card-body">
                        <p style="margin-bottom: 1rem !important;">Fixed Width</p>
                        <button type="button" class="btn btn-light widthBtns 50" id="widthBtn1">50 inch</button>
                        <button type="button" class="btn btn-light widthBtns 60 widthBtnActive" id="widthBtn2">60 inch</button>
                        <button type="button" class="btn btn-light widthBtns 70" id="widthBtn3">70 inch</button>
                        <button type="button" class="btn btn-light widthBtns 80" id="widthBtn4">80 inch</button>
                        </div>
                        <!--  -->
                        <!-- <div class="customInput-wrap">
                          <p>Custom Width</p>
                          <input type="range" id="rangeMeter" class="progress-bar-striped bg-dark" name="rangeInput" min="140" max="200" onchange="customRange();" value="140" />
                          <output id="rangeValue">140</output>
                        </div> -->
                        <!--  -->
                      </div>
                      
                    </div>
                
                    <div class="card">
                      <div class="card-header" id="exItem2Header">
                          <button class="btn btn-link btnHeadings" type="button" data-toggle="collapse" data-target="#exItem2" aria-expanded="true" aria-controls="exItem2">Attachments</button>
                      </div>
                      <div id="exItem2" class="collapse" aria-labelledby="exItem2Header" data-parent="#exampleAccordion">
                        <div class="card-body">
                          <div class="row attachBtnsRow">
                        <div style="position: relative;">
                          <img src="./fiveDraw.png" class="btn btn-dark2 attachBtns 100 drawerBtn" id="defaultDrawerBtn" data-toggle="modal" data-target="#myModal"/>
                          <span class="defDrawerSpan">Drawer</span>
                          </div>
                          <div style="position: relative;">
                          <img src="./compStand.png" class="btn btn-dark2 attachBtns 50 otherAttachBtns standBtn" id="computerStandBtn" data-toggle="modal" data-target="#myModal">
                          <span class="compStandSpan">Computer Stand</span>
                          </div>
                          <div style="position: relative">
                          <img src="bookShelf.png" class="btn btn-dark2 attachBtns 40 otherAttachBtns shelfBtn" id="bookShelfBtn" data-toggle="modal" data-target="#myModal">
                          <span class="bookShelfSpan">Book Shelf</span>
                          </div>
                          <!-- <img src="./fourDraw.png" class="btn btn-dark2 attachBtns 80 drawerBtns drawerBtn" id="fourDrawerBtn">
                          <img src="./threeDraw.png" class="btn btn-dark2 attachBtns 60 drawerBtns drawerBtn " id="threeDrawerBtn" >
                          <img src="./twoDraw.png" class="btn btn-dark2 attachBtns 60 drawerBtns drawerBtn " id="twoDrawerBtn" > -->

                        </div>
                          <div class="row attachBtnsRow">
                          
                          <!--<img src="./screen.png" class="btn btn-dark2 attachBtns 50 screenBtn " id="tableScreenBtn">-->
                          <div style="position: relative">
                          <img src="./wire.png" class="btn btn-dark2 attachBtns 20 otherAttachBtns capBtn" id="wireCapsBtn" data-toggle="modal" data-target="#myModal">    
                          <span class="wireCapSpan">Wire Caps</span>
                          </div>
                        </div>
                            <div class="row" style="display: grid;
                            grid-template-columns: 1fr !important;
                            width: 95%;
                            margin: 0 auto;">
                                <p style="font-weight: 600;">TYPE OF LEGS</p>
                          <select name="" id="mySelect" onchange="myFunction()">
                            <option value="fixed">Fixed </option>
                            <option value="fixedLight">Fixed Light</option>
                            <option value="crossLeg">Cross Leg</option>

                          </select>

                        </div>
                          <!-- <div class="row attachBtnsRow">
                          </div> -->
                          <!-- <div class="row attachBtnsRow">
                         
                          </div> -->
                        </div>
                      </div>
                    </div>
                
                    <div class="card">
                      <div class="card-header" id="exItem3Header">
                          <button class="btn btn-link collapsed btnHeadings" type="button" data-toggle="collapse" data-target="#exItem3" aria-expanded="false" aria-controls="exItem3" id="colorTab">Color</button>
                      </div>
                      <div id="exItem3" class="collapse" aria-labelledby="exItem3Header" data-parent="#exampleAccordion">
                        <div class="card-body">
                          <!--<p>Piller Color</p>-->
                          <div class="row colorsRow1 colorsRow">
                            <!--<div class="row1Col1 colors colorRow1 10" id="pillerColor1">    -->
                            <!--  <img class="tickMark  tickRow1" id="tick1" src="/tick.svg" alt="">                          -->
                            <!--</div>-->
                            <!-- <div class="row1Col2 colors colorRow1" id="pillerColor2">
                              <img class="tickMark  tickRow1" id="tick2" src="/tick.svg" alt="">                              
                            </div>
                            <div class="row1Col3 colors colorRow1" id="pillerColor3">
                              <img class="tickMark  tickRow1" id="tick3" src="/tick.svg" alt="">                              
                            </div>
                            <div class="row1Col4 colors colorRow1" id="pillerColor4">
                              <img class="tickMark  tickRow1" id="tick4" src="/tick.svg" alt=""> 
                            </div>
                            <div class="row1Col5 colors colorRow1" id="pillerColor5">
                              <img class="tickMark  tickRow1" id="tick5" src="/tick.svg" alt="">                              
                            </div> -->
                          </div>
                        <!--  -->
                        <p>Table Front Color</p>
                        <div class="row colorsRow2 colorsRow">
                          <div class="row2Col1 colors colorRow2 15" id="tableFrontColor1">
                            <img class="tickMark tickmarkActive" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row2Col2 colors colorRow2 15" id="tableFrontColor2">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row2Col3 colors colorRow2 15" id="tableFrontColor3">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row2Col4 colors colorRow2 15" id="tableFrontColor4">
                            <img class="tickMark" src="/tick.svg" alt=""> 
                          </div>
                          <!-- <div class="row2Col5 colors colorRow2" id="tableFrontColor5">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div> -->
                        </div>
                        <!--  -->
                        
                        <!--  -->
                        <p class="colorsRow5 d-none">Screen Color</p>
                         <div class="row colorsRow5 d-none colorsRow">
                          <div class="row5Col1 colors colorRow5 20" id="screencolor1">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row5Col2 colors colorRow5 20" id="screencolor2">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row5Col3 colors colorRow5 20" id="screencolor3">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row5Col4 colors colorRow5 20" id="screencolor4">
                            <img class="tickMark" src="/tick.svg" alt=""> 
                          </div>
                          <div class="row5Col5 colors colorRow5 20" id="screencolor5">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                        </div>
                        <!--  -->
                        </div>
                      </div>
                    </div>
                    <!--  -->
                    
                    <!-- <br>
                    <p class="card" style="margin-left: 31px; font-size: inherit;"><strong>Total: </strong><span style="margin-left: 35px;" id="totalCalculation"></span></p> -->
                  </div>
                </div>
                <div class="card cardTotal">
                  <div class="card-header" id="exItem4Header">
                      <button class="btn btn-link collapsed btnHeadings totalBtn" type="button"data-target="#exItem4" id="colorTab">Total</button>
                  </div>
                  <div id="exItem4" aria-labelledby="exItem4Header" data-parent="#exampleAccordion">
                    <div class="card-body">
                      <span style="font-weight:bold" id="totalCalculation"></span>
                    </div>
                  </div>
                </div>
        </div>
        <div class="sidebar sidebar2">
          <div> 
          <!-- <img  class="logo" src="logo.png" alt="customizer"> -->
          <!-- <p class="logoText">Furniture Customization</p> -->
          </div>  
          
                <div class="accordionStart">
                  <div class="accordion">
                    <div class="card">
                      <div class="card-header">
                        
                        <button class="btn btn-link btnHeadings" type="button">Drawers
                        </button>
                      </div>
                      <div>
                        <div class="drawerDiv drawerRightSide" >
                        <button type="button" class="btn btn-light 50 drawerBtnsRight" id="drawer2">2</button>
                        <button type="button" class="btn btn-light 60 drawerBtnsRight" id="drawer3">3</button>
                        <button type="button" class="btn btn-light 70 drawerBtnsRight drawerBtnRightActive" id="drawer4">4</button>
                        <button type="button" class="btn btn-light 80 drawerBtnsRight" id="drawer5">5</button>
                        </div>
                        <div class="drawerDiv drawerLeftSide">
                        <button type="button" class="btn btn-light 50 drawerBtnsLeft" id="drawer2">2</button>
                        <button type="button" class="btn btn-light 60 drawerBtnsLeft" id="drawer3">3</button>
                        <button type="button" class="btn btn-light 70 drawerBtnsLeft drawerBtnLeftActive" id="drawer4">4</button>
                        <button type="button" class="btn btn-light 80 drawerBtnsLeft" id="drawer5">5</button>
                        </div>
                        <p class="drawerColor">Drawer Color</p>
                        <div class="row colorsRow drawerRow">
                          <div class="row3Col1 colors colorRow3 20" id="drawercolor1">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row3Col2 colors colorRow3 20" id="drawercolor2">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row3Col3 colors colorRow3 20" id="drawercolor3">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row3Col4 colors colorRow3 20" id="drawercolor4">
                            <img class="tickMark" src="/tick.svg" alt=""> 
                          </div>
                          <div class="row3Col5 colors colorRow3 20" id="drawercolor5">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                        </div>
                        <!--  -->
                        <p class="drawerColor">Drawer Front Color</p>
                        <div class="row colorsRow drawerRow">
                          <div class="row4Col1 colors colorRow4 25" id="Drawerfrontcolor1">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row4Col2 colors colorRow4 25" id="Drawerfrontcolor2">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row4Col3 colors colorRow4 25" id="Drawerfrontcolor3">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                          <div class="row4Col4 colors colorRow4 25" id="Drawerfrontcolor4">
                            <img class="tickMark" src="/tick.svg" alt=""> 
                          </div>
                          <div class="row4Col5 colors colorRow4 25" id="Drawerfrontcolor5">
                            <img class="tickMark" src="/tick.svg" alt="">                              
                          </div>
                        </div>
                        <!--  -->
                        <!-- <div class="customInput-wrap">
                          <p>Custom Width</p>
                          <input type="range" id="rangeMeter" class="progress-bar-striped bg-dark" name="rangeInput" min="140" max="200" onchange="customRange();" value="140" />
                          <output id="rangeValue">140</output>
                        </div> -->
                        <!--  -->
                      </div>
                      
                    </div>
                
                    
                    <!--  -->
                    
                    <!-- <br>
                    <p class="card" style="margin-left: 31px; font-size: inherit;"><strong>Total: </strong><span style="margin-left: 35px;" id="totalCalculation"></span></p> -->
                  </div>
                </div>
              
        </div>
    </div>

    <div style="display: none;" id="pdfDiv">
      <p>Image One:</p>
      <img style="width:80%" id="img1" alt="img1">
      <br>
      <p>Image Two:</p>
      <img style="width:80%" id="img2" alt="img2">
      <br>
      <p>Image Three:</p>
      <img style="width:80%" id="img3" alt="img3">
    </div>
    
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
<script src="progress.js"></script>
<script src="pdfScript.js"></script>
<script src="html2pdf.js"></script>
</body>
</html>

<script>
//   const img1 = document.querySelector("#img1");
//   const img2 = document.querySelector("#img2");
//   const img3 = document.querySelector("#img3");
// window.onmessage = (event) => {

// if(event.data.substring(0,6)=='image1'){
//   var str1 = event.data.replace('image1','');
//   // img1.setAttribute('src', str1);
//   img1.setAttribute('src', str1);
// //   console.log(str1);
// }
// else if(event.data.substring(0,6)=='image2'){
//   // console.log('image 2 arahi');
//   var str2 = event.data.replace('image2','');
//   img2.setAttribute('src', str2);
// //   console.log(str2);
// }
// else if(event.data.substring(0,6)=='image3'){
//   // console.log('image 3 arahi');
//   var str3 = event.data.replace('image3','');
// //   console.log(str3);
//   img3.setAttribute('src', str3);
// }
//    if (event.data.substring(0,14)=='app:image1') {
//     let baseImg = event.data.replace('app:image1','test');
//     console.log(baseImg);
//     }

// Choose the element that our invoice is rendered in.
// Choose the element and save the PDF for our user.
// element.style.display = 'none';

// };
</script>