# Foundations of Python Programming: Functions First - ITSC 1212 Edition
This repository contains the source code for the "Functions First" edition of the book Foundations of Python Programming tailored to the offering of CS 1 (ITSC 1212) at the University of North Carolina at Charlotte. Originally forked from the [FOPP - Functions First](https://github.com/Python-FunctionsFirst/fopp-functions-first) repository, this fork has been detached as it is not intended to be reconciled with the original.

## Building the Book
You can build this book locally and test drive modifications to the text as well as interactive elements. [PreTeXt](https://github.com/PreTeXtBook/pretext) and [Runestone](https://github.com/RunestoneInteractive/rs) are undergoing active development and eventually a Docker container will likely be the easiest way to get up and running. However, for now you can do the following (I recommend working within a Python virtual environment):

1. Clone this repository to your local machine.
2. `pip install -r requirements.txt`
3. `pretext build web`
4. `pretext view web`

That's it!
