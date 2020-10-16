# Change Log

## v2.0.0

v2.0.0 adds support for CollectionSpace 6.1.

### Breaking Changes

- Pot tag record:
  - A new field, `potTagNumber`, has been added to the record editor form. This field exists in CollectionSpace 6.1, but not in prior versions of CollectionSpace. To use this version of cspace-ui with an older version of the CollectionSpace server, this new field should be hidden; otherwise, any value entered will not be saved.

## v1.1.0

- Added the Named Collection field to the Object record editor form (only if using cspace-ui version 5).

## v1.0.0

Initial release of the botanical garden profile. Requires cspace-ui 4.
