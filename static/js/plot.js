// Preconditions on whole dataset
let trace1 = {
  x: ["Pain", "Haemoptysis", "Dyspnoea", "Cough",
    "Weakness", "Diabetes Typ2", "MI", "PAD", "Smoking", "Asthma"],
  y: [31, 68, 31, 323, 78, 35, 2, 8, 386, 2],
  type: "bar"
};

let data = [trace1];

let layout = {
  title: "Preconditions Found in All Patients",
  xaxis: {
    tickangle: -45
  },
};

Plotly.newPlot("plot1", data, layout);


// Preconditions on only surviving patients after 1 year
// let trace2 = {
//   x: ["Pain", "Haemoptysis", "Dyspnoea", "Cough",
//     "Weakness", "Diabetes Typ2", "MI", "PAD", "Smoking", "Asthma"],
//   y: [24, 54, 22, 268, 61, 25, 2, 6, 323, 2],
//   type: "bar"
// };
//
// let data2 = [trace2];
//
// let layout2 = {
//   title: "Preconditions Found in Surviving Patients After 1 year",
//   xaxis: {
//     tickangle: -45
//   },
// };
//
// Plotly.newPlot("plot2", data2, layout2);
//
// // Preconditions on patients who died after 1 year
// let trace3 = {
//   x: ["Pain", "Haemoptysis", "Dyspnoea", "Cough",
//     "Weakness", "Diabetes Typ2", "MI", "PAD", "Smoking", "Asthma"],
//   y: [7, 14, 9, 55, 17, 10, 0, 2, 63, 0],
//   type: "bar"
// };
//
// let data3 = [trace3];
//
// let layout3 = {
//   title: "Preconditions Found in Patients Who Did Not Survive After 1 Year",
//   xaxis: {
//     tickangle: -45
//   },
// };
//
// Plotly.newPlot("plot3", data3, layout3);

// Preconditions on grouped by surviving vs death after 1 Year
let trace4 = {
  x: ["Pain", "Haemoptysis", "Dyspnoea", "Cough",
    "Weakness", "Diabetes Typ2", "MI", "PAD", "Smoking", "Asthma"],
  y: [24, 54, 22, 268, 61, 25, 2, 6, 323, 2],
  text: ['6%', '14%', '5%', '67%', '15%', "6%", "1%", "2%", "81%", "1%" ],
  name: "Survived",
  type: "bar"
};

let trace5 = {
  x: ["Pain", "Haemoptysis", "Dyspnoea", "Cough",
    "Weakness", "Diabetes Typ2", "MI", "PAD", "Smoking", "Asthma"],
  y: [7, 14, 9, 55, 17, 10, 0, 2, 63, 0],
  text: ['10%', '20%', '13%', '79%', '24%', "14%", "0%", "3%", "90%", "0%" ],
  name: "Non-suriving",
  type: "bar"
};

let data4 = [trace4, trace5];

let layout4 = {
  title: "Preconditions Found in Surviving Patients Compared to Non-Surviving Patients",
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};

Plotly.newPlot("plot4", data4, layout4);

// DGN on grouped by surviving vs death after 1 Year
let trace6 = {
  x: ["DGN1", "DGN2", "DGN3", "DGN4", "DGN5", "DGN6", "DGN8"],
  y: [1, 40, 306, 40, 8, 4, 1],
  name: "Survived",
  type: "bar"
};

let trace7 = {
  x: ["DGN1", "DGN2", "DGN3", "DGN4", "DGN5", "DGN6", "DGN8"],
  y: [0, 12, 43, 7, 7, 0, 1],
  name: "Non-suriving",
  type: "bar"
};

let data5 = [trace6, trace7];

let layout5 = {
  title: "Diagnonis of IDC-10 codes for primary & secondary as well multiple tumors if any",
  barmode: 'group'
};

Plotly.newPlot("plot5", data5, layout5);

// Performance on grouped by surviving vs death after 1 Year
let trace8 = {
  x: ["PRZ0", "PRZ1", "PRZ2"],
  y: [116, 264, 20],
  name: "Survived",
  type: "bar"
};

let trace9 = {
  x: ["PRZ0", "PRZ1", "PRZ2"],
  y: [14, 49, 7],
  name: "Non-suriving",
  type: "bar"
};

let data6 = [trace8, trace9];

let layout6 = {
  title: "Performance on Zubrod Scale, Good(0) to Poor(2)",
  barmode: 'group'
};

Plotly.newPlot("plot6", data6, layout6);

// Tumor size on grouped by surviving vs death after 1 Year
let trace10 = {
  x: ["OC11", "OC12", "OC13", "OC14"],
  y: [159, 218, 13, 10],
  name: "Survived",
  type: "bar"
};

let trace11 = {
  x: ["OC11", "OC12", "OC13", "OC14"],
  y: [18, 39, 6, 7],
  name: "Non-suriving",
  type: "bar"
};

let data7 = [trace10, trace11];

let layout7 = {
  title: "Size of Original Tumor, 1: smallest to 4: largest",
  barmode: 'group'
};

Plotly.newPlot("plot7", data7, layout7);

// Multiple axis FVC FEC data
d3.csv("../Resources/Data/ThoracicSurgery.csv").then(function(thorData) {

  let fev1 = thorData.map(pre4 => pre4.PRE4)
  let fvc = thorData.map(pre5 => pre5.PRE5)
  let age = thorData.map(age => age.AGE)

  var trace12 = {
    x: age,
    y: fev1,
    mode: 'markers',
    type: 'scatter',
    name: 'FEV1',
    marker: { size: 5 }
  };

  var trace13 = {
    x: age,
    y: fvc,
    mode: 'markers',
    type: 'scatter',
    name: 'FVC',
    marker: { size: 5 }
  };

  var data8 = [ trace12, trace13 ];

  var layout8 = {
    xaxis: {
        range: [ 20, 90 ]
    },
    yaxis: {
        range: [ 0, 7 ]
    },
    title:'Age vs FEV1, FVC ',
    autosize: false,
    width: 1300,
    height: 800,
    margin: {
      l: 100,
      r: 100,
      b: 100,
      t: 100,
      pad: 4
    },
  };

  Plotly.newPlot('plot8', data8, layout8);

}).catch(error => console.log(error));
