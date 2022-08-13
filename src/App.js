import "./styles.css";
import { useState } from "react";

var webresources = {
  Html: [
    {
      meaning:
        "HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications.",
      webResources: [
        "https://www.w3schools.com/",
        "https://developer.mozilla.org/en-US/docs/Web/HTML",
        "https://www.codecademy.com/",
        "https://www.tutorialspoint.com/html/html_useful_resources.htm"
      ],
      youtubeChannel: [
        "https://youtu.be/BsDoLVMnmZs",
        "https://youtu.be/pQN-pnXPaVg",
        "https://youtu.be/qz0aGYrrlhU"
      ],
      platformYouCanPractice: [
        "https://codepen.io/features/",
        "https://onecompiler.com/html",
        "https://www.programiz.com/html/online-compiler/"
      ],
      projectIdeas:
        "1. Create Web Form 2. A Questionnaire 3.Technical Documentation 4.Portfolio 5.Netflix web clone 6.Whatsapp clone"
    }
  ],
  Css: [
    {
      meaning:
        "CSS (Cascading Style Sheets) allows you to create great-looking web pages.",
      webResources: [
        "https://www.w3schools.com/",
        "https://web.dev/learn/css/",
        "https://www.codecademy.com/learn/learn-css",
        "https://developer.mozilla.org/en-US/docs/Web/CSS"
      ],
      youtubeChannel: [
        "https://youtu.be/aook54SsfhY",
        "https://youtu.be/Edsxf_NBFrw",
        "https://youtu.be/n4R2E7O-Ngo"
      ],
      platformYouCanPractice: [
        "https://codepen.io/features/",
        "https://www.tutorialspoint.com/online_css_editor.php",
        "https://onecompiler.com/html/3wx7252uq"
      ],
      projectIdeas:
        "1. Create Web Form  2. A Questionnaire 3.Technical Documentation 4.Portfolio 5.Netflix web clone 6.Whatsapp clone"
    }
  ],
  Javascript: [
    {
      meaning:
        "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.",
      webResources: [
        "https://javascript.info/",
        "https://www.w3schools.com/js/DEFAULT.asp",
        "https://www.javascript.com/ ",
        "https://developer.mozilla.org/en-US/docs/Web/javascript"
      ],
      youtubeChannel: [
        "https://youtu.be/Qqx_wzMmFeA",
        "https://youtu.be/2Ji-clqUYnA",
        "https://youtu.be/jS4aFq5-91M"
      ],
      platformYouCanPractice: [
        "https://www.programiz.com/javascript/online-compiler/ ",
        "https://playcode.io/online-javascript-compiler",
        "https://onecompiler.com/javascript/3wnng9xz5"
      ],
      projectIdeas:
        "1. JavaScript Form Validation  2. Real-time Weather app  3. Movie App  4. BMI Calculator 5. Random Quote Generator  6. Calculator"
    }
  ],
  React: [
    {
      meaning:
        "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
      webResources: [
        "https://reactjs.org/tutorial/tutorial.html",
        "https://www.javatpoint.com/reactjs-tutorial",
        "https://www.codecademy.com/learn/react-101",
        "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
      ],
      youtubeChannel: [
        "https://youtu.be/iZhV0bILFb0",
        "https://youtu.be/bMknfKXIFA8"
      ],
      platformYouCanPractice: [
        "https://onecompiler.com/javascript/3wg6rpqz2",
        "https://codesandbox.io/framework/react",
        "https://codedamn.com/online-compiler"
      ],
      projectIdeas:
        "1.  Real-Time Chat App  2. To-do List App  3. Movie Recommendation App  4. Weather App in React  5. Social Media App 6. E-Commerce Website"
    }
  ]
};

var resources = Object.keys(webresources);

export default function App() {
  const [webResource, setwebResource] = useState("Html");

  function onClickHandler(event) {
    var webs = event.target.innerText;
    setwebResource(webs);
  }

  return (
    <div className="App">
      <h4>Know Resources for Web development</h4>
      <div
        className="container"
        style={{
          maxWidth: "600px",
          margin: "auto",
          textAlign: "left"
        }}
      >
        {resources.map((webs) => {
          return (
            <li
              style={{
                listStyle: "none",
                cursor: "pointer",
                fontSize: "1.5rem",
                display: "inline-block",
                marginRight: "0.5rem",
                padding: "0.5rem 1rem",
                border: "2px solid black",
                marginTop: "1rem",
                borderRadius: "0.5rem"
              }}
              key={webs}
              onClick={onClickHandler}
            >
              {webs}
            </li>
          );
        })}
        <ul>
          {webresources[webResource].map((web) => {
            return (
              <>
                <li
                  key={web.meaning}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-strt"
                  }}
                >
                  <p className="card">{web.meaning}</p>
                </li>
                <h3>Here are some resources, You can read and learn</h3>
                {web.webResources.map((link, ind) => (
                  <li
                    key={ind}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-strt"
                    }}
                  >
                    <a href={link} target="_blank">
                      {link}
                    </a>
                  </li>
                ))}
                <br />
                <h3>Some Youtube video can help to learn</h3>
                {web.youtubeChannel.map((link, ind) => (
                  <li
                    key={ind}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-strt"
                    }}
                  >
                    <a href={link} target="_blank">
                      {link}
                    </a>
                  </li>
                ))}
                <br />
                {web.platformYouCanPractice.map((link, ind) => (
                  <li
                    key={ind}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-strt"
                    }}
                  >
                    <a href={link} target="_blank">
                      {link}
                    </a>
                  </li>
                ))}
                <h3>
                  Some projects ideas you can create to make concepts strong!
                </h3>
                <li
                  key={web.projectIdeas}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-strt"
                  }}
                >
                  <p>{web.projectIdeas}</p>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
