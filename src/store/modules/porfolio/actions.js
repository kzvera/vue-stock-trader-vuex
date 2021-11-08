export default {
    buyStock(context, payload) {
        context.commit('buyStock', payload);
    },
    sellStock(context, payload) {
        context.commit('sellStock', payload);
    },
    async saveData(context) {
        const data = {
            funds: context.getters.funds,
            stockPortfolio: context.getters.stockPortfolio,
            stocks: context.rootState.stocks.stocks
        }

        const response = await fetch('https://vue-stock-trader-vuex-default-rtdb.firebaseio.com/data.json', {
            method: 'PUT',
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to save data.');
            throw error;
        }
    },
    async loadData(context) {
        const response = await fetch('https://vue-stock-trader-vuex-default-rtdb.firebaseio.com/data.json');

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch data.');
            throw error;
        }

        const portfolio = {
            stockPortfolio: responseData.stockPortfolio,
            funds: responseData.funds
        }

        context.commit('setPortfolio', portfolio);
    }
}