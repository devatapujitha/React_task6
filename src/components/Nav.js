
function Nav() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <h1><a class="navbar-brand text-primary mx-4" href="www.pujitha.com">Pujitha Devata</a></h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div class="navbar-nav ms-auto">
                    <a class="nav-item nav-link px-4 " href="#maindiv">Home</a>
                    <a class="nav-item nav-link px-4 " href="#AboutMe">About</a>
                    <a class="nav-item nav-link px-4 " href="#Projects">Projects</a>
                    <a href="https://drive.google.com/file/d/1fOQcMjgiayU3QFJDWSPGowGmR6enMlJw/view?usp=sharing"><button class= "btn btn-primary mx-4">Resume</button></a>
                </div>
            </div>
        </nav>
    )
}
export default Nav;