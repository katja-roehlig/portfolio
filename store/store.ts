import { defineStore } from "pinia";
//import Projects from "../src/components/Projects.vue";
type projectStructure = [
  {
    id: number;
    name: string;
    phoneImg: string;
    text: string;
    web: string;
    github: string;
  }
];

export const projectStore = defineStore("store", {
  state: () => ({
    projects: [
      {
        id: 0,
        name: "Sock-o-mat",
        phoneImg: "url(src/assets/Sockomat.webp)",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempoinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        web: "https://sockomat.netlify.app",
        github: "https://github.com/katja-roehlig/sock-o-mat",
      },
      {
        id: 1,
        name: "Tic Tac Toe",
        phoneImg: "url(src/assets/Tictactoe_Phone.webp)",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempoinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        web: "https://tictactoe-x.netlify.app",
        github: "https://github.com/katja-roehlig/tic-tac-toe-vite",
      },
      {
        id: 2,
        name: "Shopping List",
        phoneImg: "url(src/assets/ShoppingList_Phone.webp)",
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempoinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et",
        web: "https://shopping-pur.netlify.app",
        github: "https://github.com/katja-roehlig/shopping-list",
      },
    ],
  }),
});
