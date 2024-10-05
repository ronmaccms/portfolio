
let userAge = Number(prompt("What's your age"))

const app = Vue.createApp({
    data() {
        return {
            movieTitle: "Shining",
            age: userAge,
            //age: 18,
            showTitle: true,
            firstName: "Andres",
            lastName: "Macchiavello",
            title: "My Portfolio",
            titleHTML: "Andres Roncal <span class='badge'>Portfolio</span>",
            alert: 'This is an alert message!',
            projects: [
                { title: "portfolio", desc: "Project 1" },
                { title: "clone", desc: "Project 2" }
            ],
            dynamicID: "project_section",
            dynamicClass: "project",
            disabled: true,
            attribute_name: 'href',
            url: 'https://fabiopacifici.com',
            event_name: "click",
        };
    },
    methods: {
        runFunction() {
            console.log("Test click function");
        },
        getFullName(){
            return this.firstName + " " + this.lastName;
        },
        // es5 syntax
        // getFullName: function(){

        // }
    },
    computed: {
        dynamicEvent() {
            return {
                [this.event_name]: this.runFunction
            };
        }
    }
});

app.mount('#app');
