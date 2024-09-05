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
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
          {
            text: 'Essere più veloci con il css, esempio di testo molto lungo scritto all\'interno di questo li e potrei continuare a scrivere',
            done: false,
          },
          {
            text: 'Essere più veloci con il css',
            done: false,
          },
        ],
      }
    },
    methods: {
      getItemText: () => this.toDoList.text,
    }
  }).mount('#app')




