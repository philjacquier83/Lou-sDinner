import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function AudioPlayer({ music }) {

    const jukebox = ['Lynyrd Skynyrd - Sweet Home Alabama']

    const [ isPlaying, setIsPlaying ] = useState(true)
    const togglePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const [ track, setTrack ] = useState(0)
    const handlePreviousTrack = () => {
        setTrack(prev => prev - 1)
    }
    const handleNextTrack = () => {
        setTrack(prev => prev + 1)
    }

    return (
        <>
        <div className="jukebox">
            <audio>
                <source src={`/src/assets/${jukebox[music]}.mp3`} type="audio/mp3" />
                Votre navigateur ne supporte pas l'élément audio.
            </audio>  
            <button onClick={handlePreviousTrack}><FontAwesomeIcon icon={faBackward} className={`icon ${track === 0 && 'forbiddenAction'}`} /></button>
            <button onClick={togglePlay}>{isPlaying ? <FontAwesomeIcon icon={faPlay} className="icon" /> : <FontAwesomeIcon icon={faPause} className="icon" />}</button>
            <button onClick={handleNextTrack}><FontAwesomeIcon icon={faForward} className={`icon ${track === jukebox.length - 1 && 'forbiddenAction'}`} /></button>
        </div>
        </>
    )
}

export default AudioPlayer