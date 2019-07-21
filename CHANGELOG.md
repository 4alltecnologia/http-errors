# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Ongoing Changes


## [1.1.0]
### Added
- Added details to errors
- Added captureStackTrace

## [1.0.5]
### Changed
- Changes the way that the errors and Custom Error are exported by the `module.exports`

## [1.0.4]
### Fixed
- Fixed tests of Unauthorized error to test the right name of the class

## [1.0.3]
### Added
- JSDoc type for errors, extending the Custom Error definition

## [1.0.2]
### Added
- Added toJSON function in CustomError to creates an object with code and message of the error

## [1.0.1]
### Added
- Export JSDoc notation for the errors and CustomError file
- Readme and contributing files, with examples

## [1.0.0]
### Added
- Add Custom Error class to create errors as wished
- Add basic defaults erros as Bad Request, Internal Server Error, Not Found, Not Implemented and Unauthorized
- Add full test coverage
