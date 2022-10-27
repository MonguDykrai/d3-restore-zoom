import React, { useEffect, useRef } from 'react';
const d3 = require('d3');

const Graph = () => {
  const svg = useRef();
  const g = useRef();
  const zoom = useRef();
  useEffect(() => {
    svg.current = d3.select('#graph').append('svg');
    g.current = svg.current.append('g');
    zoom.current = d3
      .zoom()
      .scaleExtent([1, 2])
      .on('zoom', (event) => g.current.attr('transform', event.transform));
    svg.current.call(zoom.current);

    svg.current
      .append('circle')
      .attr('cx', 300)
      .attr('cy', 300)
      .attr('r', 40)
      .style('fill', '#68b2a1')
      .on('click', (event) => {
        // PointerEvent {"isTrusted":true}
        console.log(event);
      });
  }, []);

  // reset zoom
  const restore = () => {
    svg.current
      .transition()
      .duration(750)
      .call(zoom.current.transform, d3.zoomIdentity);
  };
  return <div id="graph" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default Graph;
