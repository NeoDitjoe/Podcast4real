export default function Audioplayer({ audio, audiotitle}){
    return (
        <div className="audioplayer">
            <h4>{audiotitle}</h4>
            <audio controls autoPlay >
            <source src={audio} />
            </audio>
        </div>
    )
}