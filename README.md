# Shreyascodes blog

This is the repo where I build my [blog](https://blog.shreyascodes.tech)

It sues Deno and custom css to render the blog

## Running the code

start the server in dev mode
```
    deno task dev
```

## Generating the routes json file
```
    deno task gen
```

## deploying to Deno deploy
- Fork this repo
- Connect the repo with deno deploy
- Clone it onto your local system
- Make your changes

```
    deno task deploy "Your commit message" <files to commit | `.` for all files>
```
this commits the given files and pushes the code to github
