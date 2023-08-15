<template>
    <v-container class="fill-height d-flex flex-column">
        <v-card width="400px" height="fill-content" class="ma-auto pa-6">
            <v-card-title class="mb-2">Login</v-card-title>
            <v-text-field label="Email" variant="outlined" v-model="email"/>
            <v-text-field label="Password" variant="outlined" v-model="password"/>
            <v-checkbox label="Remember me"></v-checkbox>
            <v-card-actions>
            <v-btn @click="doLogin()" style="background-color: #f0f0f0;">Login</v-btn>
            <v-btn to="/signUp" class="ml-auto">Sign up</v-btn>
        </v-card-actions>
        </v-card>
        <v-btn to="/">Home</v-btn>
    </v-container>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default{
data: () => ({
    email: '',
    password: ''
}),
methods: {
    
    doLogin() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
            // Signed in 
        const user = userCredential.user;
        this.$router.push("main");
         })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        });
    }
}

}
</script>