describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('Login functionality', () => {
  beforeEach(() => {
    // Kiểm tra xem có access_token trong localStorage hay không
    cy.window().then((win) => {
      if (win.localStorage.getItem('access_token')) {
        // Nếu có, clear access_token
        win.localStorage.removeItem('access_token');
      }
    });
  });

  it('Logs in successfully', () => {
    // Thực hiện đăng nhập bình thường
    cy.visit('http://localhost:3000/login');
    cy.get('input[data-test="email-input"]').type('uyen99ntt@gmail.com');
    cy.get('input[data-test="password-input"]').type('123123I');
    cy.get('button.sign-in').click();

    // Kiểm tra xem đã đăng nhập thành công hay không
    cy.url().should('include', '/');

    // Kiểm tra xem access_token đã được lưu trong localStorage
    cy.window().then((win) => {
      cy.wrap(win.localStorage.getItem('access_token')).should('exist');
    });
  });
});
