// Istanza di vue
const { createApp } = Vue

  createApp({
    data() {
      return {
        toDoList: [
          {
            text: 'Comprare una bella tastiera',
            done: false,
          },
          {
            text: 'Allenamento delle 18.30',
            done: false,
          },
          {
            text: 'Fare degli esercizi di mobilità',
            done: true,
          },
          {
            text: 'Capire meglio il CSS',
            done: false,
          },
          {
            text: 'Fare l\'esercizio del giorno per tempo',
            done: false,
          },
          {
            text: 'Passare del tempo all\'aperto',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: true,
          },
          {
            text: 'Allenarsi ancora con il css',
            done: false,
          },
          {
            text: 'Prevedere quali sia lo stile in seguito ad un determinata aggiunta nel css, facendo attenzione che bootstrap collegato potrebbe rendere questo operazione difficile finché lo si conosce poco',
            done: false,
          },
          {
            text: 'Leggere qualcosa di piacevole',
            done: false,
          },
          {
            text: 'Allenarsi ancora con il css',
            done: false,
          },
          {
            text: 'Allenarsi ancora con il css',
            done: false,
          },
          {
            text: 'Allenarsi ancora con il css',
            done: false,
          },
          {
            text: 'Allenarsi ancora con il css',
            done: false,
          },
          {
            text: 'Allenarsi ancora con il css',
            done: false,
          },
          {
            text: 'Allenarsi ancora con il css',
            done: false,
          },
        ],
      }
    },
    methods: {
      deleteItem (elementIndex) {
        this.toDoList.splice(elementIndex, 1);
        console.log(`E' stato eliminato l'emento d'array con indice ${elementIndex}`);
      },

    }


  }).mount('#app')




