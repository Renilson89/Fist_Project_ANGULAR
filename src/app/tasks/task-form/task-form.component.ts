import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit{
  task: Task = new Task();
  title: string = 'Nova Tarefa';

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ){}

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id){
      this.task = this.taskService.getById(parseInt(id));
      this.title  = 'Alterando Tarefa';

    }
  }
  onSubmit(){
    console.log(this.task);
    this.router.navigate(['']);
  }

}
