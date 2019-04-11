<template>
  <div class="hello">
    <h1>{{ diff }} days left, chill out!</h1>
    <h2 v-if='day'>In the meantime, how about this book?</h2>
     <md-card class='card' v-if='day'>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{day['title']}}</div>
          <div class="md-subhead">{{day['author']}}</div>
        </md-card-header-text>

        <md-card-media md-medium v-if="gifUrl">
          <a :href="gifUrl"><img :src="gifUrl" alt="I BROKE IT!"></a>
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button><a href="https://cloud.gwillia.ms/#shared-libs/lib/2ee15d1e-d1da-43b7-98dc-8375b4042b99">Listen?</a></md-button>
      </md-card-actions>
    </md-card>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Countdown',
  props: {
    diff: Number
  },
  data() {
      return {
          day: {},
          gifUrl: undefined
      }
  },
  computed: {
    ...mapState({
      days: state => state.days,
      gifAPI: state=> state.gifClient
    })
  },
  mounted() {
      this.day = this.days[this.diff]
      this.gifAPI.random('gifs', {tag: 'birthday'})
        .then((response) => {
            this.gifUrl = response.data.images.fixed_width_small.gif_url
            console.log(this.gifUrl)
        })
        .catch((err) => {

        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
    max-width: 50%;
    margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .hello {
    min-width: 100%;
  }
}
.card {
    background-color: #ff79ff;
}
.md-title {
    color: #757575;
}
</style>
