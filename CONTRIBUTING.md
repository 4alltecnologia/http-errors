# Contributing

When contributing to this repository, please follow the pull request process.

## Pull Request Process

1. Create a new branch with feature/bugfix/hotfix prefix from the develop branch.

```sh
git checkout -b feature/new-error-feature
```

```sh
git checkout -b bugfix/new-error-bugfix
```

```sh
git checkout -b hotfix/new-error-hotfix
```

2. Create unit tests for the change made. Add the tests inside a folder with the name `__tests__` in the same folder level of the new file.
3. Update the CHANGELOG.md with details of changes, in the `Ongoing Changes` section without a version.
4. Create a merge request at the repo between your feature branch and the develop branch. Assign of the maintainers to review the changes and be sure that all your tests passes and the code coverage doesn't decreases.
