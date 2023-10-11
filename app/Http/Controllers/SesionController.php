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
            return response()->json([
                "message" => "Credenciales correctas.",
                "status" => 200
            ]);
        } else {
            return response()->json([
                "message" => "Las credenciales que ingresaste no son correctas, vuelve a intentarlo.",
                "status" => 404
            ]);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->flush();
        return redirect('/');
    }
}