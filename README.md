# Continuous deployment of a webpack app to multiple environments using Travic CI

## Blog post

Coming soon...

## Notes

```shell
python -m http.server
npm install -g firebase-tools
firebase init
```

Add to travis

```shell
firebase use dev
firebase login:ci
travis encrypt "1/xxx"
```

```shell
npm version patch
git push --follow-tags
```

## License

This repo is licensed under the [MIT License](LICENSE).