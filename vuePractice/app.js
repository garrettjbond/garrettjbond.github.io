const app = Vue.createApp({
    data() {
        return {
            greeting: 'Toggle Box',
            isVisible: false
        }
    },
    methods: {
        toggleBox(){
            this.isVisible = !this.isVisible;
        },
        greet(){
            console.log(this.greeting)
        }
    }
});

app.component('login-form', {
    template: `
        <form @submit.prevent="handleSubmit()">
            <h1>{{title}}</h1>
            <custom-input type='email'/>
            <custom-input type='password' v-bind:label="emailLabel"/>
            <button>Submit</button
        </form>
    `,
    components: ['custom-input'],
    data() {
        return{
            title: 'Login Form',
            email: '',
            password: '',
            emailLabel: 'Email',
            passwordLabel: 'Password'
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.email, this.password);
        }
    }
});
app.component('custom-input', {
    template: `
        <label>
            {{label}}
            <input type="text">
        </label>
    `,
    props: ['label']
})

app.mount('#app');
