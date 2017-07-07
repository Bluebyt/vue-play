<template>
  <div class="play-tabs" ref="panel" v-show="bottomPanelExpanded">
    <div class="resize-indicator" v-if="resizing">H: {{ tabHeight }}px</div>
    <div ref="header" class="tab-header" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
      <div class="tabs-wrapper">
        <span
          v-if="markdown"
          class="title"
          :class="{active: active === 'markdown'}"
          @mousedown.stop
          @click="updateActiveTab('markdown')">
          <svg id="i-book" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
            <path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
          </svg>
          Styleguide
        </span>
        <span
          v-if="layout"
          class="title"
          :class="{active: active === 'layout'}"
          @mousedown.stop
          @click="updateActiveTab('layout')">
          <!-- Design icon by Icons8 -->
          <svg id="i-code"width="32" height="32" viewBox="0 0 50 50" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round">
            <path style="text-indent:0;text-align:start;line-height:normal;text-transform:none;block-progression:tb;-inkscape-font-specification:Bitstream Vera Sans" d="M 9.9375 0.53125 L 9.21875 1.21875 L 1.21875 9.21875 L 0.53125 9.9375 L 1.21875 10.65625 L 16.84375 26.28125 L 4.3125 38.8125 A 1.0001 1.0001 0 0 0 4.03125 39.25 L 2.03125 46.75 A 1.0001 1.0001 0 0 0 3.25 47.96875 L 10.75 45.96875 A 1.0001 1.0001 0 0 0 11.1875 45.6875 L 45.75 11.125 C 45.745 11.129 46.5625 10.3125 46.5625 10.3125 C 48.4635 8.4115 48.4615 5.3375 46.5625 3.4375 C 44.6595 1.5355 41.5885 1.5375 39.6875 3.4375 L 38.875 4.25 L 26.28125 16.84375 L 10.65625 1.21875 L 9.9375 0.53125 z M 9.9375 3.375 L 11.5625 5 L 10.28125 6.28125 L 11.71875 7.71875 L 13 6.4375 L 14.5625 8 L 12.28125 10.28125 L 13.71875 11.71875 L 16 9.4375 L 17.5625 11 L 16.28125 12.28125 L 17.71875 13.71875 L 19 12.4375 L 20.5625 14 L 18.28125 16.28125 L 19.71875 17.71875 L 22 15.4375 L 23.5625 17 L 22.28125 18.28125 L 23.5625 19.5625 L 18.28125 24.84375 L 3.375 9.9375 L 9.9375 3.375 z M 40.28125 5.65625 L 44.34375 9.71875 L 9.96875 44.09375 L 5.90625 40.03125 L 40.28125 5.65625 z M 34 24.59375 L 33.28125 25.28125 L 31.28125 27.28125 L 32.71875 28.71875 L 34 27.4375 L 35.5625 29 L 33.28125 31.28125 L 34.71875 32.71875 L 37 30.4375 L 38.5625 32 L 37.28125 33.28125 L 38.71875 34.71875 L 40 33.4375 L 41.5625 35 L 39.28125 37.28125 L 40.71875 38.71875 L 43 36.4375 L 44.5625 38 L 43.28125 39.28125 L 44.71875 40.71875 L 46 39.4375 L 46.625 40.0625 L 40.0625 46.625 L 26 32.59375 L 24.59375 34 L 39.34375 48.78125 L 40.0625 49.46875 L 40.78125 48.78125 L 48.78125 40.78125 L 49.46875 40.0625 L 48.78125 39.34375 L 34 24.59375 z"></path>
          </svg>
          Layout
        </span>
        <span
          v-if="example"
          class="title"
          :class="{active: active === 'example'}"
          @mousedown.stop
          @click="updateActiveTab('example')">
          <svg id="i-code" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
              <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
          </svg>
          Example
        </span>
        <span
          class="title"
          :class="{active: active === 'console'}"
          @mousedown.stop
          @click="updateActiveTab('console')">
          <svg id="i-bell" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
            <path d="M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6" />
          </svg>
          console<sup v-if="logs.length > 0" class="logs-count">{{ logs.length }}</sup>
        </span>
        <div class="tab-actions">
          <span
            v-if="logs.length > 0 && active === 'console'"
            class="tab-action hint--top-left hint--rounded"
            aria-label="clean logs"
            @mousedown.stop
            @click="clearCurrentLogs">
            <svg id="i-trash" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.25%">
              <path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div class="tabs-content">
      <div
        ref="body"
        class="tab-body"
        v-if="active ==='markdown'"
        :style="{minHeight: tabHeight + 'px'}">
        <vue-markdown :source="markdown" class="markdown-body"></vue-markdown>
      </div>
      <div
        ref="body"
        class="tab-body"
        v-if="active ==='layout'"
        :style="{minHeight: tabHeight + 'px'}">
        <vue-markdown :source="layout" class="markdown-body"></vue-markdown>
      </div>
      <div
        ref="body"
        class="tab-body"
        v-if="active === 'example'"
        :style="{minHeight: tabHeight + 'px'}">
        <pre><code v-html="highlightedExample"></code></pre>
      </div>
      <div
        ref="body"
        class="tab-body console-body"
        v-if="active ==='console'"
        :style="{minHeight: tabHeight + 'px'}">
        <div v-for="log in logs" class="console-item">
          <pre><code v-html="log.data"></code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import highlight from 'utils/highlight'
  import {preventSelectStart, preventSelectStop} from 'utils/prevent-select'

  export default {
    name: 'console',
    props: {
      example: {
        type: String
      },
      layout: {
        type: String,
      },
      markdown: {
        type: String
      },
      setHeight: {
        type: Function,
      }
    },
    computed: {
      ...mapGetters([
        'logs',
        'bottomPanelExpanded'
      ]),
      highlightedExample() {
        if (!this.example) {
          return
        }
        return highlight.highlightAuto(this.example).value
      },
      active() {
        const tab = this.$store.getters.activeTab
        if (tab === 'console' || (tab && this[tab])) {
          return tab
        }
        return this.markdown ? 'markdown' : 'console'
      }
    },
    data() {
      return {
        tabHeight: 200,
        startY: null,
        originalHeight: null,
        resizing: false
      }
    },

    mounted() {
      this.boundary = {
        min: 200,
        max: 800
      }
    },

    methods: {
      ...mapActions([
        'setBottomPanelHeight',
        'clearLogs',
        'updateActiveTab'
      ]),
      handleMouseDown({clientY}) {
        this.resizing = true
        this.startY = clientY
        this.originalHeight = parseInt(this.$refs.body.getBoundingClientRect().height, 10) || 0
        document.addEventListener('mousemove', this.handleMouseMove)
        document.addEventListener('mouseup', this.handleMouseUp)
        preventSelectStart()
      },

      handleMouseMove({clientY}) {
        if (!this.resizing) {
          return
        }
        const height = this.originalHeight - clientY + this.startY;
        if (height < window.innerHeight * 0.2 || height > window.innerHeight * 0.7) {
          return;
        }
        this.setTabHeight(height);
        this.setHeight(height);
      },

      handleMouseUp() {
        this.resizing = false
        this.setTabHeight(this.tabHeight)
        document.removeEventListener('mousemove', this.handleMouseMove)
        document.removeEventListener('mouseup', this.handleMouseUp)
        preventSelectStop()
      },

      clearCurrentLogs() {
        const {scenario, spot} = this.$route.query
        this.clearLogs({scenario, spot})
      },

      setTabHeight(height) {
        this.tabHeight = height
      }
    }
  }
</script>

<style src="highlight.js/styles/github"></style>
<style src="hint.css/hint.css"></style>

<style scoped>
  .play-tabs {
    border-top: 1px solid #e2e2e2;
    position: relative;
    flex-grow: 1;

    .tab-header {
      height: 27px;
      line-height: 26px;
      font-size: 12px;
      border-bottom: 1px solid #e2e2e2;
      user-select: none;
      display: flex;
      justify-content: center;

      svg {
        height: 16px;
        color: #999;
      }
      .title {
        text-transform: uppercase;
        color: #999;
        display: inline-flex;
        align-items: center;
        background-color: white;
        cursor: pointer;
        position: relative;
        padding: 0 10px;
        svg {
          margin-top: -2px;
        }
        &.active {
          color: #333;
          background-color: rgba(200, 200, 200, 0.3);
          svg {
            color: #333;
          }
        }
        &:hover {
          color: #666;
        }
        .logs-count {
          color: white;
          background-color: #42b983;
          height: 14px;
          line-height: 50%;
          border-radius: 33px;
          padding: 5px;
          margin-left: 5px;
        }
      }
    }
    .tab-body {
      height: 100%;
      width: 100%;
      max-width: 800px;
      padding: 0 30px;
    }
    .console-item:not(:first-child) {
      border-top: 1px solid #f0f0f0;
    }
    .tab-actions {
      float: right;
      height: 26px;
      .tab-action {
        display: inline-flex;
        align-items: center;
        height: 26px;
        cursor: pointer;
        &:hover {
          svg {
            color: #333;
          }
        }
      }
    }
    pre {
      padding: 10px;
      margin: 0;
    }
  }
  .tabs-wrapper {
    max-width: 800px;
    width: 100%;
    padding: 0 30px;
  }
  .tabs-content {
    width: 100%;
    display: flex;
    justify-content: center;
    height: calc(100% - 47px);
    overflow-y: auto;
    padding: 20px 0;
  }
</style>
