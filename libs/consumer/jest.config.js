module.exports = {
  name: 'consumer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/consumer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
