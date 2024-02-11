import './App.css';
import * as d3 from 'd3'


function App() {
  function update(data) {
    d3.select('#content tbody')
      .selectAll('tr')
      .data(data)
      .join('tr')
      .html(function(d) {
        let html = '<tr>';
        html += '<td>' + d.Gender + '</td>';
        html += '<td>' + d.Married + '</td>';
        html += '<td>' + d.Dependents + '</td>';
        html += '<td>' + d.Education + '</td>';
        html += '</tr>';
        return html;
      });
  }
    d3.csv('https://docs.google.com/spreadsheets/d/e/2PACX-1vQW061NYWMorsgLroQ1uZKaYoJoYpivCWQfeV-DJiwFXjmVqlfGcNsZecJ0oJPv8hHT8wZ6FqcF8ssS/pub?gid=597311038&single=true&output=csv')
	    .then(function(data) {
	    	update(data);
	    });
  return (
    <div id="content" class="text-sm font-sans p-2 border-b-1">
      <table>
	    <thead class="font-bold">
	      <td>Gender</td><td>Married</td><td>Dependents</td><td>Education</td>
	    </thead>
	    <tbody>
	    </tbody>
      </table>
    </div>
  );
}

export default App;
