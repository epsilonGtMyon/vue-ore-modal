<template>
  <div>
    <button @click="open">表示</button>
    <div>name1:{{name1}}, name2:{{name2}}</div>
    <hoge-modal ref="hogeModal"/>
  </div>
</template>

<script>
import HogeModal from "./HogeModal.vue";

import ModalDialogHelper from "../../components/modaldialog/ModalDialogHelper";
export default {
  components: {
    HogeModal
  },
  data() {
    return {
      name1: "",
      name2: ""
    };
  },
  methods: {
    async open() {
      const result = await ModalDialogHelper.show(this.$refs.hogeModal, {
        name1: this.name1,
        name2: this.name2
      });

      if (result) {
        this.name1 = result.name1;
        this.name2 = result.name2;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
