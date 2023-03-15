---
title: A failed app idea and some new learnings
description: If we could generate transcript files offline, how can we integrate it with audio files. I was thinking about something similar to external subtitle files used in video players. Came to know that it is possible with the help of TextTracks and WebVTT format. I did a small POC and it went well.
published: false
publishedAt: 2023-03-05T00:00:00.000Z
updatedAt: 2023-03-05T00:00:00.000Z
category: tech
image: 'banners/70'
keywords: 
    - web
    - javascript
    - audio
authors:
  - Krishna Mohan A M
---

Last week while browsing hacker news, I came across a discussion on [Spotify and podcasts](https://news.ycombinator.com/item?id=34793116). There i saw few features users requested in podcasts app and thought of creating a new one to address few of those feature requests. Among those, the major feature i liked and want to implement was the transcript feature. I really liked the concept of showing captions/subtitles similar to music lyrics in Spotify app. 

At first I thought of using [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to convert audio to text, and wondered why nobody is using the same. Well I know the reason now, we [cannot feed any stream](https://wicg.github.io/speech-api/#issue-2c77f5e1) to the recognition service. It works only with user agent controlled input device.

## Workaround

I was devastated for some time. Then i thought, if we could generate transcript files offline, how can we integrate it with audio files. I was thinking about something similar to external subtitle files used in video players. Came to know that it is possible with the help of [TextTracks](https://developer.mozilla.org/en-US/docs/Web/API/TextTrack) and [WebVTT format](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API). I did a small POC and it went well. 

## Code

Here is the audio html tag with multiple text tracks.

```html
<audio 
    id="podcast_audio" 
    src="sounds/podcast_sample.mp3" 
    class="px-2 w-full"
    controls>
    <a href="sounds/podcast_sample.mp3">
        Download <audio src=""></audio>
    </a>
    <track id="caption_en" default kind="captions" srclang="en" src="sounds/podcast_sample.vtt">
    <track id="subtitle_de"" default kind="subtitles" srclang="de" src="sounds/podcast_sample_02.vtt">
</audio>  
```

We need to add some javascript code to render captions as audio tag do not have rendering space. This is not required for video elements

```javascript
window.onload = function() {
    const textTracks = document.getElementById('podcast_audio').textTracks;        
    var activeTextTrack = getActiveTextTrack(textTracks);
    textTracks.onchange = (event) => {            
        activeTextTrack = getActiveTextTrack(textTracks);            
    };
    const enTrack = textTracks.getTrackById('caption_en');        
}

/*
Method to get active text track. Active track depends on the user
*/
function getActiveTextTrack(textTracks) {
    var activeTextTrack;
    for(var track of textTracks) {            
        if(track.mode == 'showing') {
            activeTextTrack = track;
            break;
        }
    }
    if(activeTextTrack) {            
        activeTextTrack.oncuechange = onCueChange;
    }
    return activeTextTrack;
}

function onCueChange(event) {        
    const captionSpan = document.getElementById('audio_caption');
    var cueText = "";
    for(var activeCue of this.activeCues) {
        cueText += "\n"+activeCue.text;
    }
    captionSpan.innerText = cueText;
}
```

Text file for caption.

```vtt
WEBVTT - podcast_sample.vtt

00:01.000 --> 00:04.000
- Never drink liquid nitrogen.

00:05.000 --> 00:09.000
- It will perforate your stomach.
- You could die.

00:07.000 --> 00:13.000
- This is an overlapping caption
- Will it work?
```

Text file for subtitle.

```vtt
WEBVTT - podcast_sample_02.vtt

NOTE
This is a sample note/comment

1
00:01.000 --> 00:04.000
- Ta en kopp varmt te.
- Det är inte varmt.

2
00:05.000 --> 00:09.000
- Har en kopp te.
- Det smakar som te.

NOTE This last line may not translate well.

3
00:10.000 --> 00:15.000
- Ta en kopp
```

## What's Next

Need to work on how to generate transcripts from audio files. As of now my understanding is that we need to use some cloud services for it. Also I want to learn more about 

## References
- [Stackoverflow answer](https://stackoverflow.com/a/54663735/1520750)

