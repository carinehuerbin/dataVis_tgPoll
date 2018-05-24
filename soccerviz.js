createSoccerViz();

function createSoccerViz() {
  d3.csv("data/Eidg_Abstimmungen_2000_2017_Kanton_inkl_Themen.csv", data =>
  {overallTeamViz(data)})

  function overallTeamViz(incomingData) {
    d3.select("#tree")
      .append("g")
      .attr("id", "teamsG")
      .attr("transform", "translate(50,300)")
      .selectAll("g")
      .data(incomingData)
      .enter()
      .append("g")
      .attr("class", "overallG")
      .attr("transform", (d, i) =>"translate(" + (i * 50) + ", 0)")

    var teamG = d3.selectAll("g.overallG");
    teamG
    .append("circle")
    .attr("r", 20)
    teamG
    .append("text")
    .attr("y", 30)
    .text(d => d.team)


  }
}