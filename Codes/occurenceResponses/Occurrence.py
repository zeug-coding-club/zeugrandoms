target_digit = int(input("Enter your target digit: "))
number = int(input("Enter your number: "))
count = 0

while number > 0: 
    if number % 10 == target_digit:
        count = count + 1

    number = number // 10

print("The number of occurrences for the digit is: ", count)
