<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><router-link to="/portfolio" activeClass="active">Portfolio</router-link></li>
                    <li><router-link to="/stocks" activeClass="active">Stocks</router-link></li>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ $filters.currency(funds) }}</strong>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day</a></li>
                    <li class="dropdown" :class="{open: isDropdownOpen}" @click="isDropdownOpen = !isDropdownOpen">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        funds() {
            return this.$store.getters['portfolio/funds'];
        }
    },
    methods: {
        ...mapActions({
            randomizeStocks: 'stocks/randomizeStocks',
            saveStockData: 'portfolio/saveData',
            loadStockData: 'portfolio/loadData'
        }),
        endDay() {
            this.randomizeStocks();
        },
        saveData() {
            this.saveStockData();
        },
        loadData() {
            this.loadStockData();
        }
    }
}
</script>