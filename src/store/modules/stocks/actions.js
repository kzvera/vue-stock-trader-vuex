export default {
    async setStocks(context) {
        const response = await fetch('https://vue-stock-trader-vuex-default-rtdb.firebaseio.com/data.json');

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch data.');
            throw error;
        }

        context.commit('setStocks', responseData.stocks);
    },
    randomizeStocks(context) {
        context.commit('randomizeStocks');
    }
}