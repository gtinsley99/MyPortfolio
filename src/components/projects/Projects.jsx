import "./Projects.css";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import cats from "../../images/projImg/reactImg/cats4lyfe.png";
import marvel from "../../images/projImg/reactImg/marvel.png";
import calculator from "../../images/projImg/reactImg/calculator.png";
import toDoList from "../../images/projImg/reactImg/toDoList.png";
import keycode from "../../images/projImg/jsImg/keycode.png";
import drumkit from "../../images/projImg/jsImg/drumkit.png";
import diceGame from "../../images/projImg/jsImg/diceGame.png";
import cyberPet from "../../images/projImg/jsImg/cyberPet.png";
import orders from "../../images/projImg/backend/orders.png";
import insta from "../../images/projImg/backend/instaClone.png";
import books from "../../images/projImg/backend/books.png";

const Projects = () => {
  const [proj, setProj] = useState("React");

  return (
    <div className="projDiv">
      <h2>My Projects</h2>
      <div className="projects">
        <h3
          className="projType"
          id={proj === "JS" && "active"}
          onClick={() => setProj("JS")}
        >
          JavaScript
        </h3>
        <h3
          className="projType"
          id={proj === "React" && "active"}
          onClick={() => setProj("React")}
        >
          React
        </h3>
        <h3
          className="projType"
          id={proj === "Backend" && "active"}
          onClick={() => setProj("Backend")}
        >
          Backend
        </h3>
      </div>
      {proj === "React" && (
        <Carousel infiniteLoop="true" className="projList">
          <div className="projItem">
            <div>
              <h3>Marvel character website</h3>
              <p>
                Final project of Code Nation. A website displaying Marvel
                characters with their power stats and relevant comics. Function
                to favourite a character when logged in and see most popular
                characters of users. Persistent login and ability to have a jpg
                profile picture from the user's files.
              </p>
              <a href="https://github.com/gtinsley99/marvel" target="_blank">
                Github repository frontend
              </a>
              <a
                href="https://github.com/gtinsley99/marvel-backend"
                target="_blank"
              >
                Github repository backend
              </a>
              <a href="https://marvel-codenation.netlify.app/" target="_blank">
                Marvel character website
              </a>
            </div>
            <div>
              <img src={marvel} alt="marvel hero website" />
            </div>
          </div>
          <div className="projItem">
            <div>
              <h3>Cats4Lyfe</h3>
              <p>
                Fake eCommerce website to purchase cats using React, connecting
                with an API. Produced in a group project.
              </p>
              <a href="https://github.com/gtinsley99/cats4life" target="_blank">
                Github repository
              </a>
              <a href="https://gtinsley99.github.io/cats4life/" target="_blank">
                Cats4Lyfe website
              </a>
            </div>
            <div>
              <img src={cats} alt="cats for life website" />
            </div>
          </div>
          <div className="projItem">
            <div>
              <h3>Calculator</h3>
              <p>
                An online calculator with current sum total and previous answer.
              </p>
              <a
                href="https://github.com/gtinsley99/calculator"
                target="_blank"
              >
                Github repository
              </a>
              <a href="https://gtinsley99.github.io/calculator" target="_blank">
                Calculator website
              </a>
            </div>
            <div>
              <img src={calculator} alt="calculator website" />
            </div>
          </div>
          <div className="projItem">
            <div>
              <h3>To do list</h3>
              <p>
                An online to do list with ability to archive and cross out list
                items.
              </p>
              <a href="https://github.com/gtinsley99/ToDoList" target="_blank">
                Github repository
              </a>
              <a href="https://gtinsley99.github.io/ToDoList" target="_blank">
                To do list website
              </a>
            </div>
            <div>
              <img src={toDoList} alt="To do list website" />
            </div>
          </div>
        </Carousel>
      )}
      {proj === "JS" && (
        <Carousel infiniteLoop="true" className="projList">
          <div className="projItem">
            <h3>CodeWars solutions</h3>
            <p>My answers to Codewars problems.</p>
            <a href="https://github.com/gtinsley99/codewars" target="_blank">
              GitHub repository
            </a>
          </div>
          <div className="projItem">
            <div>
              <h3>Keycode Generator</h3>
              <p>
                A website that displays information about the most recent key
                pressed.
              </p>
              <a
                href="https://github.com/gtinsley99/Keycode-generator"
                target="_blank"
              >
                Github repository
              </a>
              <a
                href="https://gtinsley99.github.io/Keycode-generator/"
                target="_blank"
              >
                Keycode Generator website
              </a>
            </div>
            <div>
              <img src={keycode} alt="Keycode generator website" />
            </div>
          </div>
          <div className="projItem">
            <div>
              <h3>Drum kit</h3>
              <p>A drumkit activated by click and by key pressing.</p>
              <a href="https://github.com/gtinsley99/Drumkit" target="_blank">
                Github repository
              </a>
              <a href="https://gtinsley99.github.io/Drumkit/" target="_blank">
                Drum kit website
              </a>
            </div>
            <div>
              <img src={drumkit} alt="Drum kit website" />
            </div>
          </div>
          <div className="projItem">
            <div>
              <h3>Dice Game</h3>
              <p>A dice game with an animated die, for one or two players.</p>
              <a href="https://github.com/gtinsley99/dice_game" target="_blank">
                Github repository
              </a>
              <a href="https://gtinsley99.github.io/dice_game/" target="_blank">
                Dice game website
              </a>
            </div>
            <div>
              <img src={diceGame} alt="Dice game website" />
            </div>
          </div>
          <div className="projItem">
            <div>
              <h3>Cyber Pet</h3>
              <p>A cyber pet game produced in a group project.</p>
              <a href="https://github.com/awaghat99/CyberPet" target="_blank">
                Github repository
              </a>
              <a href="https://awaghat99.github.io/CyberPet/" target="_blank">
                Cyber Pet website
              </a>
            </div>
            <div>
              <img src={cyberPet} alt="Cyber Pet Website" />
            </div>
          </div>
        </Carousel>
      )}
      {proj === "Backend" && (
        <Carousel className="projList" infiniteLoop="true">
          <div className="projItem">
            <div>
            <h3>Sequelize practice</h3>
            <p>
              An API for storing authors, books and genres in a MySQL database
              using Sequelize, with relations between tables to return relevent
              genres of an author etc.
            </p>
            <a
              href="https://github.com/gtinsley99/sequelizePractice"
              target="_blank"
            >
              Github repository
            </a>
            </div>
            <div>
              {/* <img src={orders} alt="Orders website" /> */}
            </div>
          </div>
          <div className="projItem">
            <div>
            <h3>Bcrypt example</h3>
            <p>
              A website where users can login and order items, using MySQL and
              Sequelize to store order and user info, with brcypt to encrypt
              user passwords.
            </p>
            <a
              href="https://github.com/gtinsley99/bcypt-frontend"
              target="_blank"
            >
              Github repository frontend
            </a>
            <a href="https://github.com/gtinsley99/bcrypt" target="_blank">
              Github repository backend
            </a>
            <a
              href="https://serene-capybara-1a0cd7.netlify.app"
              target="_blank"
            >
              Users and orders website
            </a>
            </div>
            <div>
              <img src={orders} alt="Users and orders website" />
            </div>
          </div>
          <div className="projItem">
            <div>
            <h3>Books API</h3>
            <p>
              An API stored in the cloud holding book information, made using
              Mongoose and Express, with React as a frontend.
            </p>
            <a href="https://github.com/gtinsley99/booksAPI" target="_blank">
              Github repository
            </a>
            <a href="https://storied-lily-763181.netlify.app" target="_blank">
              Books website
            </a>
            </div>
            <div>
              <img src={books} alt="Books website" />
            </div>
          </div>
          <div className="projItem">
            <div>
            <h3>Instagram Clone</h3>
            <p>
              An Instagram clone with user login with an API made using
              Sequelize connected to a MySQL database in the cloud with user
              login and cookies storing jwt_tokens for persistent login.
            </p>
            <a
              href="https://github.com/gtinsley99/cookies-frontend"
              target="_blank"
            >
              Github repository frontend
            </a>
            <a href="https://github.com/gtinsley99/cookies" target="_blank">
              Github repository backend
            </a>
            <a
              href="https://gtinsley99.github.io/cookies-frontend/"
              target="_blank"
            >
              Clone website
            </a>
            </div>
            <div>
              <img src={insta} alt="insta web clone" />
            </div>
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default Projects;
