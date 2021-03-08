import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

    public heroes: string[] = ["Spider-Man", "Iron Man", "Hulk", "Thor", "Captain America"];
    public deleted: string = "";

    public deleteHero(): void {
        this.deleted = this.heroes.pop();

        console.log("Borrando...");
        console.log(this.deleted);
    }
}
