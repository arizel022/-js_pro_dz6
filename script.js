// ---------------------------------------------------------dzДЗ 8. 

// ---------------------------------------------------------#6_1

// Дана функция:
// function f (a, b, c) { 
//   function sum (a, b) { 
//     return a + b; 
//   } 
// }
// Перепишите её следующим образом:
// - Если аргументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// - Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
// - Функция f должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.

function f (a=2, b=3, c) { 
    function sum (a, b) { 
        return a + b; 
    } 
    x = sum(a,b);
    if ( typeof c === 'function' )
        return c;
    else 
        return x;
}
a = f(undefined, undefined, 
    // function mm(){
    //     return "result-mm"
    // }
    );
console.log(a);

