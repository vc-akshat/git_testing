var details = {
    empCode: 1,
    empSkill: ['reading', 'traveling'],
    name: "Bill",
    gender: "Male"
};
console.log(empData(details));
function empData(data) {
    return "".concat(data.empCode, " ").concat(data.empSkill, " ").concat(data.empDpt);
}
var empData1 = {
    empCode: 1,
    empSkill: ['reading', 'traveling'],
    empDpt: "computer",
    name: "Bill",
    gender: "Male"
};
console.log(empData(empData1));
