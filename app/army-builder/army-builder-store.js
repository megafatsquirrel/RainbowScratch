import Vue from 'vue'
import Vuex from 'vuex'

export function createStore() {
    let hq = { type: '', value: 0 };
    let infantry = { type: '', value: 0 };
    let infantry2 = { type: '', value: 0 };
    let total = { type: 'total', value: 0 };

    return new Vuex.Store({
        state: {
            armyData: {
                germany: {}
            },
            isNationLoaded: false,
            currentList: {
                army: '',
                units: [],
                points: {
                    hq,
                    infantry,
                    infantry2,
                    total
                }
            }
        },
        mutations: {
            updateGermanArmyObject (state, data) {
                state.armyData.germany = data;
            },
            updateIsNationLoaded (state, data) {
                state.isNationLoaded = data;
            },
            updateUnitPoints (state, data) {
                if ( data.unitGroup === 'hq' ) {
                    state.currentList.points.hq.value -= data.oldValue;
                    state.currentList.points.hq.value += data.newValue;
                }
            },
            updateCurrentListPoint (state, data) {
                let total = 0;
                for (var unitPoints in state.currentList.points) {
                    if (state.currentList.points[unitPoints].type !== 'total')
                    total += state.currentList.points[unitPoints].value;
                }
                state.currentList.points.total.value = total;
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
