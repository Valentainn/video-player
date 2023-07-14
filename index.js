const $video = document.querySelector("#video")
const $backward = document.querySelector("#backward")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $forward = document.querySelector("#forward")
const $progress = document.querySelector("#progress")
$backward.addEventListener("click", handleBackward)
    function handleBackward(){
        $video.currentTime = $video.currentTime - 10
    }
$play.addEventListener("click", handlePlay)
    function handlePlay(){
        $video.play()
        $play.hidden = true
        $pause.hidden = false
    }
$pause.addEventListener("click", handlePause)
    function handlePause(){
        $video.pause()
        $pause.hidden = true
        $play.hidden = false
    }
$forward.addEventListener("click", handleforward)
    function handleforward(){
        $video.currentTime = $video.currentTime + 10
    }
$video.addEventListener("loadedmetadata", handleLoaded)
    function handleLoaded(){
        $progress.max = $video.duration
    }
$video.addEventListener("timeupdate", handleTimeUpdate)
    function handleTimeUpdate(){
        $progress.value = $video.currentTime
    }
$progress.addEventListener("input", handleInput)
    function handleInput(){
        $video.currentTime = $progress.value
    }