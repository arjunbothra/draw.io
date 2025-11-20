"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Icons } from './icons';


export function AuthPage({ isSignin }: { isSignin: boolean }) {
    return (
        <div className="min-h-screen w-full bg-[#FDFBF7] flex flex-col items-center justify-center relative overflow-hidden selection:bg-blue-100 selection:text-blue-700">
            
            {/* Background Effects */}
            <div className="absolute inset-0 w-full h-full">
                {/* Darker grid for light mode visibility */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] mask-radial-fade"></div>
                {/* Subtle warm spotlight instead of deep blue */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-200/20 rounded-full blur-[120px] animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[120px]" />
            </div>

            {/* Main Card */}
            <div className="w-full max-w-md relative z-10 p-6">
                
                {/* Logo Header */}
                           <div className="flex flex-col items-center mb-8">
                    {/* Changed: Wrapped logo and text in a row container */}
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-lg shadow-zinc-200 border border-zinc-100 transform rotate-3 transition-transform hover:rotate-6">
                            <Icons.Logo className="w-7 h-7" />
                        </div>
                        <span className="font-bold text-3xl text-zinc-900 tracking-wide font-hand">draw.io</span>
                    </div>
                    
                    <p className="text-zinc-500 text-center text-sm">
                        {isSignin 
                            ? "Welcome back to your infinite canvas." 
                            : "Join thousands of users drawing today."}
                    </p>
                </div>

                {/* Form Container */}
                <div className="bg-white/80 backdrop-blur-xl border border-zinc-200 rounded-2xl p-8 shadow-xl shadow-zinc-200/50">
                    <div className="space-y-5">
                        
                        {/* Email Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-zinc-700 ml-1">Email</label>
                            <input 
                                type="text" 
                                placeholder="name@example.com"
                                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-medium text-zinc-700">Password</label>
                                {isSignin && (
                                    <button className="text-xs text-blue-600 hover:text-blue-700 transition-colors font-medium">
                                        Forgot?
                                    </button>
                                )}
                            </div>
                            <input 
                                type="password" 
                                placeholder="••••••••"
                                className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <Button 
                                onClick={() => {
                                    // Handle auth logic here
                                    console.log(isSignin ? "Signing in..." : "Signing up...");
                                }}
                                variant="glow"
                                className="w-full justify-center text-base py-3 shadow-blue-500/20 hover:shadow-blue-500/30"
                            >
                                {isSignin ? "Sign in" : "Create Account"}
                            </Button>
                        </div>

                        {/* Social Auth Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-zinc-200"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-zinc-400 font-medium">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button className="flex items-center justify-center px-4 py-2.5 border border-zinc-200 rounded-xl bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all text-sm font-medium shadow-sm">
                                <Icons.Github className="w-4 h-4 mr-2" /> GitHub
                            </button>
                            <button className="flex items-center justify-center px-4 py-2.5 border border-zinc-200 rounded-xl bg-white text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-all text-sm font-medium shadow-sm">
                                <span className="mr-2 font-bold text-blue-500">G</span> Google
                            </button>
                        </div>

                    </div>
                </div>

                {/* Footer Link */}
                <div className="text-center mt-8">
                    <p className="text-zinc-500 text-sm">
                        {isSignin ? "Don't have an account? " : "Already have an account? "}
                        <Link 
                            href={isSignin ? "/signup" : "/signin"} 
                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors underline decoration-transparent hover:decoration-current"
                        >
                            {isSignin ? "Sign up" : "Sign in"}
                        </Link>
                    </p>
                </div>
                
            </div>
        </div>
    );
}