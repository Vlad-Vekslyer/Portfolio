import Crows from "./assets/Crows.png"
import Charity from "./assets/Charity.png"
import Charity2 from "./assets/Charity2.png"
import Charity3 from "./assets/Charity3.png"
import Charity4 from "./assets/Charity4.png"
import Charity5 from "./assets/Charity5.png"
import Doggy from "./assets/Doggy.png"

export interface Description {
  readonly name: string,
  readonly body: string,
  readonly demoLink?: string,
  readonly githubLink: string,
  readonly tools: string[],
  readonly album: any[]
}

const data: {[index: string] : Description} = {
  Crows: {
    name: "The Crows",
    body: `The Crows blends in narrative-driven text games
  with card games to deliver a game that provides you with
  a unique story-telling experience each time you play.
  With an intuitive design, you can quickly start playing
  it! Simply read the current story and play a card to
  respond to the circumstances presented to you.`,
    demoLink: "https://the-crows.herokuapp.com/",
    githubLink: "https://github.com/Vlad-Vekslyer/The-Crows",
    tools: ["HTML5", "CSS3", "TypeScript", "React", "Node.js", "Express.js", "MySQL"],
    album: [Crows]
  },
  Charity: {
    name: "BC Charity Portal",
    body: `BC Charity Portal aims to streamline any research that
  potential donors want to do before donating to an NPO.
  This is done by gathering all NPOs operating in BC unto a
  single, easily-accessible platform where donors can
  communicate with each other and the NPOs have control
  over the content they present.`,
    demoLink: "https://bc-charity-portal.herokuapp.com",
    githubLink: "https://github.com/Vlad-Vekslyer/BC-Charity-Portal",
    tools: ["HTML5", "CSS3", "JavaScript", "jQuery", "Node.js", "Express.js", "MongoDB"],
    album: [Charity, Charity2, Charity3, Charity4, Charity5]
  },
  Doggy: {
    name: "Go Doggy",
    body: `The app that won the VanHacks 2019 hackathon!
  Go Doggy aims to make it easier for people to volunteer
  to take sheltered dogs on walks as well as act as a platform
  to showcase the dogs that need to be adopted.`,
    githubLink: "https://github.com/Vlad-Vekslyer/VanHack-2019",
    tools: ["React Native","JavaScript", "Node.js", "Express.js", "MongoDB"],
    album: [Doggy]
  }
}

export default data
