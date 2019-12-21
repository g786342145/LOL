var gulp = require('gulp');
var load = require('gulp-load-plugins')();

gulp.task('concatCss',function (){//合并压缩css
    return gulp.src('./css/*.css')//读取文件
    .pipe(load.concat('index.css'))//合并文件
    .pipe(load.minifyCss())//压缩文件
    .pipe(gulp.dest('./dist/css'))//写入dist/css目录
    .pipe(load.connect.reload())
});
gulp.task('concatJs',function (){//合并压缩js
    return gulp.src(['./js/*.js','!./js/jquery*.js'])
    .pipe(load.babel({presets: ['@babel/preset-env']}))
    .pipe(load.concat('index.js'))
    .pipe(load.uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(load.connect.reload())
});
gulp.task('uglifyJq',function (){//压缩jq
    return gulp.src(['./js/jquery*.js'])
    .pipe(load.uglify())
    .pipe(load.rename('jquery.1.8.3.mim.js'))
    .pipe(gulp.dest('./dist/js'));
});
gulp.task('minifyHtml',function (){//压缩html
    return gulp.src('./*.html')
    .pipe(load.minifyHtml())
    .pipe(gulp.dest('./dist'))
    .pipe(load.connect.reload())
})
gulp.task('imagemin',function (){//压缩图片
    return gulp.src('./img/*.*')
    .pipe(load.imagemin())
    .pipe(gulp.dest('./dist/img'))
    .pipe(load.connect.reload())
})
// gulp.task('es62es5',function (){//es6 to es5
//     return gulp.src(['./js/*.js','!./js/jquery*.js'])
//     .pipe(load.babel({presets: ['@babel/preset-env']}))
//     .pipe(gulp.dest('./js'))
// })
gulp.task('reload',function (cb){// 自动刷新
    load.connect.server({
        root: './dist',//根目录
        livereload: true
    });
    cb();
})
gulp.task('sass',function(){  //sass
    return gulp.src('./sass/*.scss')
    .pipe(load.sass())
    .pipe(gulp.dest('./dist/sass'))
    .pipe(load.connect.reload())
})

gulp.task('watchs',function (cb){
    gulp.watch('./css/*.css',gulp.series('concatCss'));
    gulp.watch('./js/*.js',gulp.series('concatJs'));
    gulp.watch('./*.html',gulp.series('minifyHtml'));
    gulp.watch('./img/*.*',gulp.series('imagemin'));
    gulp.watch('./sass/*.scss',gulp.series('sass'));
    cb();
})

gulp.task('start',gulp.series('reload','watchs'));

gulp.task('build',gulp.parallel(// 打包
    gulp.series('concatCss'),
    gulp.series('concatJs','uglifyJq'),
    gulp.series('minifyHtml'),
    gulp.series('imagemin')
));