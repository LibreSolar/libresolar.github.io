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
- Maximum line length of 100 characters
- No spaces at end of a line or in an empty line
- One empty new-line at the end of the file
- Linux-style line-ending (LF or `\n`)

## Naming

- Classes, structs, typedefs and enums are named using `PascalCase` or `UpperCamelCase`. Acronyms are treated as a single word, so a JSON parser is named `JsonParser`. Custom type name endings with `_t` are not allowed, as they are [reserved](https://www.gnu.org/software/libc/manual/html_node/Reserved-Names.html) for C internal types.

- Function or method names use `snake_case`.

- Global and local variables, parameters and class/struct/union member names also use `snake_case`.

- Macros, defines and enum elements are written in `UPPER_CASE`.

- File names are always lower case to prevent incompatibilities between different operating systems.

- Each header file should contain a header guard defines using the file name in upper case letters (e.g. `MY_FILE_H`) without any underscores `_` at the beginning, as names with underscores are [reserved for C libraries](https://www.gnu.org/software/libc/manual/html_node/Reserved-Names.html).

## Other

- C++/C99-style comments `//` are allowed
- Expressions behind defines must be enclosed in braces, e.g. `#define (3*1034)`
- Comments should be in Doxygen style where applicable.

## Example

Header file `example.h`

```C
#ifndef EXAMPLE_H
#define EXAMPLE_H

/**
 * Character buffer to store strings incl. their maximum size
 */
typdedef struct {
    char *str;      ///< Pointer to string in memory
    size_t size;    ///< Maximum size of buffer
} Buffer

enum MyState {
    STATE_ON,
    STATE_OFF
}

/**
 * State machine of this nice embedded hardware
 *
 * @param buf Some description here
 * @param foo Meaning of this variable here
 */
void state_machine(Buffer *buf, int foo)

#endif /* EXAMPLE_H */

```

Implementation file `example.c`

```C
#include "example.h"

static MyState current_state;

void state_machine(Buffer *buf, int foo)
{
    switch(current_state) {
        case STATE_ON:
            do_something();
            break;
        case STATE_OFF:
            return;
            break;
    }

    if (buf->str != NULL) {
        // ...
    }
    else {
        // ...
    }

    for (int i = 0; i < 10; i++) {
        // ...
    }
}
```