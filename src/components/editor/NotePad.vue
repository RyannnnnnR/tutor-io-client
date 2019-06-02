<template>
  <div id="editor">
  </div>
</template>

<script>
import * as Quill from 'quill';
export default {
  name: "notepad",
  mounted: () => {
    var editor = new Quill("#editor", {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          ["image", "code-block"]
        ]
      },
      placeholder: "Compose an epic...",
      theme: "snow" // or 'bubble'
    });
  }
};
</script>

<style lang="scss" scoped>
#editor {
  height: 30vh;
}
</style>
