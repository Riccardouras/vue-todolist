const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: "",
            toDoList: []
        }
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.toDoList.push({ text: this.newTask, done: false });
                this.newTask = '';
        }
    },
}
}).mount("#app")