const gulp         = require('gulp'),
      taskHelper   = require('../lib/taskHelper.js'),
      gulpSequence = require('gulp-sequence');

/**
 * Default task.
 */
const defaultTask = function () {

  const defaultTasks = [],
        tasks        = ['browserSync', 'vendor', 'image', 'sass', 'javascript'];

  tasks.forEach((task) => {
    if (taskHelper.isTaskEnabled(task)) {
      defaultTasks.push(task);
    }
  });

  gulpSequence('clean', defaultTasks, 'watch')((err) => {
    if (err) console.log(err)
  });
};

gulp.task('default', defaultTask);
module.exports = defaultTask;
