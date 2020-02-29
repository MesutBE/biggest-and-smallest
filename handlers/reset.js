function resetHandler() {
  debugger;
  // reset state to initial values
  numbers.current = numbersInit.current;
  numbers.biggest = numbersInit.biggest;
  numbers.smallest = numbersInit.smallest;
  numbers.all = numbersInit.all;

  // re-render UI with values saved in state
  document.getElementById("input").value = numbers.current;
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;

  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    numbers: JSON.parse(JSON.stringify(numbers))
  })

}
