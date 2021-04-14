<template>
    <div class="w-full">
        <Hero line1="Merci de votre achat !" :line2="'ID de Transaction : ' + order.transaction_id"></Hero>
        <div class="w-full px-4 md:px-12 mt-8 overflow-auto">
            <table class="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200 rounded-tl rounded-bl">Produit</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Quantité</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-200">Prix</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="item in order.products" :key="item.id">
                    <td class="p-4" v-text="item.name"></td>
                    <td class="p-4" v-text="item.pivot.quantity"></td>
                    <td class="p-4" v-text="cartLineTotal(item)"></td>
                </tr>
                <tr>
                    <td class="p-4 font-bold">Montant Total</td>
                    <td class="p-4 font-bold" v-text="orderQuantity"></td>
                    <td class="p-4 font-bold" v-text="orderTotal"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name:'summary',
        props: ['app'],
        methods: {
            cartLineTotal(item) {
                let amount = item.price * item.pivot.quantity;
                amount = (amount / 100);

                return amount.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
            }
        },
        computed: {
            order() {
                return this.$store.state.order;
            },
            orderQuantity() {
                return this.$store.state.order.products.reduce((acc, item) => acc + item.pivot.quantity, 0);
            },
            orderTotal() {
                let amount = this.$store.state.order.products.reduce((acc, item) => acc + (item.price * item.pivot.quantity), 0);
                amount = (amount / 100);

                return amount.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
            }
        }
    }
</script>
