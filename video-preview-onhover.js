require( './video-preview-onhover.css' )

/**
 * Expired from: https://github.com/Gyanreyer/hover-video-player
 */
export function VideoPreviewOnhover( videoTargets )
{
    for ( const hoverTarget of videoTargets ) {
        hoverTarget.addEventListener( "mouseenter", onHover );
        hoverTarget.addEventListener( "mouseleave", onBlur );
        hoverTarget.addEventListener( "focus", onHover );
        hoverTarget.addEventListener( "blur", onBlur );
        hoverTarget.addEventListener( "touchstart", onHover, {
            passive: true,
        });
    }
}

/**
 * Handler for hover events on hover target
 */
function onHover( event )
{
    const video = this.getElementsByTagName( 'video' )[0];
    const poster = this.getElementsByTagName( 'img' )[0];
    startPreview( video, poster );
}

/**
 * Handler for blur events on hover target
 */
function onBlur( event ) {
    const video = this.getElementsByTagName( 'video' )[0];
    const poster = this.getElementsByTagName( 'img' )[0];
    stopPreview( video, poster );
}

function startPreview( video, poster )
{
    video.muted = true;
    video.currentTime = 1;
    video.playbackRate = 0.5;
    video.play();
    
    video.style.display = '';
    poster.style.display = 'none';
}

function stopPreview( video, poster )
{
    video.currentTime = 0;
    video.playbackRate = 1;
    video.pause();
    
    video.style.display = 'none';
    poster.style.display = '';
}
