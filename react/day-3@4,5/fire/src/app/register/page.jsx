"use client"
import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import {app} from "../FireConfig"
export default function page() {

    let router=useRouter()

    const auth = getAuth(app);
    
    let userInfo = (e) => {
        e.preventDefault()
        let userObj = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                router.push("/")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
    return (
        <div>

            <div class="bg-white rounded-lg shadow-md p-8 w-full mx-auto my-16 max-w-md">
                <h2 class="text-2xl font-semibold text-blue-600 mb-6">Create an Account</h2>
                <form onSubmit={userInfo} >
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-600">Name</label>
                        <input type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded-md text-gray-800" />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                        <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md text-gray-800" />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md text-gray-800" />
                    </div>
                    <button type="submit" class="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Sign Up</button>
                </form>
            </div>
        </div>
    )
}
