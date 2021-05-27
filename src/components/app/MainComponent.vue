<template>
    <header>
        <div class="bd-example">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/carousel1.jpeg" width="600" height="400" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Качество</h5>
                  <p>Наши специалисты качественно выполняют свою работу.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/carousel2.jpg" width="600" height="400" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Ответственность</h5>
                  <p>Наши специалисты выполняют поставленные задачи в срок и серьзно относятся к делу.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/carousel3.jpg" width="600" height="400" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Разнообразие</h5>
                  <p>Большой спектр предоставляемых услуг, который подойдёт практически для любого клиента.</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </header>


<!-- услуги-->
  <div class="container">
    <h1 class="my-4">Предоставляемые услуги</h1>
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Стекольные работы</h4>
          <div class="card-body">
            <p class="card-text">Остекление наружных оконных и дверных проемов зданий производят на первом этапе черновой отделки.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Штукатурные работы</h4>
          <div class="card-body">
            <p class="card-text">Оштукатуривание фасадов, внутренних стен, потолков  — обязательная часть работ по отделке.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Малярные работы</h4>
          <div class="card-body">
            <p class="card-text">Малярные работы – это окраска поверхностей  с целями защиты от внешней среды, обеспечения санитарно-гигиенических требований, улучшения внешнего вида. Малярные краски изготавливают на водной или неводной основе.</p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Облицовочные работы</h4>
          <div class="card-body">
            <p class="card-text">Облицовочные работы заключаются в отделке фасадов, наружных и внутренних стен, потолков и полов керамической плиткой, сайдинговыми панелями, керамическим и природным гранитом, искусственным и натуральным камнем и прочими облицовочными материалами.</p>
          </div>
        </div>
      </div>

    <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Наклейка обоев</h4>
          <div class="card-body">
            <p class="card-text">Оклеивание стен обоями – завершающий этап отделки помещений, за исключением окраски или покрытия лаком полов. Рынок отделочных материалов насыщен рулонными материалами различных фактур, расцветок и качественных характеристик.</p>
          </div>
        </div>
      </div>
    <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Устройство напольного покрытия</h4>
          <div class="card-body">
            <p class="card-text">Настил финишного напольного покрытия завершает работы по отделке дома. Разнообразие современных материалов позволяет удовлетворить вкусы любого покупателя. </p>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <!-- обратная связь -->
    <div class="col-lg-4 mb-4">
        <h3>Обратная связь</h3>
        <p>
          <span title="Phone">Телефон</span>: (000) 000-0000
        </p>
        <p>
          <span title="Email">Email</span>:
          <a href="mailto:name@example.com">name@example.com
          </a>
        </p>
        <p>
          <span title="Hours">График работы</span>: Понедельник - Пятница: 9:00 до 18:00
        </p>
      </div>
    </div>

  <!-- подвал -->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">ООО "Константа-С"</p>
    </div>
  </footer>
</template>