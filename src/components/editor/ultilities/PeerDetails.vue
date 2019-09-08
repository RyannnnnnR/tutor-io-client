<template>
    <div id="peer-details-container" class="bg-charcoal">
        <div id="peer-details">
            <p class="text-xl">Tutor Details</p>
        </div>
        <div id="peer-action-bar" class="bg-charcoal-dark">

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #peer-details-container {
        height: 100%;
        color: $gray;
        border-top: 1px solid darken($charcoal, 10%)
    }
    #peer-action-bar{
        height: 44px;
    }
    #peer-details{
        height: calc(100% - 44px);
    }
</style>
