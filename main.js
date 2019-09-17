'use strict';
// ページロード時イベントリスナーを登録
document.addEventListener('DOMContentLoaded', function () {
  // 追加ボタンクリック時に実行されるイベントリスナーを登録
  document.getElementById('add').addEventListener('click', function () {
    // 新規タスクテキストボックス
    const task = document.getElementById('task');

    const todo = new Todo(0, 'aaaaa', '作業中');
    console.log(todo);
    console.log(todo.id);
    console.log(todo.comment);
    console.log(todo.status);

  });
});

// ID, コメント, 状態に関するクラスを作成、
// インスタンス化した値を配列に格納し、リスト出力;
// 必要なもの
// クラス ID、コメント、状態
// enum 状態：作業中、完了、削除
class Todo {

  constructor(id, comment, status) {
    this._id = id;
    this._comment = comment;
    this._status = status;
  }

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get comment() {
    return this._comment;
  }

  set comment(comment) {
    this._comment = comment;
  }

  get status() {
    return this._status;
  }

  set status(status) {
    this._status = status;
  }
};

