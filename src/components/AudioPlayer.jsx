import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

function AudioPlayer() {

    const jukebox = [
        "Eddie Rabbitt - Drivin' My Life Away",
        "Alabama - Love in the First Degree",
        "Dolly Parton - 9 To 5",
        "John Denver - Take Me Home, Country Roads",
        "Dolly Parton & Kenny Rogers - Islands in the Stream",
        "Hank Williams Jr - All My Rowdy Friends (Have Settled Down)",
        "Dolly Parton - Jolene",
        "The Oak Ridge Boys - Elvira"
    ]

    const audioRef = useRef()
    const [ isPlaying, setIsPlaying ] = useState(false)
    const [ track, setTrack ] = useState(0)
    
    console.log(track)
    console.log(isPlaying)
    const handlePreviousTrack = () => {
        if(track > 0) {
            setTrack(prev => prev - 1)  
            audioRef.current.src = '/src/assets/' + jukebox[track] + '.mp3'
            audioRef.current.play()     
            setIsPlaying(true) 
        }
    }
    const handleNextTrack = () => {
        if(track + 1 < jukebox.length) {
            setTrack(prev => prev + 1) 
            audioRef.current.src = '/src/assets/' + jukebox[track] + '.mp3'
            audioRef.current.play()   
            setIsPlaying(true)
        } else {
            setTrack(0)
            audioRef.current.src = '/src/assets/' + jukebox[0] + '.mp3'
            audioRef.current.play()   
            setIsPlaying(true)
        }
    }    
    
    const togglePlay = () => {
        if(isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
        setIsPlaying(!isPlaying)
    }

    return (
        <>
        <div className="jukebox">
            <div>
                <audio className="audioPlayer" ref={audioRef} src={`/src/assets/${jukebox[track]}.mp3`} onEnded={handleNextTrack} autoPlay />
                <button onClick={handlePreviousTrack}><FontAwesomeIcon icon={faBackward} className={`icon ${track === 0 && 'forbiddenAction'}`} /></button>
                <button onClick={togglePlay}>{isPlaying ? <FontAwesomeIcon icon={faPause} className="icon" /> : <FontAwesomeIcon icon={faPlay} className="icon" />}</button>
                <button onClick={handleNextTrack}><FontAwesomeIcon icon={faForward} className={`icon ${track === jukebox.length - 1 && 'forbiddenAction'}`} /></button>
            </div>
            <div>{jukebox[track]} <span>({track + 1}/{jukebox.length})</span></div>
        </div>
        </>
    )
}

export default AudioPlayer