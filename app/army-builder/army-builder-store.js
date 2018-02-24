import Vue from 'vue'
import Vuex from 'vuex'

export function createStore() {
    return new Vuex.Store({
        state: {
            armyData: {}
        },
        mutations: {
            updateArmyObject (state, data) {
                state.armyData = data;
            }
        },
        actions: {
            getNationArmy(context) {
                return new Promise((resolve) => {
                    Vue.http.get('/rs/getGermanArmyData').then(response => {
                    context.commit('updateArmyObject', response.body);
                    resolve();
                    }, response => {
                    // error callback
                    });
                });
            }
        },
        getters: {
            returnArmyData: state => {
                return state.armyData
            }
        }
    });
}
