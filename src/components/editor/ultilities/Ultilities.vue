<template>
    <div class="h-full bg-gray-800 border-l-2 border-gray-700 ">
        <div class="navigation h-12 bg-gray-900">
            <ul class="flex border-b pt-2 border-white h-full">
                <li class="-mb-px flex-grow">
                    <div class="bg-gray-800 inline-block border-white border-l border-t border-r rounded-t py-2 px-8 text-white font-semibold ml-3">
                        <font-awesome-icon icon="terminal" class="text-gray-500"></font-awesome-icon>
                        <a href="#" class="ml-2">Console</a>
                    </div>
                </li>
                <li class="flex-grow">
                    <div class="bg-gray-900 inline-block py-1 px-4 text-white">
                        <font-awesome-icon icon="chalkboard" class="text-gray-500"></font-awesome-icon>
                        <a href="#" class="ml-2">Whiteboard</a>
                    </div>
                </li>
                <li class="flex-grow">
                    <div class="bg-gray-900 inline-block py-1 px-4 text-white">
                        <font-awesome-icon icon="sticky-note" class="text-gray-500"></font-awesome-icon>
                        <a href="#" class="ml-2">Notes</a>
                    </div>
                </li>
                <li class="flex-grow">
                    <div class="bg-gray-900 inline-block py-1 px-4 text-white">
                        <font-awesome-icon icon="user-friends" class="text-gray-500"></font-awesome-icon>
                        <a href="#" class="ml-2">Tutor Details</a>
                    </div>
                </li>
                <li class="flex-grow">
                    <div class="bg-gray-900 inline-block py-1 px-4 text-white">
                        <font-awesome-icon icon="phone-alt" class="text-gray-500"></font-awesome-icon>
                        <a href="#" class="ml-2">Call Settings</a>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <Console/>
        </div>
    </div>
</template>

<script>
import Console from './Console';
export default {
  name: 'utilities',
  components: {
      Console
  }

}
</script>

<style lang="scss" scoped>

</style>
