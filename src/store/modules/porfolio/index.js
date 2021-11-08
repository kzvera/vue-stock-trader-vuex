import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            funds: 10000,
            stocks: []
        }
    },
    mutations,
    actions,
    getters
}