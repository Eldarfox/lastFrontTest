import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from "@mui/material";

const MainPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [message, setMessage] = useState('');
    const [registeredUsers, setRegisteredUsers] = useState([]);



    const handleAdd = () => {

        if (!email.trim() || !password.trim() || !passwordRepeat.trim()) {
            setMessage("Все поля должны быть заполнены");
        } else if (password !== passwordRepeat) {
            setMessage("Пароли не совпадают");
        } else if (registeredUsers.some(user => user.email === email)) {
            setMessage("Такой пользователь уже существует");
        } else {
            setRegisteredUsers([...registeredUsers, { email, password }]);
            setEmail("");
            setPassword("");
            setPasswordRepeat("");
            setMessage("Регистрация успешна");
        }
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Регистрация</Typography>
            <TextField id="outlined-email" fullWidth margin="normal"
                onChange={e => setEmail(e.target.value)}
                value={email}
                label="Email"
                variant="outlined"
            />
            <TextField id="outlined-password"
                fullWidth margin="normal"
                onChange={e => setPassword(e.target.value)}
                value={password}
                label="Пароль" type="password"
                variant="outlined"
            />
            <TextField id="outlined-password-repeat" fullWidth
                margin="normal"
                onChange={e => setPasswordRepeat(e.target.value)}
                value={passwordRepeat}
                label="Повторите пароль"
                type="password"
                variant="outlined"
            />
            <Button variant="contained" color="primary" onClick={handleAdd}>
                Зарегистрироваться</Button>
            {message && <Typography color={message === "Регистрация успешна" ? "primary" : "error"} variant="body1" gutterBottom>{message}</Typography>}
        </Container>
    );
};

export default MainPage;
