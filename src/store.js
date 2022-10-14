import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {id: 1, name: 'Nomena', registered: false},
            {id: 2, name: 'Rakoto', registered: false},
            {id: 3, name: 'Chris', registered: false},
            {id: 4, name: 'Michel', registered: false}
        ]
    }
});