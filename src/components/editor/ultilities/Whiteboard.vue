<template>
    <div class="whiteboard-container">
        <div class="colors absolute right-0 mr-4 mt-4">
            <div class="color bg-black"></div>
            <div class="color bg-red-600"></div>
            <div class="color bg-blue-500"></div>
            <div class="color bg-green-500"></div>
            <div class="color bg-white flex items-center justify-center">
                <font-awesome-icon icon="eraser" class="block text-gray-700"></font-awesome-icon>
            </div>
        </div>
        <canvas class="h-full w-full bg-gray-100 border-8 border-gray-800" id="whiteboard"></canvas>
    </div>
</template>

<script>
    import { getConnection } from '@/utils/socketHandler.js'
    export default {
        name: 'whiteboard',
        mounted () {
            var socket = getConnection();
            var currentColor = 1;
            var paintCanvas = document.getElementById('whiteboard');
            var container = document.getElementById("utility-container")
            var colors = document.getElementsByClassName('color');
            var context = paintCanvas.getContext('2d');
            paintCanvas.height = container.offsetHeight;
            paintCanvas.width = container.offsetWidth;
            context.lineCap = 'round';
            context.lineWidth = 2;

            let x = 0, y = 0;
            let isMouseDown = false;

            const stopDrawing = () => { isMouseDown = false; }
            const startDrawing = event => {
                isMouseDown = true;   
            [x, y] = [event.offsetX, event.offsetY];  
            }

            const onColorUpdate  = (i) =>{
                if(i ===  currentColor) return;
                if(context.lineWidth !== 2) context.lineWidth = 2;
                switch(i){
                    case 0:
                        context.strokeStyle = "black";
                        break;
                    case 1:
                        context.strokeStyle = "#E53E3E";
                        break;
                    case 2:
                        context.strokeStyle = "#4299E1";
                        break;
                    case 3:
                        context.strokeStyle = "#48BB78";
                        break;
                    case 4:
                        context.strokeStyle = "#F7FAFC";
                        context.lineWidth = 45;
                        break;
                }
                currentColor = i;
            }

            const drawLine = event => {
                if ( isMouseDown ) {
                    const newX = event.offsetX;
                    const newY = event.offsetY;
                    context.beginPath();
                    context.moveTo( x, y );
                    context.lineTo( newX, newY );
                    context.stroke();
                    [x, y] = [newX, newY];
                }
            }

            paintCanvas.addEventListener( 'mousedown', startDrawing );
            paintCanvas.addEventListener( 'mousemove', drawLine );
            paintCanvas.addEventListener( 'mouseup', stopDrawing );
            paintCanvas.addEventListener( 'mouseout', stopDrawing );

            for (let i = 0; i < colors.length; i++){
                colors[i].addEventListener('click', function() {
                    onColorUpdate(i);
                });
            }
        }


    }

</script>

<style lang="css" scoped>
    .whiteboard-container {
        height: calc(100% - 3rem);
    }
    .color {
        @apply h-10;
        @apply w-10;
        @apply z-10;
        @apply mb-2;
        @apply rounded-full;
        @apply shadow-md;
        @apply border;
        @apply border-gray-300;
    }
    .eraser {
        @apply flex;
    }
</style>