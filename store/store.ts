import { defineStore } from "pinia";
//import Projects from "../src/components/Projects.vue";
type projectStructure = {
  id: number;
  visible: boolean;
  name: string;
  phoneImg: string;
  text: string;
  web: string;
  github: string;
};

export const projectStore = defineStore("store", {
  state: () => ({
    projects: [
      <projectStructure>{
        id: 0,
        visible: true,
        name: "Sock-o-mat",
        phoneImg: "url(src/assets/Sockomat.webp)",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempoinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        web: "https://sockomat.netlify.app",
        github: "https://github.com/katja-roehlig/sock-o-mat",
      },
      <projectStructure>{
        id: 1,
        visible: false,
        name: "Tic Tac Toe",
        phoneImg: "url(src/assets/Tictactoe_Phone.webp)",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempoinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        web: "https://tictactoe-x.netlify.app",
        github: "https://github.com/katja-roehlig/tic-tac-toe-vite",
      },
      <projectStructure>{
        id: 2,
        visible: false,
        name: "Shopping List",
        phoneImg: "url(src/assets/ShoppingList_Phone.webp)",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempoinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        web: "https://shopping-pur.netlify.app",
        github: "https://github.com/katja-roehlig/shopping-list",
      },
    ],
  }),
});
