export default `
    <div class="dialog">
        <div class="dialog__header">
            <div class=' dialog__img dialog__img_user'></div>
            <div class='dialog__tooltip'>Вадим</div>
            <div class='dialog__img dialog__img_exit'></div>
        </div>
        <div class="dialog__content">
            <div class="dialog__wrapper">
                {{#each messages}}
                {{#if isOwn}}
                <div class="dialog__item dialog__item_own">
                    <div class="dialog__message dialog__message_own">
                        <div class="time">{{ time}}</div>
                        <div>
                            {{ message}}
                        </div>
                    </div>
                </div>
                {{else}}
                <div class="dialog__item">
                    <div class="dialog__message">
                        <div class="time">{{ time}}</div>
                        <div>{{ message}}</div>
                    </div>
                </div>
                {{/if}}
                {{/each}}
            </div>
        </div>
        <div class="dialog__controls">
            <div class='dialog__img dialog__img_clip'></div>
            <textarea></textarea>
            <Button class="btn btn-primary">🠢</Button>
        </div>
    </div>
`;
