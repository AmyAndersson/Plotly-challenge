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



// Barchart 
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

    var layout = {
      title: "Top 10 OTU's for Participant",
      xaxis: {title:"Sample Value"},
      yaxis: {title:"OTU ids"}
      }; 
    
    var data = [trace];
   
    Plotly.newPlot('bar', data, layout);

// bubble graph 

    var bubbletrace = {
      x: filt_sample.otu_ids,
      y: filt_sample.sample_values,
      mode: 'markers',
      marker: {
        size: filt_sample.sample_values,
        color: filt_sample.otu_ids
      },
      text: filt_sample.otu_ids.slice(0,10).map(otuids=> `OTU ${otuids}`)
    };
    
    var data2 = [bubbletrace];
    
    var layout2 = {
      title: "Participant's Total OTU's",
      showlegend: false,
      height: 600,
      width: 1000, 
      xaxis: {title:"OTU IDs"},
      yaxis: {title:"Sample values"}
      }
    
    Plotly.newPlot("bubble", data2, layout2);
    


// data table 

var metadata = importedData2.metadata; 

var filt_meta = metadata.filter(selmet=>selmet.id==selectedid)[0];

 var id = selectedid; 
 var ethnicity = filt_meta.ethnicity;
 var gender = filt_meta.gender;
 var age = filt_meta.age;
 var location = filt_meta.location;
 var bbtype = filt_meta.bbtype;
 var wfreq = filt_meta.wfreq;


    var infobox = d3.select("#sample-metadata");

    infobox.html("");

    var divid = infobox.append("div");
    divid.attr('value', id);
    divid.text(`ID: ${id}`);


    var diveth = infobox.append("div");
    diveth.attr('value', ethnicity);
    diveth.text(`Ethnicity: ${ethnicity}`);

    var divgen = infobox.append("div");
    divgen.attr('value', gender);
    divgen.text(`Gender: ${gender}`);

    var diveage = infobox.append("div");
    diveage.attr('value', age);
    diveage.text(`Age: ${age}`);

    var divloc = infobox.append("div");
    divloc.attr('value', location);
    divloc.text(`Location: ${location}`);

    var divb = infobox.append("div");
    divb.attr('value', bbtype);
    divb.text(`Bbtype: ${bbtype}`);

    var divw = infobox.append("div");
    divw.attr('value', wfreq);
    divw.text(`Wfreq: ${wfreq}`);

  

  
  // gauge chart 

  var tracegauge = {
      domain: { x: [0, 1], y: [0, 1] },
  value: wfreq,
  title: { text: "Wash Frequency" },
  type: "indicator",
      mode: "gauge+number",
      gauge: { axis: { range: [null, 9] } }

  };

  var data3 = [tracegauge];

  Plotly.newPlot('gauge', data3)

});
}