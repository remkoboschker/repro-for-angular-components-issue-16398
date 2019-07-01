module.exports = {
  name: 'tester',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/tester',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
