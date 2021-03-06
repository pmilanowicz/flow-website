import * as React from 'react';
import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
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
  const [validationDialogVisible, setValidationDialogVisible] = React.useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = React.useState(false);

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleOnChangeSubject = (event) => {
    setSubject(event.target.value);
  };

  const handleOnChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);
    if (!validateForm()) {
      setIsSending(false);
      return;
    }

    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          subject: subject,
          message: body,
        }),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        method: "POST",
      });

      if (res.status !== 200) {
        handleSendError();
      } else {
        setSuccessDialogVisible(true);
      }
    } catch (e) {
      console.log(e);
      handleSendError();
    } finally {
      setIsSending(false);
    }
  };

  const validateForm = () => {
    if (!email || !subject || !body) {
      handleValidationError();
      return false;
    }

    return true;
  }

  const handleErrorDialogClose = () => {
    setErrorDialogVisible(false);
  }

  const handleSendError = () => {
    setErrorDialogVisible(true);
  }

  const handleValidationDialogClose = () => {
    setValidationDialogVisible(false);
  }

  const handleValidationError = () => {
    setValidationDialogVisible(true);
  }

  return (
    <React.Fragment>
      <Dialog
        open={errorDialogVisible}
        onClose={handleErrorDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Ups, nie uda??o si?? wys??a?? zapytania
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Przepraszamy, ale niestety nie uda??o si?? wys??a?? zapytania. Prosimy o kontakt bezpo??rednio na nasz adres
            flowwroclaw@gmail.com lub spr??bowanie ponownie p????niej.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog
        open={validationDialogVisible}
        onClose={handleValidationDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Niepoprawne dane
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Prosz?? wpisz prawid??owe dane do formularza
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog
        open={validationDialogVisible}
        onClose={handleValidationDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Niepoprawnie wpisane dane!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Prosz?? wpisz prawid??owe dane do formularza i spr??buj ponownie.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog
        open={successDialogVisible}
        onClose={() => setSuccessDialogVisible(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Zapytanie zosta??o wys??ane!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Dzi??kujemy za wys??anie zapytania. Postaramy si?? odpisa?? najszybciej jak tylko si?? da.
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <form onSubmit={handleSend}>
        <FormControl size="medium" fullWidth={true} margin="dense">
          <InputLabel htmlFor="input-name" required={true}>Adres e-mail</InputLabel>
          <OutlinedInput
            id="input-name"
            value={email}
            type="email"
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
          <InputLabel htmlFor="input-body">Tre???? zapytania *</InputLabel>
          <OutlinedInput
            id="input-body"
            multiline={true}
            required={true}
            minRows={5}
            value={body}
            label="Tre???? zapytania"
            onChange={handleOnChangeBody}
          />

        </FormControl>
        <FormControl size="medium" fullWidth={true} margin="dense">
          <Button variant="contained" color="primary" type="submit" onSubmit={handleSend}
                  disabled={isSending}>Wy??lij</Button>
        </FormControl>
      </form>
    </React.Fragment>
  )
}
