<template>
    <v-container class="fill-height d-flex flex-column">
        <v-card width="400px" height="fill-content" class="ma-auto pa-6">
            <v-card-title class="mb-2">Sign Up</v-card-title>
            <v-text-field label="Email" v-model="email" variant="outlined"/>
            <v-text-field label="Password" v-model="password" variant="outlined"/>
            <v-checkbox label="Remember me"></v-checkbox>
        <v-card-actions>
            <v-btn @click="doSignUp()" style="background-color: #f0f0f0;">Sign Up</v-btn>
            <v-btn to="/login" class="ml-auto">Login</v-btn>
        </v-card-actions>
        </v-card>
        <v-btn to="/">Home</v-btn>
    </v-container>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default{
data: () => ({
    rememberMe: true,
    email: "",
    password: "",
  }),
methods: {
    doSignUp() {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
            // Signed in 
        const user = userCredential.user;
            alert("Success")
        })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
            // ..
        });
    },
    test() {
        alert(this.email)
        alert(this.password)
    }
}}
</script>