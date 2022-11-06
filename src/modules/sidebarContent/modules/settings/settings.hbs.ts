export default `
  <form class="settings" id={{formKey}}>
      {{#each fields}}
      <div class='settings__item'>
          <label class='settings__label'>{{value}}
              <div id={{key}} class='settings__input'></div>
          </label>
      </div>
      {{/each}}
      <br />
      <Button type='button' id="{{formKey}}_button" class='btn btn-primary'> Редактировать</Button>
  </form>
`;
