1. Convert my string into uppercase letters
2. Create a hashmap <<words>> to put in the words and the number of times
3. Create a boolean variable  <<processing>> that tells me when processing a word.

4. Create a variable <<mostRepeatedword>> that will contain the most repeated world
and a variable<<mostRepeatedTimes>> that will contain the number of times that the word is repeated

5. Create a variable <<word>> that will have the processing word and will be initialized to blank

6. For every character in the book string I Will take the following actions
    6.1. Get the ascii code of the character
    6.2. Ask if the character is a letter( ascii between 65 and 90 )
        6.2.1 add to the variable <<word>> the string in process
        6.2.2 If <<6.2>> is true
           6.2.2.1 If I 'm not processing a word then
                6.2.2.1.1 Set the variable <<processing>> to true

        6.2.3 If <<6.2>> is false
           6.2.3.1 If I 'm processing a word then
                6.2.3.1.1 Set the variable <<processing>> to false

                6.2.3.1.2 Verify if the index <<word>> doesn't exist in the hashmap <<words>> <<words[word]>>
                    6.2.3.1.2.1 If <<6.2.3.1.2>> is true then create the new index with a value of 1
                    6.2.2.1.3.2 If <<6.2.2.1.3>> is false then add One to the value of <<words[word]>>
                6.2.3.1.3 Verify if the value of <<words[word]>> is greater than the value of <<times>>
                    6.2.3.1.3.1 if <<6.2.3.1.3 >> is true then 
                    set <<mostRepeatedWord>> to the value of word
                    and set <<mostRepeatedtimes>> to the value of <<words[word]>>
                6.2.3.1.4 Set the variable <<word>> to blank
7. Return the value of <<mostRepeatedWord>>

Complexity O(n). Only have to read the string one time.

Variables to use
1. A hashmap <<words>> to store words and number of times repeated

2. A boolean variable<<processing>> to know if there is a word processing

3. A variable <<mostRepeatedWord>> to know the word that is most repeated.

4. A variable <<timesRepeated>> to know how many times the word is repeated.

5. A variable <<word>> to know the word that is processing at the time

Notes: this solution is thinking about English Alphabet. If the Alphabet changes the rules are gonna be changing.