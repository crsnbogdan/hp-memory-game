Initial game screen:
    - project title
    - container for each game mode, if no mode is chosen it will default to all houses
    - start game button

Navigation:
    - project title
    - container for each game mode ( all houses, Slytherin, Griffendor, Hufflepuff or Ravenclaw)
    - container showing highest possible score (16) and highest session score ( for the mode chosen, either 64 for all houses or 16 for individual house )

Main:
    Start view:
        - game name
        - option to choose between the houses
        - button to start game
    Game view:
        - initial function to get 16 cards from target house if a house is selected, if every house is selected, get all 64 cards
        - cards component that contains cards and randomizes their position every time it is called
        -useEffect for cards component 
            mount - display cards in dom
            unmount - if game over display game over screen / if not game over unmount cards component and re-mount it to re-randomize positions
    Game over view:
        - option to restart current game
        - option to choose a different game mode
