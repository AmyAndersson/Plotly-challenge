d3.json("samples.json").then((importedData) => {


    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.property("value");

    
  // // sample_ids = importedData.name;
  // sampleID = inmportedData.samples[0].id;
  // sample_values = importedData.samples[0].sample_values;
  // otu_ids = importedData.samples[0].otu_id;
  // otu_labels = importedData.samples[0].otu_labels;

  function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

  sample_values = unnpack(importedData.samples, 1);
  otu_ids = unnpack(importedData.samples, 0);
  otu_labels = unnpack(importedData.samples, 2);
 



  console.log(sample_ids);
  console.log(sample_values);
  console.log(otu_ids);
  console.log(otu_labels);


  var trace1 = {
        x: sample_values,
        y: otu_ids,
        type: "box",
        name: "OTU Samples",
        text: otu_labels,
      };
    
      // Create the data array for the plot
      var data = [trace1];
    
      // Define the plot layout
      var layout = {
        title: "OTU samples",
        xaxis: { title: "Otu_ids" },
        yaxis: { title: "Sample values" }
      };
    
      // Plot the chart to a div tag with id "plot"



      Plotly.newPlot("bar", data, layout);
    });

// for each id in names, add to the list of names. 


    // importedData.forEach((dropdownlist) => {
    //   var dropdownMenu = d3.select("#selDataset");
    //     var dropdownname = dropdownMenu.append("option");
    //       dropdownname.text();
    //     });



  // sample_values = unnpack(importedData.samples, 1);
  // otu_ids = unnpack(importedData.samples, 0);
  // otu_labels = unnpack(importedData.samples, 2);


