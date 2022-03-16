const {series, dest, src,watch } = require("gulp")
const sass = require("gulp-sass")(require('sass'))

const extensions = () => {
    return src("/src/scss/*").pipe(sass()).pipe(dest("dist/css"))
}

const watchExtensions = () => {
    watch(['src/scss/*'], extensions)
}

exports.default = series(extensions, watchExtensions)
