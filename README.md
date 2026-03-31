# video-preview-onhover

A Java Script library that helps make it easy to set up videos which play when the user hovers over them.

This is particularly useful for the common user experience pattern where a page may have a thumbnail which plays a video preview when the user hovers over it.

## Installation

### package managers

- `npm install @vankosoft/video-preview-onhover`
- `yarn add @vankosoft/video-preview-onhover`

## Usage

Import this library into your site/app with `import { VideoPreviewOnhover } from '@vankosoft/video-preview-onhover'`.

### Examples

<details open>
    <summary>Vanilla HTML</summary>
    
```html
<a href="/path/to/open/on/click" class="vanila_js_video_preview">
    <video src="/path/to/video/preview" muted loop playsinline style="display: none;"></video>
    
    <img
        src="/path/to/video/thumbnail"
        class="vanila_js_video_poster"
    />
</a>
```
</details>

<details open>
    <summary>Java Script</summary>
    
```javascript
import { VideoPreviewOnhover } from '@vankosoft/video-preview-onhover'

const videoTargets = document.getElementsByClassName( "vanila_js_video_preview" );
VideoPreviewOnhover( videoTargets, {} );
```
</details>
