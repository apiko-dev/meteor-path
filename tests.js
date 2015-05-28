Tinytest.add('test environment', function (test) {
  test.isTrue(
    typeof path !== 'undefined',
    'test environment not initialized `path`'
  );
});
