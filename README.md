# Template: es-hono-pet-store

This templates demonstrates a basic Pet Store API for Bunny using a local `Deno`.

> You do not want to use Deno? Feel free to use something else, [here](https://bunny.net) is a full
> fledged example with `node` instead!

This templated script is currently deployed
[here](https://es-hono-pet-store-9ww3g.b-cdn.net/).

## Setup

To run this example you'll need to have a valid
[Deno](https://docs.deno.com/runtime/manual/getting_started/installation/) installation.

When you have the `deno` binary available, you should be able to run the `check`
task which is the task ensuring everything is compiling fine.

```
# A tiny lint just to be sure!
deno task lint

# We ensure everything is type compliant!
deno task check
```

We also use `pnpm` to use `changeset`.

## Changeset

In this template, we handle versionning with [changeset](https://github.com/changesets/changesets), 
each time you do a change, you'll need to indicate the kind of changes you are 
doing so we can have the auto-release process ongoing by doing:

```
pnpm changeset
```
