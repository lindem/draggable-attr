This repo shows behaviour from ember 3.4+ regarding the `draggable` attribute on
HTML elements (spec: [section 5.7.7](https://www.w3.org/TR/html51/editing.html#the-draggable-attribute)).

It seems — at first — that ember does not allow to set the draggable attribute
explicitly to (the string) `"false"`, which is a legitimate value for the
attribute.

The issue is that ember tries, as always, to make our lives easier by
translating thusly:

* `null` means the tag is omitted
* (boolean) `false` means the tag is set to (the string) false
* (boolean) `true` (and really any other truthy value, sets the attribute to 
  true
  * both the strings `"true"` and `"false"` are truthy. This is where the
    confusion stems from: it seems to work _half right_.

This repository shows how it is done:

* curly components just set an attribute binding to these values
* angle bracket components have to use
  `<AngleBracketComponent draggable={{value}}>` (with curlies).
* everything else needs to bind to a property containing the correct values.

Steps to try it:

- Check out this repo
- install dependencies and `ember s`
- browse to the application, mostly https://localhost:4200
