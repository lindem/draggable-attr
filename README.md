This repo shows behaviour from ember 3.5 that likely constitutes a bug.

The alleged bug affects the `draggable` attribute on HTML elements (spec: [https://www.w3.org/TR/html51/editing.html#the-draggable-attribute](section 5.7.7)).

It seems that ember does not allow to set the draggable attribute explicitly to
`"false"`, which is a legitimate value for the attribute and prevents `img` and
`a` elements from being draggable.

This repository uses a curly component with an `attributeBinding`. It seems that
whenever a non-null value is set to the property, the result is <strong>always</strong>
`draggable="true"`, which is wrong.

Steps to try it:

- Check out this repo
- install dependencies and `ember s`
- browse to the application, mostly https://localhost:4200
