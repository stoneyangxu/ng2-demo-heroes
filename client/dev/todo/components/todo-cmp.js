"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const todo_service_1 = require("../services/todo-service");
let TodoCmp = class TodoCmp {
    constructor(_todoService) {
        this._todoService = _todoService;
        this.title = "ng2do";
        this.todos = [];
        this.todoForm = {
            "todoMessage": ""
        };
    }
    ngOnInit() {
        this._getAll();
    }
    _getAll() {
        this._todoService
            .getAll()
            .subscribe((todos) => {
            this.todos = todos;
        });
    }
    add(message) {
        this._todoService
            .add(message)
            .subscribe((m) => {
            this.todos.push(m);
            this.todoForm.todoMessage = "";
        });
    }
    remove(id) {
        this._todoService
            .remove(id)
            .subscribe(() => {
            this.todos.forEach((t, i) => {
                if (t._id === id)
                    return this.todos.splice(i, 1);
            });
        });
    }
};
TodoCmp = __decorate([
    core_1.Component({
        selector: "todo-cmp",
        templateUrl: "todo/templates/todo.html",
        styleUrls: ["todo/styles/todo.css"]
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoCmp);
exports.TodoCmp = TodoCmp;
