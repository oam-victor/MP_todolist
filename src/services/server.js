import { createServer, Model } from "miragejs";

// eslint-disable-next-line import/no-anonymous-default-export
export const myServer = () => {
  let gohan = 'https://conteudo.imguol.com.br/c/entretenimento/9c/2017/07/14/gohan-1500057808905_v2_900x506.jpg';
  let vegeta = 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2017/11/dragon-ball-super-vegeta.jpg';
  let goku = 'https://sm.ign.com/t/ign_br/screenshot/default/goku_an6e.h720.jpg';
  
  createServer({
    
    models: {
        task: Model,
    },

    seeds(myServer){
        myServer.create('task', {
            title: "task1",
            description: "do this",
            status: "DOING",
            img: goku,
            label: 'urgent',
  
        });
        myServer.create('task', {
            title: "task2",
            description: "do that",
            status: "DOING",
            img: vegeta,
            label: 'important',
  
          });
        myServer.create('task', {
          title: "task3",
          description: "do that",
          status: "DONE",
          img: gohan,
          label: 'later',

      });
      myServer.create('task', {
        title: "task4",
        description: "do something",
        status: "DOING",
        img: gohan,
        label: '',
    });

    },


    routes() {
      this.get("/api/tasks", (schema) => {
        return schema.tasks.all();
      })

      this.post("/api/tasks", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.tasks.create(attrs);
      })

      this.delete('api/tasks/:id', (schema,request) =>{
        let id = request.params.id;
        return schema.tasks.find(id).destroy();
      })

      this.put('api/tasks/:id', (schema,request) =>{
        let id = request.params.id;
        return schema.tasks.find(id).update({wasDragged: true});
      })
    },
  });
};
