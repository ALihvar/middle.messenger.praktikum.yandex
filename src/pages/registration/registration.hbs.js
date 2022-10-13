export default `
    <div class='registration-form'>
        {{#each this}}
            <div class='form-field'>
                <label for={{name}}>{{label}}</label>
                <input name={{name}} type={{type}} class='input-control' value={{value}} ></input>
                {{>errorMessage}}
            </div>
        {{/each}}
     
        <div class='registration-form__controls'>
            <Button class='btn btn-primary'>Зарегистрироваться</Button>
            <a href="./login">
                Войти
            </a>
        </div>
    </div>
`;
