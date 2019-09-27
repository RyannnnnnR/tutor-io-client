<template>
    <div id="documents-container" class="bg-charcoal p-6">
        <div id="dropzone" class="border-2 border-dashed border-gray-500 rounded h-full w-full flex flex-col items-center justify-center">
            <!-- <svg class="h-20 w-20 fill-current text-indigo-200 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"/><path d="M38.5 25H27V14a1 1 0 1 0-2 0v11H13.5a1 1 0 1 0 0 2H25v12a1 1 0 1 0 2 0V27h11.5a1 1 0 1 0 0-2z"/></svg> -->
            <svg class="h-20 w-20 fill-current text-blue-200 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M37 22H12a1 1 0 0 0 0 2h25a1 1 0 0 0 0-2zM12 16h10a1 1 0 0 0 0-2H12a1 1 0 0 0 0 2zM38 31a1 1 0 0 0-1-1H12a1 1 0 0 0 0 2h25a1 1 0 0 0 1-1zM30 39a1 1 0 0 0-1-1H12a1 1 0 0 0 0 2h17a1 1 0 0 0 1-1zM12 46a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2H12z"/><path d="M3 2h29v14h14v17h2V14.586L33.414 0H1v60h31v-2H3V2zm31 1.414L44.586 14H34V3.414z"/><path d="M35 36v24h24V36H35zm22 22h-9V45.414l4.293 4.293 1.414-1.414L47 41.586l-6.707 6.707 1.414 1.414L46 45.414V58h-9V38h20v20z"/></svg>
            <p class="text-xl text-white">Drag & drop your <span class="font-bold text-blue-200">PDF Document</span> here</p>
            <div class="flex flex-row items-center -mb-2">
            <p class="text-lg text-white font-medium">Or</p>
            <button
        class="bg-gray-700 text-lg hover:bg-secondary-blue text-white m-4 px-4 py-2 rounded shadow-md"
        >
        <div class="flex items-center">
            <font-awesome-icon icon="arrow-circle-up" class="text-gray-500 mr-2"></font-awesome-icon>
            <p class="font-bold">Choose File</p>
        </div>
        </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #documents-container{
        height: calc(100% - 3rem);
    }
</style>
