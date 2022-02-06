@extends('layouts.app')

@section('title') Home @endsection
@section('extra_stylesheet') 

<link rel="stylesheet" href="{{ asset('dist/css/b-styling.css') }}">

@endsection
@section('content')

    {{-- <main> --}}

        <!-- Site Head -->

        <section class="site-head full-height">

            <div class="site-bg">
                <h3>David's Developments</h3>
                <h1>Welcome to my blog</h1>
                <a href="{{ url('/blog/') }}"><button class="btn">Explore</button></a>
            </div>

        </section>

        <!-- End Head -->

    {{-- </main> --}}

@endsection
