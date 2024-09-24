function log(x) {
  console.log(x);
}


const imgContainer = document.querySelector('.img-container');
const imgSubject   = document.querySelector('.img-subject');
const imgTextbox   = document.querySelector('.img-textbox');
const imgText      = document.querySelector('.img-text');

const downloadBtn  = document.querySelector('.button');
const downloadLink = document.querySelector('.download-link');




const imgSubjectNaturalHeight = imgSubject.naturalHeight;
const imgSubjectNaturalWidth  = imgSubject.naturalWidth;

imgContainer.style.height = 1200 + 'px';
//imgContainer.style.height = imgSubjectNaturalHeight + 'px';

const imgTextScale     = 0.1;
const imgTextboxHeight = imgSubject.height * 0.15;

imgTextboxStyles = `
  display        : flex;
  justify-content: center;
  align-items    : center;
  text-align     : center;
  font-size      : ${imgTextboxHeight * 0.24}px;
  line-height    : 3rem;

  position: relative;
  top     : -${imgTextboxHeight}px;
  height  :  ${imgTextboxHeight}px;
  width   :  899px;

  background: white;
  color     : black;
  `;

imgTextbox.style.cssText = imgTextboxStyles;


downloadBtn.addEventListener('click', imgDownloader());

function imgDownloader() {
  
  html2canvas(imgContainer, { allowTaint: true }).then((canvas) => {
    downloadLink.download = "mitarbeiterin.jpg";
    downloadLink.href = canvas.toDataURL();
    downloadLink.target = '_blank';
    //downloadLink.click();
  });
}


