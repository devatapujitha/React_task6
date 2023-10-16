import "./skills.css"
function Skills() {
    return (
        <div id="AboutMe">
            <br></br>
            <h2 class=" text-center text-primary my-3">About Me</h2>
            <br></br>
            <div class="row ">
                <center class="pb-5">
                <div class="col-">
                    <div style={{width:"70%"}} class="about-info mx-3 shadow ">
                        <h3 class = "py-3">My introduction</h3>
                        <p class="px-5">I am well-versed in HTML, CSS and JavaScript , and other cutting edge
                            frameworks and libraries,which allows me to implement interactive features.
                            Additionally, I have experirence working with content management systems (CMS) like
                            WordPress.
                        </p>
                        <p class="px-5 pb-3">An organized and self-motivated person capable of time management and working under pressure in all
environments. Aspiring fresher seeking a beginner role to contribute my technical knowledge to a dynamic
organization.</p>
                    </div>
                </div>
                </center>
                <br></br>
                <div class="col-2"></div>
                <div class="skills-box col-md-2">
                    <div class="skills-header">
                        <h3>Design Tools</h3>
                    </div>
                    <br></br>
                    <div class="skills-list">
                        <span>Visual Studio code</span>
                        <span>Colab</span>
                        <span>Jupyter notebook</span>
                        <span>Figma</span>
                        <span>Canva</span>
                        {/* <span>C</span> */}
                    </div>
                </div>
                <div class="skills-box col-md-2">
                    <div class="skills-header">
                        <h3>Web Development</h3>
                    </div>
                    <br></br>
                    <div class="skills-list">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Bootstrap</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>PHP</span>
                        <span>MongoDB(Database)</span>
                        <span>MySQL(Database)</span>
                    </div>
                </div>
                <div class="skills-box col-md-2">
                    <div class="skills-header">
                        <h3>Data Science</h3>
                    </div>
                    <br></br>
                    <div class="skills-list">
                        <span>Numpy</span>
                        <span>Pandas</span>
                        <span>Matplotlib</span>
                        <span>Classification</span>
                        <span>Regression</span>
                    </div>
                </div>
                <div class="skills-box col-md-2">
                    <div class="skills-header">
                        <h3>Programming Languages</h3>
                    </div>
                    <br></br>
                    <div class="skills-list">
                        <span>Java</span>
                        <span>Python</span>
                        <span>R</span>
                    </div>
                </div>
            </div>
            <br></br>
            <hr></hr>
        </div>

    )
}

export default Skills;