/*
1 января 2015 года – это был четверг. 
Скрипт запрашивает номер месяца (1..12) и число в этом месяце (1..31). Выведите имя дня недели.
*/

try {
	var months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
	var days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

	while(true) {

		var monthNum = prompt('Введите номер месяца (1..12)');
		if (monthNum == null || monthNum == '' || isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
			throw new TypeError('Вы ввели некорректное число');
		}

		var dayNum = prompt('Введите число в этом месяце (1..31)');
		if (dayNum == null || dayNum == '' || isNaN(dayNum) || dayNum < 1 || dayNum > 31) {
			throw new TypeError('Вы ввели некорректное число');
		}

		var date = new Date();
		date.setFullYear(2015);
		date.setMonth(monthNum - 1);
		date.setDate(dayNum);

		alert(dayNum +  ' ' + months[ date.getMonth() ] + ' 2015 года - это был ' + days[ date.getDay() ]);

	}	
} catch (e) {
	alert(e.message);
}
