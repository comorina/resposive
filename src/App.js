import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* <!-- ===============Header============== --> */}
    <header>
      <div class="header-section">
        <div class="header-title-name">
          <h2>Comorina</h2>
        </div>
        <nav class="dropdown">
          <ul>
            <li><a href="#Home">About</a></li>
            <li><a href="#edu">Education</a></li>
            <li><a href="#skill">Skill</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
          </ul>
        </nav>
      </div>
      
    </header>
    {/* <!-- ===================Main============ --> */}
    <div class="container">
      <main class="main-container">
        {/* <!-- ===============About=================== --> */}
        <section class="about-section" id="Home">
          <div class="shortIntro">
            <p>
              Hi I am <strong>Shivam</strong><br />
              <span>Web Developer</span>
            </p>
          </div>
          <div class="devPic">
            <img src="./shivam.png" alt="devPic" />
          </div>
        </section>
      {/* <!-- =============social Media=================== --> */}
        <div class="social-media">
          <ul>
            
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </div>
        {/* <!-- ======================Education================== --> */}
        <section class="education-section" id="edu">
          {/* <!-- ==============graduation===================== --> */}
          <h2 class="edu-title">Education</h2>
          <article class="devgraduation">
            <h2>Graduation</h2>
            <p>Bachelor of Computer Application<br/>Veer Bahadur Singh Purvanchal University, Uttar Pradesh<br/>2020</p>
          </article>
          {/* <!-- ==============Intermediate===================== --> */}
          <article class="devintermediate">
            <h2>Intermediate</h2>
            <p>With Mathmatics<br/>Aditya Narayan GOVT. Inter College, Uttar Pradesh<br/>2016</p>
          </article>
          {/* <!-- ==================High School======================= --> */}
          <article class="devhighschool">
            <h2>High School</h2>
            <p>With Sience<br/>Chaudhary Ram Badan Inter College, Uttar Pradesh<br/>2014</p>
          </article>
        </section>
      {/* <!-- ======================Skill================== --> */}
        <section class="skills-section" id="skill">
          <h2 class="skill-title">Skill</h2>
          <article class="python">
            <p>Python</p>
          </article>
          <article class="cplus">
            <p>C++</p>
          </article>
          <article class="HTML">
            <p>HTML</p>
          </article>
          <article class="css">
            <p>CSS</p>
          </article>
          <article class="java">
            <p>Java</p>
          </article>
          <article class="react">
            <p>React.Js</p>
          </article>
          <article class="fastapi">
            <p>FastAPI</p>
          </article>
          <article class="django">
            <p>Django</p>
          </article>  
        </section>
      {/* <!-- ======================Project================== --> */}
        <section class="project-section" id="project">
          <h2 class="project-title">Poject</h2>
          <article class="project1">
            <h2>System Management Application (Desktop Application)</h2>
            <p>Ducat Trainee<br/><b>Date:</b> 05/05/2021</p>
          </article>
          <article class="project2">
            <h2>Todo App</h2>
            <p>Sopra Steria Trainee<br/><b>Date:</b> 05/01/2022</p>
          </article>
          <article class="project3">
            <h2>E-commerce</h2>
            <p>Ducat Trainee<br/><b>Date:</b> 30/08/2021</p>
          </article>
          <article class="project4">
            <h2>Payment Form</h2>
            <p>College Project<br/><b>Date:</b> 18/11/2019</p>
          </article>
        </section>
      {/* <!-- ======================Hobbies================== --> */}
      <section class="hobbies-section" id="hobbies">
        <h2 class="hobbies-title">Hobbies</h2>
        <div class="flexhobbies">
          <article class="travelling">
            <img src="./travel.jpg" alt="travel"/>
            <p>Travelling</p>          
          </article>
          <article class="readingbook">
            <img src="./reading.jpg" alt="read"/>
            <p>Reading Book</p>
          </article>
          <article class="outdoorgame">
            <img src="./outdoor.jpg" alt="out"/>
            <p>Outdoor Game</p>
          </article>
        </div>
      </section>
      </main>
      <aside class="feedback-container">
        <section class="oldfeed">
          <article class="john">
            <img src="./men.jpg" alt="john"/>
            <p><b>John Deo</b><br/>Good Fullstack Developer</p>
          </article>
          <article class="Lora">
            <img src="./girl.jpg" alt="lora"/>
            <p><b>Lora</b><br/>Good Fullstack Developer</p>
          </article>
          <article class="Wissem dol">
            <img src="./men2.jpg" alt="wissem"/>
            <p><b>Wissem Dol</b><br/>Good Fullstack Developer</p>
          </article>
          <article class="Somaya">
            <img src="./girl1.jpg" alt="somaya"/>
            <p><b>Somaya</b><br/>Good Fullstack Developer</p>
          </article>
        </section>
        <section class="input-field">
          <h2 class="feedback-title">Feedback</h2>
          <input type="Email" placeholder="Email"/><br/>
          <textarea name="feed" id="Feedback" cols="21" rows="10"></textarea><br/>
          <button type="submit">Send</button>
        </section>
      </aside>
    </div>
    <div class="footer">
      <h2>Comorin</h2>
      <p>Welcome on my website.</p>
    </div>
    </div>
  );
}

export default App;
