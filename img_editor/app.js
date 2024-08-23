function log(x) {
  console.log(x);
}






const imgContainer = document.querySelector('.img-container');
const imgSubject   = document.querySelector('.img-subject');
const imgTextbox   = document.querySelector('.img-textbox');
const imgText      = document.querySelector('.img-text');

const downloadBtn  = document.querySelector('.button');
const downloadLink = document.querySelector('.download-link');

const imgTextScale   = 0.1;
let imgTextboxHeight = imgSubject.height * 0.15;

const imgSubjectNaturalHeight = imgSubject.naturalHeight;
const imgSubjectNaturalWidth  = imgSubject.naturalWidth;



imgTextboxStyles = `
  display        : flex;
  justify-content: center;
  align-items    : center;
  text-align     : center;
  font-size      : ${imgTextboxHeight * 0.24}px;

  position: relative;
  top     : -${imgTextboxHeight}px;
  height  :  ${imgTextboxHeight}px;
  width   : 100%;

  background: white;
  color     : black;
  `;

imgTextbox.style.cssText = imgTextboxStyles;


downloadBtn.addEventListener('click', imgDownloader());

function imgDownloader() {
 /* imgContainer.style.height = `${imgSubjectNaturalHeight}px`;
  let imgTextboxHeight = imgSubject.height * 0.15;
  imgTextbox.style.height = `${imgTextboxHeight}px`;
  imgTextbox.style.top = `-${imgTextboxHeight}px`
  imgTextbox.style.fontSize = `${imgTextboxHeight * 0.24}px`*/
  
  
  html2canvas(imgContainer, { allowTaint: true }).then((canvas) => {
    downloadLink.download = "mitarbeiterin.jpg";
    downloadLink.href = canvas.toDataURL();
    downloadLink.target = '_blank';
    //downloadLink.click();
  });
}


