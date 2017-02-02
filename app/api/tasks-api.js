var TaskApi = {
    init: function(){
        localStorage.clear();
        localStorage.setItem('tasks', JSON.stringify([
            { id: 1, name: "Buy mountain bike", description: "The goal of this task is for you to have your own bike", priority: "Low", status: "Done" },
            { id: 2, name: "Buy car", description: "The goal of this task is for you to have your own car", priority: "Low", status: "To Do" },
            { id: 3, name: "Buy condominium", description: "The goal of this task is for you to have your own condo", priority: "Medium", status: "Done" },
            { id: 4, name: "Buy house and lot", description: "The goal of this task is for you to have a place for the entire family", priority: "High", status: "To Do" },
            { id: 5, name: "Buy restaurant", description: "The goal of this task is for you to have your own business", priority: "High", status: "To Do" },
            { id: 6, name: "Buy company", description: "The goal of this task is for you to have your own life", priority: "Medium", status: "In Progress" },
        ]));
    },
    getItems: function(){
        if(!localStorage.getItem('tasks'))
        {
            this.init();
        }

        return localStorage.getItem('tasks');
    },

};

module.exports = TaskApi;