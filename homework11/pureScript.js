// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// 1. Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// 2. Ступінь передається як другий аргумент у функцію pow (num, degree).

 function pow (num, degree) {
   return degree > 0 ? num * pow(num, degree - 1) : 1
 }
