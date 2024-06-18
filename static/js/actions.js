function PerformAction() {
    let our_email = ''
    this.set_email = (email) =>{
    our_email = email;
    }
    this.validateOtp = (otp) =>{
        $.post('/validate', {
            user_otp: otp,
            email: our_email,
        }, (data) => {
            console.log(data);
        });
    }
}
