import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-add-character',
    templateUrl: './add-character.component.html'
})
export class AddCharacterComponent {

    @Input()
    public characters: Character[] = [];

    @Input()
    public newCharacter: Character = {

        name: "",
        power: 0
    }

    public add(): void {
        if (this.newCharacter.name.trim().length == 0) {
            return;
        }

        this.characters.push(this.newCharacter);

        this.newCharacter = {
            name: "",
            power: 0
        }

        console.log(this.characters);
    }
}
