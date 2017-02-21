After working with Ionic 1.x and TypeScript for quite a while, I've decided to experiment with some compiles-to-native cross-platform technologies. I first decided to start with React Native. Despite having no experience with React, getting started with React Native was relatively painless, and I was able to get TypeScript project up and running pretty quickly. Here's how I did it. Feel free to [skip ahead to the Github repo to see the result](https://github.com/KerryRitter/react-native-ts)

## 1. Run through the "Getting Started" tutorial by Facebook.

First, check out ["Getting Started"](https://facebook.github.io/react-native/docs/getting-started.html) to get your system configured and a React Native app started. If you've already set things up once before, just init a new project with the following:

```
react-native init AwesomeProject
```

## 2. Set up your TypeScript build system

I personally chose Gulp as my build system, but you can swap it out with any build system so long as you get the same output (files compiled from TS to TSX). First, install the packages we need (swap `yarn add` with `npm install --save` if you use npm instead of yarn:

```
yarn gulp gulp-tslint gulp-typescript tslint typescript --dev
```

Here's my gulpfile.js. You will want to go deeper with this (i.e. cleaning your dist/ folder before building) but this will get you started.
```
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");

var tsProject = ts.createProject("tsconfig.json", {});
var tsSrc = ["src/**/*.ts", "src/**/*.tsx"];

gulp.task("ts:build", function() {
    return gulp.src(tsSrc)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report({
            emitError: false
        }))
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist"))
        .on("error", function() {});
});

gulp.task("watch", function() {
    gulp.watch(tsSrc, ["ts:build"]);
})
```

tsconfig.json:
```
{
    "compilerOptions": {
        "target": "es2015",
        "module": "es2015",
        "jsx": "react",
        "outDir": "build",
        "rootDir": "src",
        "allowSyntheticDefaultImports": true,
        "noImplicitAny": true,
        "experimentalDecorators": true,
        "preserveConstEnums": true,
        "allowJs": true,
        "sourceMap": true,
        "baseUrl": ".",
        "paths": {
            "*": ["./src/*"]
        },
        "types": [ 
            "react", 
            "react-native"
        ]
    }
}
```

## 3. Install typings

React Native is typings in the TypeScript 2.X @typings npm module family. Install using:

```
yarn add @types/react-native --dev
```

## 4. Create an src/App.tsx file

Start writing your app! For this example, all of the code is in the src/ folder. 

```
import React from "react";
import { Text } from "react-native";

export class App extends React.Component<any, any> {
    public render() {
        return (
            <Text>Hello World</Text>
        );
    }
}
```

## 5. Compile your TypeScript to dist/

If you used my gulpfile.js, just run `gulp ts:build`. Otherwise, just run your build with the output going to dist/. For me, this compiled dist/app.js:

```
import React from "react";
import { Text } from "react-native";
export class App extends React.Component {
    render() {
        return (React.createElement(Text, null, "Hello World"));
    }
}
```

## 6. Update your index.android.js and index.ios.js

I updated index.android.js to import the App class from the now-compiled dist/app file:

```
import { AppRegistry } from "react-native";
import { App } from "./dist/app";

AppRegistry.registerComponent("myfirstreactnative", () => App);
```

## 7. You're done!

That's it, you are now running React Native with TypeScript. Now, there are alternative ways achieve the goal of step #6 (such as changing the entry file from index.android.js to a compiled dist/ file), but I found this to be simple and effective enough. [Check out the Github repo for the result.](https://github.com/KerryRitter/react-native-ts)