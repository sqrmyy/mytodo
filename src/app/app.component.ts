import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mytodo';
  todos_ = ["朝起きる", "昼ご飯を食べる", "夜ご飯を食べる", "寝る"]

  onCreateTodo(todo) {
    this.todos_.push(todo);
  }
}
