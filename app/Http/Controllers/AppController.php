<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class AppController extends Controller
{
    public function init()
    {
        $user = Auth::user();

        return response()->json(['user' => $user], 200);
    }

    public function login(Request $request)
    {
       if(Auth::attempt(['email' => $request->email, 'password' => $request->password], true)){
            return response()->json(Auth::user(), 200);
       }
       else{
           return response()->json(['error' => 'L’adresse e-mail et / ou le mot de passe sont incorrectes .'], 401);
       }
    }

    public function register(Request $request)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();
        
        if(isset($user->id)){
            return response()->json(['error' => 'Adresse email déjà utilisée.'], 401);
        }

        $user = new User();

        $user->firstname = $request->firstname;
        $user->lastname = $request->lastname;
        $user->email = $request->email;
        $user->remember_token = Str::random(10);
        $user->password = Hash::make($request->password);

        $user->save();

        $cart = new Cart();
        $cart->user_id = $user->id;
        $cart->save();
        
        Auth::login($user);

        return response()->json($user, 201);
    }

    public function logout(){
        Auth::logout();
    }
}
