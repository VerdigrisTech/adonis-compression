# Contributing to AdonisJs Compression

The following is a set of standard guidelines that applies to all JavaScript
projects at Verdigris Technologies.

## Tables of Contents

* [Pull Requests](#pull-requests)
* [Styleguides](#styleguides)
  * [Git branches and commit messages](#git-branches-and-commit-messages)

## Pull Requests

* Fill in the required template
* Include thoughtfully worded, well-structured specs in the `./test` folder in
  the form of `<subject> should <expected behavior> when <condition>`
  * **Example:** `Array.map should raise a TypeError when argument is not a function`
* End all files with a newline
  * **Tip:** Use [editorconfig][editorconfig] plugin for your favorite text
    editor
* Place requires in the following order:
  * Built-in Node modules
  * Dependencies (modules in `./node_modules`)
  * Local modules (either via `require` or AdonisJs style `use`)

## Styleguides

### Git branches and commit messages

* Use dashes, not underscores in branch names
  * ✅ `some-awesome-feature`
  * 🚫 `some_awesome_feature`

* Use present tense
  * ✅ `Add check for array bounds`
  * 🚫 `Added check for array bounds`

* Use imperative mood
  * ✅ `Move cursor to...`
  * 🚫 `Moves cursor to...`

* Limit first line to 72 characters or less

* Code pairing should include the following lines at the end of the commit
  message after double newlines:

      Add support for my awesome feature

      Extra description about this commit message.


      Co-authored-by: Andrew Jo <andrew@verdigris.co>
      Co-authored-by: Hannah Hagen <hannah@verdigris.co>

[editorconfig]: https://editorconfig.org/
