import Crows from "./assets/Crows.png"
import Crows2 from "./assets/Crows2.png"
import Crows3 from "./assets/Crows3.png"
import Charity from "./assets/Charity.png"
import Charity2 from "./assets/Charity2.png"
import Charity3 from "./assets/Charity3.png"
import Charity4 from "./assets/Charity4.png"
import Doggy from "./assets/Doggy.png"
import Doggy2 from "./assets/Doggy2.png"
import Doggy3 from "./assets/Doggy3.png"
import Doggy4 from "./assets/Doggy4.png"
import TriTech from "./assets/tri-tech.png"
import TriTech2 from "./assets/tri-tech2.png"
import TriTech3 from "./assets/tri-tech3.png"
import TriTech4 from "./assets/tri-tech4.png"
import Blog from "./assets/Blog.png"
import Blog2 from "./assets/Blog2.png"
import Blog3 from "./assets/Blog3.png"

export interface Description {
  readonly name: string,
  readonly body: string,
  readonly demoLink?: string,
  readonly githubLink: string,
  readonly tools: string[],
  readonly album: any[],
  readonly features: string[],
  readonly difficulties: string[],
  readonly solutions: string[]
}

const data: {[index: string] : Description} = {
  "the-crows": {
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
    album: [Crows, Crows2, Crows3],
    features: ["Dozen outcomes to each event", "Easy Content Creation", "Hidden cards to discover", "Story reacts to your choices"],
    difficulties: [`There needed to be a deep understanding of how the different elements of the game interacted with each other. Each card in the game is just an abstraction(such as Espionage) that changes in meaning and outcome depending on the current story.`,
  `This idea was easy enough for me to quickly come up with, but understanding how to translate that into an application was much harder.`],
    solutions: [`The first thing I did was figuring out how the data should be structured in my application. Using MySQL, I created tables that represented the underlying mechanics in my game. For example, I stored the combination of a card and an event in a separate table while the actual result of that combination was stored in another separate table.`,
  `Since I already built my data structure before I wrote my first line of code, it was always clear to me what should be the next step for me once I started writing code. I was able to smoothly implement features into the game and deploy it with Docker after a month and a half of development.`]
  },


  "bc-charity-portal": {
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
    album: [Charity, Charity2, Charity3, Charity4],
    features: ["Authentication", "Forums", "Program & NPO Profiles", "Responsive", "REST API", "Semantic Searching"],
    difficulties: ["First, there was a need to have a meaningful structure to data in order to manage organizations, programs, moderators and forum discussions.",
  "Second, since the application relies heavily on the user exploring different programs,NGOs and discussions, it needed to be able to display information to the user with minimal page reloads.",
  "I was commited to creating BC Charity Portal without using a frontend framework such as React. I had to find my own way to dynamically load content unto a page."],
    solutions: [`For the data structure issue, I came up with a top-down model that gets wider the further down we go. At the very top were the NGOs, each NGO owned multiple programs, each program owned multiple forum threads and so on.`,
  `The main advantage to the structure is that each document only needs to remember who is directly above them and who are directly below. For example, an NGO only needs to remember what programs it runs, it doesn't need to remember what kind of discussions are happening about the program.`,
  `For the dynamic reloading issue, I've setup routes in my backend that will server-side render HTML pages using EJS and send it to the client. In my frontend I then received these HTML pages, cut out the irrelevant parts(such as HTML the head tag) and injected it into my current HTML using jQuery. This worked for simple pages such as the NPO profiles.`,
  `For complex pages that needed to show multiple programs with pagination, I had to request my server for the raw JSON data and then client-side render it with jQuery.`]
  },


  "go-doggy": {
    name: "Go Doggy",
    body: `The app that won the VanHacks 2019 hackathon!
  Go Doggy aims to make it easier for people to volunteer
  to take sheltered dogs on walks as well as act as a platform
  to showcase the dogs that need to be adopted.`,
    githubLink: "https://github.com/Vlad-Vekslyer/VanHack-2019",
    tools: ["React Native","JavaScript", "Node.js", "Express.js", "MongoDB"],
    album: [Doggy, Doggy2, Doggy3, Doggy4],
    features: ["Walk Scheduling", "Walk Meetups", "Dog Index", "Dog Profiles"],
    difficulties: [`Since It was my first time developing a mobile app and we had to finish the application in 36 hours for the hackathon, many thing about React Native were catching me off guard such as how the layout works.`,
  `Another difficulty we had as a team was deciding what exactly we will be developing: New ideas were often brought up by the team but decisions about our application were not being finalized.`],
    solutions: [`I managed to get over my own blockers with React Native by communicating with the team about my confusions with the framework. I've found that communication was a much better way for me to get over my blockers since my team understood that I was coming from a web development background. My team could quickly explain to me what parts of my knowledge don't apply to mobile development.`,
  `To help unblock the team during our brainstorming, I recognized the lack of concrete decisions being made about the application and directed the discussion towards desicion-making. I did so by calling for a vote whenever a big decision had to be made, stirring the conversation away from any off-topic discussions and announcing any final decisions being made in order to move on to the next topic.`]
  },


  "tri-tech": {
    name: "Tri Tech",
    body: `A website for a fictional tech consulting company named Tri-Tech Co. This project was done in a team setting using Git with a deadline to simulate a real-life project.
  Primarily, the website is meant to convey to visitors what Tri-Tech is and to provide an insight on the people who run the company.`,
    demoLink: "https://lucid-benz-f12be9.netlify.com/",
    githubLink: "https://github.com/Vlad-Vekslyer/tri-tech",
    tools: ["HTML5", "Sass","React", "JavaScript", "Git"],
    album: [TriTech, TriTech2, TriTech3, TriTech4],
    features: ["Responsive", 'Interactive Advisory Network', 'Contact Form', 'Press Section'],
    difficulties: [`With a two week window to complete the project, the development needed to be going as smooth as possible in order to insure both stability and quality by the deadline`],
    solutions: [`Project guidelines were setup, the overall structure of the project was clearly defined and the workload was divided into isolated pages. This approach allowed team members to focus on their own page while keeping the integration of the pages later on simple.`,
  `Using Git, team members had to create their own feature branch and then submit pull requests. I would review the code to make sure it complies with the guidelines, that it's overall readable and that it doesn't conflict with any other code in the program.`,
  `In addition, communication was established between the team members to insure that each member is fully aware of what everyone is doing.`]
  },

  "blog-pub": {
    name: "Blog Pub",
    body: `Blog Pub is a community-sourced newsletter website where users can collaborate together to create articles written with the different perspectives of the users that contributed. Blog Pub provides agency to each contributor while maintaining systems that will help moderate the contributions.`,
    demoLink: "https://blog-pub.herokuapp.com/",
    githubLink: 'https://github.com/Vlad-Vekslyer/blog-pub',
    tools: ['PHP', 'Nginx', 'MySQL', 'TensorFlow.js', 'HTML5', 'Sass', 'JavaScript', 'Express.js'],
    album: [Blog, Blog2, Blog3],
    features: ['Text editor written from scratch', 'AI-assisted moderation', 'Mobile-friendly design', 'Authentication'],
    difficulties: [`Most of my backend experience came from using Node.js with the Express framework, which abstracts many parts of server-side code. Using plain PHP with Nginx as the web server challenged my perception of how the backend works, I found that some of my assumptions were invalid when I started working with Nginx.`,
`My second difficulty was building the text editor for Blog Pug. I've decided to challenge myself and build the text editor from scratch instead of using the built-in tools to create the text editor. Another reason to do this was because the built-in tools were deprecated.`,
`Lastly, I was a newcomer to AI, and using machine learning with PHP was problematic due to the lack of well-documented and optimized machine-learning libraries for PHP.`],
    solutions: [`After following a tutorial to get PHP and Nginx setup, and exploring enough of Nginx's configuration to get a rough idea of how Nginx works, I started to look for opportunities in my project to utilize Nginx more. I changed my root folder structure, setup SSL locally, put my Node server behind a reverse proxy, handled CORS all via Nginx. The more robust I made my Nginx server, the more I understood it.`,
`To circumvent PHP's limited AI support, I decided to add a Note+Express server to my stack in order to use Tensorflow.js. Another reason for adding Node to the stack instead of using Tensorflow.js in the frontend was that the AI was meant to assist in the website's moderation and therefore it would be a security risk to have it exposed to the public. Before I even started using Tensorflow, I took the time to learn some of the concepts and math behind machine learning algorithms.
It was important to me to have a conceptual and partially technical understanding of AI before using it. Implementing and using Tensorflow's pre-trained models was a straightforward process from there.`,
`Creating the text editor was an especially difficult process, I've decided to create my own syntax which I will wrap around text that was selected in the front end which would then be sent to the backend to be escaped and processed into HTML markup.
Processing custom syntax into HTML was a straightforward solution in the backend. For the frontend, I had to do a lot of research on DOM Selections,Nodes and Ranges in order to pick out the coordinates of the text that was selected.`,
`Properly wrapping the selected text required me to research Regular Expressions in more detail and to come up with a fool-proof algorithm to always wrap the selected text appropriatly. I took the opportunity to also implement the algorithm using functional programming.
At the end, creating the text editor helped me gain a deeper understanding of the DOM, Regular Expression and Functional Programming.`]
  }
}

export default data
