var ctx = document.getElementById('myChart').getContext('2d');

  // Define your data and labels
  var data = {
    labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4'],
    datasets: [{
      label: 'Data Set',
      data: [10, 20, 30, 20], // Replace with your data values
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color for bars or points
      borderColor: 'rgba(75, 192, 192, 1)', // Border color
      borderWidth: 1 // Border width
    }]
  };

  // Create a chart
  var myChart = new Chart(ctx, {
    type: 'bar', // Specify the chart type (e.g., 'bar', 'line', 'pie')
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true // Start the y-axis at zero
        }
      }
    }
  });