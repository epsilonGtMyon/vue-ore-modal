# vue-ore-modal

## やりたいこと
モーダルダイアログの結果をコールバックではなくて Promiseで受け取ってawaitで待ちたい

```js
const result = await showModal(parameter)
```
みたいなことをやりたい

## 作ったもの
`ModalDialog`がモーダルのレイアウトのテンプレート

`ModalDialogHelper`がモーダル表示、閉じる、をするためのヘルパーで
`show`のときに`Promise`を返すことで`await`をできるようにした。


