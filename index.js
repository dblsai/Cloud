
//var world = document.getElementById( 'world' );
//var viewport = document.getElementById( 'viewport' );
var worldXAngle = 0;
var worldYAngle = 0;
var d = 0;
var objects = [];   //array of cloud bases
var layers = [];   //array of cloud layers


window.addEventListener( 'mousemove', function( e ) {
    worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
    worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
    updateView();
} );


function updateView() {
 world.style.transform = 'translateZ( ' + d + 'px ) \
        rotateX( ' + worldXAngle + 'deg) \
        rotateY( ' + worldYAngle + 'deg)';
}
