export default function Audioplayer({ audio, audiotitle}){
    return (
        <div className="audioplayer">
            <h4>{audiotitle}</h4>
            
            <audio controls autoPlay style={{ color: 'blue'}}>
                <source src={audio} />
            </audio>
        </div>
    )
}

export function MusicPlayer(){

    return(
        <p>money things</p>
    )
}