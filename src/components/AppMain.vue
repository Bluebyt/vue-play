<template>
  <div class="main" :style="{width: mainWidth}">
    <div class="view" :class="orientation">
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
      orientation() {
        return this.getScenarioProperty('orientation') ? this.getScenarioProperty('orientation') : 'default';
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

  /* universal styles for .view and .iframe-wrapper */
  .view {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .iframe-wrapper {
    padding: 20px 10px;
    background-color: rgba(200, 200, 200, 0.3);
    display: flex;
    justify-content: center;
    flex-grow: 1;
    overflow-y: auto;
  }
  .description-content {
    flex-grow: 1;
  }
  .iframe {
    width: 100%;
  }

  /* default view (if no orientation is specified) */
  /* show colums for screen-width > 1300px */
  /* show rows for screen-width < 1300px */
  .view.default {
    flex-direction: column;
    @media (min-width: 1300px) {
      flex-direction: row;
    }

  }
  .view.default .iframe-wrapper {
    min-height: 50%; 
    width: 100%;
    @media (min-width: 1300px) {
      height: 100%;
    }
  }
  .view.default .description-content {
    width: 100%;
    @media (min-width: 1300px) {
      height: 100%;
      max-width: 50%;
    }
  }

  /* forced horizontal view */
  .view.horizontal {
    flex-direction: column;
  }

  .view.horizontal .description-content {
    width: 100%;
    height: 40%;
  }

  .view.horizontal .iframe-wrapper {
    width: 100%;
  }

  /* forced vertical view */
  .view.vertical {
    flex-direction: row;
  }

  .view.vertical .description-content {
    height: 100%;
    max-width: 50%;
  }

  .view.vertical .iframe-wrapper {
    height: 100%;
  }

</style>
