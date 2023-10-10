import { defineStore } from 'pinia';

export const useHomeStore = defineStore('authStore', {

    state: () => ({
        valExample: 0,
    }),

    actions: {
        exampleAction(value){
            this.valExample = value;
        }
    }

});