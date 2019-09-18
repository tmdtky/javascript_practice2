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
    const cellStatus1 = row.insertCell(2);
    const cellStatus2 = row.insertCell(3);

    const status = ['作業中', '削除'];
    const todo = new Todo(Todo.counter, newTask, status);
    cellId.textContent = Todo.counter;
    cellComment.textContent = todo.comment;
    todo.addInWorkButton(cellStatus1);
    todo.addDeleteButton(cellStatus2);

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

    // 作業中ボタンを追加
    addInWorkButton(cell) {
      const inWorkButton = document.createElement('button');
      inWorkButton.textContent = '作業中';
      inWorkButton.id = 'inwork-button';
      cell.appendChild(inWorkButton);
    }

    // 削除ボタンを追加
    addDeleteButton(cell) {
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.id = 'delete-button';
      cell.appendChild(deleteButton);

      // 削除ボタン押下時にのイベントリスナーを登録
      // 親要素の親要素であるtrタグを削除
      deleteButton.addEventListener('click', () => {
        const tbl = document.getElementById('tbl');
        tbl.removeChild(deleteButton.parentNode.parentNode);
        this.counter--;
      });
    }

    // idのgetter
    get id() {
      return this._id;
    }

    // idのsetter
    set id(id) {
      this._id = id;
    }

    // commentのgetter
    get comment() {
      return this._comment;
    }

    // commentのsetter
    set comment(comment) {
      this._comment = comment;
    }

    // statusのgetter
    get status() {
      return this._status;
    }

    // statusのsetter
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
