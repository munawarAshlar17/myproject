<template>
    <div class="users">
        <h1> {{title}} </h1>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted"/>
                <span :class="{contacted: user.contacted}">
                         {{user.name}} : {{user.email}}
                    <button v-on:click="deleteUser(user)">x</button>
                </span>


            </li>

        </ul>
        <br>
        <form v-on:submit="addUsers">
            <input type="text" v-model="newUser.name" placeholder="Enter Name"/>
            <br>
            <input type="text" v-model="newUser.email" placeholder="Enter email"/>
            <br>
            <input type="submit" value="Submit"/>


        </form>

        <ul>
            <li v-for="ninja in ninjsa">{{ninja.name}} {{ninja.company}}</li>

        </ul>
        <button v-on:click="deleteNinja">delete ninja</button>
    </div>
</template>

<script>
    import {bus} from '../main.js';
    export default {
        name: "Users",

        props:['ninjsa','title'],

        data(){
            return{
                newUser:{},
                users:[],
            }

        },
        methods: {
            addUsers(e)
            {
                console.log('users');
                this.users.push(
                    {
                        name: this.newUser.name,
                        email: this.newUser.email,
                        contacted: false
                    }
                )
                e.preventDefault();

            },
            deleteUser(user)
            {
                this.users.splice(this.users.indexOf(user),1)
            },
            deleteNinja()
            {
                this.ninjsa.pop()
            }



        },
       created()
       {
           console.log('created ran');
           this.$http.get('https://jsonplaceholder.typicode.com/users').
           then( function (res) {
               this.users=res.data;

           })
           bus.$on('titleChange',(data) =>{
              this.title=data;
           })

       }
    }
</script>

<style scoped>
    .contacted{
        text-decoration: line-through;
    }

    h1{
        color: cornflowerblue;
    }
</style>
