"use strict";
const skills = ['Dev', 'DevOps', 'Php'];
for (const skill of skills) {
    console.log(skill);
}
;
const skillsModified = skills
    .filter((i) => i.length < 4)
    .map(i => i + 'Ops')
    .reduce((sum, current) => sum + ' ' + current);
console.log(skillsModified);
