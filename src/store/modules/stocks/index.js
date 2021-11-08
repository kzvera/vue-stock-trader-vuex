import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import stocks from '../../../data/stocks';

export default {
    namespaced: true,
    state() {
        return {
            stocks: stocks
        }
    },
    mutations,
    actions,
    getters
}