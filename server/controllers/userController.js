import User from '../models/User.js';
import Car from '../models/Car.js';
import bcrypt from 'bcrypt';
import e from 'express';
import jwt from 'jsonwebtoken';

// Generate JWT token
const generateToken = (userId) => {
    const payload=userId;
    return jwt.sign(payload, process.env.JWT_SECRET);
}


export const registerUser=async (req,res)=>{
    try{
        const {name,email,password}=req.body

        if(!name || !email || !password || password.length<8){
            return res.json({success:false, message:"Fill all the fields"})
        }

        const userExists=await User.findOne({email})
        if(userExists){
            return res.json({success:false, message:"User already exists"})
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const newUser=await User.create({
            name,
            email,
            password:hashedPassword
        })

        

        const token=generateToken(newUser._id.toString())

        return res.json({success:true, message:"User registered successfully", token})

    }catch(error){
        return res.json({success:false, message:"Internal server error"})
    }
}

// Login user
export const loginUser=async (req,res)=>{
    try{
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.json({success:false, message:"User does not exist"})
        }
        const isPasswordValid=await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            return res.json({success:false, message:"Invalid credentials"})
        }
        const token=generateToken(user._id.toString())
        res.json({success:true, message:"User logged in successfully", token})
    }
    catch(error){
        console.error(error);
        res.json({success:false, message:"Internal server error"});
    }
}

// Get user data using token(JWT)
export const getUserData=async (req,res)=>{
    try{
        const {user}=req;
        res.json({success:true, message:"User data fetched successfully", user});

    }
    catch(error){
        console.error(error);
        res.json({success:false, message:error.message});
    }
}

// Get All Cars for the Frontend
export const getCars=async (req,res)=>{
    try{
        const cars=await Car.find({isAvailable:true})
        res.json({success:true, cars})
    }
    catch(error){
        console.error(error);
        res.json({success:false, message:error.message});
    }
}