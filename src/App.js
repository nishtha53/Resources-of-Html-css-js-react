import "./styles.css";
import { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

var webresources = {
  Html: [
    {
      meaning:
        "HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications.",
      webResources: [
        {
          "name": "W3 school",
          "link": " https://www.w3schools.com/",
        },
        {
          "name": "MDN Docs",
          "link": "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
          "name": "Code Academy",
          "link": "https://www.codecademy.com/",
        },
        {
          "name": "tutorialspoint",
          "link": "https://www.tutorialspoint.com/html/html_useful_resources.htm",
        }
      ],
      youtubeChannel: [
        {
          "name": "Code with Harry by HTML",
          "link": "https://youtu.be/BsDoLVMnmZs",
        },
        {
          "name": "Free CodeCamp",
          "link": "https://youtu.be/pQN-pnXPaVg",
        },
        {
          "name": "Programming with Mosh",
          "link": "https://youtu.be/qz0aGYrrlhU",
        },
      ],
      platformYouCanPractice: [
        {
          "name": "CodePen",
          "link": "https://codepen.io/features/",
        },
        {
          "name": "One Compiler",
          "link": "https://onecompiler.com/html",
        },
        {
          "name": "Programiz",
          "link": "https://www.programiz.com/html/online-compiler/"
        },
      ],
      projectIdeas: [
        "⦿ Create Web Form ",
        "⦿ A Questionnaire",
        "⦿ Technical Documentation",
        "⦿ Portfolio 5.Netflix web clone 6.Whatsapp clone"
      ]
    }
  ],
  Css: [
    {
      meaning:
        "CSS (Cascading Style Sheets) allows you to create great-looking web pages.",
      webResources: [
        {
          "name": "W3School",
          "link": "https://www.w3schools.com/",
        },
        {
          "name": "Web Dev",
          "link": "https://web.dev/learn/css/",
        },
        {
          "name": "Code Academy",
          "link": "https://www.codecademy.com/learn/learn-css",
        },
        {
          "name": "MDN Docs",
          "link": "https://developer.mozilla.org/en-US/docs/Web/CSS"
        },
      ],

      youtubeChannel: [
        {
          "name": "Free Code Camp CSS",
          "link": "https://youtu.be/aook54SsfhY",
        },
        {
          "name": "Code with Harry CSS",
          "link": "https://youtu.be/Edsxf_NBFrw",
        },
        {
          "name": "Dave Gray CSS",
          "link": "https://youtu.be/n4R2E7O-Ngo",
        }
      ],
      platformYouCanPractice: [
        {
          "name": "CodePen",
          "link": "https://codepen.io/features/",
        },
        {
          "name": "One Compiler",
          "link": "https://onecompiler.com/html",
        },
        {
          "name": "Tutorials Point",
          "link": "https://www.tutorialspoint.com/online_css_editor.php"
        },
      ],
      projectIdeas: [
        "⦿ Create Web Form ",
        "⦿ A Questionnaire",
        "⦿ Technical Documentation",
        "⦿ Portfolio 5.Netflix web clone 6.Whatsapp clone"
      ]
    }
  ],
  Javascript: [
    {
      meaning:
        "JavaScript is a programming language commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites.",
      webResources: [
        {
          "name": "Javascript Info",
          "link": "https://javascript.info/"
        },
        {
          "name": "W3 School",
          "link": "https://www.w3schools.com/js/DEFAULT.asp",
        },
        {
          "name": "JavaScript",
          "link": "https://www.javascript.com/ ",
        },
        {
          "name": " MDN Docs",
          "link": "https://developer.mozilla.org/en-US/docs/Web/javascript",
        }
      ],
      youtubeChannel: [
        {
          "name": "Javascript By Clever programmer",
          "link": "https://youtu.be/Qqx_wzMmFeA",
        },
        {
          "name": "Codding Addict",
          "link": "https://youtu.be/2Ji-clqUYnA",
        },
        {
          "name": "JS by Free Code Camp",
          "link": "https://youtu.be/jS4aFq5-91M"
        }
      ],
      platformYouCanPractice: [
        {
          "name": "Programiz",
          "link": "https://www.programiz.com/javascript/online-compiler/",
        },
        {
          "name": "One Compiler",
          "link": "https://onecompiler.com/javascript/3wnng9xz5",
        },
        {
          "name": "Play Code",
          "link": "https://playcode.io/online-javascript-compiler",
        },
      ],
      projectIdeas: [
        "⦿ JavaScript Form Validation",
        "⦿ Real-time Weather app",
        "⦿ Movie App",
        "⦿ BMI Calculator",
        "⦿ Random Quote Generator",
        "⦿ Calculator"
      ]
    }
  ],
  React: [
    {
      meaning:
        "React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
      webResources: [
        {
          "name": "React js official website",
          "link": "https://reactjs.org/tutorial/tutorial.html",
        },
        {
          "name": "JavaT Point",
          "link": "https://www.javatpoint.com/reactjs-tutorial",
        },
        {
          "name": "Code Academy",
          "link": "https://www.codecademy.com/learn/react-101",
        },
        {
          "name": "MDN Docs",
          "link": "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
        },
      ],
      youtubeChannel: [
        {
          "name": "Codding Addict",
          "link": "https://youtu.be/iZhV0bILFb0",
        },
        {
          "name": "React By freecode camp",
          "link": "https://youtu.be/bMknfKXIFA8"
        }
      ],

      platformYouCanPractice: [
        {
          "name": "Codesand Box",
          "link": "https://codesandbox.io/framework/react",
        },
        {
          "name": "One Compiler",
          "link": "https://onecompiler.com/javascript/3wnng9xz5",
        },
        {
          "name": "Codedamm",
          "link": "https://codedamn.com/online-compiler"
        },
      ],
      projectIdeas: [
        "⦿ Real-Time Chat App",
        "⦿ To-do List App",
        "⦿ Movie Recommendation App",
        "⦿ Weather App in React",
        "⦿ Social Media App",
        "⦿ E-Commerce Website"
      ]
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
      <div
        className="container"
        style={{
          maxWidth: "600px",
          margin: "auto",
          textAlign: "left"
        }}>
        <h2 className="center">Know Resources for Web development</h2>
        {resources.map((webs) => {
          return (
            <ButtonGroup  size="lg"
              style={{
                cursor: "pointer",
                fontSize: "1.5rem",
                display: "inline-block",
                marginLeft: "1rem",
                padding: "0.5rem 1rem",
                marginTop: "2rem",
              }}
              key={webs}
              onClick={onClickHandler}
            >
              <Button className="button">
                {webs}
              </Button>
            </ButtonGroup>
          );
        })}
        <br />
        <ul>
          {webresources[webResource].map((web) => {
            return (
              <>
                <li
                  key={web.meaning}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginTop: "1.5rem",
                  }}
                >
                  <h5 className="card" style={{ padding: "1rem" }}>{web.meaning}</h5>
                </li>
                <div className="card" style={{ padding: "1rem" }}>
                  <h5 style={{fontWeight: "bold"}}>Here are some resources, You can read and learn</h5><br />
                  {web.webResources.map((link, ind) => (
                    <Button 
                    className="button"
                      key={ind}
                      style={{
                        marginBottom: "5px",
                        textAlign: "center",
                      }}
                    >
                      <a href={link.link} target="_blank" style={{ "textDecoration": "none", "color": "white" }}>
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
                <br />
                <div className="card" style={{ padding: "1rem" }}>
                  <h5 style={{fontWeight: "bold"}}>Some Youtube video can help to learn</h5><br />
                  {web.youtubeChannel.map((link, ind) => (
                    <Button
                    className="button"
                      key={ind}
                      style={{
                        marginBottom: "5px",
                        textAlign: "center",
                      }}
                    >
                      <a href={link.link} target="_blank" style={{ "textDecoration": "none", "color": "white" }}>
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
                <br />
                <div className="card" style={{ padding: "1rem" }}>
                  <h5 style={{fontWeight: "bold"}}>Some Online Editor you can use for coding!</h5>
                  {web.platformYouCanPractice.map((link, ind) => (
                    <Button
                    className="button"
                      key={ind}
                      style={{
                        marginBottom: "5px",
                        textAlign: "center",
                      }}
                    >
                      <a href={link.link} target="_blank" style={{ "textDecoration": "none", "color": "white" }}>
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div><br />
                <div className="card" style={{ padding: "1rem" }}>
                  <h5 style={{fontWeight: "bold"}}>
                    Some projects ideas you can create to make concepts strong!
                  </h5>
                  {web.projectIdeas.map((link, ind) => (
                    <li
                      key={ind}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-strt"
                      }}
                    >
                      <p href={link}>
                        {link}
                      </p>
                    </li>
                  ))}
                  {/* <li
                  key={web.projectIdeas}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-strt"
                  }}
                >
                  <p>{web.projectIdeas}</p>
                </li> */}
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
