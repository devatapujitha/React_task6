import "./Homepage.css";
import girl from './girl1.jpg';
function Home() {
    return (
        <div id="maindiv">
                <h1> I'm <span class="text-warning">Devata Pujitha</span></h1>
                <h1 class="text-primary"> Web Designer and Developer</h1>
                <br></br>
                <img class="rounded-circle shadow" style={{width:"35%",height:"270px"}} src={girl} alt="girl"/>
                <center>
                    <br></br>
                <p style={{width:"80%"}}>I am a self motivated and
hardworking person . I consider
myself a responsible and orderly
person. I am able to work in a team
as well as own initiative. I use a
creative approach to problem
solving. I am looking forward for my
first work experience.</p>
                </center>
                <br></br>
                <hr></hr>
        </div>
    )
}
export default Home;