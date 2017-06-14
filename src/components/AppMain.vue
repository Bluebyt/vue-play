<template>
  <div class="main" :style="{width: mainWidth}">
    <div class="view">
      <div class="iframe-wrapper">
        <iframe ref="iframe" src="preview.html" class="iframe" frameborder="0" :style="style"></iframe>
      </div>
      <div class='description-content'>
        <tabs
          :layout="layout"
          :markdown="markdown"
          :example="example">
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import findScenario from 'utils/find-scenario'
  import {observeKeyEvents, executeShortcut} from 'utils/key-events'
  import Tabs from './Tabs.vue'

  export default {
    watch: {
      current: 'updateIframe'
    },
    data() {
      return {
        iframeLoaded: false
      }
    },
    mounted() {
      this.updateIframe()
      this.listenChild()
      observeKeyEvents(this.$store)
      this.resizeIframe();
    },
    beforeDestroy() {
      console.log('remove');
      clearTimeout(this.resizeTimeout);
    },
    computed: {
      markdown() {
        return this.getScenarioProperty('markdown');
      },
      layout() {
        return this.getScenarioProperty('layout');
      },
      example() {
        return this.getScenarioProperty('example');
      },
      style() {
        const style = this.getScenarioProperty('style');
        console.log(style);
        return style;
      },
      ...mapGetters(['mainWidth']),
      current() {
        const {spot} = this.$route.query
        const {scenario, component, example, markdown} = findScenario(this.$store.state.app.spots, this.$route.query) || {}

        if (!component) {
          return {}
        }

        return {
          spot, scenario, component, example, markdown,
        }
      },
      currentScenario() {
        return {
          spot: this.current.spot,
          scenario: this.current.scenario
        }
      }
    },
    methods: {
      getScenarioProperty(name) {
        const {config} = findScenario(this.$store.state.app.spots, this.$route.query) || {}
        if (config) {
          return config[name];
        }
      },
      ...mapActions(['addLog', 'updateCurrentScenario', 'setSpots']),
      postMessage() {
        this.$refs.iframe.contentWindow.postMessage({
          type: 'UPDATE_ROUTE',
          payload: this.currentScenario
        }, location.origin)
      },
      updateIframe() {
        if (this.current.scenario) {
          document.title = `${this.current.scenario} - Vue Play`
        } else {
          document.title = 'Vue Play'
        }
        this.resizeIframe();
        this.updateCurrentScenario(this.currentScenario)
        if (this.iframeLoaded) {
          this.postMessage()
        } else {
          this.$refs.iframe.onload = () => {
            this.postMessage()
            this.iframeLoaded = true
            this.resizeIframe();
          }
        }
      },
      resizeIframe() {
        this.resizeTimeout = setTimeout(() => {
          if(this.$refs.iframe.contentWindow.document.body) {
            this.$refs.iframe.style.minHeight = 0;
            this.$refs.iframe.style.minHeight = Math.max(this.$refs.iframe.contentWindow.document.body.scrollHeight, 10) + 'px';
          }
        }, 10);
      },
      listenChild() {
        window.addEventListener('message', ({data}) => {
          if (data.type === 'SET_SPOTS') {
            this.setSpots(JSON.parse(data.payload))
          }
          if (data.type === 'APPLY_SHORTCUT') {
            executeShortcut(this.$store, JSON.parse(data.payload))
          }
          if (data.type === 'ADD_LOG') {
            const {spot, scenario} = this.current
            this.addLog({
              data: data.payload,
              route: {
                spot, scenario
              }
            })
            const consoleEl = document.querySelector('.console-body')
            if (consoleEl) {
              this.$nextTick(() => {
                consoleEl.scrollTop = consoleEl.scrollHeight
              })
            }
          }
        })
      }
    },
    components: {
      Tabs
    }
  }
</script>

<style>
  .play-button {
    border: 1px solid #ccc;
    background-color: white;
    padding: 8px 20px;
    cursor: pointer;
    border-radius: 3px;
    outline: none;
    &:hover {
      background-color: #f9f9f9;
    }
  }
  .play-repo {
    margin-left: 10px;
    color: rgb(66, 185, 131);
    text-decoration: none;
    border-bottom: 1px solid;
    font-size: 12px;
  }
  .play-tabs {
    background-color: white;
    height: 100%;
  }
  .view {
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 1300px) {
      flex-direction: row;
    }
  }
  .description-content {
    width: 100%;
    height: 60%;
    @media (min-width: 1300px) {
      height: 100%;
      width: 55%;
    }
    @media (min-width: 1400px) {
      width: 61.66%;
    }
    @media (min-width: 1600px) {
      width: 68.33%;
    }
    @media (min-width: 1800px) {
      width: 75%;
    }
  }
  .iframe-wrapper {
    width: 100%;
    min-height: 40%;
    @media (min-width: 1300px) {
      width: 45%;
      min-height: 100%;
    }
    @media (min-width: 1400px) {
      width: 41.67%;
    }
    @media (min-width: 1600px) {
      width: 38.33%;
    }
    @media (min-width: 1800px) {
      width: 35%;
    }
    padding: 10px;
    height: 100%;
    background-color: rgba(200, 200, 200, 0.3);
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow-y: auto;
  }
  .iframe {
    width: 100%;
  }
</style>
