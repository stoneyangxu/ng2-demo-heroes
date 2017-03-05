/// <reference path="../../../../typings/index.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const Observable_1 = require("rxjs/Observable");
const todo_cmp_1 = require("../../../../client/dev/todo/components/todo-cmp");
const todo_service_1 = require("../../../../client/dev/todo/services/todo-service");
class MockTodoService extends todo_service_1.TodoService {
    getAll() {
        return new Observable_1.Observable((o) => {
            o.next([]);
        });
    }
    add(message) {
        return new Observable_1.Observable((o) => {
            o.next(message);
        });
    }
    remove(id) {
        return new Observable_1.Observable((o) => {
            o.next(id);
        });
    }
}
describe("todo_component", () => {
    describe("creation", () => {
        it("should create the component correctly", testing_1.async(() => {
            let fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            fixture.detectChanges();
            let compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
        }));
        it("should inicialize the cmp correctly", testing_1.async(() => {
            let fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            let instance = fixture.debugElement.componentInstance;
            spyOn(instance, "_getAll").and.callFake(() => { });
            fixture.detectChanges();
            expect(instance._getAll).toHaveBeenCalled();
        }));
        it("should call add correctly", testing_1.async(() => {
            let fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            fixture.detectChanges();
            let instance = fixture.debugElement.componentInstance;
            let _todoMsg = "yo";
            instance.add(_todoMsg);
        }));
        it("should call remove correctly", testing_1.async(() => {
            let fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            fixture.detectChanges();
            let instance = fixture.debugElement.componentInstance;
            let _id = "abc123";
            instance.remove(_id);
        }));
    });
});
