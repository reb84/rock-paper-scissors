/*
PSEUDOCODE:

--- GAMEPLAY ---

START
CALL playGame function
    Play 5 rounds
    Keep track of scores
    Declare overall winner
END


--- COMPUTER CHOICE ---

FUNCTION getComputerChoice()
    GENERATE random number between 1 and 3
    
    IF number is 1 THEN
        RETURN "rock"
    ELSE IF number is 2 THEN
        RETURN "paper"
    ELSE
        RETURN "scissors"
    END IF
END FUNCTION


--- PLAYER CHOICE ---

FUNCTION getHumanChoice()
    PROMPT user "Enter rock, paper, or scissors:"
    STORE user input in variable
    RETURN user input
END FUNCTION


--- SCORES ---

SET humanScore = 0
SET computerScore = 0


--- SINGLE ROUND ---

FUNCTION playRound(humanChoice, computerChoice)
    CONVERT humanChoice to lowercase

    IF humanChoice equals computerChoice THEN
        DISPLAY "It's a tie!"
        // No score change
    
    ELSE IF humanChoice = "rock" AND computerChoice = "scissors" THEN
        DISPLAY "You win! Rock beats Scissors"
        ADD 1 to humanScore
    
    ELSE IF humanChoice = "paper" AND computerChoice = "rock" THEN
        DISPLAY "You win! Paper beats Rock"
        ADD 1 to humanScore
    
    ELSE IF humanChoice = "scissors" AND computerChoice = "paper" THEN
        DISPLAY "You win! Scissors beats Paper"
        ADD 1 to humanScore
    
    ELSE
        // Computer wins
        IF computerChoice = "rock" THEN
            DISPLAY "You lose! Rock beats Scissors"
        ELSE IF computerChoice = "paper" THEN
            DISPLAY "You lose! Paper beats Rock"
        ELSE
            DISPLAY "You lose! Scissors beats Paper"
        END IF
        ADD 1 to computerScore
    END IF
END FUNCTION


--- ENTIRE GAME ---

FUNCTION playGame()
    SET humanScore = 0
    SET computerScore = 0
    
    DISPLAY "Welcome to Rock Paper Scissors!"
    DISPLAY "First to win 3 out of 5 rounds wins!"
    
    // Play 5 rounds
    FOR round 1 to 5
        DISPLAY "Round " + round number
        
        SET humanChoice = CALL getHumanChoice()
        SET computerChoice = CALL getComputerChoice()
        
        DISPLAY "You chose: " + humanChoice
        DISPLAY "Computer chose: " + computerChoice
        
        CALL playRound(humanChoice, computerChoice)
        
        DISPLAY "Current score - You: " + humanScore + ", Computer: " + computerScore
        DISPLAY "---"
    END FOR
    
    // Determine overall winner
    IF humanScore > computerScore THEN
        DISPLAY "You won the game!"
        DISPLAY "Final score - You: " + humanScore + ", Computer: " + computerScore
    ELSE IF computerScore > humanScore THEN
        DISPLAY "Computer wins the game!"
        DISPLAY "Final score - You: " + humanScore + ", Computer: " + computerScore
    ELSE
        DISPLAY "It's a tie!"
        DISPLAY "Final score - You: " + humanScore + ", Computer: " + computerScore
    END IF
END FUNCTION

*/

