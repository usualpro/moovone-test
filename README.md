# Excited Cells
## Description:
A number of sensitive cells are arranged in a circle and each one communicates with its
two neighbors. In the sequence of cells, the first one and the last one are connected and
are neighbors.
A cell can have two states: “excited” or “quiet”. “1” signifies that the cell is excited, “0"
signifies that the cell is quiet.
Given an initial configuration of excited and quiet cells, determine the configuration after
K steps.
## Rules:
If a cell is excited, it emits a signal received after one step by the two
neighboring cells.
Each cell gets excited when and only when a signal is received from only one
of the neighboring cells.
If a cell receives signals from both its adjacent cells, then the receiving cell
will remain in (or it will transition to) the “quiet” state.
Also, a cell transitions to the “quiet” state when it no longer has any excited
neighbors.
### Input: array of numbers with the initial configuration ({0,1} values).
K > 0, K integer
### Output: array of numbers with the final configuration concatenated with commas.
## Example:
If K = 2 and the initial configuration is 1,0,1,1 then:
- the configuration after 1 step will be: 1,0,1,0
- the configuration after 2 steps and the output will be: 0,0,0,0
#### Time : 45 minutes.
