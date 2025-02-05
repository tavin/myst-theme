# @curvenote/site

## 0.1.38

### Patch Changes

- 26b0cb87: Be more defensive about code cell children
- f7571c49: Use link providers in more places
- 6da29408: Rearrange deployment of sites
- 269a487f: Fade in the footer and table of contents
- 923cbbf3: Upgrade useNavigation from useTransition
- Updated dependencies [8615bb06]
- Updated dependencies [75a1bc79]
- Updated dependencies [06b83f08]
  - @myst-theme/providers@0.1.38
  - @myst-theme/frontmatter@0.1.38
  - @myst-theme/diagrams@0.1.38
  - @myst-theme/jupyter@0.1.38
  - myst-to-react@0.1.38
  - myst-demo@0.1.38

## 0.1.37

### Patch Changes

- ae4848dd: Add Thebe to theme
- Updated dependencies [0858c076]
- Updated dependencies [ae4848dd]
  - myst-to-react@0.1.37
  - @myst-theme/frontmatter@0.1.37
  - @myst-theme/providers@0.1.37
  - @myst-theme/jupyter@0.1.37
  - @myst-theme/diagrams@0.1.37
  - myst-demo@0.1.37

## 0.1.36

### Patch Changes

- 147dc2c5: Update navigation and spacing for outline and toc
- 5feddf51: Treeshake @heroicons
- b7012467: Backdrop on the nav needs to exclude the top-nav.
- 82cf01f5: Change the default site from dark nav to white nav
- 8af808bf: Remove css updates for document nav and outline from React state

  ```tsx
  const { container, toc } = useTocHeight(top);

  // Update the nav and article, removing the height
  <Navigation tocRef={toc} ... />
  <article ref={container} ... />
  ```

- Updated dependencies [4ad8313a]
- Updated dependencies [5feddf51]
- Updated dependencies [fa347259]
- Updated dependencies [43e26206]
  - myst-to-react@0.1.36
  - @myst-theme/jupyter@0.1.36
  - @myst-theme/frontmatter@0.1.36
  - myst-demo@0.1.36
  - @myst-theme/providers@0.1.36
  - @myst-theme/diagrams@0.1.36

## 0.1.35

### Patch Changes

- Updated dependencies
  - myst-demo@0.1.35
  - @myst-theme/providers@0.1.35
  - @myst-theme/frontmatter@0.1.35
  - @myst-theme/diagrams@0.1.35
  - @myst-theme/jupyter@0.1.35
  - myst-to-react@0.1.35

## 0.1.34

### Patch Changes

- f125d15: Update packages to latest versions. Add JATS support.
- Updated dependencies [f125d15]
- Updated dependencies [f125d15]
  - myst-to-react@0.1.34
  - myst-demo@0.1.34
  - @myst-theme/providers@0.1.34
  - @myst-theme/jupyter@0.1.34
  - @myst-theme/frontmatter@0.1.34
  - @myst-theme/diagrams@0.1.34

## 0.1.33

### Patch Changes

- Updated dependencies [3927ed5]
  - myst-demo@0.1.33
  - @myst-theme/providers@0.1.33
  - @myst-theme/frontmatter@0.1.33
  - @myst-theme/diagrams@0.1.33
  - @myst-theme/jupyter@0.1.33
  - myst-to-react@0.1.33

## 0.1.32

### Patch Changes

- Updated dependencies [8da3c65]
- Updated dependencies [ae5b378]
- Updated dependencies [cc5a023]
  - @myst-theme/frontmatter@0.1.32
  - myst-to-react@0.1.32
  - myst-demo@0.1.32
  - @myst-theme/providers@0.1.32
  - @myst-theme/diagrams@0.1.32
  - @myst-theme/jupyter@0.1.32

## 0.1.31

### Patch Changes

- Updated dependencies [1c05efd]
  - myst-to-react@0.1.31
  - @myst-theme/frontmatter@0.1.31
  - @myst-theme/providers@0.1.31
  - @myst-theme/diagrams@0.1.31
  - @myst-theme/jupyter@0.1.31
  - myst-demo@0.1.31

## 0.1.30

### Patch Changes

- e35e10e: Update packages (especially headlessui)
- Updated dependencies [f03ceba]
- Updated dependencies [e35e10e]
  - @myst-theme/jupyter@0.1.30
  - myst-to-react@0.1.30
  - @myst-theme/frontmatter@0.1.30
  - myst-demo@0.1.30
  - @myst-theme/providers@0.1.30
  - @myst-theme/diagrams@0.1.30

## 0.1.29

### Patch Changes

- 6db4d05: Show all references should be on one line!
- d60aa6a: Overflow in document outline
- 3c12c67: Update CDN server to allow for different hosts
  - @myst-theme/providers@0.1.29
  - @myst-theme/frontmatter@0.1.29
  - @myst-theme/diagrams@0.1.29
  - @myst-theme/jupyter@0.1.29
  - myst-to-react@0.1.29
  - myst-demo@0.1.29

## 0.1.28

### Patch Changes

- cdd10c3: Fix nav on smaller screens
- Updated dependencies [50529e0]
- Updated dependencies [aceee8a]
- Updated dependencies [aceee8a]
- Updated dependencies [229720c]
- Updated dependencies [4b57aa3]
  - @myst-theme/frontmatter@0.1.28
  - myst-demo@0.1.28
  - @myst-theme/providers@0.1.28
  - @myst-theme/diagrams@0.1.28
  - @myst-theme/jupyter@0.1.28
  - myst-to-react@0.1.28

## 0.1.27

### Patch Changes

- 6083890: Upgrade myst to v0.1.17
- Updated dependencies [7eec01a]
- Updated dependencies [e1ecd26]
- Updated dependencies [6083890]
- Updated dependencies [0faf722]
  - myst-to-react@0.1.27
  - myst-demo@0.1.27
  - @myst-theme/providers@0.1.27
  - @myst-theme/jupyter@0.1.27
  - @myst-theme/frontmatter@0.1.27
  - @myst-theme/diagrams@0.1.27

## 0.1.26

### Patch Changes

- 3790356: Update mobile navigation
  - @myst-theme/providers@0.1.26
  - @myst-theme/frontmatter@0.1.26
  - @myst-theme/diagrams@0.1.26
  - @myst-theme/jupyter@0.1.26
  - myst-to-react@0.1.26
  - myst-demo@0.1.26

## 0.1.25

### Patch Changes

- ca93d93: Improve the document outline
- 28fc827: Update components to new myst-parser
- Updated dependencies [4e20392]
- Updated dependencies [d221bf9]
- Updated dependencies [28fc827]
- Updated dependencies [a3399e5]
  - myst-to-react@0.1.25
  - myst-demo@0.1.25
  - @myst-theme/providers@0.1.25
  - @myst-theme/jupyter@0.1.25
  - @myst-theme/frontmatter@0.1.25
  - @myst-theme/diagrams@0.1.25

## 0.1.24

### Patch Changes

- f3479f7: Introduce a grid-system
- 5312cde: Inline the TOC and document outline styles for now
- Updated dependencies [8d14293]
- Updated dependencies [f3479f7]
- Updated dependencies [530037b]
- Updated dependencies [2bba655]
- Updated dependencies [db27a90]
- Updated dependencies [2b4e2ab]
- Updated dependencies [8d14293]
- Updated dependencies [e90b43e]
- Updated dependencies [1979ca2]
  - @myst-theme/frontmatter@0.1.24
  - myst-to-react@0.1.24
  - @myst-theme/providers@0.1.24
  - @myst-theme/diagrams@0.1.24
  - @myst-theme/jupyter@0.1.24
  - myst-demo@0.1.24

## 0.1.23

### Patch Changes

- f100460: Remove Curvenote branding and allow it to be passed in
- 1db7188: Strange bug in active theme, add spaces around the created class as a temporary fix to allow the classes to move through
- Updated dependencies [ce48dce]
- Updated dependencies [21302d9]
- Updated dependencies [fddad13]
  - myst-to-react@0.1.23
  - @myst-theme/frontmatter@0.1.23
  - @myst-theme/providers@0.1.23
  - @myst-theme/diagrams@0.1.23
  - @myst-theme/jupyter@0.1.23
  - myst-demo@0.1.23

## 0.1.22

### Patch Changes

- b314737: Remove specific curvenote redux handlers
- Updated dependencies [b314737]
- Updated dependencies [b314737]
  - @myst-theme/jupyter@0.1.22
  - myst-to-react@0.1.22
  - @myst-theme/providers@0.1.22
  - @myst-theme/frontmatter@0.1.22
  - @myst-theme/diagrams@0.1.22
  - myst-demo@0.1.22

## 0.0.20

### Patch Changes

- 90ffec2: Allow for the short_title to be shown in the navigation
- 90ffec2: Updates to myst dependencies
- Updated dependencies [7aae603]
- Updated dependencies [90ffec2]
  - myst-demo@0.1.21
  - myst-to-react@0.1.21
  - @myst-theme/providers@0.1.21
  - @myst-theme/jupyter@0.0.3
  - @myst-theme/diagrams@0.1.2
  - @myst-theme/frontmatter@0.1.21

## 0.0.19

### Patch Changes

- 5ccf410: Update @curvenote/connect to 0.0.7
- 5ccf410: Move to nbtx, remove @curvenote/blocks
- Updated dependencies [5ccf410]
- Updated dependencies [5ccf410]
  - @myst-theme/jupyter@0.0.2

## 0.0.18

### Patch Changes

- Updates for repackaging for jupyterlab-myst
- Updated dependencies
  - myst-to-react@0.1.20
  - @myst-theme/frontmatter@0.1.20
  - myst-demo@0.1.20

## 0.0.17

### Patch Changes

- ba0424a: Upgrade heroicons to v2
- Updated dependencies
- Updated dependencies [ba0424a]
  - myst-to-react@0.1.19
  - @myst-theme/frontmatter@0.1.19
  - myst-demo@0.1.19

## 0.0.16

### Patch Changes

- 59d1788: Expose functions for updating links in the same way as the Curvenote CDN
- 4a8a317: Improve imports and update CI to test typescript compiling
- a19e590: Move Bibliography to @curvenote/site
- Updated dependencies [a19e590]
- Updated dependencies [a19e590]
- Updated dependencies [59d1788]
- Updated dependencies [4a8a317]
- Updated dependencies [a19e590]
  - @myst-theme/providers@0.0.16
  - @curvenote/icons@0.0.3
  - myst-to-react@0.1.18

## 0.0.15

### Patch Changes

- 7f11596: Deduplicate SiteConfig, SiteManifest types/validation
- b69bf21: Allow top navigation to have external links
- Updated dependencies [c268ff6]
- Updated dependencies [b96c7a4]
- Updated dependencies [438cb2d]
- Updated dependencies [7f11596]
  - myst-to-react@0.1.16
  - @curvenote/blocks@1.5.15
  - @curvenote/site-common@0.0.15
  - @myst-theme/providers@0.0.15

## 0.0.14

### Patch Changes

- The package myst-utils was renamed to myst-common, we missed registering this by 7 hours. Super annoying, but it needs a bump across all packages.
- Updated dependencies
  - @curvenote/blocks@1.5.15
  - @curvenote/icons@0.0.3
  - myst-to-react@0.1.15
  - @curvenote/site-common@0.0.14
  - @myst-theme/providers@0.0.14

## 0.0.13

### Patch Changes

- 0dd8b4c: Improve the contrast of the document outline items
- Updated dependencies [327c19c]
- Updated dependencies [abe8ac0]
- Updated dependencies [de062e5]
- Updated dependencies [edf10cd]
- Updated dependencies [edf10cd]
  - myst-to-react@0.1.14
  - @curvenote/site-common@0.0.13
  - @myst-theme/providers@0.0.13

## 0.0.12

### Patch Changes

- Updated dependencies [b63638b]
- Updated dependencies [b63638b]
- Updated dependencies [b63638b]
- Updated dependencies [b63638b]
  - myst-to-react@0.1.13
  - @myst-theme/providers@0.0.12
  - @curvenote/site-common@0.0.12

## 0.0.11

### Patch Changes

- Updated dependencies [4b5a4c9]
  - @curvenote/site-common@0.0.11
  - @myst-theme/providers@0.0.11

## 0.0.10

### Patch Changes

- 58adf87: Added consistent-type-imports eslint rule
- Updated dependencies [58adf87]
- Updated dependencies [9ae455e]
  - @curvenote/blocks@1.5.14
  - myst-to-react@0.1.11
  - @curvenote/site-common@0.0.10
  - @myst-theme/providers@0.0.10

## 0.0.9

### Patch Changes

- e29e889: Add blocks to monorepo, improve linting for development in other monorepos
- Updated dependencies [e29e889]
- Updated dependencies [b1efcf6]
  - @curvenote/blocks@1.5.13
  - @curvenote/site-common@0.0.9
  - myst-to-react@0.1.10
  - @myst-theme/providers@0.0.9

## 0.0.8

### Patch Changes

- 3d68483: Update to mystjs 0.0.13
- Updated dependencies [3d68483]
  - myst-to-react@0.1.8
  - @curvenote/site-common@0.0.8
  - @myst-theme/providers@0.0.8

## 0.0.7

### Patch Changes

- 01f73de: - `include` added as a directive
  - `tab-set` and `tab-item` added as directives
- Updated dependencies [01f73de]
- Updated dependencies [3f8249c]
- Updated dependencies [bc337d0]
  - myst-to-react@0.1.6
  - @myst-theme/providers@0.0.7
  - @curvenote/site-common@0.0.7

## 0.0.6

### Patch Changes

- a41df47: Update table of contents to allow not setting a urlbase
  - @curvenote/site-common@0.0.6
  - @myst-theme/providers@0.0.6

## 0.0.5

### Patch Changes

- 1b23694: Update typescript and @curvenote/blocks
- Updated dependencies [0a1509c]
- Updated dependencies [1b23694]
  - @curvenote/blocks@1.5.9
  - @curvenote/icons@0.0.2
  - myst-to-react@0.1.5
  - @curvenote/site-common@0.0.5
  - @myst-theme/providers@0.0.5

## 0.0.4

### Patch Changes

- 7da0e71: Add options of `excludeIndex` and `explicitIndex` to `getSiteSlugs`
  - @curvenote/site-common@0.0.4
  - @myst-theme/providers@0.0.4

## 0.0.3

### Patch Changes

- c02461d: Expose `thumbnailOptimized` on the config passed to the renderer
- 9390ea2: Add accessibility screen-reader support for logo text
- 3fe3e21: 👓 Improve contrast on blue text
- Updated dependencies [c02461d]
- Updated dependencies [3fe3e21]
  - @curvenote/site-common@0.0.3
  - myst-to-react@0.1.4
  - @myst-theme/providers@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [45e7cb6]
  - myst-to-react@0.1.2
  - @curvenote/site-common@0.0.2
  - @myst-theme/providers@0.0.2
