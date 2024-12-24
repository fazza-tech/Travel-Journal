export default function Header(props){
    return(
        <>
            <header className="header">
                    <img src={props.globe} />
                    <h1>my travel journal.</h1>
            </header>
        </>
    )
}