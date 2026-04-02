require( './video-preview-onhover.css' )

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
        hoverTarget.addEventListener( "mouseenter", onHover, options );
        hoverTarget.addEventListener( "mouseleave", onBlur, options );
        hoverTarget.addEventListener( "focus", onHover, options );
        hoverTarget.addEventListener( "blur", onBlur, options );
        hoverTarget.addEventListener( "touchstart", onHover, {
            passive: true,
        });
    }
}

/**
 * Handler for hover events on hover target
 */
function onHover( event, options )
{
    const video = this.getElementsByTagName( 'video' )[0];
    const poster = this.getElementsByTagName( 'img' )[0];
    
    startPreview( video, poster );
}

/**
 * Handler for blur events on hover target
 */
function onBlur( event, options ) {
    const video = this.getElementsByTagName( 'video' )[0];
    const poster = this.getElementsByTagName( 'img' )[0];
    
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
