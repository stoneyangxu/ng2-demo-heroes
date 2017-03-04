"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const todo_cmp_1 = require("../components/todo-cmp");
const todoRoutes = [
    {
        path: "",
        component: todo_cmp_1.TodoCmp,
        pathMatch: "full"
    }
];
exports.todoRouting = router_1.RouterModule.forRoot(todoRoutes);
