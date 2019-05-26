import ModalDialog from './ModalDialog.vue'


function _findModalDialog(vm) {
  if (vm.$options['name'] === ModalDialog.name) {
    return vm
  }

  for (let child of vm.$children) {
    let modalDialogComponent = _findModalDialog(child)
    if (modalDialogComponent !== null) {
      return modalDialogComponent
    }
  }
  return null
}

class ModalDialogHelper {

  static show(vm, payload) {
    let modalDialog = _findModalDialog(vm)
    if (modalDialog === null) {
      throw new Error('not found ModalDialog')
    }

    return new Promise((resolve, reject) => {
      modalDialog.$emit('show', {
        resolve,
        payload
      })
    })
  }

  static close(vm, result) {
    let modalDialog = _findModalDialog(vm)
    if (modalDialog === null) {
      throw new Error('not found ModalDialog')
    }
    modalDialog.$emit('close', result)
  }
}

export default ModalDialogHelper