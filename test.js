window.addEvent('domready', init);


var getA = function() 
{
  return new Request({
    method: 'get',
    url: 'a.json'
  });
}.decorate(promise)


var getB = function() 
{
  return new Request({
    method: 'get',
    url: 'b.json'
  });
}.decorate(promise)


var myAdd = function(a, b) 
{
  return a + b;
}.decorate(promise);


var myFn = function() 
{
  var p1 = getA();
  var p2 = getB();
  return myAdd(p1, p2);
}.decorate(promise)


var show = function(value)
{
  console.log("show: " + value);
}.decorate(promise)


var v;
function init()
{
  show(myFn());
}