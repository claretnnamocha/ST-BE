import { HttpStatus, Injectable } from '@nestjs/common';
import fetch from 'node-fetch';
import { BaseService } from './base.service';
import { ServiceResponse } from './interfaces';
import FormData = require('form-data');

@Injectable()
export class EmailService extends BaseService {
  constructor() {
    super();
  }

  async sendEmail({
    to,
    subject,
    html = null,
    fromEmail = '',
    fromName = '',
  }: {
    to: { email: string }[];
    subject: string;
    html?: string;
    fromEmail?: string;
    fromName?: string;
  }): Promise<ServiceResponse> {
    try {
      return this.sendEmailMailChimp({
        to,
        subject,
        html,
        fromEmail,
        fromName,
      });
    } catch (error) {
      return this.handleError(error);
    }
  }

  private async sendEmailPepipost({
    to,
    subject,
    html = null,
    fromEmail = '',
    fromName = '',
  }: {
    to: { email: string }[];
    subject: string;
    html?: string;
    fromEmail?: string;
    fromName?: string;
  }): Promise<ServiceResponse> {
    try {
      const { NETCORE_API, EMAIL_FROM, EMAIL_NAME } = process.env;

      const options = {
        method: 'POST',
        headers: { api_key: NETCORE_API, 'content-type': 'application/json' },
        body: JSON.stringify({
          from: {
            email: fromEmail || EMAIL_FROM,
            name: fromName || EMAIL_NAME,
          },
          subject,
          content: [{ type: 'html', value: html }],
          personalizations: [{ to }],
        }),
      };

      const response = await fetch(
        'https://api.pepipost.com/v5.1/mail/send',
        options,
      );
      const { data, message, error: [error] = [{}] } = await response.json();

      return {
        statusCode: response.status,
        message: [message || error.message],
        data,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  private async sendEmailMailChimp({
    to,
    subject,
    html = null,
    fromEmail = '',
    fromName = '',
  }: {
    to: { email: string }[];
    subject: string;
    html?: string;
    fromEmail?: string;
    fromName?: string;
  }): Promise<ServiceResponse> {
    try {
      const { MAILCHIMP_API_KEY, EMAIL_FROM, EMAIL_NAME } = process.env;

      const fetch = require('node-fetch');

      const url = 'https://mandrillapp.com/api/1.0/messages/send';

      const body = {
        key: MAILCHIMP_API_KEY,
        message: {
          html,
          text: '',
          subject,
          from_email: fromEmail || EMAIL_FROM,
          from_name: fromName || EMAIL_NAME,
          to,
        },
      };

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      };

      const response = await fetch(url, options);
      const { _id: data, status: message } = await response.json();

      return {
        statusCode: message === 'sent' ? HttpStatus.OK : HttpStatus.BAD_REQUEST,
        message: [message],
        data,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  private async sendEmailMailgun({
    to,
    subject,
    html = null,
    fromEmail = '',
    fromName = '',
  }: {
    to: { email: string }[];
    subject: string;
    html?: string;
    fromEmail?: string;
    fromName?: string;
  }) {
    const { MAILGUN_API_KEY, MAILGUN_DOMAIN, EMAIL_FROM, EMAIL_NAME } =
      process.env;

    try {
      const from = `${fromName || EMAIL_NAME} <${fromEmail || EMAIL_FROM}>`;

      const fd = new FormData();

      fd.append('from', from);
      fd.append(
        'to',
        to.length > 1
          ? 'notifications@ayaversity.com'
          : to.map((t) => t.email).join(','),
      );

      if (to.length > 1) {
        fd.append('bcc', to.map((t) => t.email).join(','));
      }
      fd.append('subject', subject);
      fd.append('text', '');
      fd.append('html', html);

      const response = await fetch(
        `https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`,
        {
          method: 'post',
          headers: {
            authorization: `Basic ${Buffer.from(
              `api:${MAILGUN_API_KEY}`,
            ).toString('base64')}`,
          },
          body: fd,
        },
      );

      const { id, message } = await response.json();

      return {
        statusCode: response.status,
        message: [message],
        data: id,
      };
    } catch (error) {
      return this.handleError(error);
    }
  }
}
