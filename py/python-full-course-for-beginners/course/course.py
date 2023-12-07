import math
import random  # Built-in module so don't need .py file under "venv"; "External Libraries" -> ... -> "random.py"

# "Python for Beginners - Learn Python in 1 Hour" (https://bit.ly/3vxLdT7)
# {2} "Python Tutorial - Python Full Course for Beginners" (https://bit.ly/3OZnC5M)

# Ah yes, classic! Both SINGLE and DOUBLE quotes work
print('Hello, World!')
print("Hello, World!")

# Use the OTHER when you want ONE of them to be outputted to the screen
print("Apostrophe's apostrophe")
print('Yes, you are very "smart"')

# Use hashtags (#) for single-line comments, and triple quotes (''' ''') for multi-line comments {2}
# In OOP, functions specific to certain objects are called METHODS; therefore, print is a function {2}

# Variables (5:30)
age = 20  # (1) Integer
price = 19.95  # (2) Float
print(age)
print(price)

# Conventionally, use UNDERSCORES for multi-word variables (snake case)
first_name = "Aaren"  # (3) String

# Python is case-sensitive so use "True" and "False", not "true"/"TRUE"/"false"/"FALSE"
is_online = True  # (4) Boolean

# Exercise 1 (8:48)
patient_name = "John Smith"
patient_age = 20
is_new_patient = True

# User Input & String Concatenation (9:10)
name = input("What's your name? ")
print("Was good " + name + "!")

# Type Conversion
# input() returns value as a STRING by default, so convert using int(), float(), bool(), str()
birth_year = input("Enter your birth year: ")
age = 2022 - int(birth_year)
print("It appears as though you are or will be " + str(age) + " years old by the end of the year")

# Exercise 2 (14:50)
first_number = float(input("First: "))
second_number = float(input("Second: "))
sum = first_number + second_number
print("Sum: " + str(sum))

# String Methods (19:00)
# While the print() and input() functions (NOT methods) are general-purpose, these are for STRINGS only
# They don't change the original string, but rather, create a new one (because strings are IMMUTABLE)
course = "Python for Beginners"
# Therefore, print(course) still returns "Python for Beginners", not "PYTHON FOR BEGINNERS"
# Can also do "print("Python for Beginners".upper())"
print(course.upper())  # PYTHON FOR BEGINNERS
print(course.lower())  # python for beginners
print(course.title())  # Python For Beginners (1st letter of each word capitalized)

# find() returns the index of the first occurrence of the input; returns -1 if not there
print(course.find("y"))  # 1
print(course.find("Y"))  # -1
# Returns index of first letter of sequence of characters, so "7"
print(course.find("for"))

# Returns nothing if first input is not there
print(course.replace("for", "4"))  # Python 4 Beginners
print(course.replace("x", "4"))

# "in" operator checks if string input exists in another string, returning "True" or "False" accordingly
print("Python" in course)  # True

# Formatted Strings ({2} 37:40)
first_name = "Aaren"
last_name = "Arasaratnam"
concatenated_string = first_name + " [" + last_name + "] is VERY sexy"
formatted_string = f"{first_name} [{last_name}] is VERY sexy"

# Arithmetic Operators (23:40)
# + (add), - (subtract), * (multiply), ** (exponent), % (modulo)
# / (untruncated division), // (truncated division)
print(10 ** 3)  # 1000
print(10 / 3)  # 3.3333333...
print(10 // 3)  # 3

# Augmented Assignment Operators: +=, -=, *=, **=, %=, /=, //=

# Comparison Operators (27:00)
# > (greater than), >= (greater than or equal to), < (less than), <= (less than or equal to)
# Returns boolean values "True" and "False" accordingly
x = 3 > 2
print(x)  # True

# == (equal to), != (not-equal-to)
y = 3 == 2
print(y)  # False

# Math Functions ({2} 55:10)
print(round(2.8))
print(abs(-1))

# Import math module to perform more complex calculations (see Line 1)
# Refer to Python 3 documentation for all functions: https://bit.ly/3kKVDc8
print(math.ceil(2.5))
print(math.floor(2.5))

# Logical Operators (29:00)
# and (both), or (at least one), not (inverses value)
price = 5
print(price >= 5 and price < 53)  # True
print(price > 10 or price < 69)  # True
print(not price > 10)  # True

# If Statements (31:00)
# No curly braces! Use colons and indentations; elif = else if
temperature = 35
if temperature > 30:
    print("It's a hot day, so drink plenty of water!")
elif temperature > 20: # (20, 30]
    print("It's a nice day!")
elif temperature > 10:
    print("It's a bit cold!")
else:
    print("It's a cold day. :(")

# Exercise 3 (36:15)
weight = input("Weight: ")
units = input("(K)g or (L)bs: ")
if units.upper() == "K":
    weight_converted = float(weight) * (20/9)
    print("Weight in Lbs: " + str(weight_converted))
elif units.upper() == "L":
    weight_converted = float(weight) / (20/9)
    print("Weight in Kg: " + str(weight_converted))

# While Loops (41:50)
i = 1
while i <= 1_000:  # Adding underscore like this makes number more readable
    print(i)
    i += 1  # i++ doesn't work in Python***

j = 1
while j <= 10:
    print(j * "*")  # You can multiply numbers by strings, where * is printed j number of times
    j += 1

# Exercise 4 ({2} 1:24:10)
secret_number = random.randint(0, 10)
'''
Or you can use .choice(): 
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
random.choice(numbers)
'''
tries = 0
while tries < 3:
    guess = int(input("Guess: "))
    if guess == secret_number:
        print("You win!")
        break
    tries += 1
else:  # While loops can have an "else" component!
    print("Sorry you failed!")

# Exercise 5 ({2} 1:31:40)
has_started = False
while True:
    user_input = input("> ").lower()
    if user_input == "help":
        # Can also use three single-line comments
        print("""start - to start the car 
stop - to stop the car
quit - to quit""")
    elif user_input == "start":
        if has_started:
            print("The car has already started, the fuck you doing?")
        else:
            has_started = True
            print("Car started...Ready to go!")
    elif user_input == "stop":
        if not has_started:  # Remember to use "not" here instead of "has_started == False"
            print("The car has already stopped, the fuck you doing?")
        else:
            has_started = False
            print("Car stopped.")
    elif user_input == "quit":
        break
    else:
        print("I don't understand that...")

# Lists (45:10)
names = ["Krishnamani", "Kunjamani", "Doombamani", "Kundamani", "Kakoosemani"]  # MUTABLE
print(names)
print(names[0])
print(names[-1])  # Last element
print(names[-2])  # Second last element

# Lists can be updated
names[3] = "Boondamani"
print(names)  # ["Krishnamani", "Kunjamani", "Doombamani", "Boondamani", "Kakoosemani"]

# Lists can be returned in parts using the slice operator (:)
# Start index up to (BUT NOT INCLUDING) end index; creates NEW list; same syntax for STRINGS
print(names[0:3])  # ["Krishnamani", "Kunjamani", "Doombamani"]

''' 
# (1) If FIRST parameter not included, then it's assumed to be 0
# (2) If SECOND parameter not included, then list/string starting from first parameter is returned
# (3) If BOTH parameters not included, then WHOLE list/string returned (essentially cloning it***)
'''  # {2}
print(names[:2])
print(names[3:])
names_clone = names[:]  # Helpful since lists are mutable (original changes with functions)

# List Methods (48:50) ({2} 2:06:00)
numbers = [2, 2, 1, 4, 3]
print(numbers)

numbers.append(6)  # Adds element to end of existing list
print(numbers)

numbers.insert(3, -1)  # Adds element at chosen index (first parameter)
print(numbers)

numbers.pop()  # Removes element at the end of list
print(numbers)

numbers.remove(3)
print(numbers)

numbers.sort()  # Sorts elements in ASCENDING order (smallest -> largest)
print(numbers)
numbers.reverse()  # Reverses sequence of elements; if preceded by sort(), then sorts in DESCENDING order
print(numbers)

numbers2 = numbers.copy()  # Another way to clone tests

print(numbers.index(5))  # Returns index of the first occurrence of parameter
print(numbers.count(2))  # Returns number of occurrences of parameter
print(1 in numbers)  # Checking to see if "1" is in the list "numbers"; Returns "True" or "False"
print(len(numbers))  # len() returns number of elements in the list; applies to STRINGS as well {2}

numbers.clear()  # Removes all list entries; doesn't expect any values
print(numbers)

# 2D Lists ({2} 2:01:45)
# A matrix can be represented by a list with elements that represent another list
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
# matrix[0] grants access to the list [1, 2, 3]; matrix[0][1] grants access to the element "2"
print(matrix[0][1])
matrix[2][2] = 30
print(matrix[2][2])
# Use nested loops since two-dimensional
for row in matrix:
    for element in row:
        print(element)

# Exercise 6 ({2} 2:12:05)
list = [2, 2, 4, 6, 3, 4, 6, 1]
uniques = []
for item in list:
    if item not in uniques:  # Take note of "not" operator here
        uniques.append(item)
print(uniques)

'''
Alternatively...

list = [2, 2, 4, 6, 3, 4, 6, 1]
uniques = []
i = 0

list.sort()
while i < len(list):
    if list[i] != list[i - 1]:
        uniques.append(list[i])
    i += 1
print(uniques)
'''


# For Loops (52:15)
# Used to iterate over collections of items (e.g. strings are collection of characters)
more_numbers = [6, 7, 8, 9, 10]
for item in more_numbers:
    print(item)

'''
Can also use a while loop (but it's clearly more work)
i = 0
while i < len(more_numbers):
    print(more_numbers[i])
    i += 1
'''

# Nested loops like these can be used to generate coordinates
for x in range(4):
    for y in range(3):
        print(f"({x}, {y}")

# Exercise 7 ({2} 1:51:50)
numbers = [5, 2, 5, 2, 2]
# Use 'end=""' for appending a string input to first string input in same or later print() call
for i in numbers:
    for j in range(i):
        print("x", end="")
    print()
# OR string concatenation
for i in numbers:
    line = ""
    for j in range(i):
        line += "x"
    print(line)

# The range() Function (55:00)
# Return a "range" object, which stores a sequence of numbers
even_more_numbers = range(5)  # ONE Parameter: Assumes sequence starts from 0
print(even_more_numbers)  # range(0, 5)
for number in even_more_numbers:
    print(number)  # Outputs 1 to 4

even_more_numbers = range(5, 10)  # TWO Parameters
print(even_more_numbers)  # range(5, 10
for number in even_more_numbers:
    print(number)  # Outputs 5 to 9

even_more_numbers = range(5, 10, 2)  # THREE Parameters: Third input serves as increment amount
print(even_more_numbers)  # range(5, 10, 2)
for number in even_more_numbers:
    print(number)  # Outputs 5, 7, 9

# Don't need to hold range object in variable
for number in range(69):
    print(number)

# Tuples (57:45)
# Unlike lists, they're IMMUTABLE and use PARENTHESES: doesn't have remove(), clear(), pop(), ...
# Used to prevent accidental modifications (since immutable)
wow_guess_what_more_numbers = (1, 2, 3, 3)
print(wow_guess_what_more_numbers.count(3))  # Returns number of occurrences of input; therefore, "2"
print(wow_guess_what_more_numbers.index(2))  # Returns index of first occurrence of input; therefore, "1"

# Unpacking ({2} 2:15:34)
coordinates = (1, 2, 3)
x = coordinates[0]
y = coordinates[1]
z = coordinates[2]

# The above can be simply accomplished with the following:
x, y, z = coordinates  # "unpacking the tuple/list"

# Dictionaries ({2} 2:18:21)
# Used for storing information that comes in key-value pairs; uses CURLY braces
# Keys must be uniques; e.g., you wouldn't list the word "book" twice in a real-life dictionary
customer = {
    "name": "Nagaratnam Arasaratnam",
    "age": 61,
    "is_verified": True
}
print(customer["name"])
print(customer["Name"])  # Key Error
print(customer.get("birthdate"))  # Bypasses key error, outputting the value "None"
print.customer.get("birthdate", "February 28 1961")  # Outputs 2nd param. if 1st param. is not a key

# Dictionaries are mutable
customer["name"] = "Fivio Foreign"  # Can change pre-existing values
customer["is_married"] = True  # Can add new key-value pairs
del customer["is_verified"]  # Can remove key-value pairs

# Exercise 7 ({2} 2:23:30)
mapping = {"1":"One", "2":"Two", "3":"Three", "4":"Four", "5":"Five",
        "6":"Six", "7":"Seven", "8":"Eight", "9":"Nine"}
number = input("Enter a 4-digit number: ")
output = ""
for ch in number:
    output += mapping.get(ch, "Error") + " "
print(output)

'''
Alternatively...
mapping = {"1":"One", "2":"Two", "3":"Three", "4":"Four", "5":"Five",
        "6":"Six", "7":"Seven", "8":"Eight", "9":"Nine"}
number = input("Enter a 4-digit number: ")
output = f"{mapping[number[0]]} " \
         f"{mapping[number[1]]} " \
         f"{mapping[number[2]]} " \
         f"{mapping[number[3]]}"
print(output)
'''

# Functions ({2} 2:30:31)
# Bundled sets of instructions serving as sub-programs to be used repeatedly; def = define
# PEP8 recommends keeping 2 line breaks before and after a function declaration as convention


def greet_user(first_name, last_name):  # Follow same naming conventions as variables
    print(f"Hello there {first_name} {last_name}!")  # "first_name" and "last_name" are parameters
    print("Welcome to the Land of Snakes and Code!\n")


greet_user("Steve", "Harrington")  # "Steve" and "Harrington" are positional arguments (order matters)
greet_user(last_name="Byers", first_name="Will")  # "Will" and "Byers" are keyword arguments (order doesn't matter)
# Use positional arguments for the most part; use keyword arguments to clarify numerical values
greet_user("Wheeler", first_name="Nancy")  # When using both, put positional before keyword!


def cube(number):
    return number * number * number


print(cube(69))
# By default, all Python functions return "None" when return statement is not declared

# Exceptions ({2} 2:53:42)
# List of Python Exceptions: https://bit.ly/3NZM4Tb
# User inputs some integer -> "exit code 0" (i.e., success; no errors/exceptions)
# User inputs some string -> "exit code 1" (i.e., failure; error/exception spotted)
age = int(input("Age: "))
print(age)

# Try-Except statement allows program to handle exceptions, thus preventing crashes
# *Note: Errors (i.e., syntax, logic) cannot be handled, while exceptions can
try:
    age = int(input("Age: "))
    income = 20000
    risk = income / age
    print(age)
except ValueError:  # If exception is found, the code underneath "except" is executed instead
    print("Invalid Value: Age is numerical!")
except ZeroDivisionError:
    print("Invalid Value: Age cannot be 0!")

# Classes & Constructors ({2} 3:01:46)
# Help us define new types to model real-life concepts and cluster relevant code together
# Blueprint/Template for creating OBJECTS (i.e., unique instances of a class)


class Person:  # Use PascalCase: First letter of EVERY word is capitalized w/ no spaces in-between
    def __init__(self, name):  # Python Constructor: INITializes object's attributes when created***
        # Attributes are variables belonging to ALL objects but can hold different values***
        self.name = name  # Current object "name" takes value of argument "name"

    def talk(self):
        print(f"Ayo was good homie, my name's {self.name}")


person1 = Person("Thomas Shelby")
person1.talk()

person2 = Person("Alfie Solomons")
person2.talk()

'''
Without a constructor, we'd have to manually give attributes for EVERY object created...

person1 = Person()
person1.name = "Thomas Shelby"

person2 = Person()
person2.name = "Alfie Solomons"
'''

# Inheritance ({2} 3:14:41)
# Helps us avoid duplicating code, following the principles of "DRY" ("Don't Repeat Yourself")
# Mistakes from original code will spread to copy-pasted code


class Mammal:
    def walk(self):
        print("walk")


class Dog(Mammal):  # Inherits all of Mammal's classes
    def bark(self):
        print("BARK!")


class Fox(Mammal):  # Inherits all of Mammals's classes
    pass # Python classes, func., loops, and if statements can't be empty, so use "pass" to byPASS that


dog1 = Dog()
dog1.walk()
dog1.bark()

# Modules ({2} 3:19:33)
# List of Built-In Python Modules: https://bit.ly/3NRHrKM
# Modules are used to organize Python code into multiple files
import converters  # Import entirety of "converters.py" to "course.py"; don't include the ".py"
print(converters.kg_to_lbs(70))

from converters import kg_to_lbs  # Important specific function from module
kg_to_lbs(100)

# Packages ({2} 3:30:12)
# Projects can contain hundreds of modules, so organize related modules into packages (directory/folder)
# Packages appear as folders under the main project folder (e.g., "venv")
# Conventionally, directories are treated as packages when they have a "__init__.py" file
course.ecommerce.shipping.calc_shipping()

from course.ecommerce.shipping import calc_shipping  # (2)
calc_shipping()

from course.ecommerce import shipping  # (3)
shipping.calc_shipping()

# Exercise 8 ({2} 3:41:33)


class Dice:
    def roll(self):
        first = random.randint(1, 6)
        second = random.randint(1, 6)
        return first, second  # Parentheses not needed when returning tuples* (PEP8)


dice1 = Dice()
dice1.roll()

# Files & Directories ({2} 3:44:37)
from pathlib import Path

path1 = Path("ecommerce")
print(path1.exists())  # Checks whether file/directory exists; in this case, "True"

path2 = Path("emails")
print(path2.mkdir())  # Makes file/directory
print(path2.rmdir())  # Removes file/directory

path3 = Path()
# Possible Parameters: "*" (ALL), "*.*" (ONLY files in CURRENT directory), "*.py", "*.xls", ...
for file in path3.glob("*.*"):  # Returns all files/directories in accordance with parameter
    print(file)

# Pypi & Pip ({2} 3:51:03)
# Python Package Index (Pypi): Open-source repository for non-vanilla Python packages (https://pypi.org/)
# Type "pip install _____" into terminal window to use Pypi packages**

