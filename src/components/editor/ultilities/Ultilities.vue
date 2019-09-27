<template>
    <div class="h-full bg-gray-800 border-l border-gray-900 ">
        <div class="navigation pt-2 bg-gray-900">
            <ul class="flex">
                <li :class="{'cursor-pointer': selected !== 1}">
                    <div class="text-white inline-block py-2 px-4" :class="{active: selected === 1}" @click="switchTab(1)">
                        <font-awesome-icon icon="terminal" class="text-gray-500"></font-awesome-icon>
                        <span class="ml-2">Console</span>
                    </div>
                </li>
                <li :class="{'cursor-pointer': selected !== 2}">
                    <div class="bg-gray-900 inline-block py-2 px-4 text-white ml-4" :class="{active: selected === 2}" @click="switchTab(2)">
                        <font-awesome-icon icon="sticky-note" class="text-gray-500"></font-awesome-icon>
                        <span class="ml-2">Notes</span>
                    </div>
                </li>
                <li :class="{'cursor-pointer': selected !== 3}">
                    <div class="bg-gray-900 inline-block py-2 px-4 text-white ml-4" :class="{active: selected === 3}" @click="switchTab(3)">
                        <font-awesome-icon icon="chalkboard" class="text-gray-500"></font-awesome-icon>
                        <span class="ml-2">Whiteboard</span>
                    </div>
                </li>
                <li :class="{'cursor-pointer': selected !== 4}">
                    <div class="bg-gray-900 inline-block py-2 px-4 text-white ml-4" :class="{active: selected === 4}" @click="switchTab(4)">
                        <font-awesome-icon icon="file-pdf" class="text-gray-500"></font-awesome-icon>
                        <span class="ml-2">Documents</span>
                    </div>
                </li>
                <li :class="{'cursor-pointer': selected !== 5}">
                    <div class="bg-gray-900 inline-block py-2 px-4 text-white ml-4" :class="{active: selected === 5}" @click="switchTab(5)">
                        <font-awesome-icon icon="cog" class="text-gray-500"></font-awesome-icon>
                        <span class="ml-2">Settings</span>
                    </div>
                </li>
            </ul>
        </div>
        <div id="utility-container" class="h-full w-full z-10">
            <Console v-show="selected === 1"/>
            <NotePad v-show="selected === 2"/>
            <Whiteboard v-show="selected == 3"/>
            <Documents v-show="selected === 4" />
            <Settings v-show="selected === 5"/>
        </div>
        <!-- TODO: Connection details component  -->
        <!-- TODO: Whiteboard component  -->
    </div>
</template>

<script>
import Console from './Console';
import NotePad from './NotePad';
import Whiteboard from './Whiteboard';
import Documents from './Documents'
import Settings from './Settings'
export default {
  name: 'utilities',
  components: {
      Console,
      NotePad,
      Whiteboard,
      Documents,
      Settings
  },
  data () {
      return {
        selected: 1
      }
  },
  methods: {
    switchTab(tab) {
        if(this.selected === tab) return;
        this.selected = tab;
    }
  }

}
</script>

<style lang="css" scoped>
.active {
    @apply bg-gray-800;
    @apply border-gray-800;
    @apply border-l;
    @apply border-t;
    @apply border-r;
    @apply rounded-t;
    @apply -mb-px;
    /* @apply py-2; */
    /* @apply font-semibold; */
    @apply cursor-default;
}

</style>
