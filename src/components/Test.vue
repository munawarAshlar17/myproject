<template>
    <div>

        <div class="test">
            <h1 v-on:click="changeTitle">{{title}}</h1>
            <input type="text" v-model="title" />

            <p v-if="showName"> {{user.name}}</p>
            <p v-else="showName">{{user.name}}</p>
            <p v-text="user.age"></p>
            <div class="card mb-3">
                <h3 v-for="item in items">
                    Title : {{item.title}} And Description : {{item.name}}
                </h3>

            </div>
            <button v-on:click="greet">say greeting</button>
            <br>
            <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="hitEnter"/>
            <br>
            <input type="text" name="first_name" placeholder="first name" v-model="user.name"/>
            <br>
            <input type="text" name="age" placeholder="age" v-model="user.age"/>

            <h3>{{full_description}}</h3>
        </div>


    </div>

</template>

<script>
    import {bus} from '../main.js';
    export default {
        name: "Test",
        props:['title'],
        data()
        {
            return {


                user: {
                    name: 'munawar',
                    age: '24',
                },
                showName: false,
                items: [


                    {title: '1', name:'Iphone'},
                    {title: '2', name:'Samsung'},
                    {title: '3', name:'Huawei'},
                    {title: '4', name:'Oppo'},
                ]
            }
        },
        methods:{
            greet(){
                alert('hello');
            },
            pressKey()
            {
              console.log('pressed');
            },
            hitEnter()
            {
                console.log('you hit enter');
            },
            changeTitle(){
                this.title='ashlar global',
                bus.$emit('titleChange','ashlar global')
            }
        },
        computed: {
            full_description()
            {
                return this.user.name+' '+this.user.age;
            }
        }
    }

</script>

<style scoped>

    h1{
        color: green;
    }
</style>
