import './formUserInfo.js';

export default `
  <div class="form-user-info">
      {{#each this}}
          <div class='form-user-info__item'>
              <label>{{name}}</label>
              <input class='form-user-info__input' disabled value={{value}}></input>
          </div>
      {{/each}}
      
      <br />
      <Button id='editUserInfo' class='btn btn-primary'> Редактировать</Button>
  </div>
`;
