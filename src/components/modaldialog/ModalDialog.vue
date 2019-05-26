<template>
  <div class="modal" v-if="visible">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalDialog",
  data() {
    return {
      visible: false,
      resolve: () => {}
    };
  },
  mounted() {
    this.$on("show", ({ resolve, payload }) => {
      if (!this.visible) {
        this.visible = true;
        this.resolve = resolve;

        this.$nextTick().then(() => {
          const elem = this.$el.querySelector("button");
          if (elem !== null) {
            elem.focus();
          }

          this.$emit("onShown", payload);
        });
      }
    });

    this.$on("close", payload => {
      if (this.visible) {
        this.visible = false;

        this.$nextTick().then(() => {
          this.resolve(payload);

          this.resolve = () => {};
        });
      }
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
div.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.3);
  }

  .modal-content {
    position: relative;
    background-color: white;

    display: flex;
    flex-direction: column;
    .modal-header {
      background-color: rgb(70, 150, 0);
      color: white;
    }
    .modal-body {
      flex-grow: 1;
    }
    .modal-footer {
      background-color: rgb(200, 200, 200);
      button {
        background-color: rgb(70, 150, 0);
        color: white;
      }
    }
  }
}
</style>
