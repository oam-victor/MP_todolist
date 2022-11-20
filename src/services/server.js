import { createServer, Model } from "miragejs";

export const gohan =
"https://conteudo.imguol.com.br/c/entretenimento/9c/2017/07/14/gohan-1500057808905_v2_900x506.jpg";
export const vegeta =
"https://www.comboinfinito.com.br/principal/wp-content/uploads/2017/11/dragon-ball-super-vegeta.jpg";
export const goku =
"https://sm.ign.com/t/ign_br/screenshot/default/goku_an6e.h720.jpg";
export const none =
"https://preview.redd.it/d979jt2y5tz41.jpg?auto=webp&s=0d1077425e15abe2d01c6cb3d21f2333b00f4887";

// eslint-disable-next-line import/no-anonymous-default-export
export const myServer = () => {

  createServer({
    models: {
      task: Model,
    },

    seeds(myServer) {
      myServer.create("task", {
        title: "TASK1",
        description:
          "Teach Trunks how to galick gun",
        status: "DOING",
        img: vegeta,
        label: "important",
      });
      myServer.create("task", {
        title: "TASK2",
        description: "Buy Bulma's birthday present",
        status: "TO DO",
        img: vegeta,
        label: "urgent",
      });
      myServer.create("task", {
        title: "TASK3",
        description: "Take Pan to school",
        status: "DONE",
        img: gohan,
        label: "important",
      });
      myServer.create("task", {
        title: "TASK4",
        description: "do something",
        status: "DONE",
        img: none,
        label: "",
      });

      myServer.create("task", {
        title: "TASK5",
        description: "Teach Goten how to fly",
        status: "TO DO",
        img: goku,
        label: "later",
      });
    },

    routes() {
      this.get("/api/tasks", (schema) => {
        return schema.tasks.all();
      });

      this.post("/api/tasks", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.tasks.create(attrs);
      });

      this.delete("api/tasks/:id", (schema, request) => {
        let id = request.params.id;
        return schema.tasks.find(id).destroy();
      });

      this.put("api/tasks/:id", (schema, request) => {
        let id = request.params.id;
        let json = JSON.parse(request.requestBody);
        return schema.tasks.find(id).update({
          title: json.title,
          status: json.status,
          description: json.description,
          img: json.img,
          label: json.label
        });
      });
    },
  });
};
