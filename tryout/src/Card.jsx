import dp from './assets/pfp.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-img" alt="pfp" src={dp}></img>
            <h2 className="card-title">Loss Project</h2>
            <p className="card-text">I am trying out stuffs and things, let's seee</p>
        </div>
    )
}
export default Card;