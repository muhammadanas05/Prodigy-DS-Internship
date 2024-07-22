// script.js
import * as d3 from 'd3-array';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

// Load the data from Task_01.ipynb
fetch('Task_01_data.json')
  .then(response => response.json())
  .then(data => {
    // Create the country chart
    const countryChart = d3.select('#country-chart');
    const countryData = data.population_2020;
    const countryXScale = d3Scale.scaleBand()
      .domain(countryData.map(d => d.Country))
      .range([0, countryChart.node().getBoundingClientRect().width])
      .padding(0.2);
    const countryYScale = d3Scale.scaleLinear()
      .domain([0, d3.max(countryData, d => d.Population)])
      .range([countryChart.node().getBoundingClientRect().height, 0]);
    countryChart.selectAll('rect')
      .data(countryData)
      .enter()
      .append('rect')
      .attr('x', d => countryXScale(d.Country))
      .attr('y', d => countryYScale(d.Population))
      .attr('width', countryXScale.bandwidth())
      .attr('height', d => countryChart.node().getBoundingClientRect().height - countryYScale(d.Population));
    countryChart.append('g')
      .attr('transform', `translate(0, ${countryChart.node().getBoundingClientRect().height})`)
      .call(d3Axis.axisBottom(countryXScale));
    countryChart.append('g')
      .call(d3Axis.axisLeft(countryYScale));

    // Create the age chart
    const ageChart = d3.select('#age-chart');
    const ageData = data.age_data;
    const ageXScale = d3Scale.scaleBand()
      .domain(ageData.map(d => d.Age_Group))
      .range([0, ageChart.node().getBoundingClientRect().width])
      .padding(0.2);
    const ageYScale = d3Scale.scaleLinear()
      .domain([0, d3.max(ageData, d => d.Population)])
      .range([ageChart.node().getBoundingClientRect().height, 0]);
    ageChart.selectAll('rect')
      .data(ageData)
      .enter()
      .append('rect')
      .attr('x', d => ageXScale(d.Age_Group))
      .attr('y', d => ageYScale(d.Population))
      .attr('width', ageXScale.bandwidth())
      .attr('height', d => ageChart.node().getBoundingClientRect().height - ageYScale(d.Population));
    ageChart.append('g')
      .attr('transform', `translate(0, ${ageChart.node().getBoundingClientRect().height})`)
      .call(d3Axis.axisBottom(ageXScale));
    ageChart.append('g')
      .call(d3Axis.axisLeft(ageYScale));
  });