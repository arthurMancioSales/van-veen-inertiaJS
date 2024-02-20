<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class InstagramFeedController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response = Http::withUrlParameters([
            'endpoint' => 'https://graph.instagram.com',
            'version' => 'v17.0',
            'target' => 'me',
            'media' => '',
            'token' => env("INSTAGRAM_API_TOKEN"),
        ])->get('{+endpoint}/{version}/{target}/media?fields=caption,media_url,permalink,username,media_type&access_token={token}');

        if (!$response->ok()) {
            return response("Um erro ocorreu ao buscar as mídias do instagram");
        }
        $posts = $response->json()["data"];

        return response($posts[0]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
