import { Component } from "@angular/core";

@Component({
    selector: "app-hero",
    templateUrl: "./hero.component.html"
}) 
export class HeroComponent {

    public name: string = "Iron Man";
    public age: number = 50;

    public getName(): string {
        return `${this.name} - ${this.age}`;
    }

    get upperName(): string {
        return this.name.toUpperCase();
    }

    public changeName(): void {
        this.name = "Spider-Man";
    }
 
    public changeAge(): void {
        this.age = 16;
    }
}