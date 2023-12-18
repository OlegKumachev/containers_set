import Team from "../app";
import Character from "../сharacter";

test('test Character', () => {
    const hero = new Character('Iron Man');
    expect(hero.name).toBe('Iron Man');
});

test('test add', () => {
    const avengers = new Team();
    avengers.add('Iron Man')
    expect(avengers.members).toEqual(new Set(["Iron Man"]))
});

test('test addAll', () => {
    const avengers = new Team();
    avengers.addAll("Iron Man", "Captain America");
    expect(avengers.members).toEqual(new Set(["Iron Man", "Captain America"]))
});

test('test toArray', () => {
    const avengers = new Team();
    avengers.addAll("Iron Man", "Captain America");
    expect(avengers.toArray()).toEqual(["Iron Man", "Captain America"])
});



