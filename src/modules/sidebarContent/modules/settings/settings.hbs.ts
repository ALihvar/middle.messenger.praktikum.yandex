export default `
    {{#each fields}}
    <div class='settings__item'>
        <label class='settings__label'>{{value}}
            <div id={{key}} class='settings__input'></div>
        </label>
    </div>
    {{/each}}
    <br />
`;
