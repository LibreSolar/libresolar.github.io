---
title: "Coding Style"
excerpt: "C/C++ coding style for Libre Solar firmware development"
permalink: /docs/coding_style/
---

The coding style for Libre Solar firmware mostly follows the [K&R Style](https://en.wikipedia.org/wiki/Indentation_style#K.26R_style).

## General rules

- Indentation with 4 spaces (tabs not allowed)
- Space before pointer or reference symbols `*`, `&` and symbol placed adjacent to name (e.g. `int *var`)
- No space before opening brace of function: `void foo(int arg);`
- One space after `if`, `for`, `while` and `switch` statements.
- Always use curly braces for `if` and `for` statements, even for one line.
- Curly braces for functions start in next line, for flow statements (`if`, `while`, `switch`, `for`) in the same line.
- No spaces at end of a line or in an empty line
- One empty new-line at the end of the file
- Linux-style line-ending (LF or `\n`)

## Naming

- Classes, structs, typedefs and enums: `UpperCamelCase`
- Function or method namess: `snake_case`
- Global and local variables, parameters and class/struct/union member names: `snake_case`
- Macros, defines and enum elements: `UPPER_CASE`
- File names only lower case.


## Other

- C++/C99-style comments `//` are allowed
- Expressions behind defines must be enclosed in braces, e.g. `#define (3*1034)`

## Example

```
enum MyState {
    STATE_ON,
    STATE_OFF
}

int state_machine(char *buffer, size_t len, MyState state)
{
    switch(state) {
        case STATE_ON:
            do_something();
            break;
        case STATE_OFF:
            return;
            break;
    }

    if (condition != NULL) {
        // ...
    }
    else {
        // ...
    }

}
```