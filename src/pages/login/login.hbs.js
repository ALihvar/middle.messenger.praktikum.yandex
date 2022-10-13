export default `
    <div class='login-form'>
        <div class='form-field'>
            <label for="name">Логин</label>
            <input name='name' class='input-control'></input>
            {{>errorMessage}}
        </div>
        <br />
        <div class='form-field'>
            <label for="password">Пароль</label>
            <input name="password" type='password' class='input-control'></input>
            {{>errorMessage message='Необходимо ввести пароль'}}
        </div>
        <div class='login-form__controls'>
            <Button class='btn btn-primary'>Вход</Button>
            <a href="/registration">
                Зарегистрироваться
            </a>
        </div>
    </div>
`;
