# Blackjack Task

## Task:

Write code that can simulate a hand of blackjack.

## The Game:

The goal of the game is to get a hand of cards that’s worth as close to 21 points as possible. If a player’s hand goes over 21 points, they have lost.

The player is initially dealt two cards. They may then choose to ‘hit’ (draw a card) or ‘stand’ (stop drawing cards.) If they ‘hit’, then the new card’s value is added to the hand total. If this total exceeds 21, the player is ‘bust’, and loses.

Once all players have finished this process, the highest scoring hand wins.

Your solution should model a single deck of 52 cards:
Number cards are worth their face value (2-10)
Jacks, queens, and kings are worth 10 each
Aces are worth either 1 or 11 (player chooses)
The suit of the card does not matter.

(These are simplified rules- a full description with gameplay variations can be found at https://en.wikipedia.org/wiki/Blackjack.)

## Tests:

- Prove code works with unit tests and Scenarios.

## Scenarios:

Given I play a game of blackjack
When I am dealt my opening hand
Then I have two cards

Given I have a valid hand of cards
When I choose to ‘hit’
Then I receive another card
And my score is updated

Given I have a valid hand of cards
When I choose to ‘stand’
Then I receive no further cards
And my score is evaluated

Given my score is updated or evaluated
When it is 21 or less
Then I have a valid hand

Given my score is updated
When it is 22 or more
Then I am ‘bust’ and do not have a valid hand

Given I have a king and an ace
When my score is evaluated
Then my score is 21

Given I have a king, a queen, and an ace
When my score is evaluated
Then my score is 21

Given that I have a nine, an ace, and another ace
When my score is evaluated
Then my score is 21

## Possible Extensions:

Display the player’s cards (text or graphics)
Invite player input
Allow for multiple players
Allow for multiple hands
Allow for rule variations

# Solution:

## Design decisions:

- Start with a react app to allow possible extension to playable/interactive.
- Use jest with react-testing-library to write unit tests for each scenario.
- Follow TDD practices to ensure passing tests.
- Set up deck using reusable lib and utils functions.
- Use typescript to maintain type-safety as project grows.
- Use styled-components for reusable, readable styling.
- Start basic and extend - MVP as follows:
  - Set up a shuffled deck.
    - Do this with reusable functions to aid testing and DRY code.
    - Use ICard interface to give each card a unique "code", as well as a "weight" integer for scoring.
    - Use Fisher-Yates shuffle algorithm to modify array in place, and achieve unbiased permutations (O(n) time-complexity).
  - Deal cards to player and dealer, in correct order.
  - Track count of each using state.
  - Automate dealer behaviour but allow player interaction (will enable easier testing of scenarios).

Extensions:

- Display cards - add flip effect and deal etc.
- Add betting for player input?
