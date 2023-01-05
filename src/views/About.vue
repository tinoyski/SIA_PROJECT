<template>
  <div id="about">
    <b-jumbotron>
      <template #header>About Us</template>

      <template #lead>
        Learn more about how we manage and handle our products in order to give
        you the best experiece possible!
      </template>
      <hr class="my-4" />
    </b-jumbotron>
    <section class="container">
      <h2>Who we are</h2>
      <hr class="my-4" />
      <br />
      <img src="@/assets/img/meeting.jpg" class="img-fluid" alt="meeting" />
      <em>
        <span
          >Photo by
          <a
            href="https://unsplash.com/@brookecagle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Brooke Cagle</a
          >
          on
          <a
            href="https://unsplash.com/s/photos/teamwork?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Unsplash</a
          ></span
        >
      </em>
      <br />
      <br />
      <p style="font-size: +20px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolorum
        magni est asperiores excepturi maxime voluptate dignissimos vitae,
        suscipit, temporibus maiores beatae accusamus adipisci consectetur
        provident nostrum voluptates itaque corporis.
      </p>
      <br />
      <h1>Our Products</h1>
      <hr class="my-4" />
      <p style="font-size: +20px">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eius
        cumque eos ea iure corporis voluptates perferendis totam. Vel excepturi
        nobis non quam aliquam ipsa, optio molestias itaque laborum repudiandae!
      </p>
      <br />
      <br />
      <div>
        <h3>Pedigree</h3>
        <hr class="my-4" />
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/zCPY_LsXDDo"
          allowfullscreen
        ></b-embed>
        <p class="sm" style="text-align: left">
          Taken from
          <a href="https://www.youtube.com/watch?v=zCPY_LsXDDo">YouTube</a>
        </p>
      </div>
      <div>
        <h3>Cuties Catz</h3>
        <hr class="my-4" />
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/fVIoxuC_-KQ"
          allowfullscreen
        ></b-embed>
        <p class="sm" style="text-align: left">
          Taken from
          <a href="https://www.youtube.com/watch?v=fVIoxuC_-KQ">YouTube</a>
        </p>
      </div>
    </section>
  </div>
</template>
