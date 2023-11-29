import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects">
        <h3 className="projType">JavaScript</h3>
        <h3 className="projType">React</h3>
        <h3 className="projType">Backend</h3>
      </div>
      <div className="react">
        <div>
          <h3>Marvel character website</h3>
          <p>
            Final project of Code Nation. A website displaying Marvel characters
            with their power stats and relevant comics. Function to favourite a
            character when logged in and see most popular characters of users.
            Persistent login and ability to have a jpg profile picture from the
            user's files.
          </p>
        </div>
      </div>
      <div className="JS">
        <div>
          <h3>CodeWars solutions</h3>
          <p>My answers to Codewars problems.</p>
          <a href="https://github.com/gtinsley99/codewars" target="_blank">
            GitHub repository
          </a>
        </div>
        <div>
          <h3>Keycode Generator</h3>
          <p>A website that displays information about the most recent key pressed.</p>
          <a href="https://github.com/gtinsley99/Keycode-generator" target="_blank">Github repository</a>
          <a href= "https://gtinsley99.github.io/Keycode-generator/" target="_blank">Keycode Generator website</a>
        </div>
        <div>
          <h3>Drum kit</h3>
          <p>A drumkit activated by click and by key pressing.</p>
          <a href= "https://github.com/gtinsley99/Drumkit" target="_blank">Github repository</a>
          <a href= "https://gtinsley99.github.io/Drumkit/" target="_blank">Drum kit website</a>
        </div>
        <div>
          <h3>Dice Game</h3>
          <p>A dice game with an animated die, for one or two players.</p>
          <a href= "https://github.com/gtinsley99/dice_game" target="_blank">Github repository</a>
          <a href= "https://gtinsley99.github.io/dice_game/" target="_blank">Dice game website</a>
        </div>
        <div>
          <h3>Cyber Pet</h3>
          <p>A cyber pet game produced in a group project.</p>
          <a href= "https://github.com/awaghat99/CyberPet" target="_blank">Github repository</a>
          <a href= "https://awaghat99.github.io/CyberPet/" target="_blank">Cyber Pet website</a>
        </div>
      </div>
      <div className="backend"></div>
    </div>
  );
};

export default Projects;
