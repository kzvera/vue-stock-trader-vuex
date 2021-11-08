export default {
    stockPortfolio(state, _, rootState) {
        return state.stocks.map(stock => {
            const record = rootState.stocks.stocks.find(element => element.id == stock.id);

            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds(state) {
        return state.funds;
    }
}