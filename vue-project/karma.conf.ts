module.exports = function (config: {
  set: (arg0: {
    frameworks: string[];
    files: string[];
    preprocessors: { 'src/**/*.ts': string[]; 'test/**/*.spec.ts': string[] };
    browsers: string[]; // Chọn trình duyệt bạn muốn sử dụng
    reporters: string[];
    singleRun: boolean;
  }) => void;
}) {
  config.set({
    frameworks: ['jasmine'],
    files: ['src/**/*.ts', 'test/**/*.spec.ts'],
    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
      'test/**/*.spec.ts': ['karma-typescript']
    },
    browsers: ['Chrome'], // Chọn trình duyệt bạn muốn sử dụng
    reporters: ['progress'],
    singleRun: true
  });
};
