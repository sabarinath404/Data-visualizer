// const data = [
//   { year: 2010, count: 10 },
//   { year: 2011, count: 20 },
//   { year: 2012, count: 15 },
//   { year: 2013, count: 25 },
//   { year: 2014, count: 22 },
//   { year: 2015, count: 11 },
//   { year: 2016, count: 28 },
// ];

// const colors = [
//   'rgba(255, 99, 132, 0.5)',
//   'rgba(54, 162, 235, 0.5)',
//   'rgba(255, 206, 86, 0.5)',
//   'rgba(75, 192, 192, 0.5)',
//   'rgba(153, 102, 255, 0.5)',
//   'rgba(255, 159, 64, 0.5)',
//   'rgba(0, 128, 0, 0.5)'
// ];

// (function() {
//   new Chart(
//     document.getElementById('acquisitions'),
//     {
//       type: 'pie',
//       data: {
//         labels: data.map(row => row.year),
//         datasets: [
//           {
//             label: 'Acquisitions by year',
//             data: data.map(row => row.count),
//             backgroundColor: colors.slice(0, data.length) // Use a subset of colors based on the number of data points
//           }
//         ]
//       }
//     }
//   );
// })();

// (async function() {
//   try {
//     const response = await fetch('/');
//     if (!response.ok) {
//       throw new Error('Error occurred while fetching data');
//     }
//     const data = await response.json();

//     // Use the retrieved data to render the chart
//     new Chart(
//       document.getElementById('acquisitions'),
//       {
//         type: 'pie',
//         data: {
//           labels: data.map(row => row.year),
//           datasets: [
//             {
//               label: 'Acquisitions by year',
//               data: data.map(row => row.count),
//               backgroundColor: colors.slice(0, data.length)
//             }
//           ]
//         }
//       }
//     );
//   } catch (error) {
//     console.error('Error occurred:', error);
//   }
// })();


