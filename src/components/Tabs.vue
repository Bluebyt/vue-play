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
        :style="{padding: '10px', minHeight: tabHeight + 'px'}">
        <vue-markdown :source="markdown" class="markdown-styled"></vue-markdown>
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
      padding: 0 5px;
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
        svg {
          margin-top: -2px;
        }
        &.active {
          color: #333;
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
      overflow: auto;
      height: 100%;
      width: 100%;
      max-width: 800px
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
  }
  .tabs-content {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
