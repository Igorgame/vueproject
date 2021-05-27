<template>
    <div class="container">
      <OrderCreate @created="addNewOrder"/>
    </div>
</template>

<script>
import OrderCreate from '@/components/order/OrderCreate'

export default {
  name: 'add-order',
  data: () => ({
        orders: []
    }),
    methods: {
        addNewOrder(order) {
            this.orders.push(order)
            console.log(this.orders)
        }

    },
    components: {
        OrderCreate
    },
}
</script>