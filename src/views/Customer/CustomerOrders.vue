<template>
    <div>
      <span class="heading">Заказы</span>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Заказ</th>
            <th scope="col">Адрес</th>
            <th scope="col">Дата начала</th>
            <th scope="col">Заказчик</th>
            <th scope="col">Исполнитель</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>glassing</td>
            <td>г.Томск, ул. Вершинина, д.22</td>
            <td>2021-04-01</td>
            <td>Синёв Евгений</td>
            <td>Петров Станислав</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'OrderList',
  data(){
    return{
      orders: {},
      order: {
        ordername: '',
        address: '',
        startdate: '',
        customer: '',
        executor: ''
      }
    }
  },
}
</script>