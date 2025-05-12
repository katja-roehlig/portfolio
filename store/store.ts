import { defineStore } from "pinia";

type projectStructure = {
  id: number;
  name: string;
  url: string;
  phoneImg: string;
  tabletImg?: string;
  desktopImg?: string;
  isZoomed: boolean;
  text1: string;
  text2?: string;
  techStack: string;
  web: string;
  github: string;
};

export const projectStore = defineStore("store", {
  state: () => ({
    projects: [
      <projectStructure>{
        id: 1,
        name: "Toolbox Datenkompetenz",
        phoneImg: "url(/img/Toolbox_Phone.jpeg)",
        tabletImg: "url(/img/Toolbox_Tablet.jpeg)",
        desktopImg: "url(/img/Toolbox_Desktop.jpeg)",
        isZoomed: false,
        text1: "My main project the last two years at InfAI. ",
        techStack:
          "Nx, Next.js, ChakraUI, Strapi Cms, Keycloak, Docker, Piwik Pro",
        web: "https://beta.toolboxdatenkompetenz.de/",
        github: "",
      },
      <projectStructure>{
        id: 2,
        name: "Coding Labs",
        phoneImg: "url(/img/Codinglabs_Phone.jpeg)",
        tabletImg: "url(/img/Codinglabs_Tablet.jpeg)",
        desktopImg: "url(/img/Codinglabs_Desktop.jpeg)",
        isZoomed: false,
        text1: "The second project I worked on at InfAI.",
        techStack:
          "Nx, Next.js, ChakraUI, StrapiCms, Keycloak, Docker, Piwik Procoding lan",
        web: "https://beta.codinglabs-projekt.de",
        github: "",
      },
      <projectStructure>{
        id: 3,
        name: "Tic Tac Toe",
        url: "https://tictactoe-x.netlify.app/",
        phoneImg: "url(/img/Tictactoe_Phone.jpeg)",
        tabletImg: "url(/img/Tictactoe_Tablet.jpeg)",
        desktopImg: "url(/img/Tictactoe_Desktop.jpeg)",
        isZoomed: false,
        text1: "Here you can play TicTacToe alone or together with a friend.",
        techStack: "Vue3 Vite with Option API, Java Script, HTML5, CSS3",
        web: "https://tictactoe-x.netlify.app",
        github: "https://github.com/katja-roehlig/tic-tac-toe-vite",
      },

      <projectStructure>{
        id: 4,
        name: "Shopping List",
        phoneImg: "url(/img/Shopping_Phone.jpeg)",
        tabletImg: "url(/img/Shopping_Tablet.jpeg)",
        desktopImg: "",
        isZoomed: false,
        text1:
          "Shopping List helps you not to forget any items while you are shopping",
        techStack: "TypeScript, JavaScript, HTML5, SCSS",
        web: "https://shopping-pur.netlify.app",
        github: "https://github.com/katja-roehlig/shopping-list",
      },
      <projectStructure>{
        id: 5,
        name: "Birthday Card",
        phoneImg: "url(/img/Birthday_Phone.jpeg)",
        tabletImg: "url(/img/Birthday_Tablet.jpeg)",
        desktopImg: "url(/img/Birthday_Desktop.jpeg)",
        isZoomed: false,
        text1: "You need a crazy birthday card?",
        text2: "Try this digital one - it is animated :-)!",
        techStack: "Vue3 Vite with Composition API, JavaScript, HTML5, CSS",
        web: "https://birthday-card-1.netlify.app",
        github: "https://github.com/katja-roehlig/birthday-card-1",
      },
      <projectStructure>{
        id: 6,
        name: "Sock-o-mat",
        phoneImg: "url(/img/Sockomat_Phone.webp)",
        tabletImg: "",
        desktopImg: "",
        isZoomed: false,
        text1: "You are knitting socks?",
        text2: "Try this one to organize your great work!",
        techStack:
          "Vue3 CLI with Options API and router, JavaScript, HTML5, CSS3",
        web: "https://sockomat.netlify.app",
        github: "https://github.com/katja-roehlig/sock-o-mat",
      },
      <projectStructure>{
        id: 7,
        name: "Password Check",
        phoneImg: "url(/img/Password_Phone.jpeg)",
        tabletImg: "url(/img/Password_Tablet.jpeg)",
        desktopImg: "url(/img/Password_Desktop.jpeg)",
        isZoomed: false,
        text1: "Choose a password, a REALLY good password!",
        techStack: "Vue3 CDN with Options API, JavaScript, HTML5, CSS3",
        web: "https://katja-roehlig.github.io/password-toggle-with-vue",
        github: "https://github.com/katja-roehlig/password-toggle-with-vue",
      },
      <projectStructure>{
        id: 8,
        name: "Color Mixer",
        phoneImg: "url(/img/Colormixer_Phone.jpeg)",
        tabletImg: "",
        desktopImg: "url(/img/Colormixer_Desktop.jpeg)",
        isZoomed: false,
        text1:
          "Mix your colors intuitively and get them displayed as a hex number",
        techStack: "JavaScript, HTML5, CSS3",
        web: "https://katja-roehlig.github.io/color-mixer/",
        github: "https://github.com/katja-roehlig/color-mixer",
      },
    ],
  }),
});
