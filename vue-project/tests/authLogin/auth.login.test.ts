module.exports = {
  'Test Login, Verify Access Token and Profile in LocalStorage': function (browser: any) {
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
        function (tokenCallback: any) {
          // Replace the following code with actual code to obtain the access_token
          const token = 'your_generated_access_token';
          localStorage.setItem('access_token', token);
          tokenCallback(token);
        },
        [],
        function (result: any) {
          const generatedToken = result.value;

          // Check if access_token is set in localStorage
          browser.execute(
            function () {
              return localStorage.getItem('access_token');
            },
            [],
            function (result: any) {
              const storedToken = result.value;
              //storedToken (lấy từ localStorage) với generatedToken (giá trị mà bạn mong đợi đã được tạo ra và đặt vào localStorage)
              browser.assert.equal(storedToken, generatedToken, 'Access token is set in localStorage');
            }
          );
        }
      )

      // Execute code to create and save profile to localStorage
      .executeAsync(
        function (profileCallback: any) {
          // Replace the following code with actual code to obtain the profile
          const profile = 'your_generated_profile';
          localStorage.setItem('profile', profile);
          profileCallback(profile);
        },
        [],
        function (result: any) {
          const generatedProfile = result.value;

          // Check if profile is set in localStorage
          browser.execute(
            function () {
              return localStorage.getItem('profile');
            },
            [],
            function (result: any) {
              const storedProfile = result.value;
              //storedToken (lấy từ localStorage) với generatedToken (giá trị mà bạn mong đợi đã được tạo ra và đặt vào localStorage)
              browser.assert.equal(storedProfile, generatedProfile, 'Profile is set in localStorage');
            }
          );
        }
      )

      .end(); // End the test
  }
};
