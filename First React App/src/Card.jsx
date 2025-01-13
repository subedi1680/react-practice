import profilePic from './assets/pp.png';

function Card(){
    return(
        <div className="card">
            <img className='card-image' alt="pp" src={profilePic} width={200} height={200}></img>
            <h2 className='card-title'>Rajan Subedi</h2>
            <p className='card-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur quisquam quos incidunt dolorem, numquam velit tempore maxime illum sed sapiente illo saepe dicta sunt totam assumenda iusto eaque, deserunt esse?</p>
        </div>
    );
}
export default Card;