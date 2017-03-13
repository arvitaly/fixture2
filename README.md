# fixture2

[![Greenkeeper badge](https://badges.greenkeeper.io/arvitaly/fixture2.svg)](https://greenkeeper.io/)
Microlib for create fixtures for unit-testing

[![npm version](https://badge.fury.io/js/fixture2.svg)](https://badge.fury.io/js/fixture2)
[![Build Status](https://travis-ci.org/arvitaly/fixture2.svg?branch=master)](https://travis-ci.org/arvitaly/fixture2)
[![Coverage Status](https://coveralls.io/repos/github/arvitaly/fixture2/badge.svg?branch=master)](https://coveralls.io/github/arvitaly/fixture2?branch=master)

# Install

    npm install fixture2 --save-dev

# Usage

    var fixtures = require('fixture2');
    //create collection
    var f = fixtures();
    //create string fixture
    f("fix1");
    //get value of existing fixture
    f("fix1");
    //set value by type
    f("fix1", "string");
    f("fix1", "number");
    f("fix1", "float");
    f("fix1", "int");
    //set value by value
    f("fix", "another value")
    f("fix", {field: "value"})