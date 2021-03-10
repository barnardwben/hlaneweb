import React, { useEffect } from "react";
import * as d3 from "d3";

const Pie = (props) => {
  const { data, outerRadius, innerRadius } = props;

  const margin = {
    top: 50,
    right: 50,
    bottom: 0,
    left: 50,
  };

  const width = 1.2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  useEffect(() => {
    return drawChart();
  }, [data]);

  function drawChart() {
    const colorScale = d3
      .scaleOrdinal()
      .domain([data.length])
      .range(["#0A1045", "#AFDF2C", "#00C2D1"]);

    d3.select("#pie-container").select("svg").remove();

    const svg = d3
      .select("#pie-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);
    const arc = svg.selectAll().data(pieGenerator(data)).enter();

    // Append sectors
    arc
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", (_, i) => colorScale(i))
      .style("stroke", "#ffffff")
      .style("stroke-width", 0);
    // Append text labels
  }

  return <div id="pie-container" />;
};

export default Pie;
