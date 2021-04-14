<?php

use App\Http\Controllers\Api\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/{category}', [CategoryController::class, 'show']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::get('/products/slug/{slug}', [ProductController::class, 'slug']);


Route::get('/products/search/{search}', [ProductController::class, 'search']);

Route::post('/purchase', [UserController::class, 'purchase']);

Route::get('/cart/{user_id}', [CartController::class, 'show']);
Route::post('/cart/add/{user_id}/{product_id}', [CartController::class, 'add']);
Route::post('/cart/remove/{user_id}/{product_id}', [CartController::class, 'remove']);
Route::post('/cart/delete/{user_id}/{product_id}', [CartController::class, 'delete']);
Route::post('/cart/clear/{user_id}', [CartController::class, 'clear']);

// Route::get('/cart', function(){

//         Cart::factory()
//             ->times(3)
//             ->create();

//         $carts = Cart::all();

//         Product::all()->each(function ($product) use ($carts) {
//             $cartIds = $carts->random(3)->pluck('id')->toArray();
//             foreach($cartIds as $cartId) {
//                 $product->carts()->attach($cartId, ['quantity' => rand(1, 5)]);
//             }
//         });

//         return Cart::where('user_id', 1)->with('products')->get();
// });