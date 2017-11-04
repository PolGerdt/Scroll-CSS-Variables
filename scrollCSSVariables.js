/*
varParameters = [
  {elId: "", startScroll: 0, varName: "", outputFunc: function(){}, units: ""},
  ...
];
*/

function setScrollVariables(varParameters) {
  window.addEventListener('scroll', () => {
    let sy = window.scrollY;
    varParameters.forEach(varParameter => {
      let el = document.getElementById(varParameter.elId);
      let startScroll = el.offsetTop + varParameter.startScroll;
      if (sy > startScroll) {
        let varOutput = varParameter.outputFunc(sy - startScroll);
        el.style.setProperty("--" + varParameter.varName, varOutput + "" + varParameter.units);
      }
    });
  });
}

// ? startValue: 0, endValue: 0, endScroll: 0