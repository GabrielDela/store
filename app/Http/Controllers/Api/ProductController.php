<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{

    public function index(Request $request)
    {

        $products = Product::where('name', 'like', '%' . $request->search . '%')->with(['categories' => function ($query) {
            $query->select('id', 'name');
        }])->offset($request->page * 10 - 10)
            ->limit(10)->orderBy('price', $request->price)
            ->get();
        
        $totalProducts = count(Product::where('name', 'like', '%' . $request->search . '%')->with(['categories' => function ($query) {
            $query->select('id', 'name');
        }])->orderBy('price', $request->price)
            ->get());

        $verifNext = Product::where('name', 'like', '%' . $request->search . '%')->with(['categories' => function ($query) {
            $query->select('id', 'name');
        }])->offset(($request->page + 1) * 10 - 10)
            ->limit(10)->orderBy('price', $request->price)
            ->get();

        if (count($verifNext) == 0) {
            $next = 0;
        } else {
            $next = $request->page + 1;
        }

        $previous = $request->page == 1 ? 0 : $request->page - 1;

        return response()->json(['products' => $products, 'previous' => $previous, 'next' => $next, 'totalProducts' => $totalProducts]);
    }

    public function show(Product $product)
    {
        $product->load('categories:id,name');

        return $product;
    }

    public function slug($slug)
    {
        $product = Product::where('slug', $slug)->first();

        if($product){
            return $product->load('categories:id,name');
        }
        else{
            return null;
        }
    }
}
