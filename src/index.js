module.exports = function check(str, bracketsConfig) {

  let prevLength;
  // удаляем пары, пока длина строки уменьшается, если что-то остается и она не = 0, то неправильно
  do {
      prevLength = str.length; // текущая длина строки

      // проходим по каждой паре скобок в конфиге
      for (let i = 0; i < bracketsConfig.length; i++) {
          const pair = bracketsConfig[i].join(''); // превращаем элементы массива bracketsConfig в строки, т.е. в две склеенные скобки ( по типу {} )
          // заменяем все вхождения этой пары скобок в str на пустую строку
          str = str.replace(pair, '');
      }

  } while (str.length < prevLength); // продолжаем цикл, пока длина строки уменьшается

  // если строка пустая, значит все в балансе
  return str.length === 0;
};
