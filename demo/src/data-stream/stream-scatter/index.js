var scatter = jelly.scatter().container('#jelly-container')
  .data([
    {c: 'AAA', x: 20, y: 20, r: 5},{c: 'BBB', x: 10, y: 50, r: 50},
    {c: 'AAA', x: 10, y: 30, r: 20},{c: 'BBB', x: 15, y: 10, r: 10},
    {c: 'AAA', x: 30, y: 40, r: 30},{c: 'BBB', x: 25, y: 20, r: 20},
    {c: 'AAA', x: 40, y: 50, r: 40},{c: 'BBB', x: 35, y: 30, r: 30},
    {c: 'AAA', x: 50, y: 10, r: 50},{c: 'BBB', x: 45, y: 40, r: 40}
  ])
  .dimensions('c')
  .measures(['x', 'y'])
  .viewInterval(40)
  .axis('x').axis('y')
  .legend(true)
  .render();

var lastValue = 50;
var timer = setInterval(function() {
  lastValue += 10;
  scatter.stream([
    {c:'AAA', x: lastValue, y: Math.random() * 50},
    {c:'BBB', x: lastValue, y: Math.random() * 50}
  ]).render(true);
  if (lastValue > 100) clearInterval(timer);
}, 800);