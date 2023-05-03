import { defineStore } from "pinia";
//import Projects from "../src/components/Projects.vue";
type projectStructure = {
  id: number;
  visible: boolean;
  name: string;
  phoneImg: string;
  tabletImg?: string;
  desktopImg?: string;
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
        visible: true,
        name: "Tic Tac Toe",
        phoneImg: "url(src/assets/Tictactoe_Phone.jpg)",
        tabletImg: "url(src/assets/Tictactoe_Tablet.png)",
        desktopImg: "url(src/assets/Tictactoe_desktop.png)",
        text1: "Here you can play tic tac toe alone or together with a friend.",
        techStack: "Vue3 Vite with Option API,Java Script HTML5 CSS3",
        web: "https://tictactoe-x.netlify.app",
        github: "https://github.com/katja-roehlig/tic-tac-toe-vite",
      },

      <projectStructure>{
        id: 2,
        visible: false,
        name: "Shopping List",
        phoneImg: "url(src/assets/Shopping_Phone.jpg)",
        tabletImg: "url(src/assets/Shopping_Tablet.png)",
        desktopImg: "",
        text1:
          "Shopping List helps you not to forget any items while you are shopping",
        techStack: "TypeScript, JavaScript, HTML5, SCSS",
        web: "https://shopping-pur.netlify.app",
        github: "https://github.com/katja-roehlig/shopping-list",
      },
      <projectStructure>{
        id: 3,
        visible: false,
        name: "Birthday Card",
        phoneImg: "url(src/assets/Birthday_Phone.jpg)",
        tabletImg: "url(src/assets/Birthday_Tablet.png)",
        desktopImg: "url(src/assets/Birthday_Desktop.png)",
        text1: "You need a crazy birthday card?",
        text2: "Try this digital one - it is animated :-)!",
        techStack: "Vue3 Vite with Composition API, JavaScript, HTML5, CSS",
        web: "https://birthday-card-1.app",
        github: "https://github.com/katja-roehlig/birthday-card-1",
      },
      <projectStructure>{
        id: 4,
        visible: false,
        name: "Sock-o-mat",
        phoneImg: "url(src/assets/Sockomat_Phone.jpg)",
        tabletImg: "",
        desktopImg: "",
        text1: "You are knitting socks?",
        text2: "Try this one to organize your great work!",
        techStack:
          "Vue3 CLI with Options API and router, Java Script, HTML5, CSS3",
        web: "https://sockomat.netlify.app",
        github: "https://github.com/katja-roehlig/sock-o-mat",
      },
      <projectStructure>{
        id: 5,
        visible: false,
        name: "Password Check",
        phoneImg: "url(src/assets/Password_Phone.jpg)",
        tabletImg: "url(src/assets/Password_Tablet.png)",
        desktopImg: "url(src/assets/Password_Desktop.png)",
        text1: "Choose a password, a RALLY good password!",
        techStack: "Vue3 CDN with Options API, Java Script, HTML5, CSS3",
        web: "https://katja-roehlig.github.io/password-toggle-with-vue",
        github: "https://github.com/katja-roehlig/password-toggle-with-vue",
      },
    ],
  }),
});
