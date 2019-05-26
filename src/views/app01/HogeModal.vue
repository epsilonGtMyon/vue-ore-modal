<template>
  <ModalDialog @onShown="onShown">
    <template #header>モーダルです。</template>
    <div  style="width:300px">
      <div class="field">
        <div class="field-name">名前１</div>
        <div class="field-body">
          <input type="text" v-model="name1">
        </div>
      </div>

      <div class="field">
        <div class="field-name">名前２</div>
        <div class="field-body">
          <input type="text" v-model="name2">
        </div>
      </div>
    </div>

    <template #footer>
      <button @click="onOk">OK</button>
      <button @click="onCancel">Cancel</button>
    </template>
  </ModalDialog>
</template>

<script>
import ModalDialogHelper from "../../components/modaldialog/ModalDialogHelper";

export default {
  data(){
    return {
      name1: "",
      name2:""
    }
  },
  methods: {
    onShown(param) {
      this.name1 = param.name1;
      this.name2 = param.name2;
    }
    ,onOk(){
      ModalDialogHelper.close(this, {
        name1: this.name1,
        name2: this.name2
      })
    },onCancel(){

      ModalDialogHelper.close(this)
    }
  }
};
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  .field-name {
    flex-grow: 1;
  }
  .field-body {
    flex-grow: 4;
  }
}
</style>
