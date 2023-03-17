let pardotImages = document.querySelectorAll('[pardot-region-type="image"]');
let pardotLinks = document.querySelectorAll('[pardot-region-type="link"]');
let pardotHTML = document.querySelectorAll("[pardot-region-type=”html”]");

console.log("Running Pardot Region Highlighter!");

for (let i = 0; i < pardotImages.length; i++) {
  pardotImages[i].style.boxShadow = "0px 0px 0px 2px red";
}

for (let i = 0; i < pardotLinks.length; i++) {
  pardotLinks[i].style.backgroundColor = "lightBlue";
  pardotLinks[i].style.boxShadow = "0px 0px 0px 2px lightBlue";
}

for (let i = 0; i < pardotHTML.length; i++) {
  pardotHTML[i].style.boxShadow = "0px 0px 0px 2px green";
}
