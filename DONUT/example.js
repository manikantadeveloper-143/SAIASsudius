var data = [2,10,8,10,14,20,10];
let allColor = ['#e40303','#ff8c00', '#ffed00', '#008026','#004dff','#750787','#947556'];
function main() {
     // d3 code goes here
     document.body.innerHTML = `<svg width = "1000" height="500" ></svg>`;
     change();
     let city = ["Delhi","Mumbai","Kolkata","Chennai","Pune","Bengaluru","Hyderabad"]
     var svg = d3.select("svg"),
     width = svg.attr('width'),
     height = svg.attr('height'),
     radius = Math.min(width, height) / 2
     
     var g = svg.append('g')
          .attr('transform', 'translate('+ width / 2 + ',' + height / 2+ ')');
     var color = d3.scaleOrdinal(allColor)
     var pie = d3.pie();
     var arc = d3.arc()
               .innerRadius(180)
               .outerRadius(radius);
     var arcs = g.selectAll('arc')
               .data(pie(data))
               .enter()
               .append('g')
               .attr('class','arc')
               //Append the month names to each slice
     
     arcs.append('path')
          .attr('fill',function(d, i){
               return color(i)
          })
          .attr('d', arc);

}

function change () {
     for(let i = 0 ; i < data.length; i++) {
          data[i] = Math.trunc(Math.random() * 10000);
          allColor[i] =  `rgb(${Math.trunc(Math.random() * 100 + 80)},${Math.trunc(Math.random() * 100 + 48)},${Math.trunc(Math.random() * 100 + 100)})`;
     }
}