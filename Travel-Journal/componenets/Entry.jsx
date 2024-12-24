export default function Entry(props){
    return(
        <article className="journal-entry">
            <div className="main-image-container">
                 <img className="main-image" 
                        src={props.img.src} 
                        alt={props.img.alt} />
            </div>
           
            <div className="info-container">
                <img 
                    className="marker"
                    src={props.marker} 
                    alt="map icon" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.heading}</h2>
                <p className="triple-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}