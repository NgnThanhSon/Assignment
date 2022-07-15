//Exercise 1
class Employee {
    constructor (id , fullName , baseSalary , productSalary , productQuantity) {
        this.id = id
        this.fullName = fullName
        this.baseSalary = baseSalary
        this.productSalary = productSalary
        this.productQuantity = productQuantity
    };
};

// Y1 + Y2:
let allEmployee = [];
let n;
n = Number(prompt("Nhập số lượng nhân viên cần quản lý: "));
for (i = 0 ; i < n ; i++) {
    const id = Number(prompt(`Nhập ID của nhân viên thứ ${i+1}: `));
    const fullName = prompt(`Nhập Fullname của nhân viên thứ ${i+1}: `);
    const baseSalary = Number(prompt(`Nhập Base Salary của nhân viên thứ ${i+1}: `));
    const productSalary = Number(prompt(`Nhập Product Salary của nhân viên thứ ${i+1}: `));
    const productQuantity = Number(prompt(`Nhập Product Quantity của nhân viên thứ ${i+1}: `));
    const employee = new Employee (id , fullName , baseSalary , productSalary , productQuantity);
    allEmployee.push(employee);
};
console.log ("Danh Sách Nhân Viên: " , allEmployee);