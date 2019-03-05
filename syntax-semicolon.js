// Semicolons

// Certain ECMAScript statements (...) must be terminated with semicolons
// For convenience, howmeres, such semicolons may be ommited from the source text in certain situations
// These situations are described by saying that semicolons are automatically inserted


// Automatic semicolons insertions
// Three Rules

// Rule one
// When, as a script or module is parse from left to right, a token is encountered that is not allowed by any production of the grammar

var a = 12;
var b = 13;

if(a){console.log(a);}

// The offending token is separated from the previous token by at least one LineTerminarion
// The offending token is a }

// Rule Two
// When, as the Script or Module is parsed from left to right, the end of the input stream of tokens is encountered, then a semicolon is automatically inserted at the end of th einput stream

console.log(a+b);

// Rule Three
// When, a token is encountered that is alloweb by some production of the grammar, BUT THE PRODUCTION SI A RESTRICTED PRODUCTION and the token would be
// the first token of a restricted production, and the restricted token is separated from the previous token by
// AT LEAST ONE LINE TERMINATOR, then a semicolon is AUTOMATICALLY INSERTED before the restricted token.

function returnObject()
{
    if(someTrueThing)
    {
        return // <- Here will be introduce the automatically semi-colon
        {
            hi: 'hello'
        }
    }
}

