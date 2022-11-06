export default `
    <div class="contacts">
        <div class="contacts__search-panel">
            <input class="input-control" placeholder='Поиск...'></input>
        </div>
        {{#each this}}
            <div class="contacts__item">
                <div class="contacts__img contacts__img_user"></div>
                <div class="contacts__message contacts__message_last">
                    <div class='name'>{{name}}</div>
                    <div>{{message}}</div>
                </div>
                <div>
                    <span>{{time}}</span>
                </div>
            </div>
        {{/each}}
    </div>
`;
