/*
Многоквартирный дом характеризуется следующими тремя показателями: 
этажность, число подъездов, количество квартир на этаже. 
Скрипт запрашивает эти показатели и номер квартиры. 
Выводится номер подъезда, в котором находится указанная квартира. 
При вводе некорректных данных предусмотреть генерацию исключительных ситуаций.
*/
try {

	while(true) {
		var stagesCount = prompt('Введите количество этажей');
		if (stagesCount == null || stagesCount == '' || isNaN(stagesCount) || stagesCount < 0) {
			throw new TypeError('Вы ввели некорректное число');
		}

		var porchesCount = prompt('Введите количество подъездов');
		if (porchesCount == null || porchesCount == '' || isNaN(porchesCount) || porchesCount < 0) {
			throw new TypeError('Вы ввели некорректное число');
		}

		var flatsCount = prompt('Введите количество квартир на этаже');
		if (flatsCount == null || flatsCount == '' || isNaN(flatsCount) || flatsCount < 0) {
			throw new TypeError('Вы ввели некорректное число');
		}

		var flatNumber = prompt('Введите номер квартиры');
		if (flatNumber == null || flatNumber == '' || isNaN(flatNumber) || flatNumber < 0) {
			throw new TypeError('Вы ввели некорректное число');
		}

		if (flatNumber > flatsCount * stagesCount * porchesCount) {
			throw new RangeError('В вашем доме такой квартиры не существует');
		} else {
			var porchNumber = flatNumber / (flatsCount * stagesCount);
			var result =  porchNumber - parseInt(porchNumber) > 0 ? parseInt(porchNumber) + 1 : parseInt(porchNumber); 
			alert(result);	
		}
	}	

} catch (e) {
	alert(e.message);
}
