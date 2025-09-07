# Out the cave, off the cliff – Data-oriented design in Nova JavaScript engine

Presentation at University of Turku, Finland JavaScript Day

## Abstract

Nova is a different kind of JavaScript engine that explores a data-oriented
design and Entity-Component-Systems inspired architecture. It does not try to
find a perfect, abstract solution to the equation that is the ECMAScript
specification: instead, Nova asks each part of the specification "What is your
intended purpose? What are your common use-cases?", and produces a solution
fitting modern JavaScript and modern hardware.

In the world of JavaScript, fancy over-generalised frameworks and deep
abstractions often rule, producing large amounts of garbage at runtime and
requiring large swaths of code to run to perform the developer's intended
effect, no matter how trivial in the end. In this session, we will be turning
our gaze from the code editor's shadow play and out into the world outside the
developer's cave: we will look at various JavaScript idioms and consider what
our mental model for the idiom is, and what is actually happening inside the
engine when using those idioms. After all, the job of a software engineer is not
to write code but to solve data transformation problems, and to do that it is
useful or even necessary to know one's tools and how they perform said data
transformations. We will also cast a critical eye on both the developer and the
engine, and ponder if the mainstream engines haven't perhaps become
over-generalised with deep abstractions themselves – all to avoid performance
cliffs that could be used to show them in a bad light on some microbenchmark or
another.

We will then compare what we've seen to the Nova JavaScript engine, and ponder
if jumping off the performance cliff isn't such a bad thing after all? Is the
purpose of a JavaScript engine to run all reasonably common JavaScript code
equally well, or should it prioritise the most common idioms above the rest?
