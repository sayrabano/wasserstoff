import React, { useEffect, useRef } from 'react';
import { hexbin } from 'd3-hexbin';
import * as d3 from 'd3';

const MARGIN = { top: 10, right: 10, bottom: 20, left: 90 };
const BIN_SIZE = 2;

const HexabinMap = ({ width, height, data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current && data) {
      const boundsWidth = width - MARGIN.right - MARGIN.left;
      const boundsHeight = height - MARGIN.top - MARGIN.bottom;

      const yScale = d3.scaleLinear().domain([20, 70]).range([boundsHeight, 0]);
      const xScale = d3.scaleLinear().domain([-10, 100]).range([0, boundsWidth]);

      const hexbinGenerator = hexbin()
        .radius(BIN_SIZE)
        .extent([
          [0, 0],
          [boundsWidth, boundsHeight],
        ]);

      // Extract population values from data
      const populationValues = data.map((item) => item.population);
      console.log('Population Values:', populationValues);

      // Create a color scale based on population density
      const colorScale = d3.scaleLinear()
        .domain([0, d3.max(populationValues)])
        .range(['white', 'blue', 'gray', 'red']);

      try {
        const hexbinData = hexbinGenerator(
          data.map((item) => [xScale(item.lng), yScale(item.lat)])
        );

        d3.select(svgRef.current).selectAll('path').remove();

        d3.select(svgRef.current)
          .selectAll('path')
          .data(hexbinData)
          .enter()
          .append('path')
          .attr('d', (d) => hexbinGenerator.hexagon())
          .attr('transform', (d) => `translate(${d.x},${d.y})`)
          .attr('fill', (d) => {
            return colorScale(d.length);
          })
          .attr('stroke', '#8676FF')
          .attr('stroke-width', 0.3);
      } catch (error) {
        console.error('Error in hexbin generation:', error);
      }
    }
  }, [width, height, data]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default HexabinMap;
