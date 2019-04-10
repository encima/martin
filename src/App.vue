<template>
  <div id="app">
    <img src="./assets/anni.jpg" class="annimg">
    <Day v-if="diff > 0" :diff="diff"/>
  </div>
</template>

<script>
import Day from './components/Day.vue'
import {mapState} from 'vuex'

export default {
  name: 'app',
  components: {
    Day
  },
  computed: {
    ...mapState({
      gb: state => state.gb,
      imgClient: state => state.giClient
    })
  },
  data() {
    return {
      diff: 0,
      am: undefined
    }
  },
  mounted() {
    

    if (this.$time(this.gb).diff(new Date(), 'day') > 0) {
      this.diff = this.$time(this.gb).diff(new Date(), 'day')
    }
  }
}
</script>

<style>

body {
  background-color: #00796B;
  color: #fff;
  line-height: 1.6 !important;
  letter-spacing: 3px !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  margin-top: 60px;
}

.annimg:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.annimg {
  border-radius: 50%;
  border: grey 5px solid;
  border-color: #fff;
}


@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
