# Workstreams
Experiment on workstream-based architecture for task management

<!--

do: commit updates
....
> [every workstream has rules and data files; rules are applied to data]
> [workstreams all have access to same fetcher function]
> [workstreams should ONLY be list of other workstreams; doesn't perform utility functions]
> 1. add a new task
> 2. get next task
> 3. run a round of agent actions
> 4. get tasks for agent jcha
> 6. exit

do: switch to typeScript
do: add ability to exit via 'c'
do: worklet initialization: data is loaded after initialization (overrides initial values)
do: data is saved after modification
do: ensure that current to-do list cycle format is preserved
do: getNextBase(): recursively traverse through dependency tree until there is a base task that doesn't have a dependency
do: basic prototype
doc: worklets: original data is immutable (only edited by hand)

-->
