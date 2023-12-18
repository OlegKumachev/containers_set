import Character from "./сharacter.js";

export default class Team {
    constructor() {
        this.members = new Set();
    };
    add(character){
        this.members.add(character)

    };
    addAll(...characters){
        characters.forEach((characters) => {
            this.members.add(characters)
        })

    };
    toArray(){
       return Array.from(this.members);
    }

};
