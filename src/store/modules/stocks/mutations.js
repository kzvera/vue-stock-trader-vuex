export default {
    setStocks(state, payload) {
        state.stocks = payload;
    },
    randomizeStocks(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        })
    }
}