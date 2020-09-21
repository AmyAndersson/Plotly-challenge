d3.json("samples.json").then((importedData) => {

    
  sample_ids = importedData.names;

  
  sample_ids.forEach(function(name) {
    var dropdownMenu = d3.select("#selDataset")
    var newoption = dropdownMenu.append("option");
    newoption.attr('value', name);
    newoption.text(name);

  });

 var chosenID = sample_ids[0];
  
 optionChanged(chosenID); 

});




function optionChanged(selectedid){
d3.json("samples.json").then((importedData2) => {

samples= importedData2.samples; 


  sampleID = samples[0].id;
  sample_values_all = samples[0].sample_values;
  sample_values_X = sample_values_all.slice(0,10);

  sample_values = sample_values_X.map((sam) => {
    return sam
  });

  console.log(sample_values_all);
  console.log(sample_values); 

  otu_ids_all = samples[0].otu_ids;
  otu_ids_X = otu_ids_all.slice(0,10);

  otu_ids =  otu_ids_X.map((ids) => {
    return ids
  });

  otu_labels_all = samples[0].otu_labels;
  otu_labels_X = otu_labels_all.slice(0,10);

  otu_labels =  otu_labels_X.map((lbl) => {
    return lbl
  });

// console.log(samples)

  console.log(sample_values);
  console.log(otu_ids);
  console.log(otu_labels);



// Baschart 
    var dropdownMenu = d3.select("#selDataset");
    var svalue = dropdownMenu.node().value;
    var filt_sample = samples.filter(sel=>sel.id==selectedid)[0];
    
   
   
    var trace = {
        x : filt_sample.sample_values.slice(0,10),
        y : filt_sample.otu_ids.slice(0,10).map(otuids=> `OTU ${otuids}`), 
        text : filt_sample.otu_labels.slice(0,10),
        type : 'bar',
        orientation : 'h'
    };
    
    var data = [trace]
   
    Plotly.newPlot('bar', data)


    var bubbletrace = {
      x: filt_sample.otu_ids,
      y: filt_sample.sample_values,
      mode: 'markers',
      marker: {
        size: filt_sample.sample_values,
        color: filt_sample.otu_ids
      }
    };
    
    var data2 = [bubbletrace];
    
    var layout = {
      title: 'Marker Size',
      showlegend: false,
      height: 600,
      width: 1000, 
      xaxis: {title:"OTU IDs"}
      }
    
    Plotly.newPlot("bubble", data2, layout)
    
});



};








  // var trace1 = {
  //       x: sample_values,
  //       y: otu_ids,
  //       type: "box",
  //       name: "OTU Samples",
  //       text: otu_labels,
  //       orientation: "h"

  //     };
    
    //   // Create the data array for the plot
    //   var data = [trace1];
    
    //   // Define the plot layout
    //   var layout = {
    //     title: "OTU samples",
    //     xaxis: { title: "Otu_ids" },
    //     yaxis: { title: "Sample values" }
    //   };

    //   Plotly.newPlot("bar", data, layout);
    // });
    
      // Plot the chart to a div tag with id "plot"

// trace1={
//   x:[1,2,3,4],
//   y: [5,6,7,8],
//   type: "box"

// };
// var data = [trace1];

// layout = {
//   title: "hello",
//   xaxis: {title : "hello1"},
//   yaxis : {title: 'hello2'}
// }


//       Plotly.newPlot("bar", data, layout);
//     });

// for each id in names, add to the list of names. 


    // importedData.forEach((dropdownlist) => {
    //   var dropdownMenu = d3.select("#selDataset");
    //     var dropdownname = dropdownMenu.append("option");
    //       dropdownname.text();
    //     });



  // sample_values = unnpack(importedData.samples, 1);
  // otu_ids = unnpack(importedData.samples, 0);
  // otu_labels = unnpack(importedData.samples, 2)
