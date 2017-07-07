import Vue from 'vue'
import Vuex from 'vuex'
import {play} from '../src/play'
import MyButton from './MyButton.vue'

Vue.component('my-button', MyButton)

const markdownIpsum = `
# Requiras Thisbes muris ut quoque tu iubent

## Magni noctis ipsa

Lorem markdownum *siccata intabescitque* Monychus adstitit valeant, lenti mali
*quam* nam? Threicio illic; visa calidi nuper ille canit tibi capaci et tecum?

1. Sed sociorum demit ruit facta Eumenides gloria
2. Omnes hoc partes quod Baucis Pterelas animum
3. Successu umbras

Concessit **sollicita singultuque femineis** infracto abdita suspectum
*columbae* cursu, et saxa ubi. Urimur tota concordia scitis cara fugit, ardua,
quorum, pro? Nova maluit movere cum; ait cura admoto datam et est ipse, nova
iuncta ferat nocent. Contingent vitiatas Aegides parte! Fiunt manu restabat, ea
vagos aguntur Iuppiter solet iura?

    capacity(linkArchitecture(virus, kerning, 1));
    if (tebibyte >= openCommercial) {
        viral_drive.cms_gis_vpi(-2);
    }
    map = card_gigabit_sample - keyLatencyVirtual - doubleHypermedia;

## Secundum aura aeterna porrexerat sonant inritare iniustum

Labaret sua timor litus sequuntur cum audaci facta poenaeque faciebat tibi,
atras dum [harundine](http://www.dea-pectora.com/)? Monimenta et deos pennas
adimunt, aliquid operis, iam res! Doloris malas frustraque quae: vestris remis
perveniunt omnes vero inmutat domus: verti suo aut verbere nuntius cum. Utque
est exspectare imperat, [coronae Achilles](http://veniebat.com/subiectis) munus
Naryciusque subit postquam tempore leve. Invisa deorum ire **iuppiter nostra**,
motura, quos acerque.

- Relatu ea tactu debueram
- Ut damno quaeritur vultu quem enim fudit
- Raptaque est nec dum pudor
- Habendus vestros poenas habitantum geniti gratia tibi
- Matri arva comas`;

const config_horizontal = {
  markdown: markdownIpsum,
  example: `<bla />`,
  style: {
    width: '150px',
    height: '150px',
    background: '#0f0',
  },
  orientation: 'horizontal',
};

const config_vertical = {
  markdown: markdownIpsum,
  example: `<bla />`,
  style: {
    width: '150px',
    height: '150px',
    background: '#0f0',
  },
  orientation: 'vertical',
};

play('Button')
  .add('with text', {
    template: `<my-button :handle-click="log">{{ $store.state.count }}</my-button>`,
    store: new Vuex.Store({
      state: {count: 0}
    }),
    methods: {
      log() {
        this.$store.state.count++
      }
    }
  })
  .add('with emoji', `<my-button>🤔</my-button>`)
  .add('colorful', {
    render(h) {
      return h(MyButton, {
        props: {color: 'pink'}
      }, ['hello world'])
    }
  })
  .add('rounded', `<my-button :rounded="true">rounded</my-button>`)
  .add('horizontal test', h => h(MyButton), config_horizontal)
  .add('vertical test', h => h(MyButton), config_vertical)
