<?php

function create ($class, $attr = []) {
    return factory($class)->create($attr);
}

function make ($class, $attr = []) {
    return factory($class)->make($attr);
}