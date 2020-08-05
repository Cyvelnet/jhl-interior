<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function index()
    {
        return view('contact');
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'email'   => 'required',
            'message' => 'required|min:20',
            'name'    => 'required',
            'phone'   => 'nullable',
        ]);

        try {

            \Mail::to('jhlgroup@live.com')->send(new ContactUsMail(
                $request->input('name'),
                $request->input('email'),
                $request->input('phone'),
                $request->input('message'),
                $request->ip()
            ));

            return redirect()->back()->with([
                'message' => 'Thank you for contacting us, we have received your message, we will get back to you soonest as possible.',
                'status'  => true,
            ]);

        } catch (\Exception $exception) {

            return redirect()->back()->with([
                'message' => 'Something went wrong!',
                'status'  => false,
            ])->withInput();

        }

    }
}
