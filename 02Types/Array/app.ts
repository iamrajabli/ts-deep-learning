const skills: string[] = ['Dev', 'DevOps', 'Php'];

for(const skill of skills) {
    console.log(skill);
};

const skillsModified = skills
    .filter((i:string) => i.length < 4)
    .map(i => i + 'Ops')
    .reduce((sum, current) => sum + ' ' + current)

console.log(skillsModified);
