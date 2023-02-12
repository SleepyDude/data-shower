# Задачи по программированию

## Задача 1
Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 

>Пример:
>«Москва, Санкт-Петербург, Воронеж.»

```python
# task 1. time ~1 min
def towns_to_str(towns: list):
    return ', '.join(towns) + '.'

# test
towns = ['Moscow', 'Vladimir', 'Paris']
assert(towns_to_str(towns) == 'Moscow, Vladimir, Paris.')
```

## Задача 2
Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок.
>Пример:
>27 => 25, 27.8 => 30, 41.7 => 40.

```python
# task 2. time ~3 min
def round5(num: float):
    return (num + 2.5) // 5 * 5

# test
assert(round5(2.1) == 0)
assert(round5(2.7) == 5)
assert(round5(27) == 25)
assert(round5(27.8) == 30)
assert(round5(41.7) == 40)
```
## Задача 3
Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству.
>Пример:
>«25 компьютеров», «41 компьютер», «1048 компьютеров».

```python
# task 3. time ~ 10 min
def computer_print(num: int):
    last_digit = int(str(num)[-1])
    last_two_digits = int(str(num)[-2:])
    if last_digit >= 5 or last_digit == 0 or (last_two_digits > 10 and last_two_digits < 20):
        return str(num) + ' компьютеров'
    if last_digit == 1:
        return str(num) + ' компьютер'
    if last_digit > 1 and last_digit < 5:
        return str(num) + ' компьютера'

# test
assert(computer_print(16) == '16 компьютеров')
assert(computer_print(818) == '818 компьютеров')
assert(computer_print(1995) == '1995 компьютеров')
assert(computer_print(11) == '11 компьютеров')
assert(computer_print(21) == '21 компьютер')
assert(computer_print(4) == '4 компьютера')
assert(computer_print(1023) == '1023 компьютера')
assert(computer_print(0) == '0 компьютеров')
```
## Задача 4
Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).

```python
# task 4, time - 1 ночь на поиск способа считать без перебора. Не нашел
from math import sqrt

def is_prime(num: int):
    if num % 2 == 0:
        return False
    for i in range(3, int(sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True

# test
assert(is_prime(71) == True)
assert(is_prime(73) == True)
assert(is_prime(121) == False)
```
## Задача 5
Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.
>Пример:
>[7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
>На выходе [1, 17]

```python
# task 5. time ~ 10 min
def doubles(arr_1: list, arr_2: list) -> list:
    dict_1 = { i: 0 for i in arr_1 }
    dict_2 = { i: 0 for i in arr_2 }
    for num in arr_1:
        dict_1[num] += 1
    for num in arr_2:
        dict_2[num] += 1
    doubles_1 = { key for key in dict_1 if dict_1[key] >= 2 }
    doubles_2 = { key for key in dict_2 if dict_2[key] >= 2 }
    return list(doubles_1.intersection(doubles_2))

# test
list_1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
list_2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]
res = doubles(list_1, list_2)
assert(len(res) == 2)
assert(17 in res and 1 in res)
```
## Задача 6
Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица. 
```python
# task 6, time ~ 30 min.
def multiply_table(num: int) -> str:
    # calculate widths
    col_widths = []
    for i in range(1, num+1):
        col_widths.append(len(str(i*num)))
    lines = []
    for i in range(1, num+1):
        line_parts = []
        for j in range(1, num+1):
            n = i*j
            item = ' ' * (col_widths[j-1] - len(str(n))) + str(n)
            line_parts.append(item)
        lines.append(line_parts)
    # construct left and top side
    result = ' ' * col_widths[0] + '  ' + ' '.join(lines[0]) + '\n'
    result += ' ' * col_widths[0] + '  ' + '-'*len(' '.join(lines[0])) + '\n'
    for line_parts in lines:
        result += line_parts[0] + ' |' + ' '.join(line_parts) + '\n'
    return result

# test
res = multiply_table(25)
print(res)
```