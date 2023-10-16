import { Power, Screwdriver, Tree } from "react-bootstrap-icons";
import { Linkedin, Instagram, Github,Twitter } from "react-bootstrap-icons";
import "./Projectspage.css";
function Project() {
    return (
        <div id="Projects">
           
            <h2 class="text-primary text-center mt-5">Projects</h2>
            <div class="row mx-5 mt-5">
                <div class=" col-md-4  col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2"><Power size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Advanced Footstep Power Generation</h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">Developed a project on
generating the electrical energy from mechanical energy
using piezo electric sensors .</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2 fa-solid fa-leaf"><Tree size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Plant Leaf Disease Prediction. </h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">I have build a model which predicts the leaf disease by
using CNN architectures. I used VGG19 and LeNet CNN
architectures.</p>
                        </div>
                    </div>
                </div>
                <div class=" col-md-4 col-sm-12">
                    <div class="card px-5 mb-5 bg-light">
                        <div class="card-img mt-2"><Screwdriver size={75} /></div>
                        <div class="card-body">
                            <h3 className="card-title">Smart Blind stick using Arduino.</h3>
                            <br></br>
                            <br></br>
                            <p className="card-text">I have made a blind stick using arduino uno which is capable of detecting any obstacle and it alerts the person with buzzer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-primary text-center mt-5">Contact</h2>
            <br></br>
            <center>
                <a href="http://www.linkedin.com/in/pujitha-devata" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={35}  color = "black" className="rounded mx-4" />
                </a>
                <a href="https://www.instagram.com/pujitha_devata/" target="_blank" rel="noopener noreferrer">
                    <Instagram size={35} color="black" className="rounded mx-4" />
                </a>
                <a href="https://github.com/devatapujitha" target="_blank" rel="noopener noreferrer">
                    <Github size={35} color = "black" className="rounded mx-4" />
                </a>
                <a href="https://twitter.com/DevataPujitha" target="_blank" rel="noopener noreferrer">
                    <Twitter size={35} color = "black" className="rounded mx-4" />
                </a>
                
            </center>
            <br></br>
            <p class="text-center">@2023</p>
        </div>
    )
}
export default Project;