module.exports = {
    label: "all tasks",
    description: "all base tasks (doesn't include workstreams, etc.)",
    dependencies: tasks.getAllTasks(),
    tags: [
        "workstream"
    ]
}
