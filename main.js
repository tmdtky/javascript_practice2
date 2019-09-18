'use strict';
{
  // 追加ボタンクリック時に実行されるイベントリスナーを登録
  document.getElementById('add-button').addEventListener('click', function () {
    const newTask = document.getElementById('new-task').value;

    // 入力値バリデーション
    if (newTask === '' || newTask === 'タスクを入力して下さい') {
      document.getElementById('new-task').value = "タスクを入力して下さい";
    }

    // 新しいタスクの追加
    addTableRow(newTask);
  });

  // 新しいタスクを追加する関数
  function addTableRow(newTask) {
    const tbl = document.getElementById('tbl');
    const row = tbl.insertRow(Todo.counter);
    const cellId = row.insertCell(0);
    const cellComment = row.insertCell(1);
    const cellStatus = row.insertCell(2);

    const status = '作業中';
    const todo = new Todo(Todo.counter, newTask, status)
    cellId.textContent = Todo.counter;
    cellComment.textContent = todo.comment;
    cellStatus.textContent = todo.status;
    Todo.counter++;

    document.getElementById('new-task').value = '';
  }

  // ToDoクラス
  class Todo {

    static counter = 0;

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
  }

  // 状態（完了、作業中、削除）の列挙型
  let Status = {
    complete: 0,
    inWork: 1,
    delete: 2
  }

}
