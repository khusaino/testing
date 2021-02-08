
function School (name, minYears) {
    if (!name || !name.trim()) {  // name.trim() возвращал не соответствующее булевое значение,  перед name.trim() нужен восклицательный знак  1
        throw Error("Не указано название школы");
    }

    if (!minYears || !parseInt(minYears)) {  // parseInt(minYears)  возвращал не соответствующее булевое значение, перед parseInt(minYears) нужен восклицательный знак 2
        throw new Error("Не указано минимальное количество лет");
    }

    this.MIN_YEARS = minYears;
    this.SCHOOL_NAME = name;

    this.checkAge = function (age) {
        if (age < this.MIN_YEARS) {  //1 this вместо селф 2.знак условия     3,4
            return {
                result: false,
                message: `Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше` // this. вместо селф   5
            };
        } else if (age >= this.MIN_YEARS) {  // 1.this. вместо селф  2. операторы сравнения   6,7
            return {
                result: true,
                message: "Добро пожаловать в автошколу \"${this.SCHOOL_NAME}\", ${name}" // this. вместо селф  8
            };
        }
    };

    this.getTeacherList = function () {
        return [                          //были фигурные скобки это не ассоциативный массив   9
            "А. С. Иванов",
            "В. С. Петров",
            "И. А. Сидоров",
		];
    }

    this.getTeacher = function (id) {
        var id = !id && Math.floor(Math.random() * (this.getTeacherList().length)); // this. вместо селф 2. ! перед id   10, 11
        return this.getTeacherList()[id]; // this. вместо селф  12
    };

    this.welcome = function (name, years) {
        const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

        name = name || prompt('Как вас зовут?');   // знак или  13

        if (!name) {
			console.log(this)
            alert('Вы не указали имя!');
            return this.welcome(name, years);   //this является обьектом. нужен this.welcome  14
        }

        years = years || Math.abs(parseFloat(prompt('Укажите ваш возраст'))); // 1 нужен или 2 prompt не правильно записан  15,16

        if (!years) { // ! перед years 17
            alert('Вы не указали возраст!');
            return this.welcome(name, years)//    нужен this.welcome    18
        }
		
        if (this.checkAge(years).result) { // this вместо селф   19
            alert(`Добро пожаловать в автошколу \"${this.SCHOOL_NAME}\", ${name}`);// this. вместо селф 2. обратные ковычки   20
        } else if (!this.checkAge(years).result) { // this. вместо селф  21
            return alert(this.checkAge(years).message); // this. вместо селф  22
        }

        const TEACHER_NAME = this.getTeacher();  //this   23

        alert(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`)    // обратные ковычки
        return; 
    };

    /*return {  не нужен   24
        welcome: this.welcome
    };*/
}

var autoSchool = new School('Парус', 18);

autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);























































