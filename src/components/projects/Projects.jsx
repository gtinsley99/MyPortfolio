import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div className="projects">
        <div>JavaScript</div>
        <div>React</div>
        <div>Backend</div>
      </div>
      <div>
        <h3>Marvel character website</h3>
        <p>Final project of Code Nation. A website displaying Marvel characters with their power stats and relevant comics. Function to favourite a character when logged in and see most popular characters of users. Persistent login and ability to have a jpg profile picture from the user's files.</p>
        
      </div>
    </div>
  );
};

export default Projects;
