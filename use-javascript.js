var inputs, index;
inputs = document.getElementsByTagName('input');
for (index = 0; index < inputs.length; ++index) {
  if(inputs[index].name == 'entry.1384696995') inputs[index].value = "Yes"
}
var buttons = document.getElementsByTagName('span');
    for(var i = 0; i < buttons.length; i++) {
    if(buttons[i].innerText == "Submit") buttons[i].click()
}
