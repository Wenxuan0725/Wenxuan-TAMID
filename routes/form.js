var express = require('express');
var router = express.Router();


function getRadioVal() {
      var form = document.getElementsById('myForm');
      var val;
      // get list of radio buttons with specified name
      var radios = form.elements["Radios"];

      // loop through list of radio buttons
      for (var i=0, len=radios.length; i<len; i++) {
          if ( radios[i].checked ) { // radio checked?
              val = radios[i].value; // if so, hold its value in val
              break; // and break out of for loop
          }
      }
      //alert(val);
      return val;
       // return value of checked radio or undefined if none checked
  }

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render(form);
});

render.post()
module.exports = router;
