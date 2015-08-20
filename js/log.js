var hasBeenSeen = false;

$( document ).ready(function() {
    
	var startValue = $('#speciali').isOnScreen();

if(startValue == true  && !hasBeenSeen) {
	 hasBeenSeen = true;
$('.second.circle').circleProgress({
	size: 120.0,

	strokeWidth: 2,
    value: 0.6,
	animation: {
  duration: 2200,
  easing: 'circleProgressEasing'},

	fill: {
gradient: ['#4b47c5', '#4b47c5']},
emptyFill: 'rgba(255, 255, 255, 1)',
	startAngle: 0,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
});
	

$('.first.circle').circleProgress({
	size: 120.0,

	strokeWidth: 2,
    value: 0.9,
	animation: {
  duration: 2200,
  easing: 'circleProgressEasing'},

	fill: {
gradient: ['#4b47c5', '#4b47c5']},
emptyFill: 'rgba(255, 255, 255, 1)',
	startAngle: 0,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});	
	

}
});




$(document).scroll(function(event) {
	
var result = $('#speciali').isOnScreen();


if(result == true  && !hasBeenSeen) {
	 hasBeenSeen = true;
$('.second.circle').circleProgress({
	size: 120.0,

	strokeWidth: 2,
        value: 0.6,
	animation: {
  duration: 2200,
  easing: 'circleProgressEasing'},
	
	fill: {
gradient: ['#4b47c5', '#4b47c5']},
emptyFill: 'rgba(255, 255, 255, 1)',
startAngle: 0,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(75 * progress) + '<i>%</i>');
});
	

$('.first.circle').circleProgress({
	size: 120.0,

	strokeWidth: 2,
    value: 0.9,
	animation: {
  duration: 2200,
  easing: 'circleProgressEasing'},

	fill: {
gradient: ['#4b47c5', '#4b47c5']},
emptyFill: 'rgba(255, 255, 255, 1)',
	startAngle: 0,
}).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(parseInt(90 * progress) + '<i>%</i>');
});	
	

}
	
});