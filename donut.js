
function draw_donut() {
  // base donut
  var draw = SVG('drawing').size(400,450);
  var circle = draw.circle(200);
  circle.move(80,60);
  circle.stroke({ color: yum_donuts(), width: 120 });
  draw_frosting(draw);
  draw_midhole(draw);
}

function draw_frosting(drawobj) {
  var frosting = drawobj.path('M283.4,124c-11.9-12.3-17.5-28.6-26.6-42.7C246.8,65.5,216.8,71,201.6,63   	c-16.1-8.4-26.1-25.8-46.7-22.5c-22.1,3.5-36,23.8-54.3,34.5c-8.8,5.2-18.4,8.9-26.2,15.7C57.6,105.2,46.5,129,48,153.4   	c1,17.4,6.5,34,9.8,51.1c2.7,13.8,1.1,31.7,12,42.3c10.6,10.3,28.5,9.2,41.5,14.1c21.5,8.1,35,32.9,57.8,37   	c23.2,4.1,40.5-15.9,60.2-24.2c20.9-8.8,41.7-14.2,49.4-36.8c6.3-18.4,1.6-40.6,7.8-59C292.9,159.2,298.9,140,283.4,124z   	 M171.4,198.9c-16.9,0-30.5-13.7-30.5-30.5c0-16.9,13.7-30.5,30.5-30.5c16.9,0,30.5,13.7,30.5,30.5 C201.9,185.3,188.3,198.9,171.4,198.9z');
  frosting.move(55,33);
  frosting.fill({ color: good_frosting() });
  for(var i = 0; i < 100; i++) {
  sprinkles_gen(drawobj);
 }
}

function sprinkles_gen(drawobj){
  var clip1 = drawobj.circle(250);
  clip1.move(45,45);
  var sprinkles = drawobj.ellipse(15, 8);
  sprinkles.fill({ color: rand_sprinkles() });
  sprinkles.move( 550*Math.random(), 550*Math.random() );
  sprinkles.rotate(50);
  sprinkles.clipWith(clip1);
}

function draw_midhole(drawobj){

  var hole = drawobj.circle(125);
  hole.move(115,100);
  hole.fill({color:'#F9FFF7'});
  hole.stroke({ color: '#FFF8E7', width: 1 });

}

function rand_sprinkles() {
  var colors = ['rgb(241, 199, 133)', 'rgb(202, 175, 223)', 'rgb(235, 142,205);'];
  return colors[Math.floor(Math.random()*colors.length)];
}

function yum_donuts() {
  var colors = ['#FFEBBF', '#FFD1DC', '#592d0d'];
  return colors[Math.floor(Math.random()*colors.length)];
}

function good_frosting() {
  var colors = ['rgb(241, 199, 133)', '#fff', '#592d0d'];
  return colors[Math.floor(Math.random()*colors.length)];
}

draw_donut();
draw_donut();
draw_donut();
