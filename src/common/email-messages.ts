export const mentorshipApplication = ({ name }) => ({
  subject: 'Ayaversity Mentorship Application Received',
  body: `
    Dear ${name},
    <p>
        Thank you for your application to our mentorship program.
        We have received your submission and appreciate your interest in volunteering as a mentor.
    </p>
    <p>
        We are currently reviewing all applications thoroughly,
        and we will be in touch with you soon to provide an update on the status of your application.
    </p>
    <p>
        We appreciate your patience and look forward to potentially working with you in our program.
    </p>

    Best regards,<br/>
    Ayaversity Team.
`,
});

export const accountDeactivation = ({ name }) => ({
  subject: 'Ayaversity Account Deactivated',
  body: `
    Dear ${name},
    <p>
        We would like to inform you that your Ayaversity account has been deactivated. This may be due to redundancy or
        violation of our terms of service.
    </p>
    <p>
        If you feel this has been done in error, please send us a message at fellowship@ayagigs.com and we will look into
        it.
    </p>
    Regards,<br />
    Ayaversity Team.
  `,
});

export const mentorAcceptance = ({ name }) => ({
  subject: 'Welcome Aboard Mentor!',
  body: `
    <p>Dear ${name},</p>
    <p>
        I am writing to inform you that you have been accepted as a mentor for our
        training program. On behalf of the entire team, I would like to extend a warm
        welcome and express our gratitude for your willingness to volunteer your time
        and share your expertise with our trainees.
    </p>
    <p>
        As a mentor, your role will be to guide and support a group of trainees
        throughout their training journey. We will provide you with the details of the
        trainees who are assigned to you, and we will also inform the trainees about
        their mentor. Additionally, we will set up a communication channel that
        includes you and your assigned mentees. However, you are free to explore
        alternative communication channels to engage with your mentees either as a
        group or individually. Your responsibilities as a mentor will involve
        providing feedback, answering questions, sharing insights, and offering
        guidance based on your own experiences.
    </p>
    <p>
        Prior to the start of the training, we organize weekly Q&A sessions to provide
        guidance to prospective trainees who are undergoing self-study. We will reach
        out to you to inquire about your availability for some of these Q&A sessions.
        In the meantime, please take some time to appreciate the impact of your first
        step as a mentor.
    </p>
    <p>
        Once again, welcome aboard, and we are excited to have you as part of the
        Ayaversity team!
    </p>
    Warm regards,<br />
    Ayaversity Team
`,
});

export const adminInvitation = ({ name, email, password, role, loginURL }) => ({
  subject: 'Activate Your Ayaversity Account',
  body: `
  <p>Dear ${name},</p>
  <p>
    We are delighted to welcome you to Ayaversity and invite you to activate your
    account. We have created a user profile for you with the following details:
  </p>
  <p>
    Username: ${email}<br />
    Temporary Password: ${password}<br />
    Assigned Role: ${role}<br />
  </p>
  <p>
    To ensure the security of your account, please follow the instructions below
    to change your password upon successful login:
  </p>
  <ol>
    <li>Visit the login page by clicking on the following link: ${loginURL}</li>
    <li>
      Enter your email address (${email}) and the temporary password provided
      above in the respective fields.
    </li>
    <li>
      Upon successful login, you will be prompted to set a new password. Please
      choose a password that meets the following criteria:
      <ul>
        <li>Minimum length of 8 characters</li>
        <li>
          Includes at least one uppercase letter, one lowercase letter, one
          number, and one special character
        </li>
        <li>
          Avoid using easily guessable information, such as your name or birthdate
        </li>
      </ul>
    </li>
    <li>
      After setting your new password, you will gain full access to your account
      and enjoy the privileges associated with your assigned role.
    </li>
    <li>Join the community - https://bit.ly/ayaversity</li>
  </ol>
  <p>
    If you encounter any difficulties during the account activation process or
    have any questions please do not hesitate to reach out to our support team at
    fellowship@ayagigs.com.
  </p>
  <p>Thank you for joining Ayaversity.</p>
  Best regards,<br />
  Ayaversity Team
`,
});

export const mentorRejectionEmail = ({ name }) => ({
  subject: 'Update on Ayaversity Mentorship Application',
  body: `
    <p>
        Dear ${name},
    </p>
    <p>
        Thank you for your interest in becoming a mentor at Ayaversity.
        We sincerely appreciate your time and consideration.
    </p>
    <p>
        After careful review of your application, we regret to inform you that we are unable to proceed with your mentorship request at this time.
        Please note that the selection process is highly competitive, and we have limited spots available.
    </p>
    <p>
        We value your expertise and encourage you to keep contributing to the web3 community.
        Should you apply again in the future, we will gladly reconsider your application.
    </p>
    <p>
        Thank you once again for your interest in Ayaversity.
        We wish you continued success in your endeavors.
    </p>

    Best regards,<br/>
    Ayaversity Team
`,
});

export const registrationVerification = ({ name, link }) => ({
  subject: 'Verify Your Ayaversity Account',
  body: `
    <p>
        Dear ${name},
    </p>
    <p>
        Thank you for registering with Ayaversity, the leading web3 learning platform.
        To complete your account setup and begin your journey into web3 immersion, please verify your registration by clicking the link below:
    </p>
    <p>
        ${link}
    </p>
    <p>
        If you did not initiate this registration or need any assistance, please contact our support team at fellowship@ayagigs.com.
    </p>
    <p>
        Welcome to Ayaversity! We look forward to helping you embark on your web3 learning journey.
    </p>

    Best regards,<br/>
    Ayaversity Team
`,
});

export const resetPasswordEmail = ({ link }) => ({
  subject: 'Reset Your Ayaversity Account Password',
  body: `
    <p>
        Hey Silly!
    </p>
    <p>
        We heard you forgot your password.
    </p>
    <p>
        Click on the link below to reset it:
    </p>
    <p>
        ${link}
    </p>
    <p>
        If you did not initiate this request or need any assistance, please reach out to our support team at fellowship@ayagigs.com.
    </p>
    <p>
        Thank you for being a part of Ayaversity!
    </p>

    Best regards,<br/>
    Ayaversity Team
`,
});

export const passwordResetSuccessful = ({ name }) => ({
  subject: 'Your Ayaversity Account Password Has Been Reset',
  body: `
    <p>
        Dear ${name},
    </p>
    <p>
        Your password has been successfully reset.
        Now get back in there and become that web3 pro we all expect you to be.
    </p>

    Best regards,<br/>
    Ayaversity Team
`,
});

export const cryptoPaymentInitiated = ({ name }) => ({
  subject: 'Crypto Payment Processing',
  body: `
    <p>
        Dear ${name},
    </p>
    <p>
        We have been notified of your payment.
        We would like to go and verify.
        You will be notified and given access to home study once it has been confirmed.
    </p>
    <p>
        If you have any questions or need further assistance, please do not hesitate to reach out to our support team at fellowship@ayagigs.com
    </p>

    Best Regards,<br/>
    Ayaversity Team
`,
});

export const cryptoPaymentConfirmed = ({ name }) => ({
  subject: 'Crypto Payment Confirmed',
  body: `
  <p>Dear ${name},</p>
  <p>
    We have received your crypto payment and have granted you access to the home
    study. Please log into your account and begin your journey to web3 greatness.
    Don't forget to join our community for support - https://bit.ly/ayaversity.
  </p>
  <p>Thank you for choosing Ayaversity!</p>
  
  Best Regards,<br />
  Ayaversity Team
  
`,
});

export const cryptoPaymentRejected = ({ name }) => ({
  subject: 'Payment Unsuccessful',
  body: `
    <p>
        Dear ${name},
    </p>
    <p>
        We regret to inform you that we could not confirm your crypto payment.
        You probably provided us with an incorrect wallet address or transaction ID.
    </p>
    <p>
        Please confirm that the assets have left your wallet and email us your wallet address, the transaction ID, signup email and name, so we can have another go at verifying your payment.
    </p>

    Best Regards,<br/>
    Ayaversity Team
`,
});

export const trackEnrollment = ({ name, track }) => ({
  subject: 'Important Information on Your Enrollment',
  body: `
  <p>Dear ${name},</p>
  <p>
    Congratulations! We are delighted to inform you that your enrollment in the
    [Specific Track] at Ayaversity has been successful. You have taken an
    important step towards advancing your skills and knowledge in ${track}.
  </p>
  <p>
    Please log into your account to access your course materials and get started
    on your learning journey, and join the community for support -
    https://bit.ly/ayaversity.
  </p>
  <p>
    If you have any questions or need further assistance, please do not hesitate
    to reach out to our support team at fellowship@ayagigs.com.
  </p>
  <p>We wish you the best of luck and an enriching learning experience.</p>
  
  Best Regards,<br />
  Ayaversity Team
`,
});

export const promotion = ({ name }) => ({
  subject: 'Welcome to Ayaversity Core Training!',
  body: `
  <p>Dear ${name},</p>
  <p>
    Congratulations! We are delighted to inform you that you have been selected to advance to the Core Training Phase of
    the Ayaversity Cohort 2.0. We are delighted by your commitment and achievements during the Home Study Phase and the
    assessment, and we are confident that you will continue to excel in the Core Training Phase.
  </p>
  <p>
    The Core Training Phase will provide you with more in-depth knowledge, hands-on training, and exciting challenges to
    further hone your skills and expertise. We encourage you to continue to dedicate your time and effort to make the most
    of it as opportunities abound for those who successfully complete it.
  </p>
  <p>
    You will receive further details and instructions on the next steps. Keep an eye on your inbox for updates from us. In
    the meantime, login to your Ayaversity account to preview the LMS dashboard and in anticipation of the first week's
    learning resources.
  </p>
  <p>Once again, congratulations on reaching this significant milestone in your journey down the rabbit hole. We look
    forward to witnessing your continued growth and success.</p>

  Best Regards,<br />
  Ayaversity Team
`,
});
 