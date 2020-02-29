function saveNumberHandler() {
  debugger;
  // read new number from user input
  let newInput = Number(document.getElementById("input").value);

  // read from state the data you will need for the next step
  let lastValues = ''; // I plan to read but I couldn't understand why I need??
  // find the new biggest and smallest values
  numbers.current = newInput;
  numbers.biggest = numbers.biggest > newInput ? numbers.biggest : newInput;
  numbers.smallest = numbers.smallest < newInput ? numbers.smallest : newInput;

  // update state: new biggest, new smallest, new current & save the last current
  numbers.all.push([numbers.current, numbers.biggest, numbers.smallest]);

  // re-render the user interface with values stored in state
  document.getElementById("biggest").innerHTML = numbers.biggest;
  document.getElementById("smallest").innerHTML = numbers.smallest;

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newInput,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
