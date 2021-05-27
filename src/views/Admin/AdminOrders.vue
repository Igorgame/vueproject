<template>
  <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-offset-3 col-md-6">
          <span class="heading">Заказы</span>
          <div class="graph">
            <canvas></canvas>
          </div>
            <section>
                <AdminTable />

            </section>
        </div>
      </div>
  </div>
</template>

<script>
import AdminTable from '@/components/order/AdminTable'

export default {
  name: 'history',
  data: () => ({
    orders: [],
    categories: []
  }),
  async monuted () {

  },

  components: {AdminTable}
}
</script>