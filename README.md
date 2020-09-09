# bibsdb/book

Supplies a slide template to recomend single materials. Upload the frontpage and provide a short text.

## Installation

Add the git repository to "repositories" in `composer.json`.

<pre>
"repositories": {
    "bibsdb/book-bundle": {
      "type": "vcs",
      "url": "https://github.com/bibsdb/book-bundle"
    },
    ...
}
</pre>

Require the bundle with composer.

<pre>
composer require bibsdb/book-bundle
</pre>

Enable the bundle in `AppKernel.php`, by adding BibsdbBookBundle to $bundles.

<pre>
new Bibsdb\BookBundle\BibsdbBookBundle()
</pre>

Run bibsdb:core:templates:load command to load the template in the installation.

<pre>
bin/console bibsdb:core:templates:load
</pre>

Enable the template in the administration.

## Ads and controls

To avoid ads and video controls, the shared video has to come from a user
that has disabled the options at book.com. To do it yourself, you need to have
at least a PLUS account (https://book.com/plus).
