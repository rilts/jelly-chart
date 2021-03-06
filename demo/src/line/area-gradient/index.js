jelly.line().container('#jelly-container')
  .data([
    {category:'AAA', x: 1000, y: 10},{category:'AAA', x: 2000, y: 20},
    {category:'AAA', x: 3000, y: 30},{category:'AAA', x: 4000, y: 40},
    {category:'AAA', x: 1000, y: 50},{category:'AAA', x: 2000, y: 30},
    {category:'AAA', x: 3000, y: 40},{category:'AAA', x: 4000, y: 100},
    {category:'AAA', x: 5000, y: 40},{category:'AAA', x: 6000, y: 100},
    {category:'AAA', x: 7000, y: 40},{category:'AAA', x: 8000, y: 100},
    {category:'BBB', x: 1000, y: 80},{category:'BBB', x: 2000, y: 60},
    {category:'BBB', x: 3000, y: 50},{category:'BBB', x: 4000, y: 70},
    {category:'BBB', x: 1000, y: 20},{category:'BBB', x: 2000, y: 60},
    {category:'BBB', x: 3000, y: 50},{category:'BBB', x: 4000, y: 60},
    {category:'BBB', x: 5000, y: 50},{category:'BBB', x: 6000, y: 60},
    {category:'BBB', x: 7000, y: 50},{category:'BBB', x: 8000, y: 60},
    {category:'CCC', x: 1000, y: 25},{category:'CCC', x: 2000, y: 50},
    {category:'CCC', x: 3000, y: 80},{category:'CCC', x: 4000, y: 10},
    {category:'CCC', x: 1000, y: 40},{category:'CCC', x: 2000, y: 20},
    {category:'CCC', x: 3000, y: 40},{category:'CCC', x: 4000, y: 90},
    {category:'CCC', x: 5000, y: 40},{category:'CCC', x: 6000, y: 90},
    {category:'CCC', x: 7000, y: 40},{category:'CCC', x: 8000, y: 90},
  ]).dimensions([
    {
      field: 'x',
			order: 'ascending',
    }, {
      field: 'category',
      order: 'descending'
    }])
  .measures({field:'y', op:'mean'})
  .point(true)
  .shape('area').areaGradient(true)
  .axis('x').axis({"target":"y","titleOrient":"right"})
  .point(false)
  .legend(true)
  .zeroOffset(true)
  .margin({top:0, right:20, bottom: 50, left: 10})
  .multiTooltip({ sortByValue: 'descending' })
  .render();
