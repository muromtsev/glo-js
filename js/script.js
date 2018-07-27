function myFirstApp(name, age) {

	alert('Привет, меня зовут ' + name + ' ' + 'Мне ' + age + ' и это моя первая программа!');

	function showSkills() {
		let skills = ['HTML5', 'CSS3', 'JavaScript', 'Photoshop'];
		

		for(let i = 0; i < skills.length; i++) {
			var result = 'Я владею' + ' ' + skills[i];
			console.log(result)
		}
		
	}

	showSkills();

	function checkAge() {
		if(age > 18) {
			console.log('Вам больше 18 лет! =)');
			
		}
		else {
			console.log('Вам нет 18 лет! =/')
		}
	}

	checkAge();

	function calcPow(num) {
		var sum = num * num;
		return console.log(sum);
	}
	calcPow(4);
}

myFirstApp('Ilya', 21);