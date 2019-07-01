module.exports = {
  name: 'nx-repro',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-repro',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
