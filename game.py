from random import randint

def roll_two_d6() -> tuple[int , int] :

    return randint(1,6) , randint(1,6)
# print (roll_two_d6())


def is_bust(scorr: int) -> bool :

    return  scorr > 100
# print(is_bust(500))

def closer_to_target(a: int, b: int, target: int = 100) -> int | None : 

    if a > b :
        return 1
    elif b > a :
        return 2
    elif a == b :
        return None
# print(closer_to_target(60,50))

def tie_breaker() -> int :
    roll_player1 = roll_two_d6()
    roll_player2 = roll_two_d6()
    if roll_player1[0] + roll_player1[1] > roll_player2[0] + roll_player2[1]:
        return 1
    elif roll_player1[0] + roll_player1[1] < roll_player2[0] + roll_player2[1]:
        return 2
    elif roll_player1[0] + roll_player1[1] == roll_player2[0] + roll_player2[1]:
        return tie_breaker()
# print(tie_breaker())

def turn_decision() -> str :

    decision = input(str("Choose: 'r' = roll or 'p' = pass . "))

    while True:
       if decision == "p":
          break 
       elif decision =="r":
          return roll_two_d6()
       else:
           return turn_decision()
# print(turn_decision())
