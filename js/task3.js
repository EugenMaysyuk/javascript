/*
Вычисление и вывод i-го числа Фибоначчи, где параметр i вводится пользователем. 
При вводе некорректных данных предусмотреть генерацию исключительной ситуации.
*/

try {

	var result;

	function fib(n) {
  		if (n >= 2) {
    		result = fib(n - 1) + fib(n - 2);
  		} else {
    		result = n
  		}
  		return result;	
	};

	while(true) {
		var i = prompt('Введите порядковый номер числа');
		if (i == null || i == '' || isNaN(i) || i < 0) {
			throw new TypeError('Вы ввели некорректное число');
		}

		alert(fib(i));
	}	

} catch (e) {
	alert(e.message);
}
