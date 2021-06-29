<template>
  <div id="app">
    <div class="nav">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row align-v="center">
        
          <b-col><img src="./../public/logo.svg" /></b-col>
          <b-col>
            <div class="search">
              <input type="search" placeholder="Start your Search" />
              <button>Search</button>
            </div>
          </b-col>
          <b-col>
            <button class="two">Become a host</button>
          </b-col>
        
      </b-row>
    </b-container>
    </div>
    <b-container>
      <b-row>
      <div class="text">
        AIRBNB EXPERIENCES
        <h1>
          One-of-a-kind activities <br />
          hosted by experts
        </h1>
        <h3>Introducing Online Experinces</h3>
        <p>Unique activities we can do together, led by a world of hosts.</p>
      </div>
      </b-row>
      <b-row>
        <b-col md="3">
          <b-card
            title="Title"
            img-src="https://placekitten.com/g/300/450"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="3">
          <b-card
            title="Title"
            img-src="https://placekitten.com/g/300/450"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="3">
          <b-card
            title="Title"
            img-src="https://placekitten.com/g/300/450"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col md="3">
          <b-card
            title="Title"
            img-src="https://placekitten.com/g/300/450"
            img-alt="Image"
            img-top
          >
            <b-card-text>
              This card has supporting text below as a natural lead-in to
              additional content.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3">
          <div>
            <button>
              <a href="#">Show all online experiences</a>
            </button>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3">
          <div>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  Components: {
    HelloWorld,
  },
};
</script>

<style>
img {
  width: 90px;
}
nav {
  height: 100px;
  position: fixed;
}
#search {
  border-radius: 40px;
  box-shadow: 1px 1px 10px 1px #ebebeb;
  max-height: 20px;
}
button {
  border-style: none;
}
.search {
  border-radius: 50px;
  border: 0.5px solid rgb(192, 192, 192);
  box-shadow: 1px 1px 10px 1px #ebebeb;
  height: 45px;
}

.search input {
  border-radius: 50px;
  border-style: none;
  background: none;
  padding: 8px;
  margin-left: 20px;
  margin-top: 1px;
  width: 270px;
}
.search input:focus {
  box-decoration-break: none;
}
.search button {
  background-color: rgb(197, 73, 93);
  color: white;
  border-radius: 70px;
  height: 32px;
  font-size: 0.7em;
  margin-top: 6px;
  margin-right: 8px;
  float: right;
}
.nav {
  width: 100%;
  box-shadow: 1px 1px 10px 1px #ebebeb;
  height: 95px;
  padding-top: 25px;
}
.two {
  background-color: white;
  border-radius: 20px;
  padding: 7px;
  float: right;
}
.two:hover {
  background-color: rgb(235, 235, 235, 0.5);
}
/* .cards{
  padding: 0% 20%;
  max-width: 55%;

} */
</style>
