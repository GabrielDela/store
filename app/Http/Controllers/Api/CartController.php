<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{

    public function index()
    {
        return Cart::with('products')
        ->first()['products'];
    }

    public function show($user_id)
    {
        return Cart::where('user_id', $user_id)->with('products')->first()['products'];
    }

    public function add($user_id, $product_id)
    {
        $cart = Cart::where('user_id', $user_id)->first();

        $done = false;

        foreach ($cart->products as $product) {
            if ($product->pivot['product_id'] == $product_id) {
                $done = true;
                $cart->products()->detach($product_id);
                $cart->products()->attach($product_id, ['quantity' => $product->pivot['quantity'] + 1]);
            }
        }

        if(!$done){
            $product = Product::where('id', $product_id)->first();
            $cart->products()->attach($product->id, ['quantity' => 1]);
        }

        return Cart::where('user_id', $user_id)->with('products')->first()['products'];
    }

    public function remove($user_id, $product_id)
    {
        $cart = Cart::where('user_id', $user_id)->first();

        foreach ($cart->products as $product) {
            if ($product->pivot['product_id'] == $product_id) {
                $cart->products()->detach($product_id);
                if ($product->pivot['quantity'] - 1 != 0) {
                    $cart->products()->attach($product_id, ['quantity' => $product->pivot['quantity'] - 1]);
                }
            }
        }

        return Cart::where('user_id', $user_id)->with('products')->first()['products'];
    }

    public function delete($user_id, $product_id)
    {
        $cart = Cart::where('user_id', $user_id)->first();

        foreach ($cart->products as $product) {
            if ($product->pivot['product_id'] == $product_id) {
                $cart->products()->detach($product_id);
            }
        }

        return Cart::where('user_id', $user_id)->with('products')->first()['products'];
    }

    public function clear($user_id)
    {
        $cart = Cart::where('user_id', $user_id)->first();

        foreach ($cart->products as $product) {
            $cart->products()->detach($product->pivot['product_id']);
        }

        return Cart::where('user_id', $user_id)->with('products')->first()['products'];
    }
}
