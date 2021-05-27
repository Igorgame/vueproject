<template>
  <div class="container">           
          <table class="table">
        <thead>
          <tr>
            <th scope="col">Фамилия</th>
            <th scope="col">Имя</th>
            <th scope="col">Отчество</th>
            <th scope="col">Телефон</th>
            <th scope="col">Почта</th>
            <th scope="col">Роль</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ломов</td>
            <td>Игорь</td>
            <td>Васильевич</td>
            <td>8 888 800 88 08</td>
            <td>igor.lomov@gmail.com</td>
            <td>admin</td>
          </tr>

            <tr>
            <td>Петров</td>
            <td>Станислав</td>
            <td>Владимирович</td>
            <td>8 999 555 12 12</td>
            <td>stas@mail.com</td>
            <td>executor</td>
          </tr>

          <tr>
            <td>Павлович</td>
            <td>Евгений</td>
            <td>Владимирович</td>
            <td>8 888 887 77 77</td>
            <td>evgen@mail.com</td>
            <td>customer</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>



<style scoped>
.table 
{
  overflow: scroll;
}
</style>
