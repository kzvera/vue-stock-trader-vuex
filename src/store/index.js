import { createStore } from 'vuex';
import stockModule from './modules/stocks/index';
import portfolioModule from './modules/porfolio';

export default createStore({
  modules: {
    stocks: stockModule,
    portfolio: portfolioModule
  }
})
