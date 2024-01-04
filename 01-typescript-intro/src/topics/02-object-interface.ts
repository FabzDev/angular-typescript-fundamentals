export{};

// const skills: String[] = ['Bash','Counter', 'Healing'];

interface Character {
    name: String;
    hp: number;
    skills: String[];
    hometown?: String;
}

const gandalf:Character = {
    name: 'Gandalf',
    hp: 100,
    skills: ['Bash','Counter'],
};

console.table(gandalf);
