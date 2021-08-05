import App from "./App.svelte";
import "./TailwindCSS.svelte";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

export default app;
