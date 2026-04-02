require( './video-preview-onhover.css' );

/**
 * Expired from: https://github.com/Gyanreyer/hover-video-player
 *
 * options
 * {
 *     restartOnPause: true
 * }
 */
export function VideoPreviewOnhover( videoTargets, options = {} )
{
    for ( const hoverTarget of videoTargets ) {
        hoverTarget.addEventListener( "mouseenter", function ( event ) { onHover( hoverTarget, options ) } );
        hoverTarget.addEventListener( "mouseleave", function ( event ) { onBlur( hoverTarget, options ) } );
        hoverTarget.addEventListener( "focus", function ( event ) { onHover( hoverTarget, options ) } );
        hoverTarget.addEventListener( "blur", function ( event ) { onBlur( hoverTarget, options ) } );
        hoverTarget.addEventListener( "touchstart", function ( event ) { onHover( hoverTarget, options ) }, {
            passive: true,
        });
    }
}

/**
 * Handler for hover events on hover target
 */
function onHover( hoverTarget, options )
{
    const video = hoverTarget.getElementsByTagName( 'video' )[0];
    const poster = hoverTarget.getElementsByTagName( 'img' )[0];
    
    startPreview( video, poster );
}

/**
 * Handler for blur events on hover target
 */
function onBlur( hoverTarget, options )
{
    const video = hoverTarget.getElementsByTagName( 'video' )[0];
    const poster = hoverTarget.getElementsByTagName( 'img' )[0];
    
    var restartOnPause = options.restartOnPause || false;
    stopPreview( video, poster, restartOnPause );
}

function startPreview( video, poster )
{
    video.muted = true;
    
//     video.currentTime = 1;
//     video.playbackRate = 0.5;

    video.play();
    
    video.style.display = '';
    poster.style.display = 'none';
}

function stopPreview( video, poster, restartOnPause )
{
//     video.currentTime = 0;
//     video.playbackRate = 1;

    if ( restartOnPause ) {
        video.stop();
    } else {
        video.pause();
    }
    
    video.style.display = 'none';
    poster.style.display = '';
}
