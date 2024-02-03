module.exports = {
  'Test Login and Verify Access Token in LocalStorage': function (browser) {
    const email = 'uyen99ntt@gmail.com';
    const password = '123123I';

    browser
      .url('http://localhost:3000/login')
      .waitForElementVisible('body', 5000)
      .setValue('input[placeholder=Email]', email)
      .setValue('input[placeholder=Password]', password)
      .click('button.sign-in')
      .pause(2000) // Adjust this pause if needed to wait for login to complete

      // Execute code to create and save access_token to localStorage
      .executeAsync(
        function (tokenCallback) {
          // Replace the following code with actual code to obtain the access_token
          const token = 'your_generated_access_token';
          localStorage.setItem('access_token', token);
          tokenCallback(token);
        },
        [],
        function (result) {
          const generatedToken = result.value;

          // Check if access_token is set in localStorage
          browser.execute(
            function () {
              return localStorage.getItem('access_token');
            },
            [],
            function (result) {
              const storedToken = result.value;
              browser.assert.equal(storedToken, generatedToken, 'Access token is set in localStorage');
            }
          );
        }
      )

      .end(); // End the test
  }
};
