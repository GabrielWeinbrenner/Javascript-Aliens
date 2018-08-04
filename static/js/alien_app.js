// YOUR CODE HERE!

// Assign the data from `data.js` to a descriptive variable
var aliens = data;

// Select the submit button
var submit = d3.select('#filter-btn');

// Complete the click handler for the form
submit.on("click", function () {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  let inputDate = d3.select("#datetime").property('value');
  let inputState = d3.select("#state").property('value');

  // Use the form input to filter the data by date and state
  let filteredData = aliens.filter(aliens => aliens.datetime == inputDate && aliens.state == inputState);
console.log(inputState);

// Finally, add the summary info to the `td` tag
var tbody = d3.select("tbody");
filteredData.forEach(function (UFOInfo) {

  var row = tbody.append("tr");
  Object.entries(UFOInfo).forEach(function ([key, value]) {
    //     // Append a cell to the row for each value
    var cell = tbody.append("td");
    cell.text(value);
  });
});
});