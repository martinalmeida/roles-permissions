<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;

class SesionController extends Controller
{
    public function validated(Request $request)
    {
        $email = $request->email;
        $paswd = $request->password;

        if (auth()->attempt(array('email' => $email, 'password' => $paswd, 'status' => 1))) {
            return response()->json(true);
        } else {
            return response()->json(false);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->flush();
        return redirect('/');
    }
}