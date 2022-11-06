import './formUserPassword.js';

export default `
  <div class="form-user-password">
      {{#each this}}
          <div class='form-user-password__item'>
              <label>{{name}}</label>
              <input type='password' class='form-user-password__input' disabled value={{value}}></input>
          </div>
      {{/each}}
      
      <br />
      <Button id='editUserPassword' class='btn btn-primary'> Редактировать</Button>
  </div>
`;
