import Vue from 'vue'
import Vuex from 'vuex'

export function createStore() {
    return new Vuex.Store({
        state: {
            armyData: {
                germany: {}
            },
            isNationLoaded: false
        },
        mutations: {
            updateGermanArmyObject (state, data) {
                state.armyData.germany = data;
            },
            updateIsNationLoaded (state, data) {
                state.isNationLoaded = data;
            }
        },
        getters: {
            returnArmyData: state => {
                return state.armyData;
            },
            returnGermanArmyData: state => {
                return state.armyData.germany;
            },
            returnIsNationLoaded: state => {
                return state.isNationLoaded;
            }
        },
        actions: {
            getGermanArmy(context) {
                return new Promise((resolve) => {
                    Vue.http.get('/rs/getGermanArmyData').then(response => {
                        context.commit('updateGermanArmyObject', response.body);
                        resolve();
                    }, response => {
                    // error callback
                    });
                });
            }
        }
    });
}
