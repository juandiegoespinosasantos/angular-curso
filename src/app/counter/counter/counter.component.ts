import { Component } from "@angular/core";

@Component({
    selector: "app-counter",
    template: `
    <h1>Hola Mundo Angular</h1>

    <h3>La base es {{base}}</h3>

    <button (click)="accumulate(-base)">-{{base}}</button>

    <span>{{counter}}</span>

    <button (click)="accumulate(+base)">+{{base}}</button>
    `
})
export class CounterComponent {

    public title: string = 'bases';
    public counter: number = 10;
    public base: number = 5;

    public accumulate(value: number): void {
        this.counter += value;
    }
}