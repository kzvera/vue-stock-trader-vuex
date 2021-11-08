export default {
    buyStock(state, payload) {
        const record = state.stocks.find(element => element.id == payload.stockId);

        if (record) {
            record.quantity += payload.quantity;
        } else {
            state.stocks.push({
                id: payload.stockId,
                quantity: payload.quantity
            })
        }

        state.funds -= payload.stockPrice * payload.quantity;
    },
    sellStock(state, payload) {
        const record = state.stocks.find(element => element.id == payload.stockId);

        if (record.quantity > payload.quantity) {
            record.quantity -= payload.quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.funds += payload.stockPrice * payload.quantity;
    },
    setPortfolio(state, payload) {
        state.funds = payload.funds;
        state.stockPortfolio = payload.stockPortfolio ? payload.stockPortfolio : [];
    }
}