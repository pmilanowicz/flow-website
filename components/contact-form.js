import * as React from 'react';
import { InputLabel, FormControl, OutlinedInput, Button} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContactForm() {
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [body, setBody] = React.useState('');
    const [isSending, setIsSending] = React.useState(false);
    const [errorDialogVisible, setErrorDialogVisible] = React.useState(false);

    const handleOnChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleOnChangeSubject = (event) => {
        setSubject(event.target.value);
    };

    const handleOnChangeBody = (event) => {
        setBody(event.target.value);
    };

    const handleSend = async () => {
        if (isSending) {
            return;
        }

        setIsSending(true);

        try {
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    subject: subject,
                    message: body,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            setErrorDialogVisible(true);
            setIsSending(false);
        } catch (e) {
            console.log(e);

            setErrorDialogVisible(true);
            setIsSending(false);
        }
    };

    const handlEerrorDialogClose = () => {
        setErrorDialogVisible(false);
    }


    return (
        <React.Fragment>
            <Dialog
                open={errorDialogVisible}
                onClose={handlEerrorDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Ups, nie udało się wysłać zapytania
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Przepraszamy, ale niestety nie udało się wysłać zapytania. Prosimy o kontakt bezpośrednio na nasz adres flowwroclaw@gmail.com
                    </DialogContentText>
                </DialogContent>
            </Dialog>


            <FormControl size="medium" fullWidth={true} margin="dense">
                <InputLabel htmlFor="input-name" required={true}>Adres e-mail</InputLabel>
                <OutlinedInput
                    id="input-name"
                    value={email}
                    label="Adres e-mail"
                    onChange={handleOnChangeEmail}
                />

            </FormControl>
            <FormControl size="medium" fullWidth={true} margin="dense">
                <InputLabel htmlFor="input-subject" required={true}>Temat</InputLabel>
                <OutlinedInput
                    id="input-subject"
                    value={subject}
                    label="Temat"
                    onChange={handleOnChangeSubject}
                />

            </FormControl>
            <FormControl size="medium" fullWidth={true} margin="dense">
                <InputLabel htmlFor="input-body">Treść zapytania</InputLabel>
                <OutlinedInput
                    id="input-body"
                    multiline={true}
                    required={true}
                    minRows={5}
                    value={body}
                    label="Treść zapytania"
                    onChange={handleOnChangeBody}
                />

            </FormControl>
            <FormControl size="medium" fullWidth={true} margin="dense">
                <Button variant="contained" color="primary" onClick={handleSend}>Wyślij</Button>
            </FormControl>
        </React.Fragment>
    )
}
