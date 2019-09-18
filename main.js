'use strict';
{
  // 追加ボタンクリック時に新規タスクを追加
  document.getElementById('add-button').addEventListener('click', function () {
    // 新規タスクの追加
    const newTask = document.getElementById('new-task');
    const status = ['作業中', '削除'];
    const todo = new Todo(Todo.counter, newTask.value, status);
    todo.addTodo();
  });

  // ToDoクラス
  class Todo {

    // ToDoのカウンタ
    static counter = 0;

    // コンストラクタ
    constructor(id, comment, status) {
      this._id = id;
      this._comment = comment;
      this._status = status;
    }

    // 新規タスクの追加
    addTodo() {
      // 入力値バリデーション
      let newTask = document.getElementById('new-task');
      if (newTask.value === '' || newTask.value === 'タスクを入力して下さい') {
        newTask.value = "タスクを入力して下さい";
        return;
      }

      // 新しいタスクの追加
      const tbl = document.getElementById('tbl');
      const row = tbl.insertRow(this.counter);
      const cellId = row.insertCell(0);
      const cellComment = row.insertCell(1);
      const cellStatus1 = row.insertCell(2);
      const cellStatus2 = row.insertCell(3);

      cellId.textContent = Todo.counter;
      cellComment.textContent = this.comment;
      this.addInWorkButton(cellStatus1);
      this.addDeleteButton(cellStatus2);

      Todo.counter++;
      newTask.value = '';
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
      deleteButton.addEventListener('click', function () {
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
